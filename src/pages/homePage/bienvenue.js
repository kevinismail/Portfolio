import React from 'react';

function BienvenueComponent() {
 return (
  <section id="bienvenue" className='welcome-section'>
    <div className="text-container">
   <div className="text">
    <h1>Bienvenue</h1>
    <p> Je suis un développeur Front-End qui peut créer et ou faire le design d’applications web qui seront rapides, esthétiques, accessible et responsive. </p>
  </div>
  </div>
  <div className="image-container">
    <div className='image'>
        <img src="/singe.jpeg" alt="description de l'image" className='image'/>
    </div>
  </div>
  </section>
 );
}

export default BienvenueComponent;
