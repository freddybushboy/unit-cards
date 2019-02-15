import React from 'react';
import './CardFlags.css';
import lightImg from './assets/light.png';
import mediumImg from './assets/medium.png';
import heavyImg from './assets/heavy.png';
import superheavyImg from './assets/super-heavy.png';
import regularImg from './assets/experience/regular.png';
import seasonedImg from './assets/experience/seasoned.png';
import veteranImg from './assets/experience/veteran.png';
import eliteImg from './assets/experience/elite.png';
import supereliteImg from './assets/experience/super-elite.png';
import bowImg from './assets/bow.svg';
import swordImg from './assets/sword.svg';
import forkImg from './assets/fork.svg';
import catapultImg from './assets/catapult.svg';
import wingImg from './assets/wing.svg';
import horseshoeImg from './assets/horseshoe.svg';
import towerImg from './assets/tower.svg';
import dragonbornImg from './assets/ancestry/dragonborn.png';
import dwarfImg from './assets/ancestry/dwarf.png';
import elfImg from './assets/ancestry/elf.png';
import humanImg from './assets/ancestry/human.png';
import goblinoidImg from './assets/ancestry/goblinoid.png';
import monsterousImg from './assets/ancestry/monsterous.png';
import undeadImg from './assets/ancestry/undead.png';
import specialImg from './assets/ancestry/special.png';

import {
  UnitAncestry,
  UnitType,
  UnitEquipment,
  UnitExperience,
} from '../../types/units';
import { flagTypes } from '../../fixtures/units';

interface Props {
  ancestry: UnitAncestry;
  type: UnitType;
  equipment: UnitEquipment;
  experience: UnitExperience;
}
const AncestryFlag = ({
  experience,
  ancestry,
}: {
  experience: UnitExperience;
  ancestry: UnitAncestry;
}) => (
  <div className="card-flag">
    {flagTypes[ancestry] === 'Human' ? (
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
      <img src={bowImg} className="type-icon" />
    ) : type === 'Infantry' ? (
      <img src={swordImg} className="type-icon" />
    ) : type === 'Siege Engine' ? (
      <img src={catapultImg} className="type-icon" />
    ) : type === 'Levies' ? (
      <img src={forkImg} className="type-icon" />
    ) : type === 'Cavalry' ? (
      <img src={horseshoeImg} className="type-icon" />
    ) : type === 'Flying' ? (
      <img src={wingImg} className="type-icon" />
    ) : null}
    {equipment === 'Light' ? (
      <img src={lightImg} className="equipment-flag" />
    ) : equipment === 'Medium' ? (
      <img src={mediumImg} className="equipment-flag" />
    ) : equipment === 'Heavy' ? (
      <img src={heavyImg} className="equipment-flag" />
    ) : equipment === 'Super-Heavy' ? (
      <img src={superheavyImg} className="equipment-flag" />
    ) : null}
  </div>
);
export const CardFlags = ({ ancestry, type, equipment, experience }: Props) => (
  <>
    {type === 'Fortification' ? (
      <div className="fort-flag">
        <img src={towerImg} />
      </div>
    ) : (
      <>
        <AncestryFlag
          ancestry={ancestry}
          experience={type !== 'Levies' ? experience : 'Green'}
        />
        <TypeFlag
          equipment={type !== 'Levies' ? equipment : 'Light'}
          type={type}
        />
      </>
    )}
  </>
);
