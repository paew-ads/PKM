import React from "react";

export default function card(props) {
  return (
<<<<<<< HEAD
    <div className="container" style={{ marginTop: "100" }}>
      <div className="row">
        <div className="col-sm-4">
          <div
            class="card-body"
            style={{
              width: "20rem",
              height: "10rem",
              backgroundColor: "rgb(26, 255, 102)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-person-circle text-white"
              viewBox="0 0 16 16"
              style={{ marginLeft: "120px" }}
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
            <a
              class="card-block stretched-link text-decoration-none text-center text-white"
              href="/Customers"
            >
              <h4 class="card-text" style={{ marginTop: "10px" }}>
                Customers
              </h4>
            </a>
          </div>
        </div>

        <div className="col-sm-4">
          <div
            class="card-body"
            style={{
              width: "20rem",
              height: "10rem",
              backgroundColor: "rgb(51, 102, 204)",
              marginLeft: "20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-clipboard-check text-white"
              viewBox="0 0 16 16"
              style={{ marginLeft: "120px" }}
            >
              <path
                fill-rule="evenodd"
                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
              />
              <path
                fill-rule="evenodd"
                d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>

            <a
              class="card-block stretched-link text-decoration-none text-center text-white"
              href="/tax"
            >
              <h4 class="card-text" style={{ marginTop: "10px" }}>
                Tax invoice
              </h4>
            </a>
          </div>
        </div>

        <div className="col-sm-4">
          <div
            class="card-body"
            style={{
              width: "20rem",
              height: "10rem",
              backgroundColor: "rgb(230, 57, 0)",
              marginLeft: "20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-folder2-open text-white"
              viewBox="0 0 16 16"
              style={{ marginLeft: "120px" }}
            >
              <path
                fill-rule="evenodd"
                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
              />
            </svg>

            <a
              class="card-block stretched-link text-decoration-none text-center text-white"
              href="/masterData"
            >
              <h4 class="card-text" style={{ marginTop: "10px" }}>
                MasterData
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
=======
    <>
      <div
        className="card text-white  mb-3"
        style={{
          maxWidth: "18rem",
          maxHeight: "18rem",
          backgroundColor: props.color,
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10rem"
          height="7rem"
          fill="currentColor"
          class="bi bi-people-fill "
          viewBox="0 0 20 20"
          style={{ marginTop: "1rem" }}
        >
          <path fill-rule="evenodd" d={props.icon} />
        </svg>
        <h5>{props.text}</h5>
      </div>
    </>
>>>>>>> 00e8769932a80da630dc7549cf41535634a34f2b
  );
}
