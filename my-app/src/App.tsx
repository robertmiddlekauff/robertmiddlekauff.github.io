import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import { Tabs, Tab, AppBar, Container, Toolbar, Typography, Box, IconButton, MenuItem, Menu, Button, Tooltip, createTheme, ThemeProvider } from '@mui/material';

function App() {

  const pages=[{title: "Home", route: "/"}, {title: "Resume", route: '/about'}]

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {pages.map((page) => (
              <NavLink to={page.route}><Button
                key={page.title}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
            {page.title}
              </Button></NavLink>
            ))}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Robert Middlekauff
          </Typography>
        </Toolbar>
        
      </Container>
    </AppBar>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
