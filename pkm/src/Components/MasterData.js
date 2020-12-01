import React from "react";
import Nav from "./nav";
import { NavDropdown } from "react-bootstrap";

export default function MasterData(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="container">
        <h5>รายการสินค้า</h5>
        <table class="table table-bordered">
          <tr>
            <th class="table-success">ประเภทสินค้า</th>
            <td colSpan="2">
              {" "}
              <span class="Dropdown ">
                <NavDropdown
                  title="------------select--------------"
                  id="basic-nav-dropdown"
                >
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
            <th class="table-success">กลุ่มสินค้า</th>
            <td>
              {" "}
              <span class="Dropdown ">
                <NavDropdown
                  title="------------select--------------"
                  id="basic-nav-dropdown"
                >
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
            <td>
              <button type="button" class="btn btn-success">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-counterclockwise"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                </svg>{" "}
                Refresh
              </button>
            </td>
          </tr>
          <tr>
            <th class="table-success">ข้อความค้นหา</th>
            <td class="input-group col-xs-4">
              {" "}
              <input
                class="form-control py-2"
                type="search"
                value="search"
                id="example-search-input"
              ></input>
              <span class="input-group-append">
                <button class="btn btn-outline-secondary" type="search">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </button>
              </span>
            </td>
          </tr>
        </table>
        <div>
          <a
            href="/addProduct"
            class="btn btn-primary btn-lg "
            role="button"
            aria-disabled="true"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>{" "}
            เพิ่มสินค้า
          </a>
        </div>
        <br />
        <table class="table table-bordered ">
          <thead class="table-success">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">รหัสทั่วไป</th>
              <th scope="col">ชื่อสินค้า (th)</th>
              <th scope="col">ชื่อสินค้า (En)</th>
              <th scope="col">ซีเรียลนัมเบอร์ (Serial Number)</th>
              <th scope="col">รหัสบาร์โคด</th>
              <th scope="col">สถานะ</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>5050</td>
              <td>ถุงกระดาษ</td>
              <td></td>
              <td>659842924194212</td>
              <td></td>
              <td>A</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>5050</td>
              <td>ถุงกระดาษ</td>
              <td></td>
              <td>659842924194212</td>
              <td></td>
              <td>A</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>5050</td>
              <td>ถุงกระดาษ</td>
              <td></td>
              <td>659842924194212</td>
              <td></td>
              <td>A</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
