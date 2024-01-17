import React from 'react';
import Header from '../components/header';
import PresentationComponent from './homePage/presentation';
import RealisationComponent from './homePage/realisation';
import ContactComponent from './homePage/contact';
import "../style/global.scss"
import BienvenueComponent from './homePage/bienvenue';
import CompetencesComponent from './homePage/competences';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
 return (
     <div>
         <Header/>
         <ToastContainer />
         <BienvenueComponent/>
        
         <PresentationComponent/>
         <br></br>
         <CompetencesComponent/>
         <br></br>
         <RealisationComponent/>
        <br></br>
         <br></br>
          
         <ContactComponent/>
     </div>
 );
};

export default HomePage;