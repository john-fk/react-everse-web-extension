import React from 'react';
import Chart from 'react-apexcharts';

const CovidChart = ({ covidData }) => {
  const options = {
    labels: ['Infections', 'Recovered', 'Deaths'],
    colors: ['#D0D2DA', '#00B7FE', '#FD2254'],
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.15,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '78%',
        },
      },
    },
    legend: {
      position: 'left',
      fontSize: '14px',
      fontFamily: 'Alata, Arial',
      inverseOrder: true,
      /*
     TODO  Use this format option to show the legend percentages
     
      formatter: function (seriesName, opts) {
        console.log(opts);
        const percentage = opts.w.globals.seriesPercent;
        return [seriesName, parseInt(percentage[opts.seriesIndex])];
      },
     
      */
    },
  };

  return (
    <div className="covid__chart mt-5">
      <Chart
        options={options}
        series={covidData?.map((data) => data)}
        type="donut"
        size="500"
      />
    </div>
  );
};

export default CovidChart;
