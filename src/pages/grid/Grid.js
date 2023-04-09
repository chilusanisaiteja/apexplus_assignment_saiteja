import React, { useState } from "react";
import "./Grid.css";

function Grid(props) {
  console.log(props.vehicle.positiony);
  console.log(props.start);

  var bgColor = {
    backgroundColor:
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")",
  };
  console.log(bgColor);

  return <div className={props.start ? "dot1" : "dot"}>{props.index}</div>;
}

export default Grid;
