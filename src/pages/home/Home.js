import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../grid/Grid.js";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "./Home.css";
const Home = () => {
  const [scenario, setscenario] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/scenarioList")
      .then((res) => {
        console.log(res);
        setscenario(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [startsimulation, setstartsimulation] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [vehicleList, setvehicleList] = useState([]);

  const handlechange = (e) => {
    if (!isloading) {
      setvehicleList(scenario[0].vehicleList);
      setisloading(true);
    }
    const scenariolist = scenario.filter((scenario) => {
      return scenario.name === e.target.value;
    });
    setvehicleList(scenariolist[0].vehicleList);
  };
  return (
    <div className="home">
      <div className="scenario">
        <label>Scenario</label>
        <select
          onChange={handlechange}
          defaultValue={scenario[0]}
          className="scenariolist"
        >
          {scenario.map((scenario) => (
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
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.positionx}</td>
                  <td>{vehicle.positiony}</td>
                  <td>{vehicle.speed}</td>
                  <td>{vehicle.Direction}</td>
                  <td>
                    <MdModeEdit />
                  </td>
                  <td>
                    <RiDeleteBin5Fill />
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
          <>
            <Grid key={i} vehicle={v} index={i} start={startsimulation} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
