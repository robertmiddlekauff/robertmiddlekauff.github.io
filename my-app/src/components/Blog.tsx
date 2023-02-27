import React from 'react';
import ChicagoMayor from './posts/ChicagoMayor';
import { Unstable_Grid2 as UNSTABLE_GRID2, Typography, Paper } from '@mui/material';
import ChicagoMayorPart2 from './posts/ChicagoMayorPart2';
import CtaRidership from './posts/CtaRidership';
import { gridLayout } from '../utils';

const Blog = () => {
  return (
    <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2, mr: 2 }} maxWidth={1000}>
      <UNSTABLE_GRID2>
        <Paper elevation={0}>
          <Typography variant="h3">Blog</Typography>
        </Paper>
      </UNSTABLE_GRID2>
      <UNSTABLE_GRID2 {...gridLayout}>
        <CtaRidership />
      </UNSTABLE_GRID2>
      <UNSTABLE_GRID2>
        <ChicagoMayorPart2 />
      </UNSTABLE_GRID2>
      <UNSTABLE_GRID2>
        <ChicagoMayor />
      </UNSTABLE_GRID2>
    </UNSTABLE_GRID2>
  );
};

export default Blog;
