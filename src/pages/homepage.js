import React from 'react';
import Header from '../components/header';
import PresentationComponent from './homePage/presentation';
import RealisationComponent from './homePage/realisation';
import ContactComponent from './homePage/contact';
import "../style/global.scss"
import BienvenueComponent from './homePage/bienvenue';

const HomePage = () => {
 return (
     <div>
         <Header/>
         <BienvenueComponent/>
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