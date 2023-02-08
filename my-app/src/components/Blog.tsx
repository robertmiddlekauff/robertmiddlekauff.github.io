import React from 'react';
import ChicagoMayor from './posts/ChicagoMayor';
import { Card, Unstable_Grid2 as UNSTABLE_GRID2, Typography, Paper } from '@mui/material';

const Blog = () => {
    const posts = [ChicagoMayor]

    return (
        <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2}}>
        <UNSTABLE_GRID2 xs={8}><Paper elevation={0}><Typography variant='h3'>Blog</Typography></Paper></UNSTABLE_GRID2>
        <UNSTABLE_GRID2 xs={8}>
            <Card>
<ChicagoMayor />
        </Card>
        </UNSTABLE_GRID2>
        </UNSTABLE_GRID2>
    )
}

export default Blog;