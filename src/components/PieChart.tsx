import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

const PieChart = () => {

    const [chartData, setChartData] = useState<any>(null)

    useEffect(() => {

    fetch("http://localhost:5000/api/v1/vm/count-user")
      .then((res) => res.json())
      .then((json) => {
        const { data } = json;
        setChartData({
            series: data.map((item: any) => Number (item?.total_pel)),
            
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              labels: data.map((item: any) => item?.rute_name + " [ " + item?.corridor_code_var + " ] "),
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val:any, opts:any) {
                    console.log(val)
                  return val +" - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Gradient Donut with custom Start-angle'
              },
              responsive: [{
                breakpoint: 100,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
        })
      })
    })

  return (
    <div id="chart">
        {chartData &&
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" width="500"/>
        }
    </div>

  )
}

export default PieChart