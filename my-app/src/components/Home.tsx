import { Typography, Unstable_Grid2 as UNSTABLE_GRID2 } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2}}>
        <UNSTABLE_GRID2 xs={8}><Typography variant='h3'>Home</Typography></UNSTABLE_GRID2>
        <UNSTABLE_GRID2 xs={8}>
        <Typography sx={{ ml: 3}}>My name is Robert Middlekauff and I am a Senior Software Engineer at McKinsey & Co. My passion involves bringing data to life to solve problems. On this website, you can see my experience working with data and analytics as well as some fun projects of me playing with some data.</Typography>
        <Typography sx={{ ml: 3, mt: 3}}>This website was built using React, TypeScript, GitHub Pages, and Material UI.</Typography>
        </UNSTABLE_GRID2>
        </UNSTABLE_GRID2>
    )
}

export default Home;