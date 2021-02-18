import React from "react";
import Select from "react-select";
import Nav2 from "../Components/nav2";
import Footer from "../Components/footer";

const options = [
  { value: "ยอดขาย", label: "ยอดขาย" },
  { value: "ยอดการสั่งซื้อ", label: "ยอดการสั่งซื้อ" },
  { value: "จองรถขนส่ง", label: "จองรถขนส่ง" },
  { value: "จองห้องประชุม", label: "จองห้องประชุม" },
];

export default function doc_form() {
  return (
    <>
      <Nav2 />
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", backgroundColor: "#ccccff" }}
        >
          <div
            className="row"
            style={{ marginTop: "0.2rem", marginLeft: "10px" }}
          >
            <div className="col-sm-3">
              <button
                class="btn btn-secondary"
                style={{ fontSize: "15px" }}
                onClick={() => {}}
              >
                เอกสารเข้า
              </button>
              <button
                class="btn btn-secondary"
                style={{ marginLeft: "1rem", fontSize: "15px" }}
                onClick={() => {}}
              >
                เอกสารออก
              </button>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-5">
              <th>
                หมายเลขบันทึก:
                <input type="text" style={{ marginLeft: "1rem" }}></input>
              </th>
            </div>
            <div className="col-sm-1" style={{ marginLeft: "6.8rem" }}>
              <th>วันที่บันทึก:</th>
            </div>
            <div className="col-sm-4">
              <td class="input-group ">
                <input type="date"></input>
              </td>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-5">
                <th>
                  เลขที่หนังสือ:
                  <input type="text" style={{ marginLeft: "1rem" }}></input>
                </th>
              </div>
              <div className="col-sm-1" style={{ marginLeft: "7.5rem" }}>
                <th>วันที่ออก:</th>
              </div>
              <div className="col-sm-4">
                <td class="input-group ">
                  <input type="date"></input>
                </td>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>หมวดหนังสือ:</th>
              </div>
              <div className="col-sm-2" style={{ marginRight: "58.5rem" }}>
                <Select options={options} />
              </div>
            </div>
            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>ชนิดหนังสือ:</th>
              </div>
              <div className="col-sm-2" style={{ marginRight: "58.5rem" }}>
                <Select options={options} />
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>
                  เรื่อง:
                  <input type="text" style={{ marginLeft: "1rem" }}></input>
                </th>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col">
                <th>
                  ผู้ออก:
                  <input type="text" style={{ marginLeft: "1rem" }}></input>
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
                  ></textarea>
                </th>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <th>
                  File: <button>Choose File</button>
                </th>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1rem" }}>
              <div className="col-sm-1">
                <th>
                  <button class="btn btn-primary" type="submit">
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
