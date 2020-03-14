import React from 'react';
import { Line, Pie } from 'react-chartjs-2';

import Text from 'components/Text';

interface IHomeProps {
  lineData?: number[];
  rentOwned?: number[];
}

const lineConfig = (lineData: number[]) => ({
  labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
  datasets: [
    {
      borderWidth: 1,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: lineData
    }
  ]
});

const pieConfig = (rentOwned: number[]) => ({
  labels: ['rent', 'owned'],
  datasets: [
    {
      backgroundColor: ['#c6D4ff', '#ff5a5f', '#fcbc5e', '#f4866b', '#58c8ce'],
      data: rentOwned
    }
  ]
});

function Home({ lineData = [0, 0], rentOwned = [0, 0] }: IHomeProps) {
  return (
    <>
      <div>
        <Text type="small">Appreciation</Text>
        <Line
          data={lineConfig(lineData)}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    reverse: false
                  }
                }
              ]
            },
            layout: {
              padding: {
                left: 10,
                top: 20
              }
            },
            tooltips: {
              callbacks: {
                label: (item: any, data: any) =>
                  `$${data.datasets[item.datasetIndex].data[item.index]}`
              }
            }
          }}
        />
      </div>
      <div>
        <Text type="small">Rent vs Owned</Text>
        <Pie
          data={pieConfig(rentOwned)}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: {
              position: 'right'
            },
            layout: {
              padding: {
                top: 20
              }
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
      </div>
    </>
  );
}

export default Home;
