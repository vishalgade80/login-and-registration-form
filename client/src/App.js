import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/login/Login.jsx";
import Register from "./components/addUser/Register";

function App() {



  
  return(
  <div className="App">
  <Router>
  <Routes>
  <Route path="/Home" element={<Home/>}/>
  <Route exact path="/register" element={<Register/>}/>
  <Route path="/" element={<Login/>}/>
  </Routes>
  </Router>
    </div>
  );
}




export default App;

