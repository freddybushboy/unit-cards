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
import { Collapse } from '../Collapse/Collapse';

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
        disabled={state.type === 'Levies' || state.type === 'Siege Engine'}
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
        disabled={state.type === 'Levies' || state.type === 'Siege Engine'}
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

    <Collapse title="Advanced options...">
      <div className="form-control">
        <label>Attack adjustment</label>
        <input
          type="number"
          value={state.attack}
          onChange={(e) => update({ attack: Number(e.target.value) })}
        />
      </div>
      <div className="form-control">
        <label>Defense adjustment</label>
        <input
          type="number"
          value={state.defense}
          onChange={(e) => update({ defense: Number(e.target.value) })}
        />
      </div>
      <div className="form-control">
        <label>Power adjustment</label>
        <input
          type="number"
          value={state.power}
          onChange={(e) => update({ power: Number(e.target.value) })}
        />
      </div>
      <div className="form-control">
        <label>Toughness adjustment</label>
        <input
          type="number"
          value={state.toughness}
          onChange={(e) => update({ toughness: Number(e.target.value) })}
        />
      </div>
      <div className="form-control">
        <label>Morale adjustment</label>
        <input
          type="number"
          value={state.morale}
          onChange={(e) => update({ morale: Number(e.target.value) })}
        />
      </div>
      <div className="form-control">
        <label>Cost adjustment</label>
        <input
          type="number"
          value={state.cost}
          onChange={(e) => update({ cost: Number(e.target.value) })}
        />
      </div>
    </Collapse>
  </div>
);
