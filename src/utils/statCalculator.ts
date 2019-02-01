import { State } from '../App';
import { ancestryStats } from '../fixtures/unitStats';

export const attack = (state: State): number => {
  return ancestryStats[state.ancestry].attack;
};

export const power = (state: State): number => {
  return ancestryStats[state.ancestry].power;
};

export const defense = (state: State): number => {
  return ancestryStats[state.ancestry].defense;
};

export const toughness = (state: State): number => {
  return ancestryStats[state.ancestry].toughness;
};

export const morale = (state: State): number => {
  return ancestryStats[state.ancestry].morale;
};
