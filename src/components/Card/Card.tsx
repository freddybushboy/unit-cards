import React, { Component } from 'react';
import './Card.css';
import { CardData } from '../../types/units';
import { CardTable } from './CardTable';
import { CardFlags } from '../CardFlags/CardFlags';
import { ancestryStats } from '../../fixtures/unitStats';
import { traitData, TraitData } from '../../fixtures/traits';

interface Props {
  cardData: CardData;
}

const Trait = ({ trait }: { trait: TraitData | undefined }) => (
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
    } = this.props.cardData;

    return (
      <div className="card" id="card">
        <div className="card-inner">
          <div className="card-flags">
            <CardFlags
              ancestry={ancestry}
              type={type}
              experience={experience}
              equipment={equipment}
            />
          </div>
          <div className="card-top">
            <div className="card-name">{name}</div>
            {type === 'Levies' || type === 'Siege Engine' ? (
              <div className="card-type">
                {ancestry === 'None' ? '' : ancestry} {type}
              </div>
            ) : (
              <div className="card-type">
                {ancestry === 'None' ? '' : ancestry} {experience}
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
            {ancestryStats[ancestry].traits.length ||
            type === 'Cavalry' ||
            type === 'Siege Engine' ||
            type === 'Levies' ? (
              <>
                <div className="card-traits">Traits</div>

                {ancestryStats[ancestry].traits.map((trait) => (
                  <Trait trait={traitData.find((t) => t.name === trait)} />
                ))}
              </>
            ) : null}
            {type === 'Cavalry' && <Charge />}
            {type === 'Levies' && <AlwaysDiminished />}
            {type === 'Siege Engine' && <SiegeEngine />}
          </div>
        </div>
      </div>
    );
  }
}
