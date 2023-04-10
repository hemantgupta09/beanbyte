"use strict";

// Class definition
var PB_render_chart = function () {
  // Shared variables
  let redData;
  let chartObject = [];

  // Private functions

  const renderApexChart = (element, data, uKey) => {
    redData = Option_charts.createDataset(data);

    // data loading into chart
    const profile = {
      chart: {
        type: 'area',
        height: 400
      },

      color: {
        base: 'Classic10',
      },

      tooltip: {
        style: [14, 400]
      }
    };
    const method = {
      chart: ACT_keys.method.sim,
      legend: ACT_keys.method.min,
      colors: ACT_keys.method.sim,
      grid: ACT_keys.method.adv,
      tooltip: ACT_keys.method.sim,
      states: ACT_keys.method.min,
      fill: ACT_keys.method.min,
      xaxis: ACT_keys.method.adv,
      yaxis: ACT_keys.method.adv,
      strock: ACT_keys.method.min,
      dataLabels: ACT_keys.method.min,
    };

    let chartOpt = Option_charts.getProperty('options');
    let chartDft = Option_charts.getProperty('default');
    for (const chartOptKey in chartOpt) {
      redData[chartOptKey] = Option_charts.buildingOptions(
        chartOptKey,
        method[chartOptKey] ?? ACT_keys.method.min,
        profile[chartOptKey] ?? chartDft[chartOptKey]);
    }

    // console.log(redData);
    chartObject[uKey] = Plug_apexChart.Init_onCalling(element, redData);

    return chartObject[uKey];
  }

  const updateApexChart = (chart, data) => {
    Plug_apexChart.Update_onCalling(chart, data, ACT_keys.update.options);
    return true;
  }

  // Public methods
  return {
    apexChart: function (element, data, key, chart = false) {
      return chart === false ? renderApexChart(element, data, key) : updateApexChart(chart, data);
    }
  };
}();