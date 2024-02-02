// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import RegisterForm from './Components/RegisterForm';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Advertise from "./containers/Advertise";
import Home from "./containers/Home";
import Inspiration from "./containers/Inspiration";
import Login from "./containers/Login";
import Premium from "./containers/Premium";
import Register from "./containers/Register";
import About from "./containers/About";
import Contactus from "./containers/Contactus";

function App() {

  function Layout({ children }) {
    return (
      <div className="App">
        <Navbar />
        <div>
          {children}
        </div>
      </div>
    );
  }
  return (
    <>

      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Inspiration" element={<Layout><Inspiration /></Layout>} />
        <Route path="/Advertise" element={<Layout><Advertise /></Layout>} />
        <Route path="/Premium" element={<Layout><Premium /></Layout>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contactus" element={<Contactus />} />
        
      </Routes>

    </>


  );
}

export default App;
