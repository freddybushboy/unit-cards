import { UnitAncestry } from '../types/units';

interface AncestryStatBlock {
  attack: number;
  power: number;
  defense: number;
  toughness: number;
  morale: number;
}
export const ancestryStats: { [k: string]: AncestryStatBlock } = {
  Bugbear: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  Dragonborn: {
    attack: 2,
    power: 2,
    defense: 1,
    toughness: 1,
    morale: 2,
  },
  Dwarf: {
    attack: 3,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
  },
  Elf: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  ['Elven (Winged)']: {
    attack: 1,
    power: 1,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  Ghoul: {
    attack: -1,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 0,
  },
  Gnoll: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  Gnome: {
    attack: 1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 1,
  },
  Goblin: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: 0,
  },
  Hobgoblin: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  Human: {
    attack: 2,
    power: 0,
    defense: 0,
    toughness: 0,
    morale: 1,
  },
  Kobold: {
    attack: -1,
    power: -1,
    defense: 1,
    toughness: -1,
    morale: -1,
  },
  Lizardfolk: {
    attack: 2,
    power: 1,
    defense: -1,
    toughness: 1,
    morale: 1,
  },
  Ogre: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 1,
  },
  Orc: {
    attack: 2,
    power: 1,
    defense: 1,
    toughness: 1,
    morale: 2,
  },
  Skeleton: {
    attack: -2,
    power: -1,
    defense: 1,
    toughness: 1,
    morale: 1,
  },
  Treant: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
  },
  Troll: {
    attack: 0,
    power: 2,
    defense: 0,
    toughness: 2,
    morale: 0,
  },
  Zombie: {
    attack: -2,
    power: 0,
    defense: 2,
    toughness: 2,
    morale: 2,
  },
};
