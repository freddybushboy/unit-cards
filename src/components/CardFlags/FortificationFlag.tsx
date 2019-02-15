import React from 'react';
import lightImg from './assets/type/fortification-light.png';
import mediumImg from './assets/type/fortification-medium.png';
import heavyImg from './assets/type/fortification-heavy.png';
import superHeavyImg from './assets/type/fortification-super-heavy.png';

import { UnitEquipment } from '../../types/units';

interface Props {
  equipment: UnitEquipment;
}
export const FortificationFlag = ({ equipment }: Props) => (
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
