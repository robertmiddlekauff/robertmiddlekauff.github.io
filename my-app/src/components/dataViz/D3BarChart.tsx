import UseD3 from './UseD3';

import React, { FC } from 'react';

import { scaleBand, scaleLinear, axisBottom, axisLeft, scaleOrdinal, stack, schemeDark2 } from 'd3';

type ChartData = { [key: string]: string | number };

interface ChartProps {
  data: ChartData[];
  dependentVar: string;
  independentVar: string;
}

const D3BarChart: FC<ChartProps> = ({ data, independentVar }) => {
  const ref = UseD3(
    (svg) => {
      const height = 500;

      const width = 500;

      const margin = { top: 50, right: 30, bottom: 30, left: 40 };

      const columns = Object.keys(data[0]);
      columns.splice(columns.indexOf(independentVar), 1);

      const subgroups = ['rail', 'bus'];
      const color = scaleOrdinal<string>().domain(subgroups).range(schemeDark2);

      const stackedData = stack<ChartData>().keys(subgroups)(data);
      console.log(stackedData);

      const x = scaleBand<string>()
        .domain(data.map((d) => d[independentVar] as string))

        .rangeRound([margin.left, width - margin.right])

        .padding(0.1);

      const y = scaleLinear()
        .domain([0, 600])

        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g: any) =>
        g
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(axisBottom(x).tickSizeOuter(0));

      const y1Axis = (g: any) =>
        g

          .attr('transform', `translate(${margin.left},0)`)

          .style('color', 'white')

          .call(axisLeft(y).ticks(null, 's'))

          .call((g: any) => g.select('.domain').remove())

          .call((g: any) =>
            g

              .append('text')

              .attr('x', -margin.left)

              .attr('y', 10)

              .attr('fill', 'currentColor')

              .attr('text-anchor', 'start')
          );

      svg.select('.x-axis').call(xAxis);

      svg.select('.y-axis').call(y1Axis);

      svg

        .select('.plot-area')

        .attr('fill', 'steelblue')

        .selectAll('.bar')

        .data(stackedData)
        .enter()
        .append('g')
        .attr('fill', (d) => color(d.key))
        .selectAll('rect')
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function (d) {
          return d;
        })
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.data.year as string) as number)
        .attr('y', function (d) {
          return y(d[1]);
        })
        .attr('height', function (d) {
          return y(d[0]) - y(d[1]);
        })
        .attr('width', x.bandwidth());

      const legend = svg
        .append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(' + 12 + ', 0)');

      legend
        .selectAll('rect')
        .data(columns)
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', function (d, i) {
          return i * 18;
        })
        .attr('width', 12)
        .attr('height', 12)
        .attr('fill', function (d) {
          return color(d);
        });

      legend
        .selectAll('text')
        .data(columns)
        .enter()
        .append('text')
        .text(function (d) {
          return d;
        })
        .attr('x', 18)
        .attr('y', function (d, i) {
          return i * 18 + 12;
        })
        .attr('fill', 'white')

        .attr('text-anchor', 'start')
        .attr('alignment-baseline', 'hanging');
    },

    data.length
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,

        width: '100%',

        marginRight: '0px',

        marginLeft: '0px'
      }}
    >
      <g className="plot-area" />

      <g className="x-axis" />

      <g className="y-axis" />
    </svg>
  );
};

export default D3BarChart;
