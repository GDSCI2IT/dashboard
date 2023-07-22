import React from 'react'
import ReactApexChart from "react-apexcharts";

const ColChart = () => {
  const colors = ['#22d6aa', '#d3f7ee']
  return (
    <div>
      <ReactApexChart
        options={{
          chart: { type: 'donut' },
          colors: colors,
          legend: { show: false },
          dataLabels: { enabled: false },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: false, // Hide the total value
                  },

                }
              }
            }
          }
        }}
        series={[75, 25]}
        type="donut"
        width="120px"
      />
    </div>
  )
}

export default ColChart
