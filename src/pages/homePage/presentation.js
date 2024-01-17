import React from 'react';
import Button from 'components/button'

function PresentationComponent() {
 return (
  <section id="presentation" className='containerpres sectionTwo'>
     <div className='buttoncontainer'>
    <Button><p>Présentation</p></Button></div>
   
    <div className="leftContainer souscontainer">
   {"coucou camarche?"}
 </div>
 <div className="rightContainer souscontainer">
   {"coucou c'est un test"}
   </div>

  </section>
 );
}

export default PresentationComponent;