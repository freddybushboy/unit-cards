import {
  UnitSize,
  UnitEquipment,
  UnitExperience,
  UnitType,
  UnitAncestry,
} from '../types/units';

export const unitAncestries: UnitAncestry[] = [
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
  'Ogre',
  'Orc',
  'Skeleton',
  'Treant',
  'Troll',
  'Zombie',
];
export const unitTypes: UnitType[] = [
  'Flying',
  'Archers',
  'Cavalry',
  'Levies',
  'Infantry',
  'Siege Engine',
];
export const unitExperiences: UnitExperience[] = [
  'Green',
  'Regular',
  'Seasoned',
  'Veteran',
  'Elite',
  'Super-Elite',
];
export const unitEquipments: UnitEquipment[] = [
  'Light',
  'Medium',
  'Heavy',
  'Super-Heavy',
];
export const unitSizes: UnitSize[] = ['d4', 'd6', 'd8', 'd10', 'd12'];
