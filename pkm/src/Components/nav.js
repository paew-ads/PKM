import React from "react";
<<<<<<< HEAD
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
=======
import { Navbar,Nav,NavDropdown,Form ,FormControl,Button} from "react-bootstrap";
>>>>>>> 4771618e85651d5f3a1ef478273ca41a08d72dcb
import logo from "../img/PKM.png";

export default function nav() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: "rgba(0, 255, 0, 0.5)" }}>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
<<<<<<< HEAD
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
=======
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        PKM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
>>>>>>> 4771618e85651d5f3a1ef478273ca41a08d72dcb
      </Navbar.Collapse>
    </Navbar>
  );
}
