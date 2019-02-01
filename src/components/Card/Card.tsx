import React, { Component } from 'react';
import './Card.css';
import { CardData } from '../../types/units';
import { CardTable } from './CardTable';
import { CardFlags } from './CardFlags';

interface Props {
  cardData: CardData;
}

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
    } = this.props.cardData;

    return (
      <div className="card">
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
            <div className="card-type">
              {ancestry} {experience}
              <br />
              {equipment} {type}
            </div>
          </div>
          <div className="card-main">
            <CardTable
              size={size}
              attack={attack}
              defense={defense}
              power={power}
              toughness={toughness}
              morale={morale}
            />
            <div className="card-traits">Traits</div>
            <div>
              <b>Courageous</b>. Once per battle, this unit can choose to
              succeed on a Morale check it just failed.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
