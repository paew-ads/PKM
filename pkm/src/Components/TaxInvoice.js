import React from "react";
import Nav from "./nav";

export default function TaxInvoice(props) {
  return (
    <>
      <Nav history={props.history} />
      <div class="container" style={{ marginTop: "3em" }}>
        <h3>รายการใบส่งของ</h3>
        <div className="row" style={{ marginTop: "3em" }}>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ชื่อสาขา
              </span>
              <div class="dropdown">
                <button
                  class="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ค้นหา
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">
                    สาขาเชียงใหม่
                  </button>
                  <button class="dropdown-item" type="button">
                    สาขาชุมพร
                  </button>
                  <button class="dropdown-item" type="button">
                    สาขาเชียงราย
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ประเภทการชำระเงิน
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

        <div className="row" style={{ marginTop: "1em" }}>
          <div className="col-1">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ข้อคามค้นหา
              </span>
            </div>
          </div>
          <div className="col-4" style={{ marginLeft: "15px" }}>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
                <i
                  class="fas fa-search"
                  aria-hidden="true"
                  style={{ marginLeft: "5px" }}
                ></i>
              </button>
            </form>
          </div>
        </div>

        <div class="text-right">
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
    </>
  );
}
