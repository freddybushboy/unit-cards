import { UnitAncestry } from '../types/units';
import { Trait } from '../types/traits';

interface StatBlock {
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
}

interface AncestryStatBlock extends StatBlock {
  traits: Trait[];
}
export const ancestryStats: { [k: string]: AncestryStatBlock } = {
  Bugbear: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Martial'],
  },
  Dragonborn: {
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: ['Courageous'],
  },
  Dwarf: {
    attack: 3,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: ['Stalwart'],
  },
  Elf: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Eternal'],
  },
  ['Elven (Winged)']: {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Eternal'],
  },
  Ghoul: {
    attack: -1,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 0,
    traits: ['Undead', 'Horrify', 'Ravenous'],
  },
  Gnoll: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Frenzy'],
  },
  Gnome: {
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 1,
    traits: [],
  },
  Goblin: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
    traits: [],
  },
  Hobgoblin: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Bred for war', 'Martial'],
  },
  Human: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
    traits: ['Courageous'],
  },
  Kobold: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
    traits: [],
  },
  Lizardfolk: {
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
    traits: ['Amphibious'],
  },
  Ogre: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 1,
    traits: ['Brutal'],
  },
  Orc: {
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
    traits: ['Savage'],
  },
  Skeleton: {
    attack: -2,
    power: -1,
    defense: 1,
    toughness: 1,
    morale: 1,
    traits: ['Undead', 'Mindless'],
  },
  Treant: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traits: ['Twisting Roots', 'Rock-hurler'],
  },
  Troll: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
    traits: ['Regenerate'],
  },
  Zombie: {
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
    traits: ['Undead', 'Mindless'],
  },
};

export const experienceStats: { [k: string]: StatBlock } = {
  Green: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 0,
  },
  Regular: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 1,
  },
  Seasoned: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 2,
  },
  Veteran: {
    attack: 1,
    power: 0,
    defense: 0,
    toughness: 1,
    morale: 3,
  },
  Elite: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 4,
  },
  ['Super-Elite']: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 2,
    morale: 5,
  },
};

export const equipmentStats: { [k: string]: StatBlock } = {
  Light: {
    attack: 0,
    power: 1,
    defense: 1,
    toughness: 0,
    morale: 0,
  },
  Medium: {
    attack: 0,
    power: 2,
    defense: 2,
    toughness: 0,
    morale: 0,
  },
  Heavy: {
    attack: 0,
    power: 4,
    defense: 4,
    toughness: 0,
    morale: 0,
  },
  ['Super-Heavy']: {
    attack: 0,
    power: 6,
    defense: 6,
    toughness: 0,
    morale: 0,
  },
};

interface TypeStatBlock extends StatBlock {
  costMultiplier: number;
}
export const typeStats: { [k: string]: TypeStatBlock } = {
  Levies: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: -1,
    costMultiplier: 0.75,
  },
  Infantry: {
    attack: 0,
    power: 0,
    defense: 1,
    toughness: 1,
    morale: 0,
    costMultiplier: 1,
  },
  Cavalry: {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 2,
    costMultiplier: 1.5,
  },
  ['Siege Engine']: {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 1,
    morale: 0,
    costMultiplier: 1.5,
  },
  Archers: {
    attack: 0,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
    costMultiplier: 1.75,
  },
  Flying: {
    attack: 0,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 3,
    costMultiplier: 2,
  },
};

interface SizeStatBlock {
  costMultiplier: number;
}
export const sizeStats: { [k: string]: SizeStatBlock } = {
  d4: { costMultiplier: 0.66 },
  d6: { costMultiplier: 1 },
  d8: { costMultiplier: 1.33 },
  d10: { costMultiplier: 1.66 },
  d12: { costMultiplier: 2 },
};
