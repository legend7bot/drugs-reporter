import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FileReport from './pages/FileReport';
import Login from './pages/Login';
import SuccessfullySubmited from './pages/SuccessfullySubmited';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/File%20Report"
          element={<FileReport />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/submitted"
          element={<SuccessfullySubmited />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/*"
          element={'error 404 page not found sowwy'}
        />
      </Routes>
    </>
  );
}

export default App;
