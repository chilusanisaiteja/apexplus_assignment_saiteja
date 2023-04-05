import React from 'react'
import './Allscenarios.css'

function Allscenarios() {
  return (
    <div className="allscenarios">
        <div className="buttonsrow">
        <p >All Scenarios</p>
        <button className="gobackbutton">New Scenario</button>
        <button className="addbutton">Add vehicle</button>
        <button className="resetbutton">Delete All</button>
        </div>
      <div className="tableblock">
        <table className="table">
            <thead>
                <th>Scenario Id</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Number of Vehicles</th>
                <th>Add Vehicle</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>

            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Allscenarios
