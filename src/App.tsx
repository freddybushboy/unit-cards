import React, { Component } from 'react';
import html2canvas from 'html2canvas';
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
import { Trait } from './types/traits';
import { CustomTrait, traitData, TraitData } from './fixtures/traits';
import { ValueType } from 'react-select/lib/types';

export interface State {
  name: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
  selectedTraits: { value: string; label: string }[];
  size: UnitSize;
  attack: number;
  defense: number;
  power: number;
  toughness: number;
  morale: number;
  cost: number;
  traitName: string;
  traitDescription: string;
  traitCost: number | undefined;
  savedTraits: CustomTrait[];
  ancestryOverride: string;
}

class App extends Component<{}, State> {
  state = {
    name: 'Unit Name',
    ancestry: 'Human' as UnitAncestry,
    type: 'Infantry' as UnitType,
    experience: 'Regular' as UnitExperience,
    equipment: 'Medium' as UnitEquipment,
    selectedTraits: [] as { value: string; label: string }[],
    size: 'd6' as UnitSize,
    attack: 0,
    defense: 0,
    power: 0,
    toughness: 0,
    morale: 0,
    cost: 0,
    traitName: '',
    traitDescription: '',
    traitCost: undefined,
    savedTraits: [],
    ancestryOverride: '',
  };

  componentDidMount() {
    this.setState({
      savedTraits: JSON.parse(localStorage.getItem('savedTraits') || '[]'),
    });
  }

  cardData = (): CardData => {
    return {
      ...this.state,
      attack: attack(this.state),
      defense: defense(this.state),
      power: power(this.state),
      toughness: toughness(this.state),
      morale: morale(this.state),
      cost: cost(this.state),
      selectedTraits: this.state.selectedTraits.map((i) => i.value as Trait),
    };
  };

  generateImage() {
    html2canvas(document.querySelector('#card') as HTMLElement).then(
      (canvas) => {
        const imageSection = document.querySelector('#image-section');
        if (imageSection) {
          imageSection.innerHTML = '';
          imageSection.appendChild(canvas);
        }
      },
    );
  }

  addTrait() {
    if (
      this.state.traitName &&
      !this.state.savedTraits.some(
        (t: CustomTrait) => t.name === this.state.traitName,
      ) &&
      !traitData.some((t: TraitData) => t.name === this.state.traitName)
    ) {
      this.setState(
        {
          savedTraits: [
            ...this.state.savedTraits,
            {
              name: this.state.traitName,
              description: this.state.traitDescription,
              cost: this.state.traitCost || 0,
            },
          ],
          traitName: '',
          traitDescription: '',
          traitCost: undefined,
        },
        () => {
          localStorage.setItem(
            'savedTraits',
            JSON.stringify(this.state.savedTraits),
          );
        },
      );
    } else {
      alert('Trait already exists');
    }
  }

  clearTraits() {
    localStorage.removeItem('savedTraits');
    this.setState({ savedTraits: [], selectedTraits: [] });
  }

  render() {
    return (
      <div className="container text-center">
        <h1>
          <small>Strongholds & Followers</small>
          <br />
          Unit Card Creator
        </h1>
        <div className="row">
          <div className="col-md-6">
            <StatForm
              state={this.state}
              update={(state) => this.setState(state as State)}
              addTrait={() => this.addTrait()}
              clearTraits={() => this.clearTraits()}
            />
          </div>

          <div className="col-md-6">
            <Card cardData={this.cardData()} />
            <button className="btn btn-primary" onClick={this.generateImage}>
              Generate Image
            </button>
            <div className="image-section" id="image-section" />
          </div>
        </div>
        <p>
          <small>
            For Matt Colville's{' '}
            <a href="https://shop.mcdmproductions.com/products/strongholds-followers-pdf">
              Strongholds & Followers
            </a>
            .
          </small>
        </p>
      </div>
    );
  }
}

export default App;
