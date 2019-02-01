import React from 'react';
import { CardStats } from '../../types/units';

export const CardTable = ({
  size,
  attack,
  defense,
  power,
  toughness,
  morale,
}: CardStats) => (
  <table className="card-table">
    <tbody>
      <tr>
        <td>Attack:</td>
        <td>{attack}</td>
        <td>Defense:</td>
        <td>{defense}</td>
      </tr>
      <tr>
        <td>Power:</td>
        <td>{power}</td>
        <td>Toughness:</td>
        <td>{toughness}</td>
      </tr>
      <tr>
        <td>Morale:</td>
        <td>{morale}</td>
        <td>Size:</td>
        <td>1{size}</td>
      </tr>
    </tbody>
  </table>
);
