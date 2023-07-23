import React from 'react'

import ReactApexChart from "react-apexcharts";

const Donut = ({ data }) => {
  const colors = ['#22d6aa', '#d3f7ee']
  return (
    <ReactApexChart
      options={{
        chart: { type: 'donut' },
        colors: colors,
        legend: { show: false, },
        dataLabels: { enabled: false },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true, // Show the total value
                  label: ' ',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 900,
                  color: '#373d3f',
                  formatter: function (w) {
                    return data[0];
                  },

                }

              },
              offsetX: 0,
              offsetY: 0
            },

          },
        }
      }
      }
      series={data}
      type="donut"
      height="125px"
      width="100px"
    />
  )
}

export default Donut;
