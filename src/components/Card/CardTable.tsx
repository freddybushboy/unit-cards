import React from 'react';
import { UnitStats } from '../../types/units';

const positive = (num: number): string => (Math.sign(num) >= 0 ? '+' : '');
export const CardTable = ({
  size,
  attack,
  defense,
  power,
  toughness,
  morale,
  type,
}: UnitStats) => (
  <table className="card-table">
    <tbody>
      <tr>
        <td>Attack:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(attack)}${attack}`}
        </td>
        <td>Defense:</td>
        <td className="text-right">
          {type === 'Fortification' ? '—' : defense}
        </td>
      </tr>
      <tr>
        <td>Power:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(power)}${power}`}
        </td>
        <td>Toughness:</td>
        <td className="text-right">{toughness}</td>
      </tr>
      <tr>
        <td>Morale:</td>
        <td className="text-right pad-right">
          {type === 'Fortification' ? '—' : `${positive(morale)}${morale}`}
        </td>
        <td>Size:</td>
        <td className="text-right text-transform-none">1{size}</td>
      </tr>
    </tbody>
  </table>
);
