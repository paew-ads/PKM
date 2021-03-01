import React, { useState } from "react";
import Nav2 from "../Components/nav2";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Footer from "../Components/footer";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/App.css";
import { add } from "../action/auth-api";
import { uroleArr } from "../Utils/Config";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#2196f3",
    color: "white",
  },
  cancel1: {
    background: "#ff1744",
    color: "white",
  },
  new1: {
    background: "#76ff03",
    color: "white",
  },
});

export default function AddUses() {
  const history = useHistory();
  const [ipForm, setipForm] = useState({
    uid: "",
    upwd: "",
    uname: "",
    urole: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setipForm({
      ...ipForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await add(ipForm);
    if (res.data.error) {
      alert(res.data.message);
      alert("UserID อาจซ้ำในฐานข้อมูล");
      return;
    }
    alert(res.data.message);
    history.push("/Users");
  };

  const classes = useStyles();

  return (
    <>
      <Nav2 />
      <div className="page container">
        <h2
          className="text"
          style={{ marginLeft: "-79rem", marginTop: "2rem" }}
        >
          ผู้ใช้
        </h2>
        <div className="cardForm" style={{ marginTop: "2rem" }}>
          <div className="row align-items-center" style={{ marginTop: "2rem" }}>
            <h4 className="text" style={{ marginLeft: "-38rem" }}>
              Form
            </h4>
            <div
              className="row"
              style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
            >
              <div className="col-sm-1">
                <div className="text">User ID</div>
              </div>
            </div>
            <div className="row" style={{ marginLeft: "1.2rem" }}>
              <div className="col-sm-3">
                <input
                  class="input-group form-control py-1"
                  type="text"
                  name="uid"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "1rem", marginLeft: "1rem" }}
            >
              <div className="col-sm-1">
                <div className="text">Password</div>
              </div>
            </div>
            <div className="row" style={{ marginLeft: "1.2rem" }}>
              <div className="col-sm-3">
                <input
                  class="input-group form-control py-1"
                  type="text"
                  name="upwd"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "1rem", marginLeft: "-5.5rem" }}
            >
              <div className="col-sm-3">
                <div className="text">ชื่อ-นามสกุล</div>
              </div>
            </div>

            <div className="row" style={{ marginLeft: "1.1rem" }}>
              <div className="col-sm-3">
                <input
                  class="input-group form-control py-1"
                  type="text"
                  name="uname"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "1rem", marginLeft: "-0.2rem" }}
            >
              <div className="col-sm-1">
                <div className="text">ระดับ</div>
              </div>
            </div>

            <div className="row" style={{ marginLeft: "1rem" }}>
              <div className="col-sm-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="urole"
                  onChange={handleChange}
                >
                  <option></option>
                  <option value="2">{uroleArr[2]}</option>
                  <option value="3">{uroleArr[3]}</option>
                </select>
              </div>
            </div>

            <div
              className="row"
              style={{ marginLeft: "-2.2rem", marginTop: "3rem" }}
            >
              <div className="col-sm-2">
                <Button
                  className={classes.root}
                  variant="contained"
                  startIcon={<SaveIcon />}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-6rem" }}>
                <Button
                  className={classes.cancel1}
                  variant="contained"
                  startIcon={<CloseIcon />}
                >
                  Cancel
                </Button>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-6rem" }}>
                <Button
                  className={classes.new1}
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  New
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
