"use strict";

// Class definition
var Plug_apexChart = function () {
  // Shared variables


  // Private functions

  const render = (ele, opt) => {
    let chart = new ApexCharts(ele, opt);
    chart.render();
    return chart;
  }

  const re_render = (ele, opt) => {
    ele.innerHTML = '';
    let chart = new ApexCharts(ele, opt);
    sleep(100).then(function () {
      chart.render()
    })
  }

  /**
   * https://apexcharts.com/docs/methods/#updateSeries
   * @param chart
   * @param data
   */
  const update_series = (chart, data) => {
    // this having some issues with loading.
    return chart.updateSeries(data);
  }
  const update_options = (chart, options) => {
    return chart.updateOptions(options);
  }
  const append_data = (chart, data) => {
    // this has not tested yet
    return chart.appendData(data);
  }
  const show_series = (chart, seriesName) => {
    // this has not tested yet
    return chart.showSeries(seriesName);
  }
  const hide_series = (chart, seriesName) => {
    // this has not tested yet
    return chart.hideSeries(seriesName);
  }
  const reset_series = (chart, data) => {
    // this has not tested yet
    const [sUpdate, sReset] = [data[0] ?? true, data[1] ?? true]
    return chart.resetSeries(sUpdate, sReset);
  }
  const destroyChart = (chart, none) => {
    chart.destroy();
  }
  const downloadPDF = (chart) => {
    var dataURL = chart.dataURI().then(({imgURI, blob}) => {
      const {jsPDF} = window.jspdf
      const pdf = new jsPDF();
      pdf.addImage(imgURI, 'PNG', 0, 0);
      pdf.save("pdf-chart.pdf");
    })
  }
  const apexChart_init = (element, options, method) => {
    switch (method) {
      case ACT_keys.init.render:
        // render fresh chart
        return render(element, options);

      case ACT_keys.init.reload:
        // render already loaded chart
        return re_render(element, options);
    }
  }

  const apexChart_update = (element, options, method) => {
    switch (method) {
      case ACT_keys.update.series:
        return update_series(element, options);

      case ACT_keys.update.options:
        return update_options(element, options);

      case ACT_keys.update.append:
        return append_data(element, options);

      case ACT_keys.update.show:
        return show_series(element, options);

      case ACT_keys.update.hide:
        return hide_series(element, options);

      case ACT_keys.update.reset:
        return reset_series(element, options);

    }
  }

  // Public methods
  return {
    Init_onDOMLoad: function () {
      // nothing much to call directly.
    },

    /**
     * this init and render the chart.
     * @param element
     * @param options
     * @param method default is 'render'
     * @returns {*|void}
     * @constructor
     */
    Init_onCalling: function (element, options, method = ACT_keys.init.render) {
      return apexChart_init(element, options, method);
    },

    /**
     * this function changes the chart options as same object.
     * @param chart apexchart object of called chart
     * @param data data or option for change the chart
     * @param method default is options
     * @returns {*}
     * @constructor
     */
    Update_onCalling: function (chart, data, method = ACT_keys.update.options) {
      return apexChart_update(chart, data, method);
    }

  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  Plug_apexChart.Init_onDOMLoad();
});