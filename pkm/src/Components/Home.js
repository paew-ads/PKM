import React from "react";
import Nav from "./nav.js";
import Card from "./Card.js";

export default function Home(props) {
  return (
    <div className="Home">
      <Nav history={props.history} />
      <br />
      <br />
      <Card />
    </div>
  );
}
