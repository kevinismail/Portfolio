import React from 'react';
import Header from '../components/header';
import PresentationComponent from './homePage/presentation';
import RealisationComponent from './homePage/realisation';
import ContactComponent from './homePage/contact';
import "../global.scss"

const HomePage = () => {
 return (
     <div>
         <Header/>
         <PresentationComponent/>
         <br></br>
         <br></br>
         <RealisationComponent/>
        <br></br>
         <br></br>
          
         <ContactComponent/>
     </div>
 );
};

export default HomePage;