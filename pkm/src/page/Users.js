import React from "react";
import Footer from "../Components/footer";
import Nav2 from "../Components/nav2";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useHistory } from "react-router-dom";

export default function Users() {
  const history = useHistory();

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
                    type="search"
                    id="example-search-input"
                    name="keyword"
                  ></input>
                </td>
              </div>
              <div
                className="col-sm-1"
                style={{ marginLeft: "-3rem", marginTop: "0.3rem" }}
              >
                <SearchIcon className="text" />
              </div>
              <div
                className="col-sm-1"
                style={{ marginLeft: "-3rem", marginTop: "-0.7rem" }}
              >
                <IconButton
                  color="primary"
                  onClick={() => {
                    history.push({
                      pathname: "/AddUses",
                    });
                  }}
                >
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
                    <th scope="col">จัดการ</th>
                    <th scope="col-sm-3">User ID</th>
                    <th scope="col-sm-3">ชื่อ-นามสกุล</th>
                    <th scope="col-sm-2">ระดับ</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#eceff1" }}>
                  <tr>
                    <th scope="col">
                      <IconButton>
                        <EditIcon
                          color="primary"
                          style={{ marginTop: "-1rem" }}
                        />
                      </IconButton>
                      <IconButton>
                        <DeleteForeverIcon
                          color="secondary"
                          style={{ marginTop: "-1rem" }}
                        />
                      </IconButton>
                    </th>
                    <th scope="col-sm-3">1234455555</th>
                    <th scope="col-sm-3">นายหล่อโคตร เจ็ตจะย่อง</th>
                    <th scope="col-sm-2">admin</th>
                  </tr>
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
