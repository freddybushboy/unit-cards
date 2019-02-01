import React, { Component } from 'react';
import { Card } from './Card/Card';
import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize,
} from './types/units';

interface State {
  name: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
  size: UnitSize;
}

const unitAncestries: UnitAncestry[] = [
  'Bugbear',
  'Dragonborn',
  'Dwarf',
  'Elf',
  'Elven (Winged)',
  'Ghoul',
  'Gnoll',
  'Gnome',
  'Goblin',
  'Hobgoblin',
  'Human',
  'Kobold',
  'Lizardfolk',
  'None',
  'Ogre',
  'Orc',
  'Skeleton',
  'Treant',
  'Troll',
  'Zombie',
];
const unitTypes: UnitType[] = [
  'Levies',
  'Infantry',
  'Cavalry',
  'Siege Engine',
  'Archers',
  'Airborne',
];
const unitExperiences: UnitExperience[] = [
  'Green',
  'Regular',
  'Seasoned',
  'Veteran',
  'Elite',
  'Super-Elite',
];
const unitEquipments: UnitEquipment[] = [
  'Light',
  'Medium',
  'Heavy',
  'Super-Heavy',
];
const unitSizes: UnitSize[] = ['d4', 'd6', 'd8', 'd10', 'd12'];

class App extends Component<{}, State> {
  state = {
    name: '',
    ancestry: 'Human' as UnitAncestry,
    type: 'Infantry' as UnitType,
    experience: 'Regular' as UnitExperience,
    equipment: 'Light' as UnitEquipment,
    size: 'd6' as UnitSize,
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <select
          value={this.state.ancestry}
          onChange={(e) =>
            this.setState({ ancestry: e.currentTarget.value as UnitAncestry })
          }
        >
          {unitAncestries.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select
          value={this.state.type}
          onChange={(e) =>
            this.setState({ type: e.currentTarget.value as UnitType })
          }
        >
          {unitTypes.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select
          value={this.state.type}
          onChange={(e) =>
            this.setState({
              experience: e.currentTarget.value as UnitExperience,
            })
          }
        >
          {unitExperiences.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select
          value={this.state.type}
          onChange={(e) =>
            this.setState({
              equipment: e.currentTarget.value as UnitEquipment,
            })
          }
        >
          {unitEquipments.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select
          value={this.state.type}
          onChange={(e) =>
            this.setState({
              size: e.currentTarget.value as UnitSize,
            })
          }
        >
          {unitSizes.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <Card
          name={this.state.name}
          ancestry={this.state.ancestry}
          type={this.state.type}
          experience={this.state.experience}
          equipment={this.state.equipment}
          size={this.state.size}
        />
      </>
    );
  }
}

export default App;
