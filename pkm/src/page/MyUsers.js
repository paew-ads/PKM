import React from "react";
import Nav2 from "../Components/nav2";
import PKM from "../img/PKM.png";
import Footer from "../Components/footer";
import "../Components/App.css";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
});

export default function MyUsers() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Nav2 />
      <div className="page">
        <div className="cardProfile  container my-5">
          <div className="row ">
            <div className="col d-flex justify-content-center w-50 h-50">
              <img className="rounded-circle " src={PKM} />
            </div>
          </div>
          <div className="cardProfilein container my-3">
            <div className="row    ">
              <div className="col d-flex justify-content-start my-4 ">
                <h4 className="text  d-inline mx-4">ID :</h4>
                <h4 className="text  d-inline">kim</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">PASSWORD :</h4>
                <h4 className="text  d-inline">1234</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">ชื่อ-นามสกุล :</h4>
                <h4 className="text  d-inline">kim</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-2">
                <h4 className="text  d-inline mx-4">ระดับ :</h4>
                <h4 className="text  d-inline">admin</h4>
              </div>
            </div>
            <div className="row  ">
              <div className="col  d-flex justify-content-start my-5 mx-4">
                <Button className={`${classes.btn1} ${classes.btn2}`}>
                  <EditIcon />
                  แก้ไข
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
