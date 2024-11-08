import React from 'react';
import { VictoryPie } from 'victory';
import { useTheme } from '@emotion/react';
import { tokens } from '../scenes/Theme'; 
import { PieMockData as mockData } from '../Data/Mockdata';

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode) || {
    grey: { 100: "#cccccc", 200: "#dddddd", 500: "#888888", 800: "#333333" },
  };

  // Use your mock data or define your pie chart data
  const data = mockData || [
    { x: 'Group A', y: 35 },
    { x: 'Group B', y: 40 },
    { x: 'Group C', y: 25 },
  ];

  return (
    <div>
      <h2>My Pie Chart</h2>
      <VictoryPie
        data={data}
        colorScale={[colors.grey[200], colors.grey[500], colors.grey[800]]} // Using colors from the theme
        radius={100}
        labelRadius={60} // Adjust label position
        style={{
          data: {
            stroke: '#fff', // White stroke for the pie slices
            strokeWidth: 2,
          },
          labels: {
            fontSize: 16,
            fill: '#000',
          },
        }}
      />
    </div>
  );
};

export default PieChart;
