import { Typography, Unstable_Grid2 } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Unstable_Grid2 container spacing={2} sx={{ ml: 2, mt: 2}}>
        <Unstable_Grid2 xs={8}><Typography variant='h3'>Home</Typography></Unstable_Grid2>
        <Unstable_Grid2 xs={8}>
        <Typography sx={{ ml: 3}}>My name is Robert Middlekauff and I am a Senior Software Engineer at McKinsey & Co. My passion involves bringing data to life to solve problems. On this website, you can see my experience working with data and analytics as well as some fun projects of me playing with some data.</Typography>
        <Typography sx={{ ml: 3, mt: 3}}>This website was built using React with TypeScript.</Typography>
        </Unstable_Grid2>
        </Unstable_Grid2>
    )
}

export default Home;