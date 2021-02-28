import React, { useState, useEffect } from "react";
import Footer from "../Components/footer";
import Nav2 from "../Components/nav2";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useHistory } from "react-router-dom";
import { list, search } from "../action/auth-api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn1: {
    border: "none",

    height: 40,
    borderRadius: 6,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#fff",
    backgroundSize: "200%",
    transition: "0.4s",
    "&:hover": {
      backgroundPosition: "right",
    },
  },
  save1: {
    backgroundImage: "linear-gradient(45deg, #007bb2, #00b0ff, #33bfff)",
  },
  new1: {
    backgroundImage: "linear-gradient(45deg, #76ff03, #ffeb3b, #00e5ff)",
    color: "white",
  },
});

export default function Users() {
  const [ListUsers, setListUsers] = useState([]);
  const [Search, setSearch] = useState("");
  const history = useHistory();

  const classes = useStyles();

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
              <div
                className="col-sm-1"
                style={{ marginLeft: "-2rem", marginTop: "-0.1rem" }}
              >
                <IconButton
                  className={`${classes.btn1} ${classes.save1}`}
                  variant="contained"
                  onClick={handleSearch}
                >
                  <SearchIcon className="text" />
                </IconButton>
              </div>
              <div
                className="col-sm-1"
                style={{ marginLeft: "-2.5rem", marginTop: "-0.1rem" }}
              >
                <IconButton
                  className={`${classes.btn1} ${classes.new1}`}
                  onClick={() => {
                    history.push({
                      pathname: "/AddUses",
                    });
                  }}
                >
                  <AddBoxIcon className="text" />
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
                    <th scope="col-sm-1">จัดการ</th>
                    <th scope="col-sm-3">User ID</th>
                    <th scope="col-sm-3">ชื่อ-นามสกุล</th>
                    <th scope="col-sm-2">ระดับ</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "#eceff1" }}>
                  {ListUsers.map((val, key) => {
                    return (
                      <tr>
                        <th scope="col-sm-1">
                          <IconButton>
                            <EditIcon color="primary" />
                          </IconButton>
                          <IconButton>
                            <DeleteForeverIcon color="secondary" />
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
