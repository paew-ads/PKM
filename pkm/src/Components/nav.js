import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../img/PKM.png";
import { removeUserSession } from "../Utils/Common";

export default function nav(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <Navbar
      style={{
        backgroundColor: "rgba(102, 255, 102)",
        fontSize: "18px",
      }}
    >
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <span>
        <NavDropdown title="Inventory control " id="basic-nav-dropdown">
          <NavDropdown.Item href="/masterData">ข้อมูลพื้นฐาน</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">คลังสินค้า</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ลงรับสินค้า</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">งบประมาณ</NavDropdown.Item>
        </NavDropdown>
      </span>

      <span>
        <NavDropdown title="Purchase" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">สั่งซื้อ(PO)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">ขอซื้อ(PR)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Inquire(PO)</NavDropdown.Item>
        </NavDropdown>
      </span>

      <span>
        <Nav.Link href="#ccc">Financial</Nav.Link>
      </span>

      <span>
        <NavDropdown title="Daily" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">ขอเบิกสินค้า</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">จ่ายสินค้า</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ตัดจ่ายสินค้า</NavDropdown.Item>
        </NavDropdown>
      </span>

      <span>
        <NavDropdown title="Billing" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            ใบเสนอราคา(Quatation)
          </NavDropdown.Item>
          <NavDropdown.Item href="/tax">
            ใบกํากับ/ใบส่งสินค้า(Tax Invoice)
          </NavDropdown.Item>
          <NavDropdown.Item href="/Customers">
            ลูกค้า(Customers)
          </NavDropdown.Item>
        </NavDropdown>
      </span>

      <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-danger" type="cancel" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
