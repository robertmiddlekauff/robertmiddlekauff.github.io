import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
		<nav className='ui raised very padded segment' >
			<div className='ui right floated header'>
				<button><NavLink to="/">Home</NavLink></button>
				<button><NavLink to="/about">About</NavLink></button>
			</div>
		</nav>
	)
}

export default NavBar;