import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { createTheme, ThemeProvider } from '@mui/material';
import Blog from './components/Blog';
import ChicagoMayor from './components/posts/ChicagoMayor';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/chicagomayor" element={<ChicagoMayor />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
