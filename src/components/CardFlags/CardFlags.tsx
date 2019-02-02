import React from 'react';
import './CardFlags.css';
import starImg from './assets/star.svg';
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="207.116 0 197.769 792">
      <path
        fill="#db1a21"
        d="M354.056 0v36.966h-96.112V0h-50.828V534.161L306 475.939l98.885 58.222V0z"
      />
      {['Regular', 'Seasoned', 'Veteran', 'Elite', 'Super-Elite'].includes(
        experience,
      ) ? (
        <path
          fill="#8dc63f"
          d="M404.885 574.824L306 517.526l-98.884 57.298V551.72L306 494.423l98.885 57.297z"
        />
      ) : null}
      {['Seasoned', 'Veteran', 'Elite', 'Super-Elite'].includes(experience) ? (
        <path
          fill="#cbdb2a"
          d="M404.885 613.639L306 556.341l-98.884 57.298v-23.105L306 533.237l98.885 57.297z"
        />
      ) : null}
      {['Veteran', 'Elite', 'Super-Elite'].includes(experience) ? (
        <path
          fill="#ebd417"
          d="M404.885 653.377L306 596.079l-98.884 57.298v-23.104L306 572.976l98.885 57.297z"
        />
      ) : null}
      {['Elite', 'Super-Elite'].includes(experience) ? (
        <path
          fill="#ffc20e"
          d="M404.885 692.191L306 634.894l-98.884 57.297v-23.103L306 611.79l98.885 57.298z"
        />
      ) : null}
      {['Super-Elite'].includes(experience) ? (
        <path
          fill="#ffc20e"
          d="M306 666.315l11.09 23.104 24.952 2.772-17.559 18.484 3.697 24.952L306 723.612l-23.104 12.015 4.621-24.952-18.483-18.484 25.876-2.772zM269.034 727.31l10.166 21.254 24.028 2.773-17.56 16.635L290.29 792l-21.256-11.09L247.778 792l3.697-24.028-16.635-16.635 23.104-2.773zM342.966 727.31l10.166 21.254 24.028 2.773-17.559 16.635L364.222 792l-21.256-11.09L321.711 792l3.696-24.028-16.635-16.635 24.029-2.773z"
        />
      ) : null}
    </svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.4 66.8">
        <path
          fill="#001522"
          d="M10.7 66.8L21.2 5.5l.2-1.4V0h-5.5v4.1H5.5V0H0v4.1l.2 1.4z"
        />
      </svg>
    ) : equipment === 'Medium' ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.4 72.6">
        <path d="M15.9 0v3.3H5.5V0H0v5.5l1.5 67.1 6.9-17.5 2.3-6 2.3 6 6.9 17.5 1.5-67.1V0z" />
      </svg>
    ) : equipment === 'Heavy' ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.4 79.6">
        <path d="M15.9 0v4.1H5.5V0H0v5.5l1.5 74.1 4.6-29.4 4.6 29.4 4.6-29.4 4.6 29.4 1.5-74.1V0h-5.5z" />
      </svg>
    ) : equipment === 'Super-Heavy' ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.4 80.5">
        <path d="M15.9 0v3.3H5.5V0H0v5.5l1.5 75 4.6-1.9 4.6 1.9 4.6-1.9 4.6 1.9 1.5-75V0h-5.5z" />
      </svg>
    ) : null}
  </div>
);
export const CardFlags = ({ ancestry, type, equipment, experience }: Props) => (
  <>
    <AncestryFlag
      ancestry={ancestry}
      experience={
        type !== 'Levies' && type !== 'Siege Engine' ? experience : 'Green'
      }
    />
    <TypeFlag equipment={type !== 'Levies' ? equipment : 'Light'} type={type} />
  </>
);
