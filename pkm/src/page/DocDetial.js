import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Nav2 from "../Components/nav2";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { select, deleteDoc } from "../action/doc-api";
import { doccateArr, doctypeArr } from "../Utils/Config";
import { useHistory } from "react-router-dom";
import "../Components/App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Footer from "../Components/footer";

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
  btn3: {
    backgroundImage: "linear-gradient(45deg, #d50000, #c62828, #d50000)",
  },
  btn4: {
    backgroundImage: "linear-gradient(45deg, #757575, #bdbdbd, #e0e0e0)",
  },
});

export default function DocDetial(props) {
  const history = useHistory();
  const search = props.location.state.rcid;
  const [Detial, setDetial] = useState({});
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const res = await select(search);
      setDetial(res.data);
    }
    fetchData();
  }, [search]);
  const strRCDate = "" + Detial.rcdate;
  const strDocDate = "" + Detial.docdate;
  const spRCDate = strRCDate.split("T");
  const spDocDate = strDocDate.split("T");

  const handleDelete = async (rcid) => {
    if (
      window.confirm(
        "Are you sure you want to Delete this thing into the database?"
      )
    ) {
      const res = await deleteDoc(rcid);
      alert(res.data.massage);
      history.push("/");
    } else {
      alert("Delete not success!!!");
    }
  };
  return (
    <>
      <Nav2 />
      <div className="container page">
        <div className="cardd" style={{ marginTop: "4rem" }}>
          <div
            className="row align-items-center"
            style={{ marginTop: "2rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text" style={{ marginTop: "2rem" }}>
                หมายเลขบันทึก :
                <input
                  style={{ marginLeft: "1rem" }}
                  value={Detial.rcid}
                ></input>
              </h6>
            </div>
            <div className="col">
              <h6 className="text" style={{ marginTop: "2rem" }}>
                วันที่บันทึก:
                <input
                  style={{ marginLeft: "1rem" }}
                  value={spRCDate[0]}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text">
                หมวดหนังสือ:
                <input
                  style={{ marginLeft: "2rem" }}
                  value={doccateArr[Detial.doccate]}
                ></input>
              </h6>
            </div>
            <div className="col">
              <h6 className="text">
                วันที่ออก:
                <input
                  style={{ marginLeft: "1.9rem" }}
                  value={spDocDate[0]}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.9rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text">
                เลขที่หนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2rem" }}
                  value={Detial.docid}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text">
                ชนิดหนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2.5rem" }}
                  value={doctypeArr[Detial.doctype]}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text">
                เรื่อง:
                <input
                  type="text"
                  style={{ marginLeft: "5.3rem" }}
                  value={Detial.docsubj}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2" style={{ marginTop: "-5rem" }}>
              <h6 className="text">เนื้อความ(ย่อ):</h6>
            </div>
            <div className="col-sm-2">
              <textarea
                type="text"
                style={{
                  marginLeft: "-3rem",
                  width: "15rem",
                  height: "6rem",
                }}
                value={Detial.doccont}
              ></textarea>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2" style={{ marginLeft: "8rem" }}>
              <Button
                className={`${classes.btn1} ${classes.btn4}`}
                href={"http://localhost:3001/doc/file/" + Detial.rcid}
                target="_blank"
              >
                <FindInPageIcon />
                เอกสาร
              </Button>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "5rem", marginLeft: "1.8rem" }}
          >
            <div
              className="col-sm-2"
              style={{ marginLeft: "1rem", marginTop: "1rem" }}
            >
              <Button
                className={`${classes.btn1} ${classes.btn2}`}
                onClick={() => {
                  history.push({
                    pathname: "/doc_edit",
                    state: { rcid: Detial.rcid },
                  });
                }}
              >
                <EditIcon />
                แก้ไข
              </Button>
            </div>
            <div
              className="col-sm-2"
              style={{ marginLeft: "-6rem", marginTop: "1rem" }}
            >
              <Button
                className={`${classes.btn1} ${classes.btn3}`}
                onClick={() => {
                  handleDelete(search);
                }}
              >
                <DeleteForeverIcon />
                ลบ
              </Button>
            </div>
            <div
              className="col-sm-2"
              style={{ marginLeft: "-5rem", marginTop: "1rem" }}
            >
              <Button
                className={`${classes.btn1} ${classes.btn4}`}
                onClick={() => {
                  history.push("/");
                }}
              >
                <ArrowBackIosIcon />
                กลับ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
