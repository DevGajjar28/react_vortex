// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import RegisterForm from './Components/RegisterForm';
import React, { createContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react"

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
// import useAxios from "./hooks/useAxios";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";
import { fetchImages } from "./containers/Images";

export const ImageContext = createContext();

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await fetchImages(searchTerm);
    setImages(results);
  };

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
    <SearchBar onSearch={handleSearch} />
      <ImageList images={images} />

      <Routes>
        
      <Route path="/" element={<Layout><Home /></Layout>} />
      
        <Route path="/Inspiration" element={<Layout><Inspiration /></Layout>} />
        <Route path="/Advertise" element={<Layout><Advertise /></Layout>} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contactus" element={<Contactus />} />
        
      </Routes>

    </>


  );
}

export default App;
