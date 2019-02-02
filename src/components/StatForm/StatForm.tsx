import React from 'react';
import './StatForm.css';
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
  <div className="stat-form">
    <div className="form-control">
      <label>Name</label>
      <input
        type="text"
        value={state.name}
        onChange={(e) => update({ name: e.target.value })}
      />
    </div>
    <div className="form-control">
      <label>Ancestry</label>
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
    </div>
    <div className="form-control">
      <label>Type</label>
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
    </div>
    <div className="form-control">
      <label>Experience</label>
      <select
        value={state.experience}
        disabled={state.type === 'Levies'}
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
    </div>
    <div className="form-control">
      <label>Equipment</label>
      <select
        value={state.equipment}
        disabled={state.type === 'Levies'}
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
    </div>
    <div className="form-control">
      <label>Size</label>
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
    </div>
  </div>
);
