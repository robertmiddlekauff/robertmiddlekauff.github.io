import {
  Card,
  CardContent,
  Paper,
  Typography,
  Unstable_Grid2 as UNSTABLE_GRID2
} from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2, mr: 2 }} maxWidth={1000}>
      <UNSTABLE_GRID2>
        <Paper elevation={0}>
          <Typography variant="h3">Home</Typography>
        </Paper>
      </UNSTABLE_GRID2>
      <UNSTABLE_GRID2>
        <Card>
          <CardContent>
            My name is Robert Middlekauff and I am a Senior Software Engineer at McKinsey & Co. My
            passion involves bringing data to life to solve problems. On this website, you can see
            my experience working with data and analytics as well as some fun projects of me playing
            with some data.
          </CardContent>
          <CardContent>
            This website was built using React, TypeScript, GitHub Pages, and Material UI.
          </CardContent>
        </Card>
      </UNSTABLE_GRID2>
    </UNSTABLE_GRID2>
  );
};

export default Home;
