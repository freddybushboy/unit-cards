import React from 'react';
import lightImg from './assets/type/cavalry-light.png';
import mediumImg from './assets/type/cavalry-medium.png';
import heavyImg from './assets/type/cavalry-heavy.png';
import superHeavyImg from './assets/type/cavalry-super-heavy.png';

import { UnitEquipment } from '../../types/units';

interface Props {
  equipment: UnitEquipment;
}
export const CavalryFlag = ({ equipment }: Props) => (
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
