import React, { useState } from "react";
import Nav2 from "../Components/nav2";
import { add } from "../action/doc-api";
import { useHistory } from "react-router-dom";
import { doccateArr, doctypeArr } from "../Utils/Config";

export default function DocEdit(props) {
  // const search = props.location.state.rcid;
  // return <div>{search}</div>;
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
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", backgroundColor: "#ccccff" }}
        >
          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-5">
              <th>
                หมายเลขบันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "1rem" }}
                  name="rcid"
                  onChange={handleChange}
                ></input>
              </th>
            </div>
            <div className="col-sm-1" style={{ marginLeft: "6.8rem" }}>
              <th>วันที่บันทึก:</th>
            </div>
            <div className="col-sm-4">
              <td class="input-group ">
                <input
                  type="date"
                  name="rcdate"
                  onChange={handleChange}
                ></input>
              </td>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-5">
                <th>
                  เลขที่หนังสือ:
                  <input
                    type="text"
                    style={{ marginLeft: "1rem" }}
                    name="docid"
                    onChange={handleChange}
                  ></input>
                </th>
              </div>
              <div className="col-sm-1" style={{ marginLeft: "7.5rem" }}>
                <th>วันที่ออก:</th>
              </div>
              <div className="col-sm-4">
                <td class="input-group ">
                  <input
                    type="date"
                    name="docdate"
                    onChange={handleChange}
                  ></input>
                </td>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>หมวดหนังสือ:</th>
              </div>
              <div className="col-sm-2" style={{ marginRight: "58.5rem" }}>
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
              <div className="col">
                <th>ชนิดหนังสือ:</th>
              </div>
              <div className="col-sm-2" style={{ marginRight: "58.5rem" }}>
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
              <div className="col">
                <th>
                  เรื่อง:
                  <input
                    type="text"
                    style={{ marginLeft: "1rem" }}
                    name="docsubj"
                    onChange={handleChange}
                  ></input>
                </th>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>
                  ผู้ออก:
                  <input
                    type="text"
                    style={{ marginLeft: "1rem" }}
                    name="docauth"
                    onChange={handleChange}
                  ></input>
                </th>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>เนื้อความ(ย่อ):</th>
              </div>
              <div>
                <th>
                  <textarea
                    style={{ width: "22rem", height: "7rem" }}
                    name="doccont"
                    onChange={handleChange}
                  ></textarea>
                </th>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <th>
                  File:
                  <input type="file" name="file" onChange={selectFile}></input>
                </th>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
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
                  <button class="btn btn-danger" type="cancel">
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
