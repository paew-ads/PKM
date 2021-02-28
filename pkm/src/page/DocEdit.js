import React, { useState, useEffect } from "react";
import Nav2 from "../Components/nav2";
import { update } from "../action/doc-api";
import { useHistory } from "react-router-dom";
import { doccateArr, doctypeArr } from "../Utils/Config";
import { select } from "../action/doc-api";
import "../Components/App.css";

export default function DocEdit(props) {
  const history = useHistory();
  const oldid = props.location.state.rcid;

  const [ipForm, setipForm] = useState({
    rcid: "",
    rcdate: "",
    doccate: "",
    docid: "",
    docdate: "",
    doctype: "",
    docsubj: "",
    doccont: "",
    docauth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setipForm({
      ...ipForm,
      [name]: value,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const res = await select(oldid);
      const strRCDate = "" + res.data.rcdate;
      const strDocDate = "" + res.data.docdate;
      const spRCDate = strRCDate.split("T");
      const spDocDate = strDocDate.split("T");
      setipForm({
        rcid: res.data.rcid,
        rcdate: spRCDate[0],
        doccate: res.data.doccate,
        docid: res.data.docid,
        docdate: spDocDate[0],
        doctype: res.data.doctype,
        docsubj: res.data.docsubj,
        doccont: res.data.doccont,
        docauth: res.data.docauth,
      });
    }
    fetchData();
  }, [oldid]);

  const [ipFile, setipFile] = useState();
  const selectFile = (e) => {
    setipFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(ipForm)) {
      console.log(`${key}: ${value}`);
      if (value === "") {
        alert("Please provide complete information.");
        return;
      }
    }
    const res = await update(oldid, ipForm, ipFile);
    if (res.data.error) {
      alert(res.data.message);
      alert("หมายเลขบันทึก อาจซ้ำในฐานข้อมูล");
      return;
    }
    alert(res.data.message);
    history.push("/");
  };
  return (
    <>
      <Nav2 />
      <div className="container page">
        <div className="cardd" style={{ marginTop: "3rem" }}>
          <div
            className="row align-items-center"
            style={{ marginLeft: "1rem" }}
          >
            <div className="col-sm-4">
              <div className="text" style={{ marginTop: "2rem" }}>
                หมายเลขบันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "2.2rem" }}
                  name="rcid"
                  value={ipForm.rcid}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="col">
              <div className="text" style={{ marginTop: "2rem" }}>
                วันที่บันทึก:
              </div>
            </div>
            <div className="col-sm-4">
              <td
                class="input-group "
                style={{ marginTop: "2rem", marginLeft: "-9.5rem" }}
              >
                <input
                  type="date"
                  name="rcdate"
                  value={ipForm.rcdate}
                  onChange={handleChange}
                ></input>
              </td>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "2rem" }}>
                  เลขที่หนังสือ:
                  <input
                    type="text"
                    style={{ marginLeft: "2rem" }}
                    name="docid"
                    value={ipForm.docid}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-sm-1" style={{ marginLeft: "11rem" }}>
                <div className="text">วันที่ออก:</div>
              </div>
              <div className="col-sm-4">
                <td class="input-group ">
                  <input
                    type="date"
                    name="docdate"
                    value={ipForm.docdate}
                    onChange={handleChange}
                  ></input>
                </td>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "-12rem" }}>
                  หมวดหนังสือ:
                </div>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-15rem" }}>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="doccate"
                  value={ipForm.doccate}
                  onChange={handleChange}
                >
                  <option>โปรดเลือก</option>
                  <option value="0">{doccateArr[0]}</option>
                  <option value="1">{doccateArr[1]}</option>
                </select>
              </div>
            </div>
            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "-12rem" }}>
                  ชนิดหนังสือ:
                </div>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-15rem" }}>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="doctype"
                  value={ipForm.doctype}
                  onChange={handleChange}
                >
                  <option selected>โปรดเลือก</option>
                  <option value="0">{doctypeArr[0]}</option>
                  <option value="1">{doctypeArr[1]}</option>
                  <option value="2">{doctypeArr[2]}</option>
                  <option value="3">{doctypeArr[3]}</option>
                  <option value="4">{doctypeArr[4]}</option>
                  <option value="5">{doctypeArr[5]}</option>
                </select>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "4rem" }}>
                  เรื่อง:
                  <input
                    type="text"
                    style={{ marginLeft: "3rem" }}
                    name="docsubj"
                    value={ipForm.docsubj}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "4rem" }}>
                  ผู้ออก:
                  <input
                    type="text"
                    style={{ marginLeft: "2.5rem" }}
                    name="docauth"
                    value={ipForm.docauth}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-2">
                <div className="text">เนื้อความ(ย่อ):</div>
              </div>
              <div>
                <th>
                  <textarea
                    style={{
                      width: "22rem",
                      height: "7rem",
                      marginLeft: "3rem",
                    }}
                    name="doccont"
                    value={ipForm.doccont}
                    onChange={handleChange}
                  ></textarea>
                </th>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-4">
                <div className="text" style={{ marginLeft: "2rem" }}>
                  File:
                  <input type="file" name="file" onChange={selectFile}></input>
                </div>
              </div>
            </div>

            <div
              className="row "
              style={{ marginTop: "1rem", marginLeft: "60rem" }}
            >
              <div className="col-sm-1">
                <th>
                  <button
                    class="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    บันทึก
                  </button>
                </th>
              </div>
              <div className="col-sm-1">
                <th>
                  <button
                    class="btn btn-danger"
                    type="cancel"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    ยกเลิก
                  </button>
                </th>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
