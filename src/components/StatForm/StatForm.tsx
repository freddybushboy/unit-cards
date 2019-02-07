import React, { Component } from 'react';
import './StatForm.css';
import { State } from '../../App';

import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize,
  FortLevel,
  FortType,
} from '../../types/units';
import {
  unitAncestries,
  unitTypes,
  unitExperiences,
  unitEquipments,
  unitSizes,
  fortLevels,
  fortTypes,
} from '../../fixtures/units';
import { Collapse } from '../Collapse/Collapse';
import { Trait } from '../../types/traits';
import { traitData } from '../../fixtures/traits';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';
import { FormatOptionLabelMeta } from 'react-select/lib/Select';

interface Props {
  state: State;
  update: (i: Partial<State>) => void;
  addTrait: () => void;
  clearTraits: () => void;
}

export class StatForm extends Component<Props> {
  formatOptionLabel = (
    data: { value: string },
    meta: FormatOptionLabelMeta<{ value: string }>,
  ) => {
    const trait =
      traitData.find((trait) => trait.name === data.value) ||
      this.props.state.savedTraits.find((trait) => trait.name === data.value);
    return (
      <div>
        <span className={!trait ? 'text-danger' : ''}>{data.value}</span>
        {trait && meta.context === 'menu' ? (
          <>
            <br />
            <small className="trait-description">{trait.description}</small>
          </>
        ) : null}
      </div>
    );
  };
  render() {
    const { state, update, addTrait, clearTraits } = this.props;
    return (
      <div className="stat-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={state.name}
                onChange={(e) => update({ name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Ancestry</label>
              <select
                className="form-control"
                value={state.ancestry}
                disabled={state.type === 'Fortification'}
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
            <div className="form-group">
              <label>Equipment</label>
              <select
                className="form-control"
                value={state.equipment}
                disabled={
                  state.type === 'Levies' || state.type === 'Fortification'
                }
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
            <div className="form-group">
              <label>Size</label>
              <select
                className="form-control"
                value={state.size}
                disabled={
                  state.type === 'Fortification' && state.fortType !== 'None'
                }
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

          <div className="col-md-6">
            <div className="form-group">
              <label>Commander</label>
              <input
                type="text"
                className="form-control"
                value={state.commander}
                onChange={(e) => update({ commander: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Experience</label>
              <select
                className="form-control"
                value={state.experience}
                disabled={
                  state.type === 'Levies' || state.type === 'Fortification'
                }
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
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                value={state.type}
                onChange={(e) =>
                  update({ type: e.currentTarget.value as UnitType })
                }
              >
                {unitTypes.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            {state.type === 'Fortification' ? (
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label>Fortification type</label>
                    <select
                      className="form-control"
                      value={state.fortType}
                      onChange={(e) =>
                        update({
                          fortType: e.currentTarget.value as FortType,
                        })
                      }
                    >
                      {fortTypes.map((value) => (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  {state.fortType !== 'None' ? (
                    <div className="form-group">
                      <label>Fortification level</label>
                      <select
                        className="form-control"
                        value={state.fortLevel}
                        onChange={(e) =>
                          update({
                            fortLevel: e.currentTarget.value as FortLevel,
                          })
                        }
                      >
                        {fortLevels.map((value) => (
                          <option value={value} key={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <Collapse title="Traits...">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Traits</label>
                <Select
                  isMulti
                  formatOptionLabel={this.formatOptionLabel}
                  value={state.selectedTraits}
                  onChange={(
                    value: ValueType<{
                      value: string;
                    }>,
                  ) =>
                    update({
                      selectedTraits: value as {
                        value: string;
                      }[],
                    })
                  }
                  options={[
                    {
                      label: 'Core',
                      options: [
                        ...traitData.map((data) => ({
                          value: data.name,
                        })),
                      ],
                    },
                    {
                      label: 'custom',
                      options: [
                        ...state.savedTraits.map((data) => ({
                          value: data.name,
                        })),
                      ],
                    },
                  ]}
                />
                {state.savedTraits.length ? (
                  <small>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        clearTraits();
                      }}
                    >
                      Clear custom traits
                    </a>
                  </small>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addTrait();
                }}
              >
                <div className="form-group">
                  <label>Custom Trait</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={state.traitName}
                    onChange={(e) => update({ traitName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={state.traitDescription}
                    onChange={(e) =>
                      update({ traitDescription: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Cost"
                    value={state.traitCost}
                    onChange={(e) =>
                      update({ traitCost: Number(e.target.value) })
                    }
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Add Trait
                </button>
              </form>
            </div>
          </div>
        </Collapse>

        <Collapse title="Advanced options...">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Attack adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.attack}
                  onChange={(e) => update({ attack: Number(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Defense adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.defense}
                  onChange={(e) => update({ defense: Number(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Power adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.power}
                  onChange={(e) => update({ power: Number(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Ancestry name override</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.ancestryOverride}
                  onChange={(e) => update({ ancestryOverride: e.target.value })}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Toughness adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.toughness}
                  onChange={(e) =>
                    update({ toughness: Number(e.target.value) })
                  }
                />
              </div>
              <div className="form-group">
                <label>Morale adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.morale}
                  onChange={(e) => update({ morale: Number(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>Cost adjustment</label>
                <input
                  type="number"
                  className="form-control"
                  value={state.cost}
                  onChange={(e) => update({ cost: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
