import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import JoinUs from "./pages/JoinUs"
import About from "./pages/About"
import FileReport from "./pages/FileReport"
import Login from './pages/Login';
import SuccessfullySubmited from './pages/SuccessfullySubmited';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route  path="/Join%20us" element={<JoinUs />} />
        <Route  path="/File%20Report" element={<FileReport />} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/submitted" element={<SuccessfullySubmited/>} />
        <Route  path="/*" element={"error 404 page not found sowwy"} />
      </Routes>
    </>
  );
}

export default App;
