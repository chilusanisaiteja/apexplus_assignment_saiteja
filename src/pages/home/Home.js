import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../grid/Grid.js";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [scenarioList, setscenarioList] = useState([]);
  const [startsimulation, setstartsimulation] = useState(false);
  const [vehicleList, setvehicleList] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/scenarioList")
      .then((res) => {
        setscenarioList(res.data);
        setvehicleList(res.data[0].vehicleList);
      })
      .catch((err) => console.log(err));
  }, []);


  const handlechange = (e) => {
    const product = scenarioList.filter((s) => {
      return s.name === e.target.value;
  });
    setvehicleList(product[0].vehicleList);
  };
  return (
    <div className="home">
      <div className="scenario">
        <label>Scenario</label>
        <select
          onChange={handlechange}
          className="scenariolist"
        >
          {scenarioList.map((scenario) => (
            <option value={scenario.name} name={scenario.name}>
              {scenario.name}
            </option>
          ))}
        </select>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((vehicle, i) =>
              i < 5 ? (
                <tr>
                  <td>{i + 1}</td>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.positionx}</td>
                  <td>{vehicle.positiony}</td>
                  <td>{vehicle.speed}</td>
                  <td>{vehicle.Direction}</td>
                  <td>
                  <Link to="/addvehicle">
                    <MdModeEdit/>
                    </Link>
                  </td>
                  <td>
                    <RiDeleteBin5Fill/> 
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
        <div className="simulationbuttons">
          <button
            className="button1"
            onClick={() => {
              setstartsimulation(true);
              setTimeout(() => {
                setstartsimulation(false);
              }, 2000);
            }}
          >
            Start Simulation
          </button>
          <button
            className="button2"
            onClick={() => {
              setstartsimulation(false);
            }}
          >
            Stop Simulation
          </button>
        </div>
      </div>
      <div className="gridbox">
        {vehicleList.map((v, i) => (
            <Grid key={i} vehicle={v} index={i} start={startsimulation} />
        ))}
      </div>
    </div>
  );
};

export default Home;
