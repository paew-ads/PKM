import React from "react";
import Nav from "./nav";

export default function MasterData(props) {
  return (
    <div>
      <Nav history={props.history} />
      MasterData
    </div>
  );
}
