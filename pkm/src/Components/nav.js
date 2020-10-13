import React from "react";
import {Navbar} from 'react-bootstrap';
import logo from '../img/PKM.png';

export default function nav() {
  return (
    
      <Navbar  variant="dark" style={{ backgroundColor:"rgba(0, 255, 0, 0.5)"}}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          PKM
        </Navbar.Brand>
      </Navbar>
    
  );
}
