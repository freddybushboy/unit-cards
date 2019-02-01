import React from "react";
import "./Card.css";
import raceFlag from "./race.svg";
import typeFlag from "./heavy-generic.svg";

export const Card = () => (
  <div className="card">
    <div className="card-inner">
      <div className="card-flags">
        <img src={raceFlag} width={35} />
        <img src={typeFlag} width={35} />
      </div>
      <div className="card-top">
        <div className="card-name">Shadow Legion</div>
        <div className="card-type">
          Shadow Regular
          <br />
          Heavy Infantry
        </div>
      </div>
      <div className="card-main">
        <table className="card-table">
          <tr>
            <td>Attack:</td>
            <td>+2</td>
            <td>Defense:</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td>+2</td>
            <td>Defense:</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td>+2</td>
            <td>Defense:</td>
            <td>12</td>
          </tr>
        </table>
        <div className="card-traits">Traits</div>
        <div>
          <b>Courageous</b>. Once per battle, this unit can choose to succeed on
          a Morale check it just failed.
        </div>
      </div>
    </div>
  </div>
);
