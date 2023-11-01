import React from 'react';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    indexAxis: 'y',
    elements: 
    {
      bar: 
      {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: 
      {
        position: 'left',
      },
      title: 
      {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
};

const labels = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
const data = {
    labels,
    datasets:[
     {
        label:'Dataset 1',
        data:[1,2,3,4,5],
        borderColor: 'rgb(255,99,132)',
        backgroundColor:'rgba(255,99,132,0.5)',
     },
     {
        label:'Dataset 2',
        data:[1,2,3,4,5],
        borderColor: 'rgb(53,162,235)',
        backgroundColor:'rgba(53,162,235,0.5)',
     }
    ]
}

const HorizontalChart = () => {
  return (
   <div style={{width:'80%',height:'50%'}}><Bar data={data} options={options}/></div>
  )
}

export default HorizontalChart;