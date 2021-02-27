import React, { useState } from "react";
import Footer from "../Components/footer";
import Nav2 from "../Components/nav2";
import { useHistory } from "react-router-dom";
import { list, deleteDoc } from "../action/doc-api";
import { doccateArr, doctypeArr } from "../Utils/Config";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function Home() {
  const [Doc, setDoc] = useState([]);
  const history = useHistory();
  const [ipForm, setipForm] = useState({
    doccate: "",
    keyword: "",
    stdate: "",
    endate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setipForm({
      ...ipForm,
      [name]: value,
    });
  };
  const handleSearch = async (e) => {
    if (!ipForm.doccate) {
      ipForm.doccate = "0";
    }
    const res = await list(ipForm);
    console.log(res.data);
    setDoc(res.data);
  };
  const handleDelete = async (rcid) => {
    if (
      window.confirm(
        "Are you sure you want to Delete this thing into the database?"
      )
    ) {
      const res = await deleteDoc(rcid);
      alert(res.data.massage);
      window.location.reload();
    } else {
      alert("Delete not success!!!");
    }
  };

  return (
    <>
      <Nav2 />

      <div className="container" style={{ marginBottom: "7rem" }}>
        <h2
          className="text"
          style={{ marginLeft: "-74rem", marginTop: "2rem" }}
        >
          เอกสารเข้า
        </h2>
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", backgroundColor: "#263238" }}
        >
          <div className="row align-items-center" style={{ marginTop: "2rem" }}>
            <div className="col-sm-1">
              <div className="text">คำค้นหา:</div>
            </div>
            <div className="col-sm-3">
              <td class="input-group ">
                <input
                  class="form-control py-2"
                  type="search"
                  id="example-search-input"
                  name="keyword"
                  onChange={handleChange}
                ></input>
              </td>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "1rem" }}>
            <div className="col-sm-1">
              <div className="text">วันที่:</div>
            </div>
            <div className="col-sm-4">
              <td class="input-group ">
                <input
                  type="date"
                  name="stdate"
                  onChange={handleChange}
                ></input>
              </td>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "1rem" }}>
            <div className="col-sm-1">
              <div className="text">ถึง:</div>
            </div>
            <div className="col-sm-4">
              <td class="input-group ">
                <input
                  type="date"
                  name="endate"
                  onChange={handleChange}
                ></input>
              </td>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "1rem", marginLeft: "10px" }}
          >
            <div className="col-sm-3">
              <button
                class="btn btn-primary"
                type="submit"
                onClick={() => {
                  history.push("/doc_form");
                }}
                style={{ fontSize: "0.9rem" }}
              >
                บันทึกเอกสารใหม่
              </button>
              <button
                class="btn btn-primary"
                type="search"
                style={{ marginLeft: "1rem", fontSize: "0.9rem" }}
                onClick={handleSearch}
              >
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
                  <th scope="col">เลขที่บันทึก</th>
                  <th scope="col">วันที่บันทึก</th>
                  <th scope="col">หมวดหมู่หนังสือ</th>
                  <th scope="col">เลขที่หนังสือ</th>
                  <th scope="col">วันที่ออก</th>
                  <th scope="col">ชนิดหนังสือ</th>
                  <th scope="col">เรื่อง</th>
                  <th scope="col">ผู้ออก</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#eceff1" }}>
                {Doc.map((val, key) => {
                  const rcDate = val.rcdate.split("T");
                  const docDate = val.docdate.split("T");
                  return (
                    <tr>
                      <th>
                        <td className="cal">
                          <IconButton
                            style={{
                              width: "5px",
                              height: "5px",
                              marginLeft: "10px",
                            }}
                            onClick={() => {
                              history.push({
                                pathname: "/doc_detial",
                                state: { rcid: val.rcid },
                              });
                            }}
                          >
                            <FindInPageIcon color="primary" />
                          </IconButton>
                        </td>
                        <td className="cal">
                          <IconButton
                            style={{
                              width: "5px",
                              height: "5px",
                              marginLeft: "10px",
                            }}
                            onClick={() => {
                              history.push({
                                pathname: "/doc_edit",
                                state: { rcid: val.rcid },
                              });
                            }}
                          >
                            <EditIcon color="primary" />
                          </IconButton>
                        </td>
                        <td className="cal">
                          <IconButton
                            style={{
                              width: "5px",
                              height: "5px",
                              marginLeft: "10px",
                            }}
                            onClick={() => {
                              handleDelete(val.rcid);
                            }}
                          >
                            <DeleteForeverIcon color="secondary" />
                          </IconButton>
                        </td>
                      </th>

                      <td>{val.rcid}</td>
                      <td>{rcDate[0]}</td>
                      <td>{doccateArr[val.doccate]}</td>
                      <td>{val.docid}</td>
                      <td>{docDate[0]}</td>
                      <td>{doctypeArr[val.doctype]}</td>
                      <td>{val.docsubj}</td>
                      <td>{val.docauth}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
