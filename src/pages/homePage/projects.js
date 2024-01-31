import React from 'react';
import Button from 'components/button'
import FirstProject from'../photo/nina.webp'
import {ReactComponent as Linkone} from '../homePage/icones/link.svg'


function ProjectComponent() {
 return (
  <section id="projects" className='sectionTwo'>
    <section className="section dark"></section>
    <div className='buttoncontainer'>
      <Button><p>Réalisations</p></Button>
    </div>
    <p className='subtitle'>Voici quelques-uns des projets sur lesquels j'ai travaillé :</p>
    <div className="projectContainer">
      <div className="imageContainer">
        <img src={FirstProject} alt='Nina Carducci' className='firstimage'/>
      </div>
      <div className="textContainer">
        <p>Il s'agit d'un site internet pour une photographe, une des missions demandée était en autre un travail sur l'accessibilité, l'optimisation du 
          site internet et sur le SEO. </p>
          <div className='buttonContainer'>
          <Button><p>react</p></Button>
          <Button><p>Lightouse</p></Button>
          <Button><p>Figma</p></Button>
          <Button><p>Github</p></Button>
          </div>
          <div className="linkContainer">
        <a href="https://kevinismail.github.io/fork-OC-projet-09/" target="_blank" rel="noopener noreferrer">
   Code du premier projet <Linkone/></a>
          </div>
      </div>    
    </div>
    <div className="projectContainer">
      <div className="imageContainer">
        <img src={FirstProject} alt='Nina Carducci' className='firstimage'/>
      </div>
      <div className="textContainer">
        <p>Il s'agit d'un site internet pour une photographe, une des missions demandée était en autre un travail sur l'accessibilité, l'optimisation du 
          site internet et sur le SEO. </p>
          <div className='buttonContainer'>
          <Button><p>react</p></Button>
          <Button><p>Lightouse</p></Button>
          <Button><p>Figma</p></Button>
          <Button><p>Github</p></Button>
          </div>
          <div className="linkContainer">
        <a href="https://kevinismail.github.io/fork-OC-projet-09/" target="_blank" rel="noopener noreferrer">
    Code du deuxieme projet<Linkone/></a>
          </div>
      </div>    
    </div>
    <div className="projectContainer">
      <div className="imageContainer">
        <img src={FirstProject} alt='Nina Carducci' className='firstimage'/>
      </div>
      <div className="textContainer">
        <p>Il s'agit d'un site internet pour une photographe, une des missions demandée était en autre un travail sur l'accessibilité, l'optimisation du 
          site internet et sur le SEO. </p>
          <div className='buttonContainer'>
          <Button><p>react</p></Button>
          <Button><p>Lightouse</p></Button>
          <Button><p>Figma</p></Button>
          <Button><p>Github</p></Button>
          </div>
          <div className="linkContainer">
        <a href="https://kevinismail.github.io/fork-OC-projet-09/" target="_blank" rel="noopener noreferrer">
    Code du troisième projet<Linkone/></a>
          </div>
      </div>    
    </div>
    {/* la re recopie colle mon div project container pourchacun des projets que je veux rajouter */}
 </section>
 );
}

export default ProjectComponent;

