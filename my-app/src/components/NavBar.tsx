import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

	const pages=[{title: "Home", route: "/"}, {title: "Resume", route: '/about'}, {title: 'Blog', route: '/blog'}]

    return(
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
	)
}

export default NavBar;