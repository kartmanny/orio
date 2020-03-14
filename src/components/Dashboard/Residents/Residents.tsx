import React from 'react';
import { HorizontalBar, Pie } from 'react-chartjs-2';

interface IResidentsProps {
  barData?: number[];
  pieData?: number[];
}

const pieConfig = (pieData: number[]) => ({
  labels: [
    "Master's degree or higher",
    "Bachelor's degree",
    "Some college or associate's degree",
    'High school diploma or equivalent',
    'Less than high school diploma'
  ],
  datasets: [
    {
      backgroundColor: ['#c6D4ff', '#ff5a5f', '#fcbc5e', '#f4866b', '#58c8ce'],
      data: pieData
    }
  ]
});

const barConfig = (barData: number[]) => ({
  labels: ['Median Income', 'National Median Income'],
  datasets: [
    {
      backgroundColor: ['#ff5a5f', '#ff757a'],
      barThickness: 35,
      data: barData
    }
  ]
});

function Residents({ barData = [0, 0], pieData = [0, 0] }: IResidentsProps) {
  return (
    <>
      <HorizontalBar
        data={barConfig(barData)}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          layout: {
            padding: {
              right: -100
            }
          },
          tooltips: {
            enabled: true,
            callbacks: {
              label: (item: any, data: any) =>
                `$${data.datasets[item.datasetIndex].data[item.index]}`
            }
          },
          animation: {}
        }}
      />
      <Pie
        data={pieConfig(pieData)}
        height={200}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            position: 'right'
          },
          tooltips: {
            callbacks: {
              label: (item: any, data: any) =>
                `${data.labels[item.index]}: ${
                  data.datasets[item.datasetIndex].data[item.index]
                }%`
            },
            bodyFontColor: '#484848',
            backgroundColor: 'rgba(255, 255, 255, .85)'
          }
        }}
      />
    </>
  );
}

export default Residents;
/*
import React from 'react';
import { Pie } from 'react-chartjs-2';

const ATTRIBUTES = [
  [
    "Master's degree or higher",
    "Bachelor's degree",
    "Some college or associate's degree",
    'High school diploma or equivalent',
    'Less than high school diploma'
  ],
  [ "Rented", "Owned"],
]
const PieChart = ({ pieData, type }) => {
  const config = {
    labels: ATTRIBUTES[type],
    datasets: [
      {
        backgroundColor: [
          '#c6D4ff',
          '#ff5a5f',
          '#fcbc5e',
          '#f4866b',
          '#58c8ce'
        ],
        data: pieData
      }
    ]
  };
  return (
    <div>
      <Pie
        data={config}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            position: 'right'
          },
          tooltips: {
            callbacks: {
              label: (item, data) =>
                `${data.labels[item.index]}: ${
                  data.datasets[item.datasetIndex].data[item.index]
                }%`
            },
            bodyFontColor: '#484848',
            backgroundColor: 'rgba(255, 255, 255, .85)'
          }
        }}
      />
    </div>
  );
};

export default PieChart;
*/
