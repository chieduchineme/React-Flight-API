import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';

const xScale = d3Scale.scaleBand()
    .range([0, 100])
    .padding(0.2);

const yScale = d3.scaleLinear()
    .range([100, 0])

const FlightChart = (props) => {
    const data = [
      { name: 'Arrivals', ArrivalCount: props.arrivalCount },
      { name: 'Departures', DepartureCount: props.departureCount} ];
 
    xScale.domain(data.map(d => d.name));
    yScale.domain([0, d3.max(data, d => d.value)])

    if (props.arrivalCount === 0 && props.departureCount === 0) {
        return (<></>)
    }

    else return (
      <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ArrivalCount" fill="red" />
        <Bar dataKey="DepartureCount" fill="blue" />
      </BarChart>
    );
  };
  
  export default FlightChart;