import React, { useState } from "react";
import {
  Card,
  Button,
  CardGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

// wad;
import newLogo from "../img/newLogo.png";
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
          <form>
            <Card
              style={{
                width: "30rem",
                height: "35rem",
                backgroundColor: "#546e7a",
              }}
              className="text-center"
            >
              <Card.Title>
                <img src={newLogo} alt="" />
              </Card.Title>

              <Card.Body>
                <InputGroup className="mb-3" style={{ marginTop: "3rem" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{ height: "2.2rem", color: "whitesmoke" }}
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
                      style={{ height: "2.2rem", color: "whitesmoke" }}
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
                  style={{ width: "7rem", height: "3rem" }}
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
