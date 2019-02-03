import React from 'react';
import './CardFlags.css';
import lightImg from './assets/light.png';
import mediumImg from './assets/medium.png';
import heavyImg from './assets/heavy.png';
import superheavyImg from './assets/super-heavy.png';
import greenImg from './assets/ancestry-green.png';
import regularImg from './assets/ancestry-regular.png';
import seasonedImg from './assets/ancestry-seasoned.png';
import veteranImg from './assets/ancestry-veteran.png';
import eliteImg from './assets/ancestry-elite.png';
import supereliteImg from './assets/ancestry-super-elite.png';
import starImg from './assets/star.png';
import bowImg from './assets/bow.svg';
import swordImg from './assets/sword.svg';
import forkImg from './assets/fork.svg';
import catapultImg from './assets/catapult.svg';
import wingImg from './assets/wing.svg';
import horseshoeImg from './assets/horseshoe.svg';
import bugbearImg from './assets/ancestry/bugbear.jpg';
import dragonbornImg from './assets/ancestry/dragonborn.jpg';
import dwarfImg from './assets/ancestry/dwarf.jpg';
import elfImg from './assets/ancestry/elf.jpg';
import ghoulImg from './assets/ancestry/ghoul.jpg';
import gnollImg from './assets/ancestry/gnoll.jpg';
import gnomeImg from './assets/ancestry/gnome.jpg';
import goblinImg from './assets/ancestry/goblin.jpg';
import hobgoblinImg from './assets/ancestry/hobgoblin.jpg';
import humanImg from './assets/ancestry/human.jpg';
import koboldImg from './assets/ancestry/kobold.jpg';
import lizardfolkImg from './assets/ancestry/lizardfolk.jpg';
import ogreImg from './assets/ancestry/ogre.jpg';
import orcImg from './assets/ancestry/orc.jpg';
import skeletonImg from './assets/ancestry/skeleton.jpg';
import treantImg from './assets/ancestry/treant.jpg';
import trollImg from './assets/ancestry/troll.jpg';
import zombieImg from './assets/ancestry/zombie.jpg';

import {
  UnitAncestry,
  UnitType,
  UnitEquipment,
  UnitExperience,
} from '../../types/units';

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
    <img src={starImg} className="ancestry-icon" />
    {ancestry === 'Bugbear' ? (
      <img src={bugbearImg} className="ancestry-image" />
    ) : ancestry === 'Dragonborn' ? (
      <img src={dragonbornImg} className="ancestry-image" />
    ) : ancestry === 'Dwarf' ? (
      <img src={dwarfImg} className="ancestry-image" />
    ) : ancestry === 'Elf' || ancestry === 'Elven (Winged)' ? (
      <img src={elfImg} className="ancestry-image" />
    ) : ancestry === 'Ghoul' ? (
      <img src={ghoulImg} className="ancestry-image" />
    ) : ancestry === 'Gnoll' ? (
      <img src={gnollImg} className="ancestry-image" />
    ) : ancestry === 'Gnome' ? (
      <img src={gnomeImg} className="ancestry-image" />
    ) : ancestry === 'Goblin' ? (
      <img src={goblinImg} className="ancestry-image" />
    ) : ancestry === 'Hobgoblin' ? (
      <img src={hobgoblinImg} className="ancestry-image" />
    ) : ancestry === 'Human' ? (
      <img src={humanImg} className="ancestry-image" />
    ) : ancestry === 'Kobold' ? (
      <img src={koboldImg} className="ancestry-image" />
    ) : ancestry === 'Lizardfolk' ? (
      <img src={lizardfolkImg} className="ancestry-image" />
    ) : ancestry === 'Ogre' ? (
      <img src={ogreImg} className="ancestry-image" />
    ) : ancestry === 'Orc' ? (
      <img src={orcImg} className="ancestry-image" />
    ) : ancestry === 'Skeleton' ? (
      <img src={skeletonImg} className="ancestry-image" />
    ) : ancestry === 'Treant' ? (
      <img src={treantImg} className="ancestry-image" />
    ) : ancestry === 'Troll' ? (
      <img src={trollImg} className="ancestry-image" />
    ) : ancestry === 'Zombie' ? (
      <img src={zombieImg} className="ancestry-image" />
    ) : null}

    {experience === 'Green' ? (
      <img src={greenImg} className="ancestry-flag" />
    ) : experience === 'Regular' ? (
      <img src={regularImg} className="ancestry-flag" />
    ) : experience === 'Seasoned' ? (
      <img src={seasonedImg} className="ancestry-flag" />
    ) : experience === 'Veteran' ? (
      <img src={veteranImg} className="ancestry-flag" />
    ) : experience === 'Elite' ? (
      <img src={eliteImg} className="ancestry-flag" />
    ) : experience === 'Super-Elite' ? (
      <img src={supereliteImg} className="ancestry-flag" />
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
    <AncestryFlag
      ancestry={ancestry}
      experience={type !== 'Levies' ? experience : 'Green'}
    />
    <TypeFlag equipment={type !== 'Levies' ? equipment : 'Light'} type={type} />
  </>
);
