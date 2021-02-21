import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Nav2 from "../Components/nav2";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function DocDetial() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setipForm({
    //   ...ipForm,
    //   [name]: value,
    // });
  };

  return (
    <>
      <Nav2 />
      <div className="container">
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", backgroundColor: "#ccccff" }}
        >
          <div
            className="row align-items-center"
            style={{ marginTop: "2rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <th>
                หมายเลขบันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "1rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
            <div className="col">
              <th>
                วันที่บันทึก:
                <input
                  type="text"
                  style={{ marginLeft: "1rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-4">
              <th>
                หมวดหนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
            <div className="col">
              <th>
                วันที่ออก:
                <input
                  type="text"
                  style={{ marginLeft: "1.9rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.9rem" }}
          >
            <div className="col">
              <th>
                เลขที่หนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col">
              <th>
                ชนิดหนังสือ:
                <input
                  type="text"
                  style={{ marginLeft: "2.5rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col">
              <th>
                เรื่อง:
                <input
                  type="text"
                  style={{ marginLeft: "5.8rem" }}
                  name="rcid"
                  // onChange={handleChange}
                ></input>
              </th>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2">
              <th>เนื้อความ(ย่อ):</th>
            </div>
            <div className="col">
              <textarea
                type="text"
                style={{
                  marginLeft: "-62rem",
                  width: "15rem",
                  height: "6rem",
                }}
                name="rcid"
                // onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "1rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2" style={{ marginLeft: "5rem" }}>
              <button
                class="btn btn-secondary"
                style={{ fontSize: "15px" }}
                onClick={() => {}}
              >
                เอกสาร
              </button>
            </div>
          </div>

          <div
            className="row align-items-center"
            style={{ marginTop: "3rem", marginLeft: "1.8rem" }}
          >
            <div className="col-sm-2" style={{ marginLeft: "1rem" }}>
              <button
                class="btn btn-warning"
                style={{ fontSize: "15px" }}
                onClick={() => {}}
              >
                <EditIcon />
                แก้ไข
              </button>
            </div>
            <div className="col-sm-2" style={{ marginLeft: "-6rem" }}>
              <button
                class="btn btn-danger"
                style={{ fontSize: "15px" }}
                onClick={() => {}}
              >
                <DeleteForeverIcon color="white" />
                ลบ
              </button>
            </div>
            <div className="col-sm-2" style={{ marginLeft: "-5rem" }}>
              <button
                class="btn btn-secondary"
                style={{ fontSize: "15px" }}
                onClick={() => {}}
              >
                <ArrowBackIosIcon />
                กลับ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
