import React, { useState } from "react";
import {
  Card,
  Button,
  CardGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Login.css";
import img1 from "../img/img1.jpg";
import logo from "../img/PKM.png";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import Axios from "axios";
import Home from "./Home.js";

export default function Login() {
  const [userLogin, setuserLogin] = useState(false);
  const [ipForm, setipForm] = useState({
    userName: "",
    passWord: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setipForm({
      ...ipForm,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login", ipForm);
    Axios.post("http://localhost:3001/api/login", {
      userName: ipForm.userName,
    }).then((res) => {
      setuserLogin(true);
    });
  };
  if (userLogin) {
    return <Home />;
  } else {
    return (
      <div className="Login">
        <div className="Login-header">
          <CardGroup>
            <Card style={{ width: "30rem", height: "30rem" }}>
              <Card.Img
                src={img1}
                style={{ width: "30rem", height: "30rem" }}
              />
            </Card>
            <form onSubmit={onSubmit}>
              <Card
                style={{ width: "30rem", height: "30rem" }}
                className="text-center"
              >
                <Card.Title>
                  <img src={logo} />
                </Card.Title>
                <h3>Login</h3>
                <Card.Body>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <HiOutlineUserGroup />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="userName"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        <RiLockPasswordLine />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="password"
                      name="passWord"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-success" type="submit">
                    login
                  </Button>{" "}
                </Card.Footer>
              </Card>
            </form>
          </CardGroup>
        </div>
      </div>
    );
  }
}
