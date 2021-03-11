import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Nav2 from "../Components/nav2";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { deleteDoc } from "../action/doc-api";
import { doccateArr, doctypeArr } from "../Utils/Config";
import { useHistory } from "react-router-dom";
import "../Components/App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Footer from "../Components/footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

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
  const Detial = props.location.state.docData;
  const classes = useStyles();
  const spRCDate = new Date(Detial.rcdate).toString().slice(0, 15);
  const spDocDate = new Date(Detial.docdate).toString().slice(0, 15);

  const handleDelete = async (rcid) => {
    if (window.confirm("คุณแน่ใจที่จะลบเอกสารนี้?")) {
      const res = await deleteDoc(rcid);
      toast.success("👌 " + res.data.massage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/");
    } else {
      toast.warn("😱 ยกเลิกการลบข้อมูล", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <Nav2 />
      <div className="container page">
        <div className="cardd box" style={{ marginTop: "4rem" }}>
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
                <input style={{ marginLeft: "1rem" }} value={spRCDate}></input>
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
                  value={spDocDate}
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
            <div className="col-sm-4">
              <h6 className="text">
                ผู้ออก:
                <input
                  type="text"
                  style={{ marginLeft: "4.8rem" }}
                  value={Detial.docauth}
                ></input>
              </h6>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "2.2rem" }}
          >
            <div className="col-sm-4">
              <h6 className="text">
                ผู้รับ:
                <input
                  type="text"
                  style={{ marginLeft: "4.8rem" }}
                  value={Detial.docsend}
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
            <div className="col-sm-2" style={{ marginLeft: "7.5rem" }}>
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
            style={{ marginTop: "2.5rem", marginLeft: "1.8rem" }}
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
                    state: { docData: Detial },
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
                  handleDelete(Detial.rcid);
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
