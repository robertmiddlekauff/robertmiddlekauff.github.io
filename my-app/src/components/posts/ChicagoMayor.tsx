
import React from 'react';
import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import BarChartFactory from '../dataViz/BarChartFactory';
import CollapseHelper from '../CollapseHelper';
import { NavLink } from 'react-router-dom';

const ChicagoMayor = () => {
    const firstRound = [
        {name: 'Lori Lightfoot', votes: 97667},
        {name: 'Toni Preckwinkle', votes: 89343},
        {name: 'Bill Daley', votes: 82294},
        {name: 'Willie Wilson', votes: 59072},
        {name: 'Susana Mendoza', votes: 50373},
        {name: 'Amara Enyia', votes: 44589},
        {name: 'Jerry Joyce', votes: 40099},
        {name: 'Gery Chico', votes: 34521},
        {name: 'Paul Vallas', votes: 30236}
    ]

    const firstRoundTopTwo = [
        {name: 'Lori Lightfoot', votes: 97667},
        {name: 'Toni Preckwinkle', votes: 89343},
        {name: 'Others', votes: 369834}
    ]

    const electionPrimary1983 = [
        {name: 'Harold Washington', votes: 424324},
        {name: 'Jane Byrne', votes: 393500},
        {name: 'Richard M. Daley', votes: 346835},
        {name: 'Others', votes: 5064}
    ]



    return (
        <CollapseHelper>
        <Card>
        <CardHeader title='Chicago Mayoral Election Not Democratic' subheader='February 13, 2023'/>
        <CardContent>
        While it may not surprise some that Chicago does not have democratic (small d) elections, it is definitely unfortunate. The reason for this is because of its
            non-partisan jungle primary electoral system, in which the top two candidates from the first round advance to a runoff. While it might seem innocuous or at least preferrable
            to our 2-party primary system of government, this system can lead to many unexpected outcomes.

        </CardContent>
        <CardContent>
        Chicago used partisan elections for most of its history until the 1983 democratic primary when Harold Washington won with 36% of the vote. While many
        were excited about Chicago's first Black mayor, others were frustrated that the white vote was split between Byrne and Daley.

        <CardHeader title='Chicago 1983 Democratic Primary'></CardHeader>
        <BarChartFactory data={electionPrimary1983} />
        </CardContent>

        <CardContent>This led the city to change how mayors are elected and led to the creation of a nonpartisan primary and runoff between the top two if one candidate
        did not receive 50% of the vote. While it is a better system than the partisan system, particularly in a city where Republicans are no longer competitive, it can lead to some unfortunate results.
        <CardHeader title='Chicago 2019 Nonpartisan Primary' />
        <BarChartFactory data={firstRound} />
        </CardContent>
        <CardContent>
            The problem with this system is that the top two candidates will advance to the runoff no matter how mnay votes they receive. Theoretically, candidates could
        receive as low as 10% or even 1% of the vote and advance to the runoff if the vote was split enough. In 2019 Lori Lightfoot and Preckwinkle together received only 17.5% and 16% respectively. The rest 
        of Chicago's voters were ignored.
        <CardHeader title='Chicago 2019 Nonpartisan Primary (consolidated opponents)' />
        <BarChartFactory data={firstRoundTopTwo} />
        <Typography variant='body1' sx={{mt: 3}}>While Lori, the top vote getter, went on to win the second round, it's clear why this system is unfair to most voters and needs to be changed.
        Luckily there are many solutions to this problem out there such as ranked choice voting and approval voting.
        </Typography>
        </CardContent></Card></CollapseHelper>
    )

}

export default ChicagoMayor