import img1 from "./images/Svenska-Spel-Logo-e1568629879739.png";
import img2 from "./images/atg-money-icon-rect-60x60-01 (2).svg";

import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="servicespage">
        <p className="kophome2">Köp andelar</p>
        {/* <img
      className="navbar-logo"
      src={img1}/> */}
        <p className="textnormal2">
          <br />
          <br />
          <br />
        </p>
        {/* Andelsbaren är aktiv på de två dominerande spelplattformarna ATG
    Tillsammans samt Svenska Spels Spela Tillsammans. */}
        <p className="textnormal3">
          Klicka på någon av länkarna nedan för att komma direkt till
          Andelsbarens portaler.
        </p>
        <div className="container">
          <section className="svenska-button">
            <a href="https://spela.svenskaspel.se/spela-tillsammans/ombudslag/23563-andelsbaren---spelhornan"
              target="_blank"
              rel="noreferrer">
              <img className="svenska-button" src={img1} alt="svenska" />
            </a> </section>

          <div className="container2">
            <section className="atg-button">
              <a href="https://www.atg.se/spelhornansurahammar"
                target="_blank"
                rel="noreferrer">
                <img className="atg-button" src={img2} alt="atgs" />
              </a>
            </section>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default Home;
