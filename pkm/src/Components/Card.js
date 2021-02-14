import React from "react";

export default function card(props) {
  return (
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
  );
}
