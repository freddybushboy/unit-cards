import { State } from '../App';
import {
  ancestryStats,
  experienceStats,
  equipmentStats,
  typeStats,
  sizeStats,
  fortToughness,
  fortSize,
} from '../fixtures/unitStats';
import { traitData } from '../fixtures/traits';

export const attack = (state: State): number => {
  return state.type === 'Fortification'
    ? 0
    : ancestryStats[state.ancestry].attack +
        (state.type === 'Levies'
          ? 0
          : experienceStats[state.experience].attack +
            equipmentStats[state.equipment].attack) +
        typeStats[state.type].attack +
        state.attack;
};

export const power = (state: State): number => {
  return state.type === 'Fortification'
    ? 0
    : ancestryStats[state.ancestry].power +
        (state.type === 'Levies'
          ? 0
          : experienceStats[state.experience].power +
            equipmentStats[state.equipment].power) +
        typeStats[state.type].power +
        state.power;
};

const defenseBase = 10;
export const defense = (state: State, baseless?: boolean): number => {
  return state.type === 'Fortification'
    ? 0
    : (!baseless ? defenseBase : 0) +
        ancestryStats[state.ancestry].defense +
        (state.type === 'Levies'
          ? 0
          : experienceStats[state.experience].defense +
            equipmentStats[state.equipment].defense) +
        typeStats[state.type].defense +
        state.defense;
};

const toughnessBase = 10;
export const toughness = (state: State, baseless?: boolean): number => {
  return state.type === 'Fortification'
    ? fortToughness[state.fortType][state.fortLevel] + state.toughness
    : (!baseless ? toughnessBase : 0) +
        ancestryStats[state.ancestry].toughness +
        (state.type === 'Levies'
          ? 0
          : experienceStats[state.experience].toughness +
            equipmentStats[state.equipment].toughness) +
        typeStats[state.type].toughness +
        state.toughness;
};

export const morale = (state: State): number => {
  return state.type === 'Fortification'
    ? 0
    : ancestryStats[state.ancestry].morale +
        (state.type === 'Levies'
          ? 0
          : experienceStats[state.experience].morale +
            equipmentStats[state.equipment].morale) +
        typeStats[state.type].morale +
        state.morale;
};

export const cost = (state: State): number => {
  let cost =
    attack(state) +
    power(state) +
    defense(state, true) +
    toughness(state, true) +
    morale(state) * 2;

  cost = cost * typeStats[state.type].costMultiplier;
  if (state.type !== 'Fortification' && state.fortType !== 'None') {
    cost =
      cost *
      sizeStats[fortSize[state.fortType][state.fortLevel]].costMultiplier;
  } else {
    cost = cost * sizeStats[state.size].costMultiplier;
  }
  cost = cost * 10;
  if (state.type !== 'Fortification') {
    ancestryStats[state.ancestry].traits.forEach((traitName) => {
      const trait = traitData.find((data) => data.name === traitName);
      cost += trait ? trait.cost : 0;
    });
  }
  state.selectedTraits.forEach((i) => {
    const trait =
      traitData.find((data) => data.name === i.value) ||
      state.savedTraits.find((data) => data.name === i.value);
    cost += trait ? trait.cost : 0;
  });
  cost += 30;
  cost += state.cost;

  return Math.round(cost);
};
