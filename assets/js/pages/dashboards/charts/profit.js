"use strict";

var PB_DC_profit = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4010',
  };
  // Shared variables
  let redData, targetEle;
  var StateData;
  let chartObject = [];
  let xData;

  //Private functions

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

      console.log(data)
      // render data for charts.
      Object.keys(data.session).forEach((key) => {
        xData = data[key];

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
    //ajaxResponse = dummy_ajax_charts_dsb.profit([event.value, event.type], [event.value]);

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
      return true
    }
    // load the chart when select event hit
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
    // todo @somesh @due: table render & append.
    return true;
  }

  const chartsTarget = function (element, event, autoCall = false) {
    const chart_items_trade = function (element, event, autoCall) {
      let _return = true;
      // chart formation
      _return &&= chartFormation(element, event, autoCall);
      // table formation
      _return &&= tableFormation();

      return _return;
    }
    const chart_gross_profit = function (element, event, autoCall) {
      let _return = true;
      // chart formation
      _return &&= chartFormation(element, event, autoCall);
      // chart formation
      _return &&= tableFormation();

      return _return;
    }
    const chart_profit_item = function (element, event, autoCall) {
      let _return = true;
      // chart formation
      _return &&= chartFormation(element, event, autoCall);
      // chart formation
      _return &&= tableFormation();

      return _return;
    }

    switch (event.value) {
      case pb.dsb.charts.profit.p.trade:
        return chart_items_trade(element, event, autoCall);

      case pb.dsb.charts.profit.p.gross:
        return chart_gross_profit(element, event, autoCall);

      case pb.dsb.charts.profit.p.item:
        return chart_profit_item(element, event, autoCall);

      default:
        return eventNotFound(event);
    }
  }

  // Public methods
  return {

    // loading charts new data.
    DCP_charts: function (_event) {
      return eleCheck() ? chartsTarget(_callEl, _event) : false;
    },

    // fetching all dropdown required in cards toolbar
    DCP_pageOpen: function () {
      return pageOpen();
    },

  };
}
();