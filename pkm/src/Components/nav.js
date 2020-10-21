import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import logo from "../img/PKM.png";

export default function nav() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: "rgba(0, 255, 0, 0.5)" }}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <span>
        <Nav.Link href="#aaa">PKM</Nav.Link>
      </span>
      <span class="Dropdown ">
        <NavDropdown title="ระบบการจองต่างๆ" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">จองรถ</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">จองห้องประชุม</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">จองรถส่งของ</NavDropdown.Item>
        </NavDropdown>
      </span>

      <span>
        <Nav.Link href="#bbb">ระบบตรวจสอบการทำงาน</Nav.Link>
      </span>

      <span>
        <Nav.Link href="#ccc">ระบบการลา</Nav.Link>
      </span>

      <span>
        <Nav.Link href="#ddd">ระบบตรวจสอบสินค้า</Nav.Link>
      </span>


      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-danger" type="cancel">
          {" "}
          Logout{" "}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
