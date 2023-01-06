import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/signup';
import Home from "./components/home";
import Login from "./components/Login";

import './App.scss';
import Card from "./components/card ";
import Admin from "./components/Admin/Admin";

import Adminlogin from "./components/Admin/Adminlogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/card' element={<Card />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/login' element={<Adminlogin/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
