import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  })


  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
<NavBar/>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
