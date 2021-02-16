import React from "react";
import Nav from "./nav2";

export default function AddTax(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="container">
        <h5>ใบส่งของ - Invoice </h5>
        <table class="table table-bordered">
          <tr>
            <th class="table-success ">เลขที่ใบส่งสินค้า(IV)</th>
            <td colSpan="3">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th>
              <h5>/</h5>
            </th>
            <td>
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">พนักงานขาย</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="passStand" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">เลขที่ใบสั่งซื้อ</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">ผู้สั่งซื้อ</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">รหัสลูกค้า</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">วันที่เอกสาร</th>
            <td colSpan="2">
              <input type="date" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">ผู้ติดต่อ</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">VAT (%)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">ที่อยู่ ลูกค้า</th>
            <td colSpan="2">
              <textarea
                class="form-control"
                rows="5"
                cols="80"
                id="comment"
                name="text"
              ></textarea>
            </td>
            <th class="table-success ">ประเภทภาษี</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            {" "}
            <td colSpan="3"></td>
            <th class="table-success ">ชำระเงินโดย</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg " id="pass" />
            </td>
          </tr>
          <tr>
            {" "}
            <td colSpan="3"></td>
            <th class="table-success ">เครดิต</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg " id="pass" />
            </td>
            <th class="table-success ">วัน</th>
          </tr>
          <tr>
            <th class="table-success ">Tax ID</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">วันที่กำหนดชำระ</th>
            <td colSpan="2">
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td colSpan="2"></td>
            <br />
            <button type="sss" class="btn btn-secondary ">
              ลดเป็น %
            </button>{" "}
            <button type="sss" class="btn btn-secondary ">
              ลดเป็นจำนวน
            </button>
            <th class="table-success ">Ref No.</th>
            <td colSpan="3">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">ส่วนลด (Rate %)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">Remark</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">ส่วนลด (บาท)</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
        </table>
        <div className="row">
          <div>
            <button
              type="sss"
              class="btn btn-primary "
              style={{ marginLeft: "20px" }}
            >
              เพิ่มรายการสินค้า
            </button>{" "}
            <button type="sss" class="btn btn-warning ">
              แก้ไขรายการสินค้า
            </button>{" "}
            <button type="sss" class="btn btn-danger ">
              ลบรายการสินค้า
            </button>
            <button
              type="sss"
              class="btn btn-danger "
              style={{ marginLeft: "380px" }}
            >
              พิมพ์ใบส่งสินค้า
            </button>
          </div>
        </div>
        <br />
        <table class="table table-bordered ">
          <thead class="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">รหัสสินค้า</th>
              <th scope="col" colSpan="3">
                ชื่อสินค้า{" "}
              </th>
              <th scope="col">Lot No.</th>
              <th scope="col"> ชื่อหน่วย</th>
              <th scope="col">ขนาดบรรจุ </th>
              <th scope="col">จำนวนสั่งซื้อ </th>
              <th scope="col">ราคาต่อหน่วย </th>
              <th scope="col">ราคารวม </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td colSpan="3"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <tr>
            <th class="table-success ">รวม</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">ภาษี</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
          </tr>
          <tr>
            <th class="table-success ">มูลค่าสินค้า</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">ส่วนลด</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <th class="table-success ">รวมสุทธิ</th>
            <td colSpan="2">
              <input type="text" class="form-control input-lg" id="pass" />
            </td>
            <button
              type="sss"
              class="btn btn-primary "
              style={{ marginLeft: "120px" }}
            >
              บันทึก
            </button>{" "}
            <button
              type="sss"
              class="btn btn-danger "
              style={{ marginLeft: "5px" }}
            >
              ยกเลิก
            </button>
          </tr>
        </table>
      </div>
    </div>
  );
}
