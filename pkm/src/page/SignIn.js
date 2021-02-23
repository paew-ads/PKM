import React, { useState } from "react";
import {
  Card,
  Button,
  CardGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

// wad;
import img1 from "../img/img1.jpg";
import logo from "../img/PKM.png";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import "../Components/App.css";
import { signin } from "../action/auth-api";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../Utils/Common";

export default function SignIn() {
  const history = useHistory();
  const [ipForm, setipForm] = useState({
    uid: "",
    upwd: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setipForm({
      ...ipForm,
      [name]: value,
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const res = await signin({ ipForm });
    alert(res.data.message);
    if (res) {
      setUserSession(res.data.token, res.data.user);
      history.push("/");
    }
  };
  return (
    <div className="Login">
      <div className="Login-header">
        <CardGroup>
          <Card style={{ width: "30rem", height: "30rem" }}>
            <Card.Img src={img1} style={{ width: "30rem", height: "30rem" }} />
          </Card>
          <form>
            <Card
              style={{ width: "30rem", height: "30rem" }}
              className="text-center"
            >
              <Card.Title>
                <img src={logo} alt="" />
              </Card.Title>
              <h3>Login</h3>
              <Card.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{ height: "2.2rem" }}
                    >
                      <HiOutlineUserGroup />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="uid"
                    placeholder="ID"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{ height: "2.2rem" }}
                    >
                      <RiLockPasswordLine />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="password"
                    name="upwd"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={handleSignIn}
                >
                  login
                </Button>
              </Card.Footer>
            </Card>
          </form>
        </CardGroup>
      </div>
    </div>
  );
}
