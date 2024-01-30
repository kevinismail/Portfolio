// @ts-nocheck
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from '../logo1.png';
import cv from "../cvkevin.pdf";
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleToggle = () => {
     setIsOpen(!isOpen);
  };
 
  useEffect(() => {
  if (window.innerWidth > 768) {
     setIsOpen(false);
  }
 }, []);
 return (
  <header className="header sectionOne">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo"/>
          <button className={`hamburger ${isOpen ? 'close' : ''}`} onClick={handleToggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isOpen && window.innerWidth <= 768 && (
          <nav>
            <ul>
              <li><a href="#presentation">Présentation</a></li>
              <li><a href="#projects">Réalisations</a></li>
              <li><a href="#contact">Me contacter</a></li>
              <li><Button className="cv-button" color="secondary"component="a" href={cv} download="mon-cv.pdf">Mon CV</Button></li>
            </ul>
          </nav>
        )}
        <div className="link-group">
          <a href="#presentation" className="link">Présentation</a>
          <a href="#projects" className="link">Réalisations</a>
          <a href="#contact" className="link">Me contacter</a>
          <Button className="cv-button" color="secondary"component="a" href={cv} download="mon-cv.pdf">
            Mon CV
          </Button>
        </div>
      </div>
    </header>
 );
}

export default Header;
