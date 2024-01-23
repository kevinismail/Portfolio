// @ts-nocheck
import { Button } from "@mui/material";
import React from "react";
import logo from '../logo1.png';
import cv from "../cvkevin.pdf";
import { FaMoon, FaSun } from 'react-icons/fa';


function Header() {
    return (
      <header className="header sectionOne">
        <div className="container">
          <img src={logo} alt="Logo" className="logo"/>
          <div className="link-group">
          <a href="#presentation" className="link">Présentation</a>
        <a href="#realisation" className="link">Réalisation</a>
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