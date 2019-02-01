import React, { Component } from "react";
import "./Card.css";
import raceFlag from "./race.svg";
import typeFlag from "./heavy-generic.svg";
import {
  UnitAncestry,
  UnitType,
  UnitExperience,
  UnitEquipment,
  UnitSize
} from "../types/units";

interface Props {
  name: string;
  ancestry: UnitAncestry;
  type: UnitType;
  experience: UnitExperience;
  equipment: UnitEquipment;
  size: UnitSize;
}

const AncestryFlag = ({ ancestry }: { ancestry: UnitAncestry }) => (
  <img src={raceFlag} width={35} />
);
const TypeFlag = ({ type }: { type: UnitType }) => (
  <img src={typeFlag} width={35} />
);
const Table = ({ size }: { size: UnitSize }) => (
  <table className="card-table">
    <tr>
      <td>Attack:</td>
      <td>+2</td>
      <td>Defense:</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Power:</td>
      <td>+2</td>
      <td>Toughness:</td>
      <td>11</td>
    </tr>
    <tr>
      <td>Morale:</td>
      <td>+2</td>
      <td>Size:</td>
      <td>1{size}</td>
    </tr>
  </table>
);

export class Card extends Component<Props> {
  render() {
    const { name, ancestry, experience, equipment, type, size } = this.props;
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-flags">
            <AncestryFlag ancestry={ancestry} />
            <TypeFlag type={type} />
          </div>
          <div className="card-top">
            <div className="card-name">{name}</div>
            <div className="card-type">
              {ancestry} {experience}
              <br />
              {equipment} {type}
            </div>
          </div>
          <div className="card-main">
            <Table size={size} />
            <div className="card-traits">Traits</div>
            <div>
              <b>Courageous</b>. Once per battle, this unit can choose to
              succeed on a Morale check it just failed.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
