import React, { useState } from "react";
import "./Grid.css";

function Grid(props) {
  return <div className={props.start ? "dot1" : "dot"}>{props.index}</div>;
}

export default Grid;
