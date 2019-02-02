import { Trait } from '../types/traits';

export interface TraitData {
  name: Trait;
  cost: number;
  description: string;
}
export const traitData: TraitData[] = [
  {
    name: 'Amphibious',
    cost: 50,
    description:
      'This unit does not suffer terrain penalties for fighting in water or on land.',
  },
  {
    name: 'Bred for war',
    cost: 100,
    description:
      'This unit cannot be diminished, and cannot have disadvantage on morale checks.',
  },
  {
    name: 'Brutal',
    cost: 200,
    description: 'This unit inflicts 2 casualties on a successful power check.',
  },
  {
    name: 'Courageous',
    cost: 50,
    description:
      'Once per battle, this unit can choose to succeed on a morale check it just failed.',
  },
  {
    name: 'Eternal',
    cost: 50,
    description:
      'This unit cannot be horrified, and it always succeeds on morale checks to attack undead and fiends.',
  },
  {
    name: 'Frenzy',
    cost: 50,
    description:
      'If this unit diminishes an enemy unit, it immediately makes a free attack against that unit.',
  },
  {
    name: 'Horrify',
    cost: 200,
    description:
      'If this unit inflicts a casualty on an enemy unit, that unit must make a dc 15 morale check.Failure exhausts the unit.',
  },
  {
    name: 'Martial',
    cost: 100,
    description:
      'If this unit succeeds on a power check and its size is greater than the defending unit, it inflicts 2 casualties.',
  },
  {
    name: 'Mindless',
    cost: 100,
    description: 'This unit cannot fail morale checks.',
  },
  {
    name: 'Regenerate',
    cost: 200,
    description:
      'When this unit refreshes, increment its casualty die.This trait ceases to function if the unit suffers a casualty from battle magic.',
  },
  {
    name: 'Ravenous',
    cost: 50,
    description:
      'While any enemy unit is diminished, this unit can spend a round feeding on the corpses to increment their casualty die. ',
  },
  {
    name: 'Rock-hurler',
    cost: 250,
    description:
      'If this unit succeeds on an attack check, it inflicts 2 casualties.Against fortifications, it inflicts 1d6 casualties.',
  },
  {
    name: 'Savage',
    cost: 50,
    description:
      'This unit has advantage on the first attack check it makes each battle.',
  },
  {
    name: 'Stalwart',
    cost: 50,
    description:
      'Enemy battle magic has disadvantage on power checks against this unit.',
  },
  {
    name: 'Twisting Roots',
    cost: 200,
    description:
      'As an action, this unit can sap the walls of a fortification.Siege units have advantage on power checks against sapped fortifications.',
  },
  {
    name: 'Undead',
    cost: 50,
    description:
      'Green and regular troops must pass a morale check to attack this unit.Each enemy unit need only do this once.',
  },
  {
    name: 'Charge',
    description:
      'Cannot use while engaged. A Charge is an attack with advantage on the Attack check.It inflicts 2 casualties on a successful Power check.The charging unit is then engaged with the defending unit and must make a DC 13 Morale check to disengage.',
    cost: 0,
  },
  {
    name: 'Always Diminished',
    description: 'This unit it always diminished.',
    cost: 0,
  },
  {
    name: 'Siege Engine',
    description:
      'This unit can attack fortifications, dealing 1d6 damage on a hit.',
    cost: 0,
  },
];
