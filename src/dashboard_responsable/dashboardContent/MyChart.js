import React from "react";
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



export default function Mychart({data}){
    const mylabels=data.chiffredaffaire.map(elements=>elements.date);
    const mydatasetschifredaffaire=data.chiffredaffaire.map(elements=>({id:1,
        label: "chiffre d affaire",
        data: [elements.sum],
    }));

    return    <Line
  datasetIdKey='id'
  data={{
    labels:mylabels,
    datasets: [
      {
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        label: "chiffre d affaire",
        data: data.chiffredaffaire.map(elements=>elements.sum),
      },
      {
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        label: 'taxe',
        data:  data.chiffredaffaire.map(elements=>elements.taxe),
      },
    ],
  }}
/>
}