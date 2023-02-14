import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import BarChartFactory from '../dataViz/BarChartFactory';
import CollapseHelper from '../CollapseHelper';
import { Cell } from 'recharts';

const ChicagoMayorPart2 = () => {
  const numberOfCandidates = [
    { name: '1999', candidates: 2, runoff: false },
    { name: '2003', candidates: 3, runoff: false },
    { name: '2007', candidates: 3, runoff: false },
    { name: '2011', candidates: 4, runoff: false },
    { name: '2015', candidates: 4, runoff: true },
    { name: '2019', candidates: 14, runoff: true },
    { name: '2023', candidates: 9, runoff: true }
  ];

  const fillLogic = numberOfCandidates.map((entry, index) => (
    <Cell cursor="pointer" fill={entry.runoff ? '#8884d8' : 'gray'} key={`cell-${index}`} />
  ));
  return (
    <CollapseHelper>
      <Card>
        <CardHeader
          title="Factionalism Altering Race For Chicago Mayor"
          subheader="February 14, 2023"
        />
        <CardContent>
          Not only have close elections recently altered Chicago&apos;s political landscape, but a
          new political trend is developing in Chicago politics. Across the democratic world, voters
          are abandoning center-right and center-left political parties and gravitating to the
          extremes. In Chicago, something similar is happening: as the political machine loses
          power, our non-partisan mayoral election is creating a power vaccuum.
        </CardContent>
        <CardContent>
          From 1999 - 2011, Chicagoans elected Richard Daley and Rahm Emmanual in the first round of
          voting with over 50% of the vote. Then in 2015, something new happened when Rham Emanuel
          only won 45% of the vote and had to beat Chuy Garcia in a runoff. When Rahm Emanuel
          retired in 2019, 14 candidates sought the office which led to Lori Lightfoot and Toni
          Preckwinkle to proceed to the runoff each with less than 20% of the vote. The same trend
          is set to occur this year because Lori, the current incumbent, is unpopular.
          <CardHeader title="Number Of Candidates In Chicago's Mayoral Elections (First Round)"></CardHeader>
          <BarChartFactory
            data={numberOfCandidates}
            primaryKey="name"
            measureKey="candidates"
            fillLogic={fillLogic}
          />
        </CardContent>
        <CardContent>
          This is a problem. When over 50% of voters are not determing their mayor, the system is
          not democratic. We need political reform to make sure that every voter&apos;s voice is
          heard. Solutions like ranked choice voting are a simple solution to our problems.
        </CardContent>
      </Card>
    </CollapseHelper>
  );
};

export default ChicagoMayorPart2;
