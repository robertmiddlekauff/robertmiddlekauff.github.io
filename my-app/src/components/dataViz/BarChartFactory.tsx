import { Box } from '@mui/material';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

const CustomTooltip = ({ active, payload, label }: {active?: boolean, payload?: any, label?: string}) => {
    if (active && payload && payload.length) {
      return (
          <Box sx={{backgroundColor: 'black', p: 3}}>
              <div>{`${label} : ${payload[0].value}`}</div>
          </Box>
      );
    }
  
    return null;
  };

const BarChartFactory = ({data}: {data: {name: string; votes: number;}[]}) => {
return (

    <BarChart width={730} height={500} data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip content={<CustomTooltip />}/>
<Legend />
<Bar dataKey="votes" fill="#8884d8" />
</BarChart>
        )
}

export default BarChartFactory;