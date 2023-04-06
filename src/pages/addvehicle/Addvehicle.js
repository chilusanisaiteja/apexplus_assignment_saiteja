import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Addvehicle.css'

function Addvehicle() {
const initialvalues ={
vehicleName:"",
speed:"",
positionx:"",
positiony:"",
Direction:""
};

const [vehicle,setvehicle] = useState(initialvalues);

const handlechange =(e)=>{
  setvehicle({...vehicle,[e.target.name]:e.target.value});
};

const [scenarioList,setscenarioList] = useState([]);
useEffect(()=>{
axios.get('http://localhost:8000/scenarioList').then(res => {
  console.log(res);
  setscenarioList(res.data)})
.catch(err => console.log(err));

},[]);

  return (
    <div className="addvehicle">
      <p>Vehicle / add</p>
      <p className="formname">Add Vehicle</p>
      <div className="vehicleform">
        <div className="row1">
      <div className="textinput8">
            <label>Scenario List</label>
        <select onChange={handlechange} className='scenariolist'>
          {scenarioList.map((scenario)=>(
          <option value={scenario.name} name={scenario.name}>{scenario.name}</option>)
          )}
       </select>
        </div>
        <div className="textinput9">
        <label>Vehicle Name</label>
        <input type="text" value={initialvalues.vehicleName} name="vehicleName" placeholder='Target abc' onChange={handlechange}/>
        </div>
        <div className="textinput3">
            <label>Speed</label>
        <input type="text" value={initialvalues.speed} name="speed" placeholder='2' onChange={handlechange}/>
        </div>
        </div>
        <div className="row2">
        <div className="textinput4">
            <label>Position X</label>
        <input type="text" value={initialvalues.positionx} name="positionx" placeholder='1000' onChange={handlechange}/>
        </div>
        <div className="textinput5">
            <label>Position Y</label>
        <input type="text" value={initialvalues.positiony} name="positiony" placeholder='20' onChange={handlechange}/>
        </div>
        <div className="textinput6">
            <label >Direction</label>
        <select onChange={handlechange}  className='direction' name="Direction">
        <option value="Towards" name="Towards">Towards</option>
        <option value="Backwards" name="Backwards">Backwards</option>
        <option value="Upwards" name="Upwards">Upwards</option>
        <option value="Downwards" name="Downwards">Downwards</option>
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
