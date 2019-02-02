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
import { Trait } from '../../types/traits';
import { traitData } from '../../fixtures/traits';

interface Props {
  state: State;
  update: (i: Partial<State>) => void;
  addTrait: () => void;
  clearTraits: () => void;
}
export const StatForm = ({
         state,
         update,
         addTrait,
         clearTraits,
       }: Props) => (
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
           <div className="form-control">
             <label>Experience</label>
             <select
               value={state.experience}
               disabled={
                 state.type === 'Levies' || state.type === 'Siege Engine'
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
           <div className="form-control">
             <label>Equipment</label>
             <select
               value={state.equipment}
               disabled={
                 state.type === 'Levies' || state.type === 'Siege Engine'
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

           <Collapse title="Traits...">
             <div className="form-control">
               <label>Traits</label>
               <select
                 multiple
                 size={6}
                 value={state.traits.split('|')}
                 onChange={(e) => {
                   const selected = [].slice
                     .call(e.target.options)
                     .filter((i: HTMLOptionElement) => i.selected)
                     .map((i: HTMLOptionElement) => i.value)
                     .join('|');
                   update({
                     traits: selected,
                   });
                 }}
               >
                 {traitData.map((data) => (
                   <option value={data.name} key={data.name}>
                     {data.name}
                   </option>
                 ))}
                 {state.savedTraits.map((data) => (
                   <option value={data.name} key={data.name}>
                     {data.name}
                   </option>
                 ))}
               </select>
             </div>
             <form
               className="form-control"
               onSubmit={(e) => {
                 e.preventDefault();
                 addTrait();
               }}
             >
               <label>Custom Trait</label>
               <input
                 type="text"
                 placeholder="Name"
                 value={state.traitName}
                 onChange={(e) => update({ traitName: e.target.value })}
               />
               <input
                 type="text"
                 placeholder="Description"
                 value={state.traitDescription}
                 onChange={(e) =>
                   update({ traitDescription: e.target.value })
                 }
               />
               <input
                 type="number"
                 placeholder="Cost"
                 value={state.traitCost}
                 onChange={(e) =>
                   update({ traitCost: Number(e.target.value) })
                 }
               />
               <button type="submit">Add Trait</button>{' '}
               <small>
                 <a href="#" onClick={clearTraits}>
                   Clear Traits
                 </a>
               </small>
             </form>
           </Collapse>

           <Collapse title="Advanced options...">
             <div className="form-control">
               <label>Attack adjustment</label>
               <input
                 type="number"
                 value={state.attack}
                 onChange={(e) =>
                   update({ attack: Number(e.target.value) })
                 }
               />
             </div>
             <div className="form-control">
               <label>Defense adjustment</label>
               <input
                 type="number"
                 value={state.defense}
                 onChange={(e) =>
                   update({ defense: Number(e.target.value) })
                 }
               />
             </div>
             <div className="form-control">
               <label>Power adjustment</label>
               <input
                 type="number"
                 value={state.power}
                 onChange={(e) =>
                   update({ power: Number(e.target.value) })
                 }
               />
             </div>
             <div className="form-control">
               <label>Toughness adjustment</label>
               <input
                 type="number"
                 value={state.toughness}
                 onChange={(e) =>
                   update({ toughness: Number(e.target.value) })
                 }
               />
             </div>
             <div className="form-control">
               <label>Morale adjustment</label>
               <input
                 type="number"
                 value={state.morale}
                 onChange={(e) =>
                   update({ morale: Number(e.target.value) })
                 }
               />
             </div>
             <div className="form-control">
               <label>Cost adjustment</label>
               <input
                 type="number"
                 value={state.cost}
                 onChange={(e) =>
                   update({ cost: Number(e.target.value) })
                 }
               />
             </div>
           </Collapse>
         </div>
       );
