import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import logo from '../../images/genericLogo.png'; // with import

import "../../pages/style/menu.css";


function Navbar() {
  return (
    <Nav className="navBar">
      <NavLogo to="/" className="navLogo">
      <img alt="logo" className="photo" src={logo} />
      </NavLogo>
      <NavMenu>
        <NavLink 
          to="/" 
          activeStyle={{ color:'black' }}
        >
            Home
        </NavLink>
        <NavLink 
          to="/contact" 
          activeStyle={{ color: 'black' }}
        >
            Contacto
        </NavLink>
        <NavBtn>
            <NavBtnLink to="/Catalog">Catalogo</NavBtnLink>                
        </NavBtn>
    </NavMenu> 
    </Nav>
  );
}


export default Navbar;