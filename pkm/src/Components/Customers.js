import React from "react";
import Nav from "./nav.js";

export default function Customers(props) {
  return (
    <div>
      <Nav history={props.history} />
      <br />
      <div class="input-group col-md-4">
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
      </div>
      <br />
      <div>
        <button class="float-right" type="add">
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
          เพิ่มลูกค้าใหม่
        </button>
        <h5>รายชื่อลูกค้า</h5>
      </div>
      <br />
      <table class="table table-bordered">
        <thead class="table-success">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">รหัสลูกค้า</th>
            <th scope="col">ชื่อ</th>
            <th scope="col">ชื่อผู้ติดต่อ</th>
            <th scope="col">เบอร์โทร</th>
            <th scope="col">มือถือ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>606616649</td>
            <td>สาขาเชียงใหม่</td>
            <td>ใบเฟิร์น</td>
            <td>020-5779461</td>
            <td>066-7541364</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>978121418</td>
            <td>สาขาเชียงชุมพร</td>
            <td>heart rocker</td>
            <td>020-5723166</td>
            <td>086-5326999</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>606616649</td>
            <td>สาขาเชียงโคราช</td>
            <td>คนคนนึง</td>
            <td>020-3636146</td>
            <td>060-9019970</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
