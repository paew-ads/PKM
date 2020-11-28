import React from "react";
import Nav from "./nav";

export default function AddCustomer(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="container">
        <h5>ข้อมูลลูกค้า</h5>
        <table class="table table-bordered">
          <tr class="table-success">
            <th>รหัสลูกค้า</th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
          </tr>
          <tr class="table-success">
            <th>ชื่อบริษัท</th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
            <th>ตำแหน่ง</th>
            <td>
              <input class="form-control input-lg " id="unitComp" type="text" />
            </td>
          </tr>
          <tr class="table-success">
            <th>ชื่อผู้ติดต่อ</th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
            <th>เบอร์โทร</th>
            <td>
              <input class="form-control input-lg " id="unitComp" type="text" />
            </td>
          </tr>
          <tr class="table-success">
            <th>หมายเลขประจำตัวผู้เสียภาษีอากร</th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
            <th>มือถือ</th>
            <td>
              <input class="form-control input-lg " id="unitComp" type="text" />
            </td>
          </tr>
          <tr class="table-success">
            <th>ที่ตั้ง/ที่อยู่</th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
            <th>Fax</th>
            <td>
              <input class="form-control input-lg " id="unitComp" type="text" />
            </td>
          </tr>
          <tr class="table-success">
            <th></th>
            <td colSpan="2">
              <input class="form-control input-lg " id="idCust" type="text" />
            </td>
            <th>EMail</th>
            <td>
              <input class="form-control input-lg " id="unitComp" type="text" />
            </td>
          </tr>
        </table>
        <div class="col-sm-6">
          {" "}
          <textarea
            class="form-control"
            rows="5"
            cols="80"
            id="comment"
            name="text"
          ></textarea>
          <br />
          <button type="submit" class="btn btn-primary" colSpan="2">
            บันทึก
          </button>{" "}
          <button type="cancel" class="btn btn-danger">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}
