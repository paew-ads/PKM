import React, { useState } from "react";
import Nav2 from "../Components/nav2";
import { add } from "../action/doc-api";
import { useHistory } from "react-router-dom";
import { doccateArr, doctypeArr } from "../Utils/Config";
import Footer from "../Components/footer";
import "../Components/App.css";

export default function DocForm() {
  const history = useHistory();
  const [ipFile, setipFile] = useState();
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
    const res = await add(ipForm, ipFile);
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
            style={{ marginLeft: "1.8rem" }}
          >
            <div
              className="col-sm-5"
              style={{ marginTop: "2rem", marginLeft: "-5rem" }}
            >
              <div className="text">
                หมายเลขบันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "1rem" }}
                  name="rcid"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div
              className="col-sm-1"
              style={{ marginLeft: "6.8rem", marginTop: "2rem" }}
            >
              <div className="text">วันที่บันทึก:</div>
            </div>
            <div className="col-sm-4">
              <td class="input-group ">
                <input
                  type="date"
                  name="rcdate"
                  style={{ marginLeft: "0.3rem", marginTop: "2rem" }}
                  onChange={handleChange}
                ></input>
              </td>
            </div>

            <div
              className="row "
              style={{ marginTop: "1rem", marginLeft: "-5rem" }}
            >
              <div className="col-sm-5">
                <div className="text">
                  เลขที่หนังสือ:
                  <input
                    type="text"
                    style={{ marginLeft: "1.2rem" }}
                    name="docid"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="col-sm-1" style={{ marginLeft: "7rem" }}>
                <div className="text">วันที่ออก:</div>
              </div>
              <div className="col-sm-4">
                <td class="input-group ">
                  <input
                    type="date"
                    name="docdate"
                    style={{ marginLeft: "0.1rem" }}
                    onChange={handleChange}
                  ></input>
                </td>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-6">
                <div className="text" style={{ marginLeft: "-28rem" }}>
                  หมวดหนังสือ:
                </div>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-30rem" }}>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="doccate"
                  onChange={handleChange}
                >
                  <option selected>โปรดเลือก</option>
                  <option value="0">{doccateArr[0]}</option>
                  <option value="1">{doccateArr[1]}</option>
                </select>
              </div>
            </div>
            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-6">
                <div className="text" style={{ marginLeft: "-28rem" }}>
                  ชนิดหนังสือ:
                </div>
              </div>
              <div className="col-sm-2" style={{ marginLeft: "-30rem" }}>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="doctype"
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
                <div className="text">
                  เรื่อง:
                  <input
                    type="text"
                    style={{ marginLeft: "2.5rem" }}
                    name="docsubj"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-4">
                <div className="text">
                  ผู้ออก:
                  <input
                    type="text"
                    style={{ marginLeft: "2rem" }}
                    name="docauth"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-2">
                <div className="text" style={{ marginLeft: "-5rem" }}>
                  เนื้อความ(ย่อ):
                </div>
              </div>
              <div>
                <th>
                  <textarea
                    style={{
                      width: "22rem",
                      height: "7rem",
                      marginTop: "1rem",
                    }}
                    name="doccont"
                    onChange={handleChange}
                  ></textarea>
                </th>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-4">
                <div className="text">
                  File:
                  <input
                    style={{ marginLeft: "1rem" }}
                    type="file"
                    name="file"
                    onChange={selectFile}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-1" style={{ marginLeft: "60rem" }}>
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
      <Footer />
    </>
  );
}
