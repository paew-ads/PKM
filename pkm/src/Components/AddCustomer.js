import React from "react";
import Nav from "./nav";

export default function AddCustomer(props) {
  return (
    <div>
      <Nav history={props.history} />
      <h1>AddCustomer</h1>
    </div>
  );
}
