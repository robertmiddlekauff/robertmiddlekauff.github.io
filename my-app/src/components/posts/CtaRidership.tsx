import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import D3BarChart from '../dataViz/D3BarChart';
import CollapseHelper from '../CollapseHelper';

const CtaRidership = () => {
  const ridership = [
    { year: '2012', bus: 314.4, rail: 231.2 },
    { year: '2013', bus: 300.1, rail: 229.1 },
    { year: '2014', bus: 276.1, rail: 238.1 },
    { year: '2015', bus: 274.3, rail: 241.7 },
    { year: '2016', bus: 259.1, rail: 238.6 },
    { year: '2017', bus: 249.2, rail: 230.2 },
    { year: '2018', bus: 242.2, rail: 225.9 },
    { year: '2019', bus: 237.3, rail: 218.5 },
    { year: '2020', bus: 121.5, rail: 76 },
    { year: '2021', bus: 117.4, rail: 78.6 },
    { year: '2022', bus: 137.8, rail: 102.9 },
    { year: '2023', bus: 144.9, rail: 118.1 }
  ];

  return (
    <CollapseHelper>
      <Card>
        <CardHeader title="CTA Sees Declining Ridership Since 2012" subheader="February 23, 2023" />
        <CardContent>
          If you have ridden the &quot;L&quot; at any time since 2020, you have probably noticed
          that there are fewer riders than there used to be. However many people do not know that
          CTA ridership has been declining for the better part of a decade. This underscores the
          challenge that the CTA is facing as it tries to bring back riders into the system. With
          more people working from home and choosing other transportation options, the CTA faces
          serious trouble ahead.
        </CardContent>
        <CardHeader title="CTA Ridership (Millions)"></CardHeader>
        <D3BarChart data={ridership} independentVar="year" dependentVar="rail" />
      </Card>
    </CollapseHelper>
  );
};

export default CtaRidership;
