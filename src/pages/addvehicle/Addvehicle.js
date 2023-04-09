import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Addvehicle.css";

function Addvehicle() {
  const initialvalues = {
    vehicleName: "",
    speed: 0,
    positionx: 0,
    positiony: 0,
    Direction: "Towards",
  };

  const [scenarioList, setscenarioList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/scenarioList")
      .then((res) => {
        console.log(res);
        setscenarioList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [vehicle, setvehicle] = useState(initialvalues);
  const [scenario, setscenario] = useState(scenarioList[0]);

  const handlechange = (e) => {
    setvehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handlescenario = async (e) => {
    await setscenario(
      scenarioList.filter((product) => {
        return product.name === e.target.value;
      })[0]
    );
  };

  const handlesubmit = (e) => {
    if (
      vehicle.vehicleName === "" ||
      vehicle.speed === 0 ||
      vehicle.positionx === 0 ||
      vehicle.positiony === 0
    ) {
      alert("All the fields are required!");
      return;
    }
    e.preventDefault();
    console.log(scenarioList);
    scenario?.vehicleList.push(vehicle);
    axios
      .put(`http://localhost:8000/scenarioList/${scenario?.id}`, scenario)
      .then((res) => {
        alert("Data Posted Successfully!");
      });
    setvehicle(initialvalues);
  };

  const handleresetbutton = (e) => {
    e.preventDefault();
    setvehicle(initialvalues);
  };

  return (
    <div className="addvehicle">
      <p>Vehicle / add</p>
      <p className="formname">Add Vehicle</p>
      <form>
        <div className="vehicleform">
          <div className="row1">
            <div className="textinput8">
              <label>Scenario List</label>
              <select
                onChange={handlescenario}
                className="scenariolist"
                name="name"
              >
                {scenarioList.map((scenario, i) => (
                  <option key={i} value={scenario.name} name={scenario.name}>
                    {scenario.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="textinput9">
              <label>Vehicle Name</label>
              <input
                type="text"
                value={vehicle.vehicleName}
                name="vehicleName"
                placeholder="Target abc"
                onChange={handlechange}
              />
            </div>
            <div className="textinput3">
              <label>Speed</label>
              <input
                type="number"
                value={vehicle.speed}
                name="speed"
                placeholder="2"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="row2">
            <div className="textinput4">
              <label>Position X</label>
              <input
                type="number"
                value={vehicle.positionx}
                name="positionx"
                placeholder="1000"
                onChange={handlechange}
              />
            </div>
            <div className="textinput5">
              <label>Position Y</label>
              <input
                type="number"
                value={vehicle.positiony}
                name="positiony"
                placeholder="20"
                onChange={handlechange}
              />
            </div>
            <div className="textinput6">
              <label>Direction</label>
              <select
                onChange={handlechange}
                value={vehicle.Direction}
                className="direction"
                name="Direction"
              >
                <option value="Towards" name="Towards">
                  Towards
                </option>
                <option value="Backwards" name="Backwards">
                  Backwards
                </option>
                <option value="Upwards" name="Upwards">
                  Upwards
                </option>
                <option value="Downwards" name="Downwards">
                  Downwards
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="addbutton" onClick={handlesubmit}>
            Add
          </button>
          <button className="resetbutton" onClick={handleresetbutton}>
            Reset
          </button>
          <button className="gobackbutton">Go Back</button>
        </div>
      </form>
    </div>
  );
}

export default Addvehicle;
