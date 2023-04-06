import React,{useEffect, useState} from 'react'
import {IoAddCircle} from 'react-icons/io5';
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Allscenarios.css'

function Allscenarios() {
  const [scenarioList,setscenarioList] = useState([]);
  useEffect(()=>{
  axios.get('http://localhost:8000/scenarioList').then(res => {
    console.log(res);
    setscenarioList(res.data)})
  .catch(err => console.log(err));

  },[]);


  return (
    <div className="allscenarios">
        <div className="buttonsrow">
        <p >All Scenarios</p>
        <Link to="/addscenario">
        <button className="gobackbutton">New Scenario</button>
        </Link>
        <Link to="/addvehicle">
        <button className="addbutton">Add vehicle</button>
        </Link>
        <button className="resetbutton">Delete All</button>
        </div>
      <div className="tableblock">
        <table className="table">
            <thead>
              <tr>
                <th>Scenario Id</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Number of Vehicles</th>
                <th>Add Vehicle</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {
                scenarioList?.map((scenario,i)=>(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{scenario.name}</td>
                    <td>{scenario.time}</td>
                    <td>{scenario.vehicleList?.length}</td>
                    <Link to="/addvehicle">
                    <td className="icon"><IoAddCircle/></td>
                    </Link>
                    <td className="icon"><MdModeEdit/></td>
                    <td className="icon"><RiDeleteBin5Fill/></td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Allscenarios
