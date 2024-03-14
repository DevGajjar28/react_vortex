// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import RegisterForm from './Components/RegisterForm';
import React, { createContext } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from "./Components/Navbar";
import About from "./containers/About";
import Advertise from "./containers/Advertise";
import Contactus from "./containers/Contactus";
import Home from "./containers/Home";
import Inspiration from "./containers/Inspiration";
import Login from "./containers/Login";
import Premium from "./containers/Premium";
import Register from "./containers/Register";
import History from "./containers/SubPage/History";
// import useAxios from "./hooks/useAxios";


export const ImageContext = createContext();

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
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/History" element={<History/>} />
        
      </Routes>

    </>


  );
}

export default App;
