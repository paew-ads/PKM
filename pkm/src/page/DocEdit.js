import React from "react";

export default function DocEdit(props) {
  const search = props.location.state.rcid;
  return <div>{search}</div>;
}
