import './App.css';
import {BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';

function App() {
  return ( 
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/appointment" element={<Appointment></Appointment>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
       </BrowserRouter>
   
  );
}

export default App;
