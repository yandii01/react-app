import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/vm/count-user")
      .then((res) => res.json())
      .then((json) => {
        const { data } = json;
        // console.log(data)
        setChartData({
          options: {
            chart: {
              id: "basic-bar",
            },
            xaxis: {
              categories: data.map((item: any) => item?.rute_name + " [ " + item?.corridor_code_var + " ]"),
            },
          },
          series: [
            {
              name: "series-1",
              data: data.map((item: any) => Number (item?.total_pel)),
            },
          ],
        });
      });
  }, []);

  return (
    <div className="app">
      <div className="chart">
        {chartData && 
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="500"
        />
        }
      </div>
    </div>
  );
}

export default ApexChart;
