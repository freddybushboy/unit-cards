import React, { Component } from 'react';
import { Card } from './components/Card/Card';
import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize,
  CardData,
} from './types/units';
import { StatForm } from './components/StatForm/StatForm';
import {
  attack,
  defense,
  power,
  toughness,
  morale,
  cost,
} from './utils/statCalculator';

export interface State {
  name: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
  size: UnitSize;
}

class App extends Component<{}, State> {
  state = {
    name: 'Unit Name',
    ancestry: 'Human' as UnitAncestry,
    type: 'Infantry' as UnitType,
    experience: 'Regular' as UnitExperience,
    equipment: 'Medium' as UnitEquipment,
    size: 'd6' as UnitSize,
  };

  cardData = (): CardData => {
    return {
      ...this.state,
      attack: attack(this.state),
      defense: defense(this.state),
      power: power(this.state),
      toughness: toughness(this.state),
      morale: morale(this.state),
      cost: cost(this.state),
    };
  };

  render() {
    return (
      <div className="container">
        <StatForm
          state={this.state}
          update={(state) => this.setState(state as State)}
        />
        <Card cardData={this.cardData()} />
      </div>
    );
  }
}

export default App;
