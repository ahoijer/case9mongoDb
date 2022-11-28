import './App.css';
// import Login from "./pages/login";
import Register from "./pages/register";
// import Login from "./pages/login";

import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Register />}/>
      {/* <Route path="/login" element={ <Login />}/> */}
      {/* <Route path="./login" element={ <Login />}/> */}
      </Routes>
    </div>
  );
}

export default App;
