import React from 'react';
import lightImg from './assets/type/flying-light.png';
import mediumImg from './assets/type/flying-medium.png';
import heavyImg from './assets/type/flying-heavy.png';
import superHeavyImg from './assets/type/flying-super-heavy.png';

import { UnitEquipment } from '../../types/units';

interface Props {
  equipment: UnitEquipment;
}
export const FlyingFlag = ({ equipment }: Props) => (
  <>
    {equipment === 'Light' ? (
      <img src={lightImg} className="type-flag" />
    ) : equipment === 'Medium' ? (
      <img src={mediumImg} className="type-flag" />
    ) : equipment === 'Heavy' ? (
      <img src={heavyImg} className="type-flag" />
    ) : equipment === 'Super-Heavy' ? (
      <img src={superHeavyImg} className="type-flag" />
    ) : null}
  </>
);
