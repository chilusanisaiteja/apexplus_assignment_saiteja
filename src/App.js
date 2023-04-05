import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Addscenario from './pages/addscenario/Addscenario';
import Allscenario from './pages/allscenarios/Allscenarios';
import Addvehicle from './pages/addvehicle/Addvehicle';
import Sidebar from './sidebar/Sidebar'

function App() {
  return (
    <div className="App">
       <Sidebar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addscenario" element={ <Addscenario/> } />
        <Route path="/allscenario" element={ <Allscenario/> } />
        <Route path="/addvehicle" element={ <Addvehicle/> } />
      </Routes> 
    </div>
  );
}

export default App;
