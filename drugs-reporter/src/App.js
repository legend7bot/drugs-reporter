import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import AwarenessProgram from "./pages/AwarenessProgram"
import About from "./pages/About"
import FileReport from "./pages/FileReport"
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path="/Awareness%20Programs" element={< AwarenessProgram/>} />
        <Route  path="/File%20Report" element={<FileReport />} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/*" element={"error 404 page not found sowwy"} />
      </Routes>
    </>
  );
}

export default App;
