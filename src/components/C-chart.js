import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ColChart = () => {

  const seriesData = [
    {
      name: 'Employer',
      data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 84]
    }, {
      name: 'Employee',
      data: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 84]
    },
    {
      name: 'Total Interest',
      data: [9, 18, 27, 36, 45, 54, 63, 72, 81, 97, 99, 102, 110],

    }
  ]

  const dataSum = (index) => {
    let sum = 0;
    let dataArray = seriesData[index]
    dataArray.data.forEach(element => {
      sum += element
    });
    return sum;
  }

  return (
    <ReactApexChart
      series={
        seriesData
      }
      options={
        {
          chart: {
            type: "bar",
            toolbar: {
              show: false
            },
            stacked: true
          },
          colors: ['#0800a3', '#4935ff', '#85afff'],
          legend: {
            position: 'top',
            formatter: (str, data) => {
              let index = data.seriesIndex;
              return `${str} : <b>K ${dataSum(index)}</b>`
            },
            markers:{
              radius:"5px",
              width:"15px"
            }
          },
          xaxis: {
            categories: [20, "", 25, "", 30, "", 35, "", 40, "", 60, "", 65],
          },
          dataLabels: {
            enabled: false
          },
          yaxis: {
            
            labels: {
              formatter: function (value) {
                return `$${value}`;
              },

            }
          },
          plotOptions: {
            bar: {
              columnWidth: "50%"
            }
          }
        }
      }

      type='bar'
      height={"280px"}

    />
  )
}

export default ColChart
