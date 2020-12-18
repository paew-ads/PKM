import React, { useState, useEffect } from "react";
import Nav from "./nav.js";
import Axios from "axios";
import Footer from "./footer";
export default function Customers(props) {
  const [customers, setCustomers] = useState([]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchCustomers = (e) => {
    e.preventDefault();
    console.log(search);
    Axios.post("http://localhost:3001/api/Customer", {
      searchCus: search,
    })
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/Customers")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(customers);

  return (
    <>
      <Nav history={props.history} />
      <div className="container">
        <form onSubmit={searchCustomers}>
          <div className="row" style={{ marginTop: "20px" }}>
            <div class="input-group col-md-4">
              <input
                class="form-control py-2"
                name="search"
                onChange={handleChange}
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
          </div>
        </form>

        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <h3>รายชื่อลูกค้า</h3>
          </div>
          <a
            href="/addCustomers"
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
            เพิ่มลูกค้าใหม่
          </a>
        </div>

        <table class="table table-bordered" style={{ marginTop: "25px" }}>
          <thead class="table-success">
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>
                รหัสลูกค้า
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                ชื่อสาขา
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                ชื่อผู้ติดต่อ
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                เบอร์โทร
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((val, key) => {
              return (
                <tr>
                  <td>{val.idCus}</td>
                  <td>{val.branchName}</td>
                  <td>{val.contactName}</td>
                  <td>{val.tel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
