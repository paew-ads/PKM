import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/footer";

export default function AddCustomer(props) {
  return (
    <>
      <Nav history={props.history} />
      <div class="container" style={{ marginTop: "3em", marginBottom: "7rem" }}>
        <h3>ข้อมูลลูกค้า</h3>
        <form>
          <div className="row" style={{ marginTop: "3em" }}>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  ชื่อลูกค้า
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="cusName"
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  เบอร์โทร ติดต่อ
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="contactNo"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  เพศ
                </span>
                <select class="form-select" aria-label="Default select example">
                  <option selected>เลือกเพศของคุณ</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="email"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="cusEmail"
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Note
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="note"
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  รูปภาพ
                </span>
                <input type="file" class="form-control" name="image"></input>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              ที่ตั้ง/ที่อยู่
            </span>
            <textarea
              style={{ height: "10rem" }}
              class="form-control"
              aria-label="With textarea"
              name="address"
            ></textarea>
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
      <Footer />
    </>
  );
}
