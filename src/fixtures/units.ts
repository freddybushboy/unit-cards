import {
  UnitSize,
  UnitEquipment,
  UnitExperience,
  UnitType,
  UnitAncestry,
  FortLevel,
  FortType,
} from '../types/units';

export const unitAncestries: UnitAncestry[] = [
  'None',
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
  'Fortification',
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
export const fortLevels: FortLevel[] = ['1st', '2nd', '3rd', '4th', '5th'];
export const fortTypes: FortType[] = ['None', 'Keep', 'Tower', 'Temple'];
