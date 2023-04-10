"use strict";

// Class definition
var PB_SP_billing = function () {

  // Shared variables
  let StateData;
  let xResponse, xData;
  let Layout, Direct;
  let $table;


  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3002',
  };

  // Private functions
  function billing_ajaxCalling(button, params = []) {

  }

  const tablesTarget = function (element, button) {
    switch (button.value) {
      case pb.fin.balance.billing.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.fin.balance.billing.p.sheet:
        return true;
      default:
        return true;
    }
  }

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
      _process_a(data);
      _process_b(data);
      return true
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_b = (data) => {
      Layout = PBapp.querySelector('#layout_zone');
      Direct = Layout.querySelector('#direct_zone');

      loadData(Direct);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // it will be called when create form initiated.
    $table = new tablesProfile_setting(thePathArr);

    return ajax
  }

  const dataTableCalling = (options, methods, profile, call) => {
    let DT_options = {};
    console.log(methods);
    // create options
    const end = PB_option_datatables.optionKeys();
    end.forEach((i) => {
      if (options[i]) {
        DT_options[i] = PB_option_datatables.building(i, methods[i], profile[i]);
      }
    })

    console.log(DT_options);

    let optionsObj = {};
    Object.entries(DT_options).forEach(([key, value]) => {
      optionsObj = {...optionsObj, ...value}
    })

    // console.log(optionsObj);

    // Init datatable --- more info on datatables: https://datatables.net/manual/
    tableObject[call] = Plug_dataTables.Init_onCalling(tableEle, optionsObj, 'new');


  }

  const renderTable = function (targetTableEle, ajaxResponse) {
    console.log(ajaxResponse)
    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      //let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      $table.matchingCalled(key);

      if (ajaxResponse[key]) {
        //now we make the profile
        console.log(ajaxResponse[key])
        console.log($table)
        renderedData = PB_render_table.simpleRender(ajaxResponse[key], $table.tableShapes, 'array');
      }
      else {
        let columns;

        console.log('status has failed, table data :' + JSON.stringify(ajaxResponse));
        columns = targetEle.querySelectorAll('thead>tr>th').length;
        renderedData = PB_render_table.zeroRow(columns);
      }

      // calling other basic plugin functions
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      //datatable code
      //dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      //filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  const validCard = function (element, button) {

    let rowData = xData.validity;

    let gap = PB_render_common.returnOnCall(rowData.activation, 'gap', [false, 'z', true])
    console.log(gap)
    let percent = PB_render_common.returnOnCall(gap[0], 'percent', ['356', 0]);

    if (rowData.notice1 !== '1') {
      element.querySelector('[data-pb-control="notice1"]').classList.add('d-none');
    }
    if (rowData.notice2 !== '1') {
      element.querySelector('[data-pb-control="notice2"]').classList.add('d-none');
    }

    rowData['duration'] = gap[0];

    let target = element.querySelector('[data-pb-control="card"]');

    let childEle = PB_extend_append.$_single(target.innerHTML, rowData);
    target.innerHTML = childEle;
  }

  const paymentMethod = function (element, button) {
    let rowData = xData.payment;

    let appendData = PB_extend_append.$_single(element.innerHTML, rowData);
    element.innerHTML = appendData;
  }

  const billingHistory = function (element, button) {
    if (element.getAttribute('data-pb-table-loaded') === 1) return true;

    let rowData = xData.billing
    let targetTableEle = {
      billing_success: element.querySelector('#pb_billing_success_tab'),
      billing_failed : element.querySelector('#pb_billing_failed_tab'),
    }

    //    ajaxResponse = billing_ajaxCalling([pb.sett.profile.billing.p.billing, '']);

    PB_extend_foreign.$_remote('single', rowData, [['billing_success', 'dates', 1, 0], ['billing_success', 'status', 4, 0]]);
    PB_extend_foreign.$_remote('single', rowData, [['billing_failed', 'dates', 1, 0], ['billing_failed', 'status', 4, 0]]);

    if (!rowData) return false;

    renderTable(targetTableEle, rowData);

    element.setAttribute('data-pb-table-loaded', '1');
  }

  const subscriptionCards = function (element, button) {
    //    ajaxResponse = billing_ajaxCalling([pb.sett.profile.billing.p.subscription, '']);
    let rowData = xData.subscription;
    if (!rowData) return false;

    let place = element.querySelector('[data-pb-template="card"]');

    Object.keys(rowData).forEach((key, index) => {
      let template = place.children[0];
      let cloneNode = template.cloneNode(true);

      let appendData = PB_extend_append.$_single(cloneNode.innerHTML, rowData[key]);
      cloneNode.innerHTML = appendData;
      cloneNode.classList.remove('d-none');

      place.appendChild(cloneNode);
    })
  }

  const loadData = function (element, button) {
    let validity = element.querySelector('#validity-card');
    let payment = element.querySelector('#payment-method');
    let subscription = element.querySelector('#subscription-card');
    let billing = element.querySelector('#billing-history');

    const _process = (data) => {
      _process_a(data);
    }
    //    xResponse = dummy_ajax_profile_sett.billing([pb.sett.profile.billing.p.details, '']);
    //    xData = xResponse.data;

    const _process_a = (data) => {
      xData = data;
      validCard(validity, button);
      paymentMethod(payment, button);
      subscriptionCards(subscription, button);
      billingHistory(billing, button);

      PB_render_common.initOnCall(element);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.billing.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }
  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPB_forms  : function (event) {
      return eleCheck() ? formTarget(_callEl, event) : false;
    },
    SPB_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPB_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },

    // fetching all upcoming required details
    SPB_state: function (path) {
      return pageOpen();
    },

  };
}();