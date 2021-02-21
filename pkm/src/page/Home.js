import React, { useState } from "react";
import Card from "../Components/Card";
import Footer from "../Components/footer";
import Nav2 from "../Components/nav2";
import { useHistory } from "react-router-dom";
import { list } from "../action/doc-api";
import { doccateArr, doctypeArr } from "../Utils/Config";

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

  return (
    <>
      <Nav2 />
      <div className="container" style={{ marginBottom: "7rem" }}>
        <div
          className="row align-items-center"
          style={{ marginTop: "5rem", marginLeft: "5rem" }}
        >
          <div className="col-sm-3">
            <a href="/Customers">
              <Card
                color="#F1120B"
                icon="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                text="Customers"
              />
            </a>
          </div>
          <div className="col-sm-3" style={{ marginLeft: "5rem" }}>
            <a href="/#">
              <Card
                color="#E7F10B"
                icon="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
                text="Products"
              />
            </a>
          </div>
          <div className="col-sm-3" style={{ marginLeft: "5rem" }}>
            <a href="/#">
              <Card
                color="#00ff00"
                icon="M10.862,6.47H3.968v6.032h6.894V6.47z M10,11.641H4.83V7.332H10V11.641z M12.585,11.641h-0.861v0.861h0.861V11.641z M7.415,14.226h0.862v-0.862H7.415V14.226z M8.707,17.673h2.586c0.237,0,0.431-0.193,0.431-0.432c0-0.237-0.193-0.431-0.431-0.431H8.707c-0.237,0-0.431,0.193-0.431,0.431C8.276,17.479,8.47,17.673,8.707,17.673 M5.691,14.226h0.861v-0.862H5.691V14.226z M4.83,13.363H3.968v0.862H4.83V13.363z M16.895,4.746h-3.017V3.023h1.292c0.476,0,0.862-0.386,0.862-0.862V1.299c0-0.476-0.387-0.862-0.862-0.862H10c-0.476,0-0.862,0.386-0.862,0.862v0.862c0,0.476,0.386,0.862,0.862,0.862h1.293v1.723H3.106c-0.476,0-0.862,0.386-0.862,0.862v12.926c0,0.476,0.386,0.862,0.862,0.862h13.789c0.475,0,0.861-0.387,0.861-0.862V5.608C17.756,5.132,17.369,4.746,16.895,4.746 M10.862,2.161H10V1.299h0.862V2.161zM11.724,1.299h3.446v0.862h-3.446V1.299z M13.016,4.746h-0.861V3.023h0.861V4.746z M16.895,18.534H3.106v-2.585h13.789V18.534zM16.895,15.088H3.106v-9.48h13.789V15.088z M15.17,12.502h0.862v-0.861H15.17V12.502z M13.447,12.502h0.861v-0.861h-0.861V12.502zM15.17,10.778h0.862V9.917H15.17V10.778z M15.17,9.055h0.862V8.193H15.17V9.055z M16.032,6.47h-4.309v0.862h4.309V6.47zM14.309,8.193h-0.861v0.862h0.861V8.193z M12.585,8.193h-0.861v0.862h0.861V8.193z M13.447,14.226h2.585v-0.862h-2.585V14.226zM13.447,10.778h0.861V9.917h-0.861V10.778z M12.585,9.917h-0.861v0.861h0.861V9.917z"
                text="Buy"
              />
            </a>
          </div>
        </div>
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", marginLeft: "5rem" }}
        >
          <div className="col-sm-3">
            <a href="/#">
              <Card
                color="#0033cc"
                icon="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"
                text="Report"
              />
            </a>
          </div>
          <div className="col-sm-3" style={{ marginLeft: "5rem" }}>
            <a href="/#">
              <Card
                color="#EB0BF1"
                icon="M4.349,4.006H15.65c0.24,0,0.435-0.194,0.435-0.435c0-0.241-0.194-0.435-0.435-0.435H4.349c-0.24,0-0.435,0.194-0.435,0.435C3.915,3.812,4.109,4.006,4.349,4.006 M2.611,5.744H17.39c0.239,0,0.434-0.194,0.434-0.435s-0.194-0.435-0.434-0.435H2.611c-0.24,0-0.435,0.194-0.435,0.435S2.371,5.744,2.611,5.744 M9.976,10.596l-0.223,0.902c0.253,0.063,1.035,0.323,1.162-0.188C11.046,10.778,10.229,10.66,9.976,10.596 M18.693,6.613H1.307c-0.48,0-0.87,0.39-0.87,0.87v8.693c0,0.481,0.389,0.869,0.87,0.869h17.386c0.48,0,0.869-0.388,0.869-0.869V7.483C19.562,7.003,19.174,6.613,18.693,6.613M1.742,7.483c0.24,0,0.435,0.194,0.435,0.435S1.982,8.352,1.742,8.352S1.307,8.158,1.307,7.917S1.501,7.483,1.742,7.483M1.742,16.176c-0.24,0-0.435-0.194-0.435-0.435s0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435S1.982,16.176,1.742,16.176M18.259,16.176c-0.24,0-0.436-0.194-0.436-0.435s0.195-0.435,0.436-0.435c0.239,0,0.435,0.194,0.435,0.435S18.498,16.176,18.259,16.176 M18.693,14.518c-0.137-0.049-0.281-0.08-0.435-0.08c-0.721,0-1.305,0.584-1.305,1.304c0,0.153,0.032,0.299,0.08,0.435H2.966c0.048-0.136,0.08-0.281,0.08-0.435c0-0.72-0.584-1.304-1.304-1.304c-0.153,0-0.298,0.031-0.435,0.08V9.142c0.136,0.049,0.281,0.08,0.435,0.08c0.72,0,1.304-0.584,1.304-1.304c0-0.153-0.031-0.298-0.08-0.435h14.068c-0.048,0.137-0.08,0.281-0.08,0.435c0,0.72,0.584,1.304,1.305,1.304c0.153,0,0.298-0.031,0.435-0.08V14.518z M18.259,8.352c-0.24,0-0.436-0.194-0.436-0.435s0.195-0.435,0.436-0.435c0.239,0,0.435,0.194,0.435,0.435S18.498,8.352,18.259,8.352 M15.65,14.438h-0.869c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h0.869c0.24,0,0.435-0.194,0.435-0.435S15.891,14.438,15.65,14.438 M5.219,8.352h-0.87c-0.24,0-0.435,0.195-0.435,0.435s0.195,0.435,0.435,0.435h0.87c0.24,0,0.435-0.194,0.435-0.435S5.459,8.352,5.219,8.352 M10,8.352c-1.92,0-3.477,1.557-3.477,3.477c0,1.921,1.557,3.478,3.477,3.478s3.478-1.557,3.478-3.478C13.478,9.909,11.92,8.352,10,8.352M11.801,11.318c-0.059,0.401-0.28,0.596-0.573,0.664c0.402,0.21,0.607,0.534,0.412,1.096c-0.242,0.697-0.818,0.756-1.584,0.609l-0.186,0.75l-0.449-0.113l0.184-0.739c-0.117-0.028-0.236-0.06-0.358-0.094l-0.184,0.743l-0.448-0.112L8.8,13.371c-0.104-0.027-0.211-0.056-0.32-0.083l-0.584-0.146l0.223-0.517c0,0,0.332,0.088,0.327,0.081c0.126,0.031,0.183-0.052,0.206-0.106l0.294-1.185c0.016,0.004,0.032,0.007,0.047,0.012c-0.018-0.008-0.034-0.012-0.047-0.016l0.21-0.846c0.006-0.096-0.027-0.217-0.209-0.263c0.007-0.004-0.326-0.081-0.326-0.081l0.12-0.482l0.62,0.156L9.357,9.896c0.093,0.023,0.189,0.045,0.287,0.067l0.184-0.742l0.449,0.113l-0.18,0.728c0.121,0.028,0.241,0.056,0.36,0.085l0.179-0.723l0.449,0.113L10.9,10.279C11.468,10.476,11.882,10.771,11.801,11.318 M9.639,11.953l-0.246,0.995c0.305,0.076,1.243,0.379,1.382-0.182C10.92,12.181,9.944,12.03,9.639,11.953"
                text="Cost"
              />
            </a>
          </div>
          <div className="col-sm-3" style={{ marginLeft: "5rem" }}>
            <a href="/#">
              <Card
                color="#130114"
                icon="M18.208,2.958H8.875V1.792c0-0.644-0.522-1.167-1.167-1.167H1.875c-0.644,0-1.167,0.522-1.167,1.167v16.333
								c0,0.645,0.522,1.166,1.167,1.166h16.333c0.645,0,1.167-0.521,1.167-1.166v-14C19.375,3.48,18.853,2.958,18.208,2.958z
								 M18.208,17.542c0,0.322-0.261,0.583-0.583,0.583H2.458c-0.323,0-0.583-0.261-0.583-0.583V6.458h16.333V17.542z M17.625,5.292
								H1.875V2.375c0-0.323,0.261-0.583,0.583-0.583h4.667c0.323,0,0.583,0.261,0.583,0.583v1.75h9.917c0.322,0,0.583,0.261,0.583,0.583
                C18.208,5.031,17.947,5.292,17.625,5.292z"
                text="MasterData"
              />
            </a>
          </div>
        </div>
        <div
          className="row align-items-center"
          style={{ marginTop: "3rem", backgroundColor: "#ccccff" }}
        >
          <div className="row align-items-center" style={{ marginTop: "2rem" }}>
            <div className="col-sm-1">
              <text>คำค้นหา:</text>
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
          <div className="row aling-item-center" style={{ marginTop: "1rem" }}>
            <div className="col-sm-1">
              <text>หมวดหมู่หนังสือ:</text>
            </div>
            <div className="col-sm-2">
              <select
                class="form-select"
                aria-label="Default select example"
                name="doccate"
                onChange={handleChange}
              >
                <option selected>โปรดเลือก</option>
                <option value="0">{doccateArr[0]}</option>
                <option value="1">{doccateArr[1]}</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: "1rem" }}>
            <div className="col-sm-1">
              <text>วันที่:</text>
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
              <text>ถึง:</text>
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
              <thead class="table-success">
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
              <tbody style={{ backgroundColor: "white" }}>
                {Doc.map((val, key) => {
                  const rcDate = val.rcdate.split("T");
                  const docDate = val.docdate.split("T");
                  return (
                    <tr>
                      <th>ดูข้อมูล</th>
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
