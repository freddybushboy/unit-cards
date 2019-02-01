import React from 'react';
import { State } from '../../App';
import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize,
} from '../../types/units';
import {
  unitAncestries,
  unitTypes,
  unitExperiences,
  unitEquipments,
  unitSizes,
} from '../../fixtures/units';

interface Props {
  state: State;
  update: (i: Partial<State>) => void;
}
export const StatForm = ({ state, update }: Props) => (
  <>
    <input
      type="text"
      value={state.name}
      onChange={(e) => update({ name: e.target.value })}
    />
    <select
      value={state.ancestry}
      onChange={(e) =>
        update({
          ancestry: e.currentTarget.value as UnitAncestry,
        })
      }
    >
      {unitAncestries.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
    <select
      value={state.type}
      onChange={(e) => update({ type: e.currentTarget.value as UnitType })}
    >
      {unitTypes.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
    <select
      value={state.experience}
      onChange={(e) =>
        update({
          experience: e.currentTarget.value as UnitExperience,
        })
      }
    >
      {unitExperiences.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
    <select
      value={state.equipment}
      onChange={(e) =>
        update({
          equipment: e.currentTarget.value as UnitEquipment,
        })
      }
    >
      {unitEquipments.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
    <select
      value={state.size}
      onChange={(e) =>
        update({
          size: e.currentTarget.value as UnitSize,
        })
      }
    >
      {unitSizes.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  </>
);
