import { Box, Card, Container, Unstable_Grid2, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Unstable_Grid2 container spacing={2} sx={{ ml: 2}}>
            <Unstable_Grid2 xs={8}><h3>About</h3></Unstable_Grid2>
            <Unstable_Grid2 xs={8}>
                <Card>
                    <Typography variant="h5" sx={{ m: 3}}>
                    Experience
                    </Typography>
            <p>McKinsey July 2022 - Present</p>
            <ul>
                <li>Stuff</li>
            </ul>
            <p>GHX January 2017 - May 2022</p>
            <ul>
                <li>Stuff</li>
            </ul>
            <p>Advantage Solutions September 2014 - January 2017</p>
            <ul>
                <li>Stufdf</li>
            </ul>
            </Card>
            </Unstable_Grid2>
            <Unstable_Grid2 xs={8}>
                <Card>
                <Typography variant="h5" sx={{ m: 3}}>
                    Education
                    </Typography>
            <p>Sewanee</p>
            <ul>
                <li>Stuff</li>
            </ul>
            </Card>
            </Unstable_Grid2>

        </Unstable_Grid2>
    )
}

export default About;