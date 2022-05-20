import React, { Component } from 'react'
import img1 from './images/svenskaspel_square.avif' 
import img2 from './images/atg-money-icon-rect-60x60-01 (2).svg'

class Services extends Component {

    render() {
        return (
            <div className="servicespage">
      <p className="kophome">Köp andelar</p>
            {/* <img
          className="navbar-logo"
          src={img1}/> */}
 <p className="textnormal2"><br/><br/><br/>
        {/* Andelsbaren är aktiv på de två dominerande spelplattformarna ATG
        Tillsammans samt Svenska Spels Spela Tillsammans. */}
    
    Klicka på någon av länkarna nedan för att komma dirket till
        Andelsbarens portaler.
      </p>
      <div className="container"> 
     <section className='svenska-button'> 
      <a
        href="https://spela.svenskaspel.se/spela-tillsammans/ombudslag/23563-andelsbaren---spelhornan"
        target="_blank" >
        <img
          className="svenska-button"
          src={img1}/>
      </a>
           </section>
           <section className='atg-button'>

      <a href="https://www.atg.se/spelhornansurahammar" target="_blank">
        <img
          className="atg-button"
          src={img2}/>
      </a>
         </section> 
    </div>

  </div>
            )
        }
    }
    
    export default Services
    