import React from 'react';
import Button from 'components/button'
import presentationImage from '../photo/presentation.jpeg'

function PresentationComponent() {
  return (
  <section id="presentation" className='containerpres sectionTwo'>
      <div className='buttoncontainer'>
     <Button><p>Présentation</p></Button>
     </div>
    
     <div className="content-container souscontainer">
        <div className="image-container">
            <img src={presentationImage} alt="Bonjour" className='image2'/>
        </div>
        <div className="text-container">
            <h3>Pour mieux me connaître :</h3>
            <p> De formation psychologue puis comptable, j’ai au cours de mon expérience professionnelle appris beaucoup sur les hommes et les entreprises, en passant de la gestion d’équipe à la réalisation de bilans comptables ou plans de financements. </p>
            <p> Après avoir passé quelques temps en tant que père au foyer (je suis un expert des purées maison et du changement de couches maintenant), j’ai eu le temps de repenser
                 à ce que j’ai fait et ce que j’aimerai faire. </p>
            <p> A une époque où tout avance très vite et où de nouvelles technologies ne cessent d’apparaître, 
                je ne voulais pas être dépassé et ai donc entamé une formation de développeur Front-End auprès d’OpenClassrooms.  </p>
            <p>Bien que cette formation soit axée Front et web, je travaille également sur des projets personnels où je touche 
                légèrement le rôle du développeur Back. </p>
            <p>N’hésitez pas à me contacter pour n’importe quel projet !</p> 
               <ul className="point-list left-points">
                   <li>Curieux</li>
                   <li>Fast learner</li>
               </ul>
               <ul className="point-list right-points">
                   <li>Optimiste</li>
                   <li>Aime le travail d'équipe</li>
               </ul>
               </div>
       
     </div>

 </section>
 );
}

export default PresentationComponent;
