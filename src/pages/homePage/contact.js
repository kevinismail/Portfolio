import React, { useState, useEffect } from 'react';import Button from 'components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as Figmaicon} from './figmaicon.svg';
import { ReactComponent as Githubicon } from './githubicon.svg';
import { ReactComponent as LinkIcon } from '../homePage/icones/link.svg';



function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  toast('Le texte a été copié !');
}
function ContactComponent() {
  const [isVisible, setIsVisible] = useState(false);
 
  const toggleVisibility = () => {
     if (window.pageYOffset > 400) {
       setIsVisible(true);
     } else {
       setIsVisible(false);
     }
  };
 
  useEffect(() => {
     window.addEventListener('scroll', toggleVisibility);
  }, []);
 
  useEffect(() => {
     return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
 
  const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
  };

 return (

    <section id="contact" className='contact-section'>
    <Button><p>Me contacter</p></Button>
  <p className="contact-text">N’hésitez pas à me contacter si vous cherchez un développeur pour une mission longue, un petit projet ou souhaitez simplement échanger !</p>
  <div className="contact-info">
    <div className="email-info">
    <FontAwesomeIcon icon={faEnvelope} />
      <h2>kevin.ismails3@gmail.com</h2>
      <LinkIcon className="icon-with-space icon-hover" onClick={() => copyToClipboard('kevin.ismails3@gmail.com')}/>
      </div>
    <div className="phone-info">
    <FontAwesomeIcon icon={faPhone} />
      <h2>+33666474277</h2>
      <LinkIcon className="icon-with-space icon-hover" onClick={() => copyToClipboard('+33666474277')}/>
    </div>
    <div className='plateforme'>
      <p>Vous me trouverez également sur ces plateformes :</p>
    </div>
    <div className="icones">
    <a href="https://github.com/kevinismail" target="_blank" rel="noopener noreferrer">
   Lien vers mon profil Github <Githubicon /></a>
    <a href="https://www.figma.com/file/aAF9pi7trlxKTEAKDHsJU4/Maquette-portfolio?type=design&node-id=0-1&mode=design&t=2fvsKqbr3jsQLDL8-0" target="_blank" rel="noopener noreferrer">
   Lien vers mon profil Figma <Figmaicon /></a>
    </div>
  </div>
  {isVisible && 
   <FontAwesomeIcon 
   icon={faArrowCircleUp} 
   className="scroll-to-top" 
   onClick={scrollToTop} 
/>}
</section>
);
}

export default ContactComponent;
