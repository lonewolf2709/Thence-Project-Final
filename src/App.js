import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './Login';
import Finish from "./Finish";
import Home from "./Home";
import Navbar from "./Navbar";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {/* <Route path="/home" element={<div><Navbar /><Intro /><Features /><Users /><Home /><Footer /></div>}></Route> */}
        <Route path="/" element={<div><Navbar/><Home/></div>}></Route>
        <Route path="login" element={<div><Navbar/><Login /></div>}></Route>
        <Route path="finish" element={<div><Navbar/><Finish /></div>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
