import { Card, Unstable_Grid2, Typography, List, ListItem } from '@mui/material';

import React from 'react';
import BulletedList from './BulletedList';

const About = () => {
    return (
        <Unstable_Grid2 container spacing={2} sx={{ ml: 2}}>
            <Unstable_Grid2 xs={8}><Typography variant='h3'>Resume</Typography></Unstable_Grid2>
            <Unstable_Grid2 xs={8}>
                <Card>
                    <Typography variant="h5" sx={{ m: 2}}>
                    Experience
                    </Typography>
                    <Typography sx={{ ml: 3}}>McKinsey July 2022 - Present</Typography>

            <BulletedList list={['stuff 1', 'stuff 2']}/>
            <Typography sx={{ ml: 3}}>GHX January 2017 - May 2022</Typography>
            <BulletedList list={['stuff 1', 'stuff 2']}/>
            <Typography sx={{ ml: 3}}>Advantage Solutions September 2014 - January 2017</Typography>
            <BulletedList list={['stuff 1', 'stuff 2']}/>
            </Card>
            </Unstable_Grid2>
            <Unstable_Grid2 xs={8}>
                <Card>
                <Typography variant="h5" sx={{ m: 2}}>
                    Education
                    </Typography>
                    <Typography sx={{ ml: 3}}>Sewanee</Typography>
            <BulletedList list={['stuff 1', 'stuff 2']}/>
            </Card>
            </Unstable_Grid2>

        </Unstable_Grid2>
    )
}

export default About;