// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import RegisterForm from './Components/RegisterForm';
import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./containers/Home";
import Inspiration from "./containers/Inspiration";
import Advertise from "./containers/Advertise";
import Premium from "./containers/Premium";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {


  return (
    <>

      <Navbar />
     

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Inspiration" element={<Inspiration />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />


      </Routes>

    </>


  );
}

export default App;
