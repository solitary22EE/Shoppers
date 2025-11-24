// src/Router/RouterFile.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Home from '../Pages/Home/Home';        // ✅ new
import About from '../Pages/About/About';    // ✅ already have this

const RouterFile = () => {
  return (
    <>
      {/* Always visible */}
      <Navbar />

      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Later: <Route path="/shop" element={<Shop />} /> etc. */}
      </Routes>
    </>
  );
};

export default RouterFile;
