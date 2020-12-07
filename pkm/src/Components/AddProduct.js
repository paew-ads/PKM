import React from "react";
import Nav from "./nav";
import { NavDropdown } from "react-bootstrap";

export default function AddProduct(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="container">
        <h5>ข้อมูลสินค้า</h5>
        <table class="table table-bordered">
          <tr>
            <th class="table-success ">รหัส</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">รหัสมาตรฐาน(Standard Code)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">รหัส(ทั่วไป)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
            <th class="table-success">Barcode</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">ชื่อ(TH)</th>
            <td colSpan="3">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
            <th class="table-success">Barcode(Reserv)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">ชื่อ(EN)</th>
            <td colSpan="3">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
            <th class="table-success">Serail Number</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">ค้นหา</th>
            <td colSpan="3">
              {" "}
              <input
                class="form-control py-2"
                type="search"
                value="search"
                id="example-search-input"
              ></input>
            </td>
            <th class="table-success">ราคากลาง(Standard Price)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">ประเภท</th>
            <td colSpan="3">
              {" "}
              <span class="Dropdown ">
                <NavDropdown title="เครื่องครัว" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/masterData">
                    ข้อมูลพื้นฐาน
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    คลังสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    ลงรับสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    งบประมาณ
                  </NavDropdown.Item>
                </NavDropdown>
              </span>
            </td>
            <th class="table-success">ต้นทุนเฉลี่ย(Avg.cost)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">กลุ่ม</th>
            <td colSpan="3">
              {" "}
              <span class="Dropdown ">
                <NavDropdown title="ทั่วไป" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/masterData">
                    ข้อมูลพื้นฐาน
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    คลังสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    ลงรับสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    งบประมาณ
                  </NavDropdown.Item>
                </NavDropdown>
              </span>
            </td>
            <th class="table-success">วันที่ลงทะเบียน</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            {" "}
            <th class="table-success">Reference Code</th>
            <td colSpan="3">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
            <th class="table-success">หน่วยที่เล็กที่สุด(หน่วยนับ)</th>
            <td colSpan="3">
              {" "}
              <span class="Dropdown ">
                <NavDropdown title="ทั่วไป" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/masterData">
                    ข้อมูลพื้นฐาน
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    คลังสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    ลงรับสินค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    งบประมาณ
                  </NavDropdown.Item>
                </NavDropdown>
              </span>
            </td>
          </tr>
          <tr>
            <th class="table-success">Remark</th>{" "}
            <textarea
              class="form-control"
              rows="5"
              cols="80"
              id="comment"
              name="text"
            ></textarea>
          </tr>
        </table>
        <div class="text-right">
          {" "}
          <button type="submit" class="btn btn-primary " colSpan="2">
            บันทึก
          </button>{" "}
          <button type="cancel" class="btn btn-danger">
            ยกเลิก
          </button>
        </div>
        <br />

        <table class="table table-bordered ">
          <thead class="table-success">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">รหัสหน่วย</th>
              <th scope="col" colSpan="3">
                ชื่อหน่วยสินค้า{" "}
              </th>
              <th scope="col">ขนาดบรรจุ </th>
              <th scope="col">สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>5050</td>
              <td colSpan="3">ถุงกระดาษ</td>
              <td>659842924194212</td>
              <td>A</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>5050</td>
              <td colSpan="3">ถุงกระดาษ</td>
              <td>659842924194212</td>
              <td>A</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>5050</td>
              <td colSpan="3">ถุงกระดาษ</td>
              <td>659842924194212</td>
              <td>A</td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          {" "}
          <button type="submit" class="btn btn-primary " colSpan="2">
            เพิ่มหน่วยสินค้า
          </button>{" "}
          <button type="cancel" class="btn btn-warning">
            แก้ไข
          </button>{" "}
          <button type="cancel" class="btn btn-danger">
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
