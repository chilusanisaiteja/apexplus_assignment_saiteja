import React,{useState} from 'react'
import './Addvehicle.css'

function Addvehicle() {
const [optionState,setoptionstate]=useState("Test Scenario")
const [directionState,setdirectionstate]=useState("")

  return (
    <div className="addvehicle">
      <p>Vehicle / add</p>
      <p className="formname">Add Vehicle</p>
      <div className="vehicleform">
        <div className="row1">
      <div className="textinput8">
            <label>Scenario List</label>
        <select value={optionState} className='scenariolist'>
        <option value="A">Test Scenario</option>
        <option value="B">My Scenario</option>
        <option value="C">Scenario ABC</option>
</select>
        </div>
        <div className="textinput9">
            <label>Vehicle Name</label>
        <input type="text" placeholder='Target abc'/>
        </div>
        <div className="textinput3">
            <label>Speed</label>
        <input type="text" placeholder='2'/>
        </div>
        </div>
        <div className="row2">
        <div className="textinput4">
            <label>Position X</label>
        <input type="text" placeholder='1000'/>
        </div>
        <div className="textinput5">
            <label>Position Y</label>
        <input type="text" placeholder='20'/>
        </div>
        <div className="textinput6">
            <label >Direction</label>
            <select value={directionState}  className='direction'>
        <option value="A">Towards</option>
        <option value="B">Backwards</option>
        <option value="C">Upwards</option>
        <option value="C">Downwards</option>
</select>
        
        </div>
        </div>
      </div>
      <div className="buttons">
        <button className="addbutton">Add</button>
        <button className="resetbutton">Reset</button>
        <button className="gobackbutton">Go Back</button>
      </div>
    </div>
  )
}

export default Addvehicle
