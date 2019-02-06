import React, { Component } from 'react';
import './Card.css';
import { UnitData, FortLevel, FortType } from '../../types/units';
import { CardTable } from './CardTable';
import { CardFlags } from '../CardFlags/CardFlags';
import { ancestryStats, fortMorale } from '../../fixtures/unitStats';
import { traitData, TraitData, CustomTrait } from '../../fixtures/traits';
import ne from './corner-ne.png';
import se from './corner-se.png';
import sw from './corner-sw.png';

interface Props {
  unitData: UnitData;
  savedTraits: CustomTrait[];
}

const Trait = ({ trait }: { trait: TraitData | CustomTrait | undefined }) => (
  <div>
    {trait ? (
      <>
        <b>{trait.name}</b>. {trait.description}
      </>
    ) : null}
  </div>
);

const Charge = () => (
  <Trait trait={traitData.find((data) => data.name === 'Charge')} />
);
const AlwaysDiminished = () => (
  <Trait trait={traitData.find((data) => data.name === 'Always Diminished')} />
);
const SiegeEngine = () => (
  <Trait trait={traitData.find((data) => data.name === 'Siege Engine')} />
);
const Fortification = ({
  type,
  level,
}: {
  type: FortType;
  level: FortLevel;
}) => (
  <Trait
    trait={{
      name: 'Fortification',
      description: `Units defending this structure gain +${
        fortMorale[type][level]
      } Morale.`,
      cost: 0,
    }}
  />
);

export class Card extends Component<Props> {
  render() {
    const {
      name,
      ancestry,
      experience,
      equipment,
      type,
      size,
      attack,
      defense,
      power,
      toughness,
      morale,
      cost,
      fortType,
      fortLevel,
      selectedTraits,
      ancestryOverride,
    } = this.props.unitData;

    return (
      <div className="unit-card" id="card">
        <img src={ne} className="card-corner-ne" />
        <img src={se} className="card-corner-se" />
        <img src={sw} className="card-corner-sw" />
        <div className="card-inner">
          <div className="card-flags">
            <CardFlags
              ancestry={ancestryOverride ? 'None' : ancestry}
              type={type}
              experience={experience}
              equipment={equipment}
            />
          </div>
          <div className="card-top">
            <div className="card-name">{name}</div>
            {type === 'Levies' ? (
              <div className="card-type">
                {ancestryOverride
                  ? ancestryOverride
                  : ancestry === 'None'
                  ? ''
                  : ancestry}{' '}
                {type}
              </div>
            ) : type === 'Fortification' ? (
              <div className="card-type">{`${
                fortType !== 'None' ? `${fortLevel} level ` : ''
              }${type}${fortType !== 'None' ? ` (${fortType})` : ''}`}</div>
            ) : (
              <div className="card-type">
                {ancestryOverride
                  ? ancestryOverride
                  : ancestry === 'None'
                  ? ''
                  : ancestry}{' '}
                {experience}
                <br />
                {equipment} {type}
              </div>
            )}
          </div>
          <div className="card-main">
            <div className="card-cost">Cost: {cost ? cost : '-'}</div>
            <CardTable
              size={size}
              attack={attack}
              defense={defense}
              power={power}
              toughness={toughness}
              morale={morale}
            />
            {(ancestryStats[ancestry].traits.length &&
              type !== 'Fortification') ||
            (type == 'Fortification' && fortType !== 'None') ||
            selectedTraits.length ||
            type === 'Cavalry' ||
            type === 'Siege Engine' ||
            type === 'Levies' ? (
              <>
                <div className="card-traits">Traits</div>

                {type === 'Fortification'
                  ? null
                  : ancestryStats[ancestry].traits.map((trait) => (
                      <Trait
                        trait={traitData.find((t) => t.name === trait)}
                        key={`ancestry-${trait}`}
                      />
                    ))}
                {selectedTraits.map((trait) => (
                  <div key={`parent-${trait}`}>
                    {traitData.find((t) => t.name === trait.value) ? (
                      <Trait
                        trait={traitData.find((t) => t.name === trait.value)}
                      />
                    ) : (
                      <Trait
                        trait={this.props.savedTraits.find(
                          (t) => t.name === trait.value,
                        )}
                      />
                    )}
                  </div>
                ))}
              </>
            ) : null}
            {type === 'Cavalry' && <Charge />}
            {type === 'Levies' && <AlwaysDiminished />}
            {type === 'Siege Engine' && <SiegeEngine />}
            {type === 'Fortification' && fortType !== 'None' && (
              <Fortification type={fortType} level={fortLevel} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
