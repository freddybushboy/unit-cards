import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import { Card } from './components/Card/Card';
import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize,
  UnitData,
  FortLevel,
  FortType,
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
import { CustomTrait, traitData, TraitData } from './fixtures/traits';
import { Collapse } from './components/Collapse/Collapse';
import {
  unitAncestries,
  unitTypes,
  unitExperiences,
  unitEquipments,
  unitSizes,
  fortTypes,
  fortLevels,
} from './fixtures/units';
import { fortSize } from './fixtures/unitStats';

export interface State {
  name: string;
  commander: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
  selectedTraits: { value: string }[];
  size: UnitSize;
  attack: number;
  defense: number;
  power: number;
  toughness: number;
  morale: number;
  fortLevel: FortLevel;
  fortType: FortType;
  cost: number;
  ancestryOverride: string;
  traitName: string;
  traitDescription: string;
  traitCost: number | undefined;
  savedTraits: CustomTrait[];
  savedUnits: UnitData[];
}

class App extends Component<{}, State> {
  state = {
    name: 'Unit Name',
    commander: '',
    ancestry: 'Human' as UnitAncestry,
    type: 'Infantry' as UnitType,
    experience: 'Regular' as UnitExperience,
    equipment: 'Medium' as UnitEquipment,
    selectedTraits: [] as { value: string }[],
    size: 'd6' as UnitSize,
    attack: 0,
    defense: 0,
    power: 0,
    toughness: 0,
    morale: 0,
    fortLevel: '1st' as FortLevel,
    fortType: 'None' as FortType,
    cost: 0,
    ancestryOverride: '',
    traitName: '',
    traitDescription: '',
    traitCost: undefined,
    savedTraits: [] as CustomTrait[],
    savedUnits: [] as UnitData[],
  };

  componentDidMount() {
    this.setState({
      savedTraits: JSON.parse(localStorage.getItem('savedTraits') || '[]'),
      savedUnits: JSON.parse(localStorage.getItem('savedUnits') || '[]'),
    });
  }

  randomUnit = () => {
    this.setState({
      name: 'Random Unit',
      ancestry:
        unitAncestries[Math.floor(Math.random() * unitAncestries.length)],
      type: unitTypes[Math.floor(Math.random() * (unitTypes.length - 1))], // No fortifications.
      experience:
        unitExperiences[Math.floor(Math.random() * unitExperiences.length)],
      equipment:
        unitEquipments[Math.floor(Math.random() * unitEquipments.length)],
      size: unitSizes[Math.floor(Math.random() * unitSizes.length)],
    });
  };

  unitDataComputed = (): UnitData => {
    return {
      ...this.state,
      attack: attack(this.state),
      defense: defense(this.state),
      power: power(this.state),
      toughness: toughness(this.state),
      morale: morale(this.state),
      cost: cost(this.state),
      size:
        this.state.type === 'Fortification' && this.state.fortType !== 'None'
          ? (fortSize[this.state.fortType][this.state.fortLevel] as UnitSize)
          : this.state.size,
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

  saveUnit = () => {
    const {
      name,
      commander,
      ancestry,
      type,
      experience,
      equipment,
      selectedTraits,
      size,
      attack,
      defense,
      power,
      toughness,
      morale,
      fortLevel,
      fortType,
      cost,
      ancestryOverride,
      savedUnits,
    } = this.state;

    this.setState(
      {
        savedUnits: [
          ...savedUnits.filter((u) => u.name !== name),
          {
            name,
            commander,
            ancestry,
            type,
            experience,
            equipment,
            selectedTraits,
            size,
            attack,
            defense,
            power,
            toughness,
            morale,
            fortLevel,
            fortType,
            cost,
            ancestryOverride,
          },
        ],
      },
      () => {
        localStorage.setItem(
          'savedUnits',
          JSON.stringify(this.state.savedUnits),
        );
      },
    );
  };

  loadUnit = (unit: UnitData) => {
    this.setState({ ...unit });
  };

  deleteUnit = (unit: UnitData) => {
    this.setState(
      {
        savedUnits: this.state.savedUnits.filter((u) => u.name !== unit.name),
      },
      () => {
        localStorage.setItem(
          'savedUnits',
          JSON.stringify(this.state.savedUnits),
        );
      },
    );
  };

  traitsMissing = (unit: UnitData) => {
    return unit.selectedTraits.some(
      (trait) =>
        !(
          traitData.some((t) => t.name === trait.value) ||
          this.state.savedTraits.some((s) => s.name === trait.value)
        ),
    );
  };

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
            {this.state.savedUnits.length ? (
              <div className="text-left saved-units">
                <Collapse title="Saved units...">
                  <ul className="list-group">
                    {this.state.savedUnits.map((unit) => (
                      <li className="list-group-item" key={unit.name}>
                        {unit.name}{' '}
                        {this.traitsMissing(unit) ? (
                          <span className="text-danger">
                            {' '}
                            (missing traits){' '}
                          </span>
                        ) : null}
                        <button
                          className="btn btn-sm btn-primary float-right"
                          onClick={() => this.loadUnit(unit)}
                        >
                          Load
                        </button>
                        <button
                          className="btn btn-sm btn-danger float-right mr-1"
                          onClick={() => this.deleteUnit(unit)}
                        >
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </div>
            ) : null}
            <button className="btn btn-primary" onClick={this.randomUnit}>
              Random Unit
            </button>
          </div>

          <div className="col-md-6">
            <Card
              unitData={this.unitDataComputed()}
              savedTraits={this.state.savedTraits}
            />
            <button className="btn btn-primary" onClick={this.generateImage}>
              Generate Image
            </button>{' '}
            <button className="btn btn-primary" onClick={this.saveUnit}>
              Save Unit
            </button>
            <div className="image-section" id="image-section" />
          </div>
        </div>
        <hr />
        <p>
          For Matt Colville's{' '}
          <a href="https://shop.mcdmproductions.com/products/strongholds-followers-pdf">
            Strongholds & Followers
          </a>
          .
        </p>
        <p>
          <small>
            An{' '}
            <a href="https://github.com/freddybushboy/unit-cards">
              open-source
            </a>{' '}
            project built by{' '}
            <a href="https://twitter.com/FreddyBushBoy">freddybushboy</a>.
          </small>
        </p>
      </div>
    );
  }
}

export default App;
