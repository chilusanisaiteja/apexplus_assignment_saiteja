import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Addscenario.css'

function Addscenario() {
  const initialvalues ={
    name:"",
    time:"",
    vehicleList:[]
  };
  const [scenarioinput, setscenarioinput] = useState(initialvalues)
  const handleaddbutton = (e) => {
    e.preventDefault();
    console.log(scenarioinput);
    setscenarioinput(initialvalues);
    axios.post('http://localhost:8000/scenarioList',scenarioinput).then(res => {
    alert("Data Posted Successfully!")})

  };

  const handleresetbutton = (e) =>{
    e.preventDefault();
    setscenarioinput(initialvalues);
  }

  const handlechange =(e)=>{
    setscenarioinput({...scenarioinput,[e.target.name]:e.target.value});
  };

  return (
    <div class="addscenario">
      <p>Scenario / add</p>
      <p className="formname">Add Scenario</p>
      <div className="Scenarioform">
        <div className="textinput1">
            <label>Scenario Name</label>
        <input type="text" value={scenarioinput.name} placeholder='Text Scenario' name="name"  
        onChange={handlechange} />
        </div>
        <div className="textinput2">
        <label>Scenario Time (seconds)</label>
        <input type="number" value={scenarioinput.time} placeholder='10s' name="time" 
         onChange={handlechange}/>
        </div>
      </div>
      <div className="buttons">
        <button className="addbutton" onClick={handleaddbutton} >Add</button>
        <button className="resetbutton" onClick={handleresetbutton}>Reset</button>
        <Link to='/'>
        <button className="gobackbutton" >Go Back</button>
        </Link>
      </div>
    </div>
  )
}

export default Addscenario
