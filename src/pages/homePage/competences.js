import React from 'react';
import Button from 'components/button'
import javascript from '../homePage/icones/javascript.svg'
import react from '../homePage/icones/react.svg'
import nextjs from '../homePage/icones/nextjs.svg'
import nodejs from '../homePage/icones/nodejs.svg'
import mongodb from '../homePage/icones/mongodb.svg'
import sass from '../homePage/icones/sass.svg'
import figma from '../homePage/icones/figma.svg'
import git from '../homePage/icones/git.svg'

function CompetencesComponent() {
 return (
  <section id="competences" className='containerpres sectionOne'>
     <div className='buttoncontainer'>
    <Button><p>Compétences</p></Button>
    </div>
    <p className='subtitle'> Les outils et technologies utilisées : </p>
    <div className='icon-container'>
        <div><img src={javascript} alt="icone javascript"/></div>
        <div><img src={react} alt="icone react"/></div>
        <div><img src={nextjs} alt="icone next"/></div>
        <div><img src={nodejs} alt="icone nodejs"/></div>
    </div>
    <div className='icon-container'>
        <div><img src={mongodb} alt="icone mongodb"/></div>
        <div><img src={sass} alt="icone sass"/></div>
        <div><img src={figma} alt="icone figma"/></div>
        <div><img src={git} alt="icone git"/></div>
    </div>
    </section>
    );
}
export default CompetencesComponent;
