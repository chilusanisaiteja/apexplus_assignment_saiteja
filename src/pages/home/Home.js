import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import './Home.css'

function Home() {
 const [scenario,setscenario] = useState([]);
 const [vehicleList, setvehicleList] = useState([]);


 useEffect(()=>{
  axios.get('http://localhost:8000/scenarioList').then(res => {
    console.log(res);
    setscenario(res.data)})
  .catch(err => console.log(err));

  },[vehicleList]);

  const handlechange =(e)=>{
    console.log(scenario);
    const scenariolist = scenario.filter((scenario)=>{return scenario.name===e.target.value})
    setvehicleList(scenariolist[0].vehicleList);
  };


  return (
    <div className="home">
      <div className="scenario">
        <label>Scenario</label>
        <select onChange={handlechange} className='scenariolist'>
          {scenario.map((scenario)=>(
          <option value={scenario.name} name={scenario.name}>{scenario.name}</option>)
          )}
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
              {vehicleList.map((vehicle,i)=>(<tr>
                <td>{i+1}</td>
                <td>{vehicle.vehicleName}</td>
                <td>{vehicle.positionx}</td>
                <td>{vehicle.positiony}</td>
                <td>{vehicle.speed}</td>
                <td>{vehicle.Direction}</td>
                <td><MdModeEdit/></td>
                <td><RiDeleteBin5Fill/></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Home
