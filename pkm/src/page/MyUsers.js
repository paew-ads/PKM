import React, { useState } from "react";
import Nav2 from "../Components/nav2";
import PKM from "../img/PKM.png";
import Footer from "../Components/footer";
import "../Components/App.css";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
//import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { getUser } from "../Utils/Common";
import { uroleArr } from "../Utils/Config";
import { Modal } from "react-bootstrap";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles({
  btn1: {
    border: "none",
    height: 38,
    width: 100,
    borderRadius: 6,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      backgroundPosition: "right",
    },
  },
  btn2: {
    backgroundImage: "linear-gradient(45deg, #ffc107, #ff9800, #ffcf33)",
  },
  chang: {
    backgroundImage: "linear-gradient(45deg, #007bb2, #00b0ff, #33bfff)",
  },
  close: {
    backgroundImage: "linear-gradient(45deg, #d50000, #fbc02d, #d50000)",
  },
  add: {
    backgroundImage: "linear-gradient(45deg, #76ff03, #76ff03, #b2ff59)",
    color: "white",
  },
});

export default function MyUsers() {
  const user = getUser();
  const classes = useStyles();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav2 />
      <div className="page">
        <div className="cardProfile  container my-5">
          <div className="row ">
            <div className="col d-flex justify-content-center w-50 h-50">
              <img className="rounded-circle " src={PKM} alt="" />
            </div>
          </div>
          <div className="cardProfilein container my-3">
            <div className="row    ">
              <div className="col d-flex justify-content-start my-4 ">
                <h4 className="text  d-inline mx-4">ID :</h4>
                <h4 className="text  d-inline">{user.uid}</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">PASSWORD :</h4>
                <h4 className="text  d-inline">{user.upwd}</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">ชื่อ-นามสกุล :</h4>
                <h4 className="text  d-inline">{user.uname}</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">ระดับ :</h4>
                <h4 className="text  d-inline">{uroleArr[user.urole]}</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-5 mx-4">
                <Button
                  className={`${classes.btn1} ${classes.btn2}`}
                  onClick={handleShow}
                >
                  <EditIcon />
                  Change
                </Button>
              </div>
              <div className="col  d-flex justify-content-start my-5 mx-4">
                <Button className={`${classes.btn1} ${classes.add}`}>
                  <ImageIcon />
                  ADD IMG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal  */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="textm text" closeButton>
          <Modal.Title>CHANGE PASSWORD</Modal.Title>
        </Modal.Header>
        <Modal.Body className="textmb">
          <h5>Create password</h5>
          <input class="form-control  " type="text"></input>
          <h5 className=" my-2">Confirm password</h5>
          <input class="form-control " type="text"></input>
        </Modal.Body>
        <Modal.Footer className="textmf ">
          <Button
            className={`${classes.btn1} ${classes.close}`}
            onClick={handleClose}
          >
            Close
          </Button>
          <span />
          <Button className={`${classes.btn1} ${classes.chang}`}>Change</Button>
        </Modal.Footer>
      </Modal>

      {/* endmodal  */}
      <Footer />
    </>
  );
}
