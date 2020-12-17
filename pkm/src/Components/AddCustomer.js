import React from "react";
import Nav from "./nav";

export default function AddCustomer(props) {
  return (
    <>
      <Nav history={props.history} />
      <div class="container" style={{ marginTop: "3em" }}>
        <h3>ข้อมูลลูกค้า</h3>
        <div className="row" style={{ marginTop: "3em" }}>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                รหัสลูกค้า
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ตำแหน่ง
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ชื่อบริษัท
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                เบอร์โทร
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ชื่อผู้ติดต่อ
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                มือถือ
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                หมายเลขประจำตัวผู้เสียภาษีอากร
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Fax
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ที่ตั้ง/ที่อยู่
              </span>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                E-mail
              </span>
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3em" }}>
          <div class="col-sm-6">
            <button type="submit" class="btn btn-primary" colSpan="2">
              บันทึก
            </button>
            <button
              type="cancel"
              class="btn btn-danger"
              style={{ marginLeft: "1em" }}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
