"use strict";

// Class definition
var PB_DC_business = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4010',
  };
  // Shared variables
  let redData, targetEle;
  let chartObject = [];
  let StateData, xData;
  // Private functions

  /**
   * this will be used inside charts
   */
  const pageOpen = () => {
    // HTML Elements
    const _process = (data) => {
      let _return = true;

      _return &&= _process_a(data);
      _return &&= _process_b(data);

      return _return;
    }

    const _process_a = (data) => {
      StateData = data.pageState;
      PB_render_form.renderME(rendER.form.method.selectOnly, StateData, _dashboardLE.charts);

      return true;
    }
    const _process_b = (data) => {

      // fetch the required data.

      let sels;
      for (const dataKey in data) {
        _dashboardLE.charts.querySelectorAll('select').forEach((select) => {
          sels = $('[' + atr.core.target + '="' + dataKey + '"]')
          sels.val(data[dataKey]);
          sels.trigger('change');
        })
      }


      // render data for charts.
      Object.keys(data.session).forEach((key) => {
        xData = data[key]
        //hold the chart data into global  variable for rendering the chart
        chartsTarget(_dashboardLE.charts, {
          type : eTypes.chart,
          value: key,
          data : data.session[key]
        }, true);

      });

      return true;
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  /**
   * preloaded data as dropdowns for charts
   */


  /**
   * this is standard for create charts.
   * @param element
   * @param event
   * @param autoCall
   */
  const chartFormation = (element, event, autoCall) => {

    // getting the final HTML element
    targetEle = element.getAttribute('id') === event.value
      ? element.querySelector('[' + atr.core.child + '="chart"]>div')
      : element.querySelector('#' + event.value).querySelector('[' + atr.core.child + '="chart"]>div');

    // get data from ajax
    // ajaxResponse = dummy_ajax_charts_dsb.business([event.value, event.type], [event.data]);

    const _process = (data) => {
      return _process_chart_render(data);
    }
    const _process_chart_render = (data) => {
      redData = Option_charts.createDataset(data);

      if (autoCall) {
        redData = Option_charts.buildingOptions(redData, thePathArr, event.value);
        // initialize of the chart
        chartObject[event.value] = Plug_apexChart.Init_onCalling(targetEle, redData);
      }
      else {
        // update the initiated chart
        Plug_apexChart.Update_onCalling(chartObject[event.value], redData);
      }

      return true;
    }
    // load the chart on page load
    if (autoCall) {
      _process(xData);
      return true;
    }
    //load the chart on select event hit
    else {
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }
  }

  /**
   * this is standard for create and render table.
   */
  const tableFormation = () => {
    return true;
  }

  const chartsTarget = function (element, event, autoCall = false) {

    const chart_daily_sales = function (element, event, autoCall) {
      // chart formation
      chartFormation(element, event, autoCall);

      // table formation
      tableFormation();
      return true;
    }
    const chart_working_capital = function (element, event, autoCall) {

      // chart formation
      chartFormation(element, event, autoCall);

      // table formation
      tableFormation();
      return true;
    }
    const chart_heads_breakup = function (element, event, autoCall) {
      let _return = true;
      // chart formation
      _return &&= chartFormation(element, event, autoCall);
      // table formation
      _return &&= tableFormation();

      return _return;
    }


    switch (event.value) {
      case pb.dsb.charts.business.p.sales:
        return chart_daily_sales(element, event, autoCall);

      case pb.dsb.charts.business.p.working:
        return chart_working_capital(element, event, autoCall);

      case pb.dsb.charts.business.p.heads:
        return chart_heads_breakup(element, event, autoCall);

      default:
        return eventNotFound(event);
    }
  }

  // Public methods
  return {

    // loading charts new data.
    DCB_charts: function (_event) {
      return eleCheck() ? chartsTarget(_callEl, _event) : false;
    },

    // fetching all dropdown required in cards toolbar
    DCB_pageOpen: function () {
      return pageOpen();
    },

  };
}
();