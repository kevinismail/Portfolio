import React from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { ReactComponent as Figmaicon} from './figmaicon.svg';
import { ReactComponent as Githubicon } from './githubicon.svg';
import welcomeImage from "../photo/kevin2.webp"
function BienvenueComponent() {
 return (
  <section id="bienvenue" className='welcome-section grid-container'>
    <div className="text-container">
   <div className="text">
    <h1>Bienvenue</h1>
    <p> Je suis un développeur Front-End qui peut créer et ou faire le design d’applications web qui seront rapides, esthétiques, accessible et responsive. </p>
    <p><FaMapMarkerAlt /> France, Strasbourg</p>
    <p><FaCheckCircle color="green" /> Disponible pour de nouvelles missions</p>
    <div className="icones">
    <a href="https://github.com/kevinismail" target="_blank" rel="noopener noreferrer">
    <Githubicon /></a>
    <a href="https://www.figma.com/file/aAF9pi7trlxKTEAKDHsJU4/Maquette-portfolio?type=design&node-id=0-1&mode=design&t=2fvsKqbr3jsQLDL8-0" target="_blank" rel="noopener noreferrer">
    <Figmaicon /></a>

    </div>
  </div>

 
  </div>
  <div className="image-container">
        <img src={welcomeImage} alt="ohh un aquarium" className='image1'/>
    </div>

  </section>
 );
}

export default BienvenueComponent;