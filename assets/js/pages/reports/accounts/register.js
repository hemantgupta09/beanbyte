"use strict";

// Class definition
var PB_RA_register = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4340',
  };
  // Shared variables
  let StateData, formData, redData;
  let formEle, tableEle, filterEle, targetEle;
  var xResponse, xData;
  let tableObject = [];
  let chartObject = [], select;
  var $table;

  // Private functions

  /**
   * loading list of account and render into form.
   */
  const pageOpen = () => {
    /**
     * this data save into variables.
     * it will be called when create form initiated.
     * @param data
     * @private
     */
    const _process = (data) => {
      _process_a(data);
      _process_b(data);

      return true
    }

    const _process_a = (data) => {
      redData = PB_extend_foreign.$_remote('single', data, [['accounts', 'groups', 4, 1]]);
      let element = PBapp.querySelector('#tab_search').querySelector('form');
      const dataMerged = {...redData, ...StateData};
      PB_render_form.renderME(rendER.form.method.selectOnly, dataMerged, element)
    }
    const _process_b = (data) => {
      StateData = data;
      console.log(StateData);
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  const tableFormation = function (data) {
    // rendering data into table using above profile.
    redData = PB_render_table.simpleRender(data, $table.tableShapes, 'array');

    // have look into plain HTML table
    //console.log(redData);

    tableEle.appendChild(redData)

    // update table status
    tableEle.setAttribute(atr.core.loadOf.table, '1');

    // apply common renders
    PB_render_common.initOnCall(tableEle);
  }

  const load_regt_search = function (element, event) {
    /*
     formEle = element.querySelector('form');
     PB_extend_reset.formReset(formEle, 'load');
     */
    return true;
  }
  const load_regt_report = function (element, event) {

    if (element.getAttribute(atr.core.loadOf.tab) === '1') {

    }
    // run the process.
    formEle = _reportLE[event.place].querySelector('form');
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[' + atr.core.target + '="' + kws.value.filters + '"]');

    // collect form data
    formData = PB_extend_collect.$_step(formEle);
    if (!formData) return false;


    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      if (!data.status) {
        toastr.error(data.message, data.title);
        return false;
      }
      xData = data.data;

      // foreign id matching
      redData = PB_extend_foreign.$_remote('single', xData,
        [
          ['register', 'dates', 0, 0],
          ['register', 'ledgers', 1, 0]
        ])

      $table.matchingCalled(event.value);

      // shape = $table.tableShapes;
      // option = $table.tableOptions;
      // method = $table.tableMethods;
      // profile = $table.tableParams;

      console.log(xData)
      tableFormation();


    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    return ajax;

  }
  const load_regt_summary = function (element, button) {
    navtab_regt_summary(element, button);
  }


  const load_regt_charts = function (element, button) {
    return navtab_regt_charts(element, button);
  }


  const dataTablesInit = (eventValue) => {
    let DT_options = {};
    // create options
    const end = PB_option_datatables.optionKeys();
    end.forEach((i) => {
      if ($table.tableOptions[i]) {
        DT_options[i] = PB_option_datatables.building(i, $table.tableMethods[i], $table.tableParams[i]);
      }
    })

    console.log(DT_options);

    let optionsObj = {};
    Object.entries(DT_options).forEach(([key, value]) => {
      optionsObj = {...optionsObj, ...value}
    })

    // console.log(optionsObj);

    // Init datatable --- more info on datatables: https://datatables.net/manual/
    tableObject[eventValue] = Plug_dataTables.Init_onCalling(tableEle, optionsObj, 'new');

    // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
    /*
     tableObject[_RG_SAMP_A].on('draw', function () {
     console.log('i am call at the time of re-inti.')
     });
     */
  }


  const filterEvents = (element, btnValue) => {
    element.querySelectorAll('select, input').forEach((value, key, parent) => {

      //let col = value.getAttribute('data-dt-column');

      switch (value.name) {
        case 'search':
          const regex = value.getAttribute('data-dt-regex') === '1';
          value.addEventListener('keyup', function (evt) {
            tableObject[btnValue].search(evt.target.value, regex).draw();
          })
          break;

        case 'select':
          value.addEventListener('change', function (evt) {
            var val = evt.target.value;
            if (val === 'all') val = '';
            tableObject[btnValue].column(evt.target.getAttribute('data-dt-column')).search(val).draw();
          })
          break;

        case 'clear':
          value.addEventListener('click', function (evt) {
            const iid = evt.target.getAttribute('data-pb-instance');
            console.log(iid);
            const fp = Plug_datePicker.getInstanceOnChange(iid)
            fp.clear();
            $.fn.dataTable.ext.search.push(function () { return true});
            tableObject[btnValue].draw();
          })
          break;

        case 'date':
          value.addEventListener('change', function (evt) {
            let dates;
            var val = evt.target.value;
            if (!val.includes(' to ')) {
              return;
            }
            else {
              //dates = val.split(' to ');
            }
            dates = Plug_datePicker.getValueOnChange()[0];
            let min = moment(dates[0]).format('YYYY-MM-DD');
            let max = moment(dates[1]).format('YYYY-MM-DD');
            $.fn.dataTable.ext.search.push(
              function (settings, data, dataIndex) {
                let date = moment(data[evt.target.getAttribute('data-dt-column')]).format('YYYY-MM-DD');
                //console.log(date);
                //console.log(min, max);
                return (min === null && max === null) ||
                  (min === null && date <= max) ||
                  (min <= date && max === null) ||
                  (min <= date && date <= max);
              }
            );
            tableObject[btnValue].draw();
          })
          break;
      }
    })
  }

  const foreignMatch = function (param) {
    switch (param) {
      case 'high-transaction':
      case 'transaction-history':
        PB_extend_foreign.$_remote('single', xResponse, [
          ['transaction', 'dates', 3, 0],
          ['transaction', 'type', 4, 0],
        ])
        break;
      default:
        break;
    }
    return true;
  }
  //here we render the data in cards
  const renderHeader = function (element, button) {
    let headerEle = element.querySelectorAll('[data-pb-target]');

    headerEle.forEach((place) => {


      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act    : button.value,
        line   : button.name,
        account: "target"
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);

      let key = place.getAttribute('data-pb-target');
      console.log(xData[key])
      console.log(place.innerHTML)
      place.innerHTML = PB_extend_append.$_single(place.innerHTML, xData[key]);

    });
  }
  const renderNode = function (element, button) {

    element.querySelectorAll('[data-pb-template]').forEach((place, index) => {
      let targetKey = place.getAttribute('data-pb-template');
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act    : button.value,
        line   : button.name,
        account: targetKey
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);

      //xResponse = dummy_ajax_accounts_rpt.register([button.value, button.name], [param]);
      let rowData = xData[targetKey]
      console.log(rowData)
      let target = place.querySelector('div');

      if (!rowData) {
        return false;
      }
      foreignMatch(targetKey);

      for (let key in rowData.transaction) {
        let cloneNode = target.cloneNode(true);

        cloneNode.classList.remove('d-none');
        cloneNode.querySelectorAll('[data-pb-control]').forEach((ele, index) => {
          ele.removeAttribute(atr.core.formatted);
          ele.innerText = rowData.transaction[key][index + 1];

        })

        place.appendChild(cloneNode);
      }

      console.log(button)
    });
    console.log(element);
  }
  // navtabsTarget functions
  const navtab_regt_search = function (element, button) {

    // remove tabs attribute and content
    _reportLE.navtab.querySelectorAll('[role="tabpanel"]').forEach((tabEle) => {
      // -r attribute
      tabEle.removeAttribute(atr.core.loadOf.tab);

      // -r content
      switch (tabEle.id) {
        case pb.rpt.accounts.register.p.search:
          // reset the form.
          formEle = tabEle.querySelector('form')
          PB_extend_reset.$_form(formEle);
          break;

        case pb.rpt.accounts.register.p.report:
          // remove the already fetched table data.
          if (tableObject.length !== 0) {
            tableObject[tabEle.id].clear().destroy();
          }
          // update the tab status
          _reportLE.report.removeAttribute(atr.core.loadOf.tab);
          break;

        case pb.rpt.accounts.register.p.summary:
          // empty cards --not required
          _reportLE.summary.removeAttribute(atr.core.loadOf.tab);
          break;

        case pb.rpt.accounts.register.p.charts:
          // destroy charts --not required
          _reportLE.charts.removeAttribute(atr.core.loadOf.tab);
          break;
      }
    })
    return true;
  }

  const navtab_regt_report = function (element, button) {
    console.log('i am reports, navtab. not in use.');
  }

  const navtab_regt_summary = function (element, button) {
    if (element.hasAttribute(atr.core.loadOf.tab) === '1') return true;
    // formData
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : button.value,
      type: button.type
    });
    ajax.callREQUEST({thePathArr}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    xResponse = dummy_ajax_accounts_rpt.register([button.value, button.type]);
    // if no data found from server in the requested account.
    if (!xResponse.status) {
      toastr.error(xResponse.message, xResponse.title);
      return false;
    }
    xData = xResponse.data;

    console.log(xData)

    // TODO: call the ajax here @balram

    renderHeader(element, button);
    renderNode(element, button);
    //return action_regt_c(element, button);
    PB_render_common.initOnCall(element);

    // finished.
    element.setAttribute(atr.core.loadOf.tab, '1');
    return true;
  }

  const navtab_regt_charts = function (element, button) {

    if (element.hasAttribute(atr.core.loadOf.tab) === '1') return true;

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : pb.rpt.accounts.register.p.charts,
      type: ''
    });
    ajax.callREQUEST({thePathArr}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    // TODO: call the ajax here @balram -  a single call.
    xResponse = dummy_ajax_accounts_rpt.register([pb.rpt.accounts.register.p.charts, ''], []);

    // if no data found from server in the requested account.
    if (!xResponse.status) {
      toastr.error(xResponse.message, xResponse.title);
      return false;
    }
    xData = xResponse.data;
    const debited = function (element, event) {
      targetEle = element.getAttribute('id') === pb.rpt.accounts.register.c.chart.debited_account
        ? element.querySelector('[data-pb-child="chart"]>div')
        : element.querySelector('#' + pb.rpt.accounts.register.c.chart.debited_account).querySelector('[data-pb-child="chart"]>div');
      redData = Option_charts.createDataset(xData[pb.rpt.accounts.register.c.chart.debited_account]);


      if (!chartObject[pb.rpt.accounts.register.c.chart.debited_account]) {
        // initialize of the chart
        redData = Option_charts.buildingOptions(redData, thePathArr, pb.rpt.accounts.register.c.chart.debited_account);
        chartObject[pb.rpt.accounts.register.c.chart.debited_account] = Plug_apexChart.Init_onCalling(targetEle, redData);
      }
      else {
        // data loading into chart
        Plug_apexChart.Update_onCalling(chartObject[pb.rpt.accounts.register.c.chart.debited_account], redData);
      }

    }

    const credited = function (element, event) {
      targetEle = element.getAttribute('id') === pb.rpt.accounts.register.c.chart.credited_account
        ? element.querySelector('[data-pb-child="chart"]>div')
        : element.querySelector('#' + pb.rpt.accounts.register.c.chart.credited_account).querySelector('[data-pb-child="chart"]>div');
      redData = Option_charts.createDataset(xData[pb.rpt.accounts.register.c.chart.credited_account]);


      if (!chartObject[pb.rpt.accounts.register.c.chart.credited_account]) {
        // initialize of the chart
        redData = Option_charts.buildingOptions(redData, thePathArr, pb.rpt.accounts.register.c.chart.credited_account);
        chartObject[pb.rpt.accounts.register.c.chart.credited_account] = Plug_apexChart.Init_onCalling(targetEle, redData);
      }
      else {
        // data loading into chart
        Plug_apexChart.Update_onCalling(chartObject[pb.rpt.accounts.register.c.chart.credited_account], redData);
      }
    }

    const balance = function (element, event) {
      targetEle = element.getAttribute('id') === pb.rpt.accounts.register.c.chart.balance
        ? element.querySelector('[data-pb-child="chart"]>div')
        : element.querySelector('#' + pb.rpt.accounts.register.c.chart.balance).querySelector('[data-pb-child="chart"]>div');
      redData = Option_charts.createDataset(xData[pb.rpt.accounts.register.c.chart.balance]);


      if (!chartObject[pb.rpt.accounts.register.c.chart.balance]) {
        // initialize of the chart
        redData = Option_charts.buildingOptions(redData, thePathArr, pb.rpt.accounts.register.c.chart.balance);
        chartObject[pb.rpt.accounts.register.c.chart.balance] = Plug_apexChart.Init_onCalling(targetEle, redData);
      }
      else {
        // data loading into chart
        Plug_apexChart.Update_onCalling(chartObject[pb.rpt.accounts.register.c.chart.balance], redData);
      }

      // data loading into the table
      // todo @somesh due: render into table
      // todo @somesh due: append into element
    }

    const transaction = function (element, event) {
      targetEle = element.getAttribute('id') === pb.rpt.accounts.register.c.chart.transaction
        ? element.querySelector('[data-pb-child="chart"]>div')
        : element.querySelector('#' + pb.rpt.accounts.register.c.chart.transaction).querySelector('[data-pb-child="chart"]>div');
      redData = Option_charts.createDataset(xData[pb.rpt.accounts.register.c.chart.transaction]);


      if (!chartObject[pb.rpt.accounts.register.c.chart.transaction]) {
        // initialize of the chart
        redData = Option_charts.buildingOptions(redData, thePathArr, pb.rpt.accounts.register.c.chart.transaction);
        chartObject[pb.rpt.accounts.register.c.chart.transaction] = Plug_apexChart.Init_onCalling(targetEle, redData);
      }
      else {
        // data loading into chart
        Plug_apexChart.Update_onCalling(chartObject[pb.rpt.accounts.register.c.chart.transaction], redData);
      }
    }
    /*
     // todo: use chartObject to store chart object, next time just update, do not need to init.
     get help from dashboard -> business. how to update next time at line 124.
     let promise = Plug_apexChart.Update_onCalling(chartObject[event.target], redData);

     i have store chart object here chartObject[event.target]
     */

    debited(element, button);
    credited(element, button);
    balance(element, button);
    transaction(element, button);

    /*
     @todo balram
     pass the title into charts. while creating the charts profile.
     1. debited-accounts
     2. credited-accounts
     3. balance flow
     4. transaction
     */

    // finished.
    element.setAttribute(atr.core.loadOf.tab, '1');
    return true;
  }

  // switch function to route a right function for requested action.
  const navtabsTarget = function (element, button) {
    switch (button.value) {
      case pb.rpt.accounts.register.p.search:
        return navtab_regt_a(element, button);

      case pb.rpt.accounts.register.p.report:
        return navtab_regt_b(element, button);

      case pb.rpt.accounts.register.p.summary:
        return navtab_regt_c(element, button);

      case pb.rpt.accounts.register.p.charts:
        return navtab_regt_d(element, button);
    }
  }

  const loadsTarget = function (element, button) {
    switch (button.value) {
      case pb.rpt.accounts.register.p.search:
        return load_regt_search(element, button);

      case pb.rpt.accounts.register.p.report:
        return load_regt_report(element, button);

      case pb.rpt.accounts.register.p.summary:
        return load_regt_summary(element, button);

      case pb.rpt.accounts.register.p.charts:
        return load_regt_charts(element, button);
    }
  }

  // Public methods
  return {

    RAG_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    RAG_loads  : function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    RAG_pageOpen: function () {
      return pageOpen();
    },

  };
}();