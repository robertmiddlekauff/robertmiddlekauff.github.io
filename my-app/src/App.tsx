import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
        <div>
        <BrowserRouter>
        <NavBar/>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
