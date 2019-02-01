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
  | 'Zombie';
export type UnitType =
  | 'Levies'
  | 'Infantry'
  | 'Cavalry'
  | 'Siege Engine'
  | 'Archers'
  | 'Airborne';
export type UnitExperience =
  | 'Green'
  | 'Regular'
  | 'Seasoned'
  | 'Veteran'
  | 'Elite'
  | 'Super-Elite';
export type UnitEquipment = 'Light' | 'Medium' | 'Heavy' | 'Super-Heavy';
export type UnitSize = 'd4' | 'd6' | 'd8' | 'd10' | 'd12';

export interface CardStats {
  attack: number;
  defense: number;
  power: number;
  toughness: number;
  morale: number;
  size: UnitSize;
}
export interface CardData extends CardStats {
  name: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
}
