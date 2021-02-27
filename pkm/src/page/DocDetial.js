import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import Nav2 from "../Components/nav2";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { select, deleteDoc } from "../action/doc-api";
import { doccateArr, doctypeArr } from "../Utils/Config";
import { useHistory } from "react-router-dom";

export default function DocDetial(props) {
  const history = useHistory();
  const search = props.location.state.rcid;
  const [Detial, setDetial] = useState({});

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
      <div className="container">
        <div className="cardd" style={{ marginTop: "3rem" }}>
          <div
            className="row align-items-center"
            style={{ marginTop: "2rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <div className="text" style={{ marginTop: "2rem" }}>
                หมายเลขบันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "1rem" }}
                  value={Detial.rcid}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="text" style={{ marginTop: "2rem" }}>
                วันที่บันทึก:
                <input
                  type="date"
                  style={{ marginLeft: "1rem" }}
                  value={spRCDate[0]}
                ></input>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <div className="text">
                หมวดหนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2rem" }}
                  value={doccateArr[Detial.doccate]}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="text">
                วันที่ออก:
                <input
                  type="date"
                  style={{ marginLeft: "1.9rem" }}
                  value={spDocDate[0]}
                ></input>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.9rem" }}
          >
            <div className="col-sm-4">
              <div className="text">
                เลขที่หนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2rem" }}
                  value={Detial.docid}
                ></input>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <div className="text">
                ชนิดหนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2.5rem" }}
                  value={doctypeArr[Detial.doctype]}
                ></input>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <div className="text">
                เรื่อง:
                <input
                  type="text"
                  style={{ marginLeft: "5.3rem" }}
                  value={Detial.docsubj}
                ></input>
              </div>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2" style={{ marginTop: "-5rem" }}>
              <div className="text">เนื้อความ(ย่อ):</div>
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
              <a
                class="btn btn-secondary"
                href={"http://localhost:3001/doc/file/" + Detial.rcid}
                role="button"
                style={{ fontSize: "15px" }}
                target="_blank"
                rel="noopener noreferrer"
                download="file.pdf"
              >
                <FindInPageIcon />
                เอกสาร
              </a>
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
              <button
                class="btn btn-warning"
                style={{ fontSize: "15px" }}
                onClick={() => {
                  history.push({
                    pathname: "/doc_edit",
                    state: { rcid: Detial.rcid },
                  });
                }}
              >
                <EditIcon />
                แก้ไข
              </button>
            </div>
            <div
              className="col-sm-2"
              style={{ marginLeft: "-6rem", marginTop: "1rem" }}
            >
              <button
                class="btn btn-danger"
                style={{ fontSize: "15px" }}
                onClick={() => {
                  handleDelete(search);
                }}
              >
                <DeleteForeverIcon color="white" />
                ลบ
              </button>
            </div>
            <div
              className="col-sm-2"
              style={{ marginLeft: "-5rem", marginTop: "1rem" }}
            >
              <button
                class="btn btn-secondary"
                style={{ fontSize: "15px" }}
                onClick={() => {
                  history.push("/");
                }}
              >
                <ArrowBackIosIcon />
                กลับ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
