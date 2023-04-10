"use strict";

// Class definition
var PB_MB_display = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4240',
  };
  // Shared variables
  let StateData, redData, formEl;
  let tableEle;
  let chartObject = [];
  var $table;

  // Private functions

  /**
   * preloaded data that will not change for this page
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
      return true;
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_b = (data) => {
      // what your want to process on page load.
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // other things, not connected to dynamic data.

    return ajax;
  }

  const moonTarget = function (element, event) {

    /*
     ----------------------
     internal functions
     ----------------------
     */

    /**
     * here we put the data into edit form for editing the data
     * @param element
     * @param event
     * @returns {{AjaxPB}, {boolean}}
     */
    const function_b = function (element, event) {

      if (!event.data) {
        toastr.error('Please provide a valid Contact', 'Failed to Load')
        return false;
      }

      // init the form
      const formEl = element.querySelector('form');
      const sts = PB_render_form.formRender_simple(StateData, formEl);

      if (!sts) {
        toastr.error('Form initialized has failed', 'Failed to Load');
        return false;
      }

      const _process = (data) => {
        return _process_a(data)
      }
      const _process_a = (data) => {

        // process that i want to process.
        // using data

      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: event.data
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }

    /**
     * here we load add contact page for user
     * @param element
     * @param event
     * @returns {boolean}
     */
    const function_a = function (element, event) {

      // doing something as per event.
      return true;
    }


    // switching
    switch (event.value) {

      case 'function_a':
        return function_a(element, event);

      case 'function_b':
        return function_b(element, event);

    }
  }

  const sunTarget = function (_element, _event) {

    if (_element.getAttribute(atr.core.loadOf.tab) === '1') {
      return true;
    }

    /*
     ------------------
     internal functions
     ------------------
     */
    // here we load general tab data
    const inner_fun_a = function (element, data, event) {

      let childNode;

      const chartFormation = (data) => {

        let key;
        // getting the final HTML element
        childNode.querySelectorAll('[data-pb-child="chart"]>div').forEach((chart) => {
          key = chart.getAttribute(atr.core.key);
          // balance chart
          redData = Option_charts.createDataset(data[key]);
          if (!chartObject[key]) {
            // initialize of the chart
            redData = Option_charts.buildingOptions(redData, thePathArr, key);
            chartObject[key] = Plug_apexChart.Init_onCalling(chart, redData);
          }
          else {
            // data loading into chart
            Plug_apexChart.Update_onCalling(chartObject[key], redData);
          }
        });
      }

      // here we put the general details of account

      // header of general tab
      element.querySelector('[data-pb-control="general-header"]').children.forEach((child) => {
        const key = child.getAttribute(atr.core.key);
        child.innerHTML = PB_extend_append.$_single(child.innerHTML, data[key]);
        PB_render_common.initOnCall(child);
      });

      // body of general tab
      childNode = element.querySelector('[data-pb-control="general-body"]');
      chartFormation(data.charts);

      // footer of general tab
      childNode = element.querySelector('[data-pb-control="general-footer"]');
      data.other.notification = PB_render_common.returnOnCall(data.other.notify_mode, 'string', [0]);
      console.log(data.other.notification);
      childNode.innerHTML = PB_extend_append.$_single(childNode.innerHTML, data.other);

      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }
    // here we load receipts tab data
    const inner_fun_b = function (element, data, event) {

      // here we render the table for transactions.
      tableEle = element.querySelector('table');
      if (!tableEle) return false;

      // data foreign matching
      console.log(data);
      redData = PB_extend_foreign.$_remote(kws.extend.combine, data, [['data', 'date', 1, 0], ['data', 'ledger', 2, 0]]);
      // access table profile
      $table.matchingCalled(event.value)

      let renderedData = PB_render_table.simpleRender(redData.data, $table.tableShapes, 'array');

      if (!renderedData) return false;
      // remove old data or blank table
      tableEle.querySelector('tbody').remove();
      // append tbody into page table
      tableEle.appendChild(renderedData);
      // common render
      PB_render_common.initOnCall(tableEle);
      // for enable dropdown in the table.
      KTMenu.init();
      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }
    // here we load payments tab data
    const inner_fun_c = function (element, data, event) {
      // here we render the table for transactions.
      tableEle = element.querySelector('table');
      if (!tableEle) return false;

      // data foreign matching
      redData = PB_extend_foreign.$_remote('single', data, [['data', 'date', 1, 0], ['data', 'ledger', 2, 0]]);
      // access table profile
      $table.matchingCalled(event.value);

      let renderedData = PB_render_table.simpleRender(redData.data, $table.tableShapes, 'array');

      if (!renderedData) return false;
      // remove old data or blank table
      tableEle.querySelector('tbody').remove();
      // append tbody into page table
      tableEle.appendChild(renderedData);
      // common render
      PB_render_common.initOnCall(tableEle);
      // for enable dropdown in the table.
      KTMenu.init();
      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }


    const _process_a = (data) => {
      // const element = _element.querySelector('#' + _event.value);
      // sending to the targeted function.
      switch (_event.value) {
        case pb.mng.accounts.contacts.c.tab.general:
          return inner_fun_a(_element, data, _event);

        case pb.mng.accounts.contacts.c.tab.receipts:
          return inner_fun_b(_element, data, _event);

        case pb.mng.accounts.contacts.c.tab.payments:
          return inner_fun_c(_element, data, _event);

      }
    }

    const _process = (data) => {
      return _process_a(data);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act    : _event.value,
      type   : _event.type,
      account: _event.data
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    return ajax;
  }


  const loadTarget = function (element, event) {
    let form = _wizardLE.search.querySelector('form');
    let obj = PB_extend_collect.$_step(form);
    console.log(obj)
    let data = PB_extend_collect.$_step(element);
    console.log(data)
  }

  // Public methods
  return {

    // loading form
    MBD_cards  : function (_event) {
      return eleCheck() ? moonTarget(_callEl, _event) : false;
    },
    MBD_loads  : function (_event) {
      return eleCheck() ? loadTarget(_callEl, _event) : false;
    },
    MBD_actions: function (_event) {
      return eleCheck() ? actionTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    MBD_state: function () {
      return pageOpen();
    },

  };
}
();