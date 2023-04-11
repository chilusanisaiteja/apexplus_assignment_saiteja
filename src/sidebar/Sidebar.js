import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li>
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/addscenario">
            Add Scenario
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/allscenario">
            All Scenarios
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/addvehicle">
            Add Vehicle
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
