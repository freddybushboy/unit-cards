import React from 'react';
import './CardFlags.css';
import regularImg from './assets/experience/regular.png';
import seasonedImg from './assets/experience/seasoned.png';
import veteranImg from './assets/experience/veteran.png';
import eliteImg from './assets/experience/elite.png';
import supereliteImg from './assets/experience/super-elite.png';
import leviesImg from './assets/type/levies.png';
import dragonbornImg from './assets/ancestry/dragonborn.png';
import dwarfImg from './assets/ancestry/dwarf.png';
import elfImg from './assets/ancestry/elf.png';
import humanImg from './assets/ancestry/human.png';
import goblinoidImg from './assets/ancestry/goblinoid.png';
import monsterousImg from './assets/ancestry/monsterous.png';
import undeadImg from './assets/ancestry/undead.png';
import specialImg from './assets/ancestry/special.png';
import fortificationImg from './assets/ancestry/fortification.png';

import {
  UnitAncestry,
  UnitType,
  UnitEquipment,
  UnitExperience,
} from '../../types/units';
import { flagTypes } from '../../fixtures/units';
import { ArcherFlag } from './ArcherFlag';
import { CavalryFlag } from './CavalryFlag';
import { InfantryFlag } from './InfantryFlag';
import { FlyingFlag } from './FlyingFlag';
import { SiegeEngineFlag } from './SiegeEngineFlag';
import { FortificationFlag } from './FortificationFlag';

interface Props {
  ancestry: UnitAncestry;
  type: UnitType;
  equipment: UnitEquipment;
  experience: UnitExperience;
}
const AncestryFlag = ({
  experience,
  ancestry,
  type,
}: {
  experience: UnitExperience;
  ancestry: UnitAncestry;
  type: UnitType;
}) => (
  <div className="card-flag">
    {type === 'Fortification' ? (
      <img
        src={fortificationImg}
        className={`ancestry-flag ${
          type === 'Fortification' ? 'ancestry-flag-fort' : ''
        }`}
      />
    ) : flagTypes[ancestry] === 'Human' ? (
      <img src={humanImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Dragonborn' ? (
      <img src={dragonbornImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Dwarf' ? (
      <img src={dwarfImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Elf' ? (
      <img src={elfImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Undead' ? (
      <img src={undeadImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Goblinoid' ? (
      <img src={goblinoidImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Special' ? (
      <img src={specialImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Monsterous' ? (
      <img src={monsterousImg} className="ancestry-flag" />
    ) : (
      <img src={specialImg} className="ancestry-flag" />
    )}

    {experience === 'Regular' ? (
      <img src={regularImg} className="experience-flag" />
    ) : experience === 'Seasoned' ? (
      <img src={seasonedImg} className="experience-flag" />
    ) : experience === 'Veteran' ? (
      <img src={veteranImg} className="experience-flag" />
    ) : experience === 'Elite' ? (
      <img src={eliteImg} className="experience-flag" />
    ) : experience === 'Super-Elite' ? (
      <img src={supereliteImg} className="experience-flag" />
    ) : null}
  </div>
);

const TypeFlag = ({
  equipment,
  type,
}: {
  equipment: UnitEquipment;
  type: UnitType;
}) => (
  <div className="card-flag">
    {type === 'Archers' ? (
      <ArcherFlag equipment={equipment} />
    ) : type === 'Infantry' ? (
      <InfantryFlag equipment={equipment} />
    ) : type === 'Siege Engine' ? (
      <SiegeEngineFlag equipment={equipment} />
    ) : type === 'Levies' ? (
      <img src={leviesImg} className="type-flag" />
    ) : type === 'Cavalry' ? (
      <CavalryFlag equipment={equipment} />
    ) : type === 'Flying' ? (
      <FlyingFlag equipment={equipment} />
    ) : type === 'Fortification' ? (
      <FortificationFlag equipment={equipment} />
    ) : null}
  </div>
);
export const CardFlags = ({ ancestry, type, equipment, experience }: Props) => (
  <>
    <AncestryFlag
      ancestry={ancestry}
      type={type}
      experience={
        type !== 'Levies' && type !== 'Fortification' ? experience : 'Green'
      }
    />
    <TypeFlag equipment={type !== 'Levies' ? equipment : 'Light'} type={type} />
  </>
);
