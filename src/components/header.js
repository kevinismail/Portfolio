// @ts-nocheck
import { Button } from "@mui/material";
import React from "react";
import logo from '../logo1.png';
import cv from "../cvkevin.pdf";
import "./header.scss";
function Header() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} alt="Logo" className="logo"/>
          <a href="#presentation">Présentation</a>
        <a href="#realisation">Réalisation</a>
        <a href="#contact">Me contacter</a>
          <Button variant="contained"component="a" href={cv} download="mon-cv.pdf">
 Download CV
</Button>
        </div>
      </header>
    );
  }
  
  export default Header;