import { Card, Unstable_Grid2 as UNSTABLE_GRID2, Typography } from '@mui/material';

import React from 'react';
import BulletedList from './BulletedList';

const About = () => {

    const ghxBullets = [
        'Led cross functional data strategy to build out visualizations for a physician analytics solution; coordinated back-end and front-end efforts that included extracting and loading the data, processing the data, and picking the right visualization',
        'Developed a roadmap to improve performance for our visualization microservice using jwt tokens',
        'Collaborated with cross functional business units to create reusable analytical tools to understand user activity in the application',
        'Maintained documentation for supply tracking functionality to ensure that calculations are well understood',
        'Transitioned data visualization infrastructure from a third party Business Intelligence tool to an in-house engineering solution that uses D3.js, Vue.js, Vega, Python, and PostgreSQL'
    ]
    const advantageBullets = [
        'Conceptualized wireframes and directed development team for nascent e-commerce platform', 
        'Automated advertising reports using Tableau' 
    ]

    return (
        <UNSTABLE_GRID2 container spacing={2} sx={{ ml: 2, mt: 2}}>
            <UNSTABLE_GRID2 xs={8}><Typography variant='h3'>Resume</Typography></UNSTABLE_GRID2>
            <UNSTABLE_GRID2 xs={8}>
                <Card>
                    <Typography variant="h5" sx={{ m: 2}}>
                    Experience
                    </Typography>
                    <Typography sx={{ ml: 3}}>McKinsey — Senior Software Engineer — July 2022 - Present</Typography>

            <BulletedList list={['Built front-end web applications using React', 'Converted JavaScript files to TypeScript']}/>
            <Typography sx={{ ml: 3}}>GHX — Data Visualization Engineer — January 2017 - May 2022</Typography>
            <BulletedList list={ghxBullets}/>
            <Typography sx={{ ml: 3}}>Advantage Solutions — Senior Business Analyst — September 2014 - January 2017</Typography>
            <BulletedList list={advantageBullets}/>
            </Card>
            </UNSTABLE_GRID2>
            <UNSTABLE_GRID2 xs={8}>
                <Card>
                <Typography variant="h5" sx={{ m: 2}}>
                    Education
                    </Typography>
                    <Typography sx={{ ml: 3}}>Sewanee: The University of the South — Sewanee, TN — May 2014 </Typography>
            <BulletedList list={['Bachelor of Arts in Economics and German, Summa Cum Laude']}/>
            </Card>
            
            </UNSTABLE_GRID2>
            <UNSTABLE_GRID2 xs={8}>
                <Card>
                <Typography variant="h5" sx={{ m: 2}}>
                    Conferences and Diversity
                    </Typography>
                    <BulletedList list={['InReach Junior Board Member — January 2023 - Present', 'Chair of data collection committee for GHX\'s diversity council — June 2017 - May 2022', 'GHX LGBTQ Employee Resource Group Founder — June 2017 - May 2022', 'Academy Health\'s Health Datapalooza poster presentation “Transforming purchasing data into clinically meaningful action” (February 2020, D.C.)']}/>
            </Card>
            
            </UNSTABLE_GRID2>
            <UNSTABLE_GRID2 xs={8}>
                <Card>
                <Typography variant="h5" sx={{ m: 2}}>
                    Skills
                    </Typography>
                    <BulletedList list={['Front-end: JavaScript, Vue, d3.js, Vega, dc.js, BI tools (Tableau, Periscope, Mode)', 'Back-end: PostrgreSQL, Django, Python']}/>
            </Card>
            
            </UNSTABLE_GRID2>
        </UNSTABLE_GRID2>
    )
}

export default About;