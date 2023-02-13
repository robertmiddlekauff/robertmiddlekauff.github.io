import React from 'react';
import ChicagoMayor from './posts/ChicagoMayor';
import { Card, Unstable_Grid2 as UNSTABLE_GRID2, Typography, Paper, CardHeader, Collapse } from '@mui/material';

const Blog = () => {
    const posts = [ChicagoMayor]

    return (
        <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2, mr: 2}} maxWidth={1000}>
        <UNSTABLE_GRID2><Paper elevation={0}><Typography variant='h3'>Blog</Typography></Paper></UNSTABLE_GRID2>
        <UNSTABLE_GRID2>
                <ChicagoMayor />
        </UNSTABLE_GRID2>
        </UNSTABLE_GRID2>
    )
}

export default Blog;