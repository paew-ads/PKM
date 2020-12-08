import React from "react";
import Nav from "./nav";
import { NavDropdown } from "react-bootstrap";

export default function TaxInvoice(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="container">
        <h5>รายการใบส่งของ</h5>
        <table class="table table-bordered">
          <tr>
            <th class="table-success ">ชื่อลูกค้า</th>
            <td colSpan="2">
              {" "}
              <span class="Dropdown ">
                <NavDropdown title="สาขาเชียงใหม่" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/masterData">
                    สาขาสมุทราสาคร
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    สาขาชุมพร
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    สาขาชุมพร
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    สาขาชุมพร
                  </NavDropdown.Item>
                </NavDropdown>
              </span>
            </td>
            <th class="table-success ">ประเภทการชำระเงิน</th>
            <td colSpan="2">
              {" "}
              <span class="Dropdown ">
                <NavDropdown title="--- ALL ---" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/masterData">
                    สาขาสมุทราสาคร
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    สาขาชุมพร
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
            <th class="table-success ">ข้อคามค้นหา</th>
            <td colSpan="4">
              {" "}
              <input
                class="form-control py-2"
                type="search"
                value="search"
                id="example-search-input"
              ></input>
            </td>
          </tr>
        </table>
        <div class="text-right">
          {" "}
          <button type="Refresh" class="btn btn-primary ">
            Refresh
          </button>
        </div>
        <br />
        <br />
        <h5>รายการใบสั่งซื้อและลงรับ</h5>
        <div class="text-right">
          {" "}
          <a
            href="/addTax"
            class="btn btn-primary btn-lg "
            role="button"
            aria-disabled="true"
          >
            บันทึกลงรับใหม่ (KEY-NEW)
          </a>
        </div>
        <br />
        <table class="table table-bordered ">
          <thead class="table-success">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">วันที่เอกสาร</th>
              <th scope="col">เลขที่ใบส่งสินค้า </th>
              <th scope="col">เลขที่ใบสั่งซื้อ </th>
              <th scope="col" colSpan="3">
                ลูกค้า
              </th>
              <th scope="col">จำนวนเงิน </th>
              <th scope="col">ส่วนลด </th>
              <th scope="col">ภาษี </th>
              <th scope="col">จำนวนเงินรวม </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>10/02/2563</td>
              <td>51984914595</td>
              <td>659842924gt</td>
              <td colSpan="3"></td>
              <td>1,500</td>
              <td></td>
              <td>101.01</td>
              <td> 1,601.01</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>10/02/2563</td>
              <td>51984914595</td>
              <td>659842924gt</td>
              <td colSpan="3"></td>
              <td>1,500</td>
              <td></td>
              <td>101.01</td>
              <td> 1,601.01</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>10/02/2563</td>
              <td>51984914595</td>
              <td>659842924gt</td>
              <td colSpan="3"></td>
              <td>1,500</td>
              <td></td>
              <td>101.01</td>
              <td> 1,601.01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
