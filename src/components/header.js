import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
    return (
      <header className="header">
        <div className="container">
          <img src="/Users/kevin/Documents/Workflow/Portfolio/src/components/logo1.png" alt="Logo" className="logo"/>
          <a href="#presentation">Présentation</a>
        <a href="#realisation">Réalisation</a>
        <a href="#contact">Me contacter</a>
          <Button variant="contained"component="a" href="/cv.pdf" download="mon-cv.pdf">
 Download CV
</Button>
        </div>
      </header>
    );
  }
  
  export default Header;