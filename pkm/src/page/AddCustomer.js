import React, { useState } from "react";
import Nav from "../Components/nav";
import Footer from "../Components/footer";
import { useForm } from "react-hook-form";

export default function AddCustomer(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("picture", data.picture[0]);

    const res = await fetch("http://localhost:3001/picture", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };
  const [name, setName] = useState();
  const [file, setFile] = useState();
  // const [inputData, setinputData] = useState({
  //   cusName: "",
  //   contactNo: "",
  //   gender: "",
  //   cusEmail: "",
  //   note: "",
  //   image: "",
  //   address: "",
  // });

  const handleChange = (e) => {
    // console.log(e.target.files);
    // var { name, value } = e.target;
    // if (name === "image") {
    //   value = e.target.files[0];
    // }
    // setinputData({
    //   ...inputData,
    //   [name]: value,
    // });
  };

  return (
    <>
      <Nav history={props.history} />
      <div class="container" style={{ marginTop: "3em", marginBottom: "7rem" }}>
        <h3>ข้อมูลลูกค้า</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row" style={{ marginTop: "3em" }}>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  ชื่อลูกค้า
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="cusName"
                  onChange={(e) => {
                    const name = e.target.value;
                    setName(name);
                  }}
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  เบอร์โทร ติดต่อ
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="contactNo"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  เพศ
                </span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="gender"
                  onChange={handleChange}
                >
                  <option selected>เลือกเพศของคุณ</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="email"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="cusEmail"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Note
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="note"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">รูปภาพ</span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                    name="picture"
                    accept=".jpg"
                    ref={register}
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    {file ? name : "Choose file"}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                ที่ตั้ง/ที่อยู่
              </span>
              <textarea
                style={{ height: "10rem" }}
                class="form-control"
                aria-label="With textarea"
                name="address"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="row" style={{ marginTop: "3em" }}>
            <div class="col-sm-6">
              <button type="submit" class="btn btn-primary" colSpan="2">
                บันทึก
              </button>
              <button
                type="cancel"
                class="btn btn-danger"
                style={{ marginLeft: "1em" }}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
