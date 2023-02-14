import { Box } from '@mui/material';
import React, { FunctionComponent, ReactNode } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const CustomTooltip = ({
  active,
  payload,
  label
}: {
  active?: boolean;
  payload?: { value: number; dataKey: string }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    const nf = Intl.NumberFormat();
    return (
      <Box sx={{ backgroundColor: 'black', p: 3 }}>
        <div>{`${label} : ${nf.format(payload[0].value)} ${payload[0].dataKey}`}</div>
      </Box>
    );
  }

  return null;
};

const BarChartFactory = ({
  data,
  primaryKey,
  measureKey,
  fillLogic
}: {
  data: { [key: string]: string | number | boolean }[];
  primaryKey: string;
  measureKey: string;
  fillLogic?: ReactNode;
}) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={primaryKey} />
        <YAxis label={measureKey} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey={measureKey} fill="#8884d8">
          {fillLogic}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartFactory;
