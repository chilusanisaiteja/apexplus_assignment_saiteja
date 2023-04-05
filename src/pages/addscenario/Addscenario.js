import React from 'react'
import './Addscenario.css'

function Addscenario() {
  return (
    <div class="addscenario">
      <p>Scenario / add</p>
      <p className="formname">Add Scenario</p>
      <div className="Scenarioform">
        <div className="textinput1">
            <label>Scenario Name</label>
        <input type="text" placeholder='Text Scenario'/>
        </div>
        <div className="textinput2">
        <label>Scenario Time (seconds)</label>
        <input type="text" placeholder='10'/>
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

export default Addscenario
