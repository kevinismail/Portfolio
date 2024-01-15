import React from "react";

import './App.css';
import Header from 'components/header';
import PresentationComponent from './components/presentation'; // Remplacez par le chemin d'accès à votre composant Présentation
import RealisationComponent from './components/realisation'; // Remplacez par le chemin d'accès à votre composant Réalisation
import ContactComponent from './components/contact'; // Remplacez par le chemin d'accès à votre composant Contact

function App() {
 return (
  <div>

    <Header/>
    <PresentationComponent/>
    <br></br>
  

    <br></br>
    <br></br>
    <RealisationComponent/>
    <br></br>

    <br></br>
    <br></br>
    <ContactComponent/>
    <br></br>
    <br></br>


  </div>
 );
}

export default App;