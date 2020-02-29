import React from 'react';
import lightImg from './assets/type/infantry-light.png';
import mediumImg from './assets/type/infantry-medium.png';
import heavyImg from './assets/type/infantry-heavy.png';
import superHeavyImg from './assets/type/infantry-super-heavy.png';

import { UnitEquipment } from '../../types/units';

interface Props {
  equipment: UnitEquipment;
}
export const InfantryFlag = ({ equipment }: Props) => (
  <>
    {equipment === 'Light' ? (
      <img alt="" src={lightImg} className="type-flag" />
    ) : equipment === 'Medium' ? (
      <img alt="" src={mediumImg} className="type-flag" />
    ) : equipment === 'Heavy' ? (
      <img alt="" src={heavyImg} className="type-flag" />
    ) : equipment === 'Super-Heavy' ? (
      <img alt="" src={superHeavyImg} className="type-flag" />
    ) : null}
  </>
);
