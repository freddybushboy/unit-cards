import {
  ancestryStats,
  experienceStats,
  equipmentStats,
  typeStats,
  sizeStats,
  fortToughness,
  fortSize,
} from '../fixtures/unitStats';
import { CustomTrait, traitData } from '../fixtures/traits';
import { UnitData } from '../types/units';

export const attack = (unit: UnitData): number => {
  return unit.type === 'Fortification'
    ? 0
    : ancestryStats[unit.ancestry].attack +
    (unit.type === 'Levies'
      ? 0
      : experienceStats[unit.experience].attack +
      equipmentStats[unit.equipment].attack) +
    typeStats[unit.type].attack +
    unit.attack;
};

export const power = (unit: UnitData): number => {
  return unit.type === 'Fortification'
    ? 0
    : ancestryStats[unit.ancestry].power +
    (unit.type === 'Levies'
      ? 0
      : experienceStats[unit.experience].power +
      equipmentStats[unit.equipment].power) +
    typeStats[unit.type].power +
    unit.power;
};

const defenseBase = 10;
export const defense = (unit: UnitData, baseless?: boolean): number => {
  return unit.type === 'Fortification'
    ? 0
    : (!baseless ? defenseBase : 0) +
    ancestryStats[unit.ancestry].defense +
    (unit.type === 'Levies'
      ? 0
      : experienceStats[unit.experience].defense +
      equipmentStats[unit.equipment].defense) +
    typeStats[unit.type].defense +
    unit.defense;
};

const toughnessBase = 10;
export const toughness = (unit: UnitData, baseless?: boolean): number => {
  return unit.type === 'Fortification'
    ? fortToughness[unit.fortType][unit.fortLevel] + unit.toughness
    : (!baseless ? toughnessBase : 0) +
    ancestryStats[unit.ancestry].toughness +
    (unit.type === 'Levies'
      ? 0
      : experienceStats[unit.experience].toughness +
      equipmentStats[unit.equipment].toughness) +
    typeStats[unit.type].toughness +
    unit.toughness;
};

export const morale = (unit: UnitData): number => {
  return unit.type === 'Fortification'
    ? 0
    : ancestryStats[unit.ancestry].morale +
    (unit.type === 'Levies'
      ? 0
      : experienceStats[unit.experience].morale +
      equipmentStats[unit.equipment].morale) +
    typeStats[unit.type].morale +
    unit.morale;
};

export const cost = (unit: UnitData, savedTraits: CustomTrait[]): number => {
  let cost =
    attack(unit) +
    power(unit) +
    defense(unit, true) +
    toughness(unit, true) +
    morale(unit) * 2;

  cost = cost * typeStats[unit.type].costMultiplier;
  if (unit.type === 'Fortification' && unit.fortType !== 'None') {
    cost =
      cost *
      sizeStats[fortSize[unit.fortType][unit.fortLevel]].costMultiplier;
  } else {
    cost = cost * sizeStats[unit.size].costMultiplier;
  }
  cost = cost * 10;
  if (unit.type !== 'Fortification') {
    ancestryStats[unit.ancestry].traits.forEach((traitName) => {
      const trait = traitData.find((data) => data.name === traitName);
      cost += trait ? trait.cost : 0;
    });
  }
  unit.selectedTraits.forEach((i) => {
    const trait =
      traitData.find((data) => data.name === i.value) ||
      savedTraits.find((data) => data.name === i.value);
    cost += trait ? trait.cost : 0;
  });
  cost += 30;
  cost += unit.cost;

  return Math.round(cost);
};
