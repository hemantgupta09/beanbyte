"use strict";

// Class definition
var Plug_dataTables = function () {

  // Shared variables


  // Private functions
  const render = (tableEle, options) => {
    return $(tableEle).DataTable(options);
  }

  const re_render = (ele, opt) => {
    //
  }

  const search = (table, data) => {
    table.search(data.target.value).draw();
  }
  const filter = (table, data) => {

    const a = data.target.value;

    table.search(a).draw();
  }
  const reset = (table, data) => {
    return table.search('').draw();
  }

  const show_series = (chart, data) => {
    // this has not tested yet
    return chart.showSeries(data);
  }
  const hide_series = (chart, data) => {
    // this has not tested yet
    return chart.hideSeries(data);
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
  const dataTable_init = (element, options, method) => {
    switch (method) {
      case 'new':
        // render fresh chart
        return render(element, options);

      case 'renew':
        // render already loaded chart
        return re_render(element, options);
    }
  }

  const dataTable_update = (element, options, method) => {
    switch (method) {
      case 'series':
        return update_series(element, options);
      case 'options':
        return update_options(element, options);
      case 'append':
        return append_data(element, options);
      case 'show':
        return show_series(element, options);
      case 'hide':
        return hide_series(element, options);
      case 'reset':
        return reset_series(element, options);
    }
  }

  const dataTable_run = (element, options, method) => {
    switch (method) {
      case 'series':
        return update_series(element, options);
      case 'options':
        return update_options(element, options);
      case 'append':
        return append_data(element, options);
      case 'show':
        return show_series(element, options);
      case 'hide':
        return hide_series(element, options);
      case 'reset':
        return reset_series(element, options);
    }
  }

  // Public methods
  return {
    Init_onDOMLoad: function () {
      // nothing much to call directly.
    },
    Init_onCalling: function (element, options, method) {
      return dataTable_init(element, options, method);
    },
    Run_onCalling: function (table, data, method) {
      return dataTable_run(table, data, method);
    },
    Update_onCalling: function (table, data, method) {
      return dataTable_update(table, data, method);
    }

  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  Plug_dataTables.Init_onDOMLoad();
});