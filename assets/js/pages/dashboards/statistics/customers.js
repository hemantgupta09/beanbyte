"use strict";

// Class definition
var PB_DS_customers = function () {

  // Shared variables
  let StateData;
  let xResponse, xData;
  let Layout, Direct;
  let formEl;
  let $table;
  let targetEle;
  let redData, chartObject = {};
  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4011',
  };


  /**
   * this will be used for show page's base-0 data.
   */

  const pageOpen = () => {
    /**
     * this data save into variables.
     * it will be called when create form initiated.
     * @param data
     * @private
     */
    const _process = (data) => {
      xData = data.month;
      _process_a(data);
      _process_b(data);
      return true;
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_b = (data) => {
      Direct = _directLE.visits;
      console.log(Direct)
      let header = Direct.querySelector('[' + atr.core.control + '="header"]');
      let body = Direct.querySelector('#month-navtab')

      let percent = PB_render_common.returnOnCall(StateData.header.amount, 'percent', [StateData.header.limit]);
      StateData.header["percent"] = percent[0]
      header.innerHTML = PB_extend_append.$_single(header.innerHTML, StateData.header);
      PB_render_common.initOnCall(header);
      targetChart(body, {
        value: "month",
        type : eTypes.navtab
      }, true);
    }


    // other things, not connected to dynamic data.
    $table = new tablesProfile_dashboards(thePathArr);

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    return ajax;
  }

  const loadChart = (element, event, data) => {
    console.log(element)
    // getting the final HTML element
    targetEle = element.getAttribute('id') === event.value + "-" + event.type
      ? element.querySelector('[data-pb-child="chart"]>div')
      : element.querySelector('#' + event.value + "-" + event.type).querySelector('[data-pb-child="chart"]>div');

    redData = Option_charts.createDataset(data);
    redData = Option_charts.buildingOptions(redData, thePathArr, event.value);
    console.log(redData);
    // initialize of the chart
    chartObject[event.value] = Plug_apexChart.Init_onCalling(targetEle, redData);
  }

  const renderTable = function (targetTableEle, tableRowData) {

    let renderedData;

    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      if (targetEle.getAttribute(atr.core.loadOf.table) === '1') {
        return true;
      }

      //let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      $table.matchingCalled(key);

      if (tableRowData[key]) {
        //now we make the profile
        renderedData = PB_render_table.simpleRender(tableRowData[key], $table.tableShapes, 'array');
      }
      else {
        let columns;

        console.log('status has failed, table data :' + JSON.stringify(tableRowData));
        columns = targetEle.querySelectorAll('thead>tr>th').length;
        renderedData = PB_render_table.zeroRow(columns);
      }

      // calling other basic plugin function
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      targetEle.setAttribute(atr.core.loadOf.table, '1');

      //datatable code
      //      dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      //      filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  const loadTable = (element, event, data) => {
    // getting the final HTML element
    targetEle = element.getAttribute('id') === event.value + "-" + event.type
      ? element.querySelector('[data-pb-child="table"]>div')
      : element.querySelector('#' + event.value + "-" + event.value).querySelector('[data-pb-child="table"]>div');

    Object.keys(data.tableone).forEach((key) => {
      let obj = data.tableone[key];
      let percent = PB_render_common.returnOnCall(obj[2], 'percent', [StateData.header.amount]);
      obj.push(percent[0]);
    })
    let targetTableEle = {
      tableone: targetEle
    }
    renderTable(targetTableEle, data);

    return true
  }

  const targetChart = (element, event, onPageLoadCall = false) => {


    const _process = (data) => {
      _process_a(data);
      return true;
    }

    const _process_a = (data) => {
      console.log(data)
      loadChart(element, event, data.chart);
      loadTable(element, event, data);
    }
    if (onPageLoadCall) {
      _process(xData);
    }
    else {
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);
    }
    return true;
  }


  // Public methods
  return {

    DSC_targetChart: function (_event) {
      return eleCheck() ? targetChart(_callEl, _event) : false;
    },
    // fetching all upcoming required details
    DSC_state: function () {
      return pageOpen();
    },

  };
}();