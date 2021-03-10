import React, { useState } from "react";
import { Card, CardGroup, InputGroup, FormControl } from "react-bootstrap";

// wad;
import newLogo from "../img/newLogo.png";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import "../Components/App.css";
import { signin } from "../action/auth-api";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../Utils/Common";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  btn1: {
    border: "none",

    height: 48,
    borderRadius: 6,
    textTransform: "uppercase",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      backgroundPosition: "right",
    },
  },
  btn2: {
    backgroundImage: "linear-gradient(45deg, #76ff03, #ffeb3b, #00e5ff)",
  },
});

toast.configure();

export default function SignIn() {
  const classes = useStyles();
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
    if (res.data.error) {
      toast.error("😭 " + res.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("🎉 " + res.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setUserSession(res.data.token, res.data.user);
    history.push("/");
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
                borderRadius: "10px",
              }}
              className="text-center box"
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
                  className={`${classes.btn1} ${classes.btn2}`}
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
