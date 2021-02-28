import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import Nav2 from "../Components/nav2";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { list, search } from "../action/auth-api";

export default function Users() {
  const [ListUsers, setListUsers] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await list();
      setListUsers(res.data);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSearch = async (e) => {
    const res = await search(Search);
    console.log(res.data);
    setListUsers(res.data);
  };

  return (
    <>
      <Nav2 />
      <div className="container">
        <h2
          className="text"
          style={{ marginLeft: "-79rem", marginTop: "2rem" }}
        >
          ผู้ใช้
        </h2>
        <div
          className="row align-items-center"
          style={{ marginTop: "2rem", backgroundColor: "#263238" }}
        >
          <div className="row align-items-center" style={{ marginTop: "2rem" }}>
            <h4 className="text" style={{ marginLeft: "-38rem" }}>
              List
            </h4>
            <div className="row">
              <div className="col-sm-3">
                <td class="input-group ">
                  <input
                    class="form-control py-2"
                    type="text"
                    id="example-search-input"
                    name="keyword"
                    onChange={handleChange}
                  ></input>
                </td>
              </div>
              <div className="col-sm-1" style={{ marginLeft: "-3rem" }}>
                <IconButton color="primary" onClick={handleSearch}>
                  <SearchIcon className="text" />
                </IconButton>
              </div>
              <div
                className="col-sm-1"
                style={{ marginLeft: "-4rem", marginTop: "-0.7rem" }}
              >
                <IconButton color="primary">
                  <AddBoxIcon className="text" fontSize="large" />
                </IconButton>
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "2rem", marginLeft: "0.1rem" }}
            >
              <table class="table table-bordered ">
                <thead style={{ backgroundColor: "#eceff1" }}>
                  <tr>
                    <th scope="col">
                      <SettingsIcon style={{ marginLeft: "-1rem" }} />
                    </th>
                    <th scope="col-sm-3">User ID</th>
                    <th scope="col-sm-3">ชื่อ-นามสกุล</th>
                    <th scope="col-sm-2">ระดับ</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#eceff1" }}>
                  {ListUsers.map((val, key) => {
                    return (
                      <tr>
                        <th scope="col">
                          <IconButton style={{ width: "3rem", height: "1rem" }}>
                            <SettingsIcon color="primary" />
                            <ArrowDropDownIcon color="primary" />
                          </IconButton>
                        </th>
                        <th scope="col-sm-3">{val.uid}</th>
                        <th scope="col-sm-3">{val.uname}</th>
                        <th scope="col-sm-2">{val.urole}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
