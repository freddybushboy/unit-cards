import { Trait } from './traits';
import { CustomTrait } from '../fixtures/traits';
import { string } from 'prop-types';

export type UnitAncestry =
  | 'Bugbear'
  | 'Dragonborn'
  | 'Dwarf'
  | 'Elf'
  | 'Elven (Winged)'
  | 'Ghoul'
  | 'Gnoll'
  | 'Gnome'
  | 'Goblin'
  | 'Hobgoblin'
  | 'Human'
  | 'Kobold'
  | 'Lizardfolk'
  | 'Ogre'
  | 'Orc'
  | 'Skeleton'
  | 'Treant'
  | 'Troll'
  | 'Zombie'
  | 'None';
export type UnitType =
  | 'Flying'
  | 'Archers'
  | 'Cavalry'
  | 'Levies'
  | 'Infantry'
  | 'Siege Engine'
  | 'Fortification';
export type UnitExperience =
  | 'Green'
  | 'Regular'
  | 'Seasoned'
  | 'Veteran'
  | 'Elite'
  | 'Super-Elite';
export type UnitEquipment = 'Light' | 'Medium' | 'Heavy' | 'Super-Heavy';
export type UnitSize = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
export type FortLevel = '1st' | '2nd' | '3rd' | '4th' | '5th';
export type FortType = 'Keep' | 'Tower' | 'Temple' | 'None';

export interface UnitStats {
  attack: number;
  defense: number;
  power: number;
  toughness: number;
  morale: number;
  size: UnitSize;
  type: UnitType;
}
export interface UnitData extends UnitStats {
  name: string;
  commander: string;
  border: string;
  ancestry: UnitAncestry;
  experience: UnitExperience;
  equipment: UnitEquipment;
  fortLevel: FortLevel;
  fortType: FortType;
  cost: number;
  selectedTraits: { value: string }[];
  ancestryOverride: string;
}
