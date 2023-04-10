"use strict";

// Class definition
var PB_MC_add = function () {
  // Shared variables
  let StateData;
  var ajaxResponse;
  let tableEl, formEl, success;
  let myPath;
  let $table;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3008',
  };

  // Private functions
  function add_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    console.log(button);
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.mng.customers.add.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              'rows'  : {
                'menu': {
                  0: {
                    "id"     : 0,
                    "cate_id": "0",
                    "value"  : 10000,
                    "type"   : '0'
                  },
                  1: {
                    "id"     : 1,
                    "cate_id": "11",
                    "value"  : 12039,
                    "type"   : '1'
                  },
                  2: {
                    "id"     : 2,
                    "cate_id": "12",
                    "value"  : 22222,
                    "type"   : '1'
                  },
                  3: {
                    "id"     : 3,
                    "cate_id": "13",
                    "value"  : 33333,
                    "type"   : '1'
                  },
                  4: {
                    "id"     : 4,
                    "cate_id": "-1",
                    "value"  : 5,
                    "type"   : '2'
                  },
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              'rows'  : {
                'category': {
                  '0' : {
                    "id"  : 0,
                    "name": "All Active Customers"
                  },
                  '11': {
                    "id"  : 11,
                    "name": "Sundry Debtors"
                  },
                  '12': {
                    "id"  : 12,
                    "name": "Logistic Debtors"
                  },
                  '13': {
                    "id"  : 13,
                    "name": "Regular Customers"
                  },
                  '-1': {
                    "id"  : 0,
                    "name": "Deactivated Customers"
                  },
                },
              },
              'status': true
            }
            break;
          case "modal":
            response = {
              'rows'  :
                [
                  {
                    "id"    : 0,
                    "debit" : 53462,
                    "credit": 53462,
                    "amount": 53462,
                    "note"  : 53462
                  },
                  {
                    "id"    : 0,
                    "debit" : 53462,
                    "credit": 53462,
                    "amount": 53462,
                    "note"  : 53462
                  },
                  {
                    "id"    : 0,
                    "debit" : 53462,
                    "credit": 53462,
                    "amount": 53462,
                    "note"  : 53462
                  },
                  {
                    "id"    : 0,
                    "debit" : 53462,
                    "credit": 53462,
                    "amount": 53462,
                    "note"  : 53462
                  }
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.mng.customers.add.p.add:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  'bank_ac': [
                    {
                      "lid"    : 10,
                      "name"   : 'SBI Bank',
                      "balance": '52374.52',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 11,
                      "name"   : 'HDFC Bank',
                      "balance": '1234.2',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 12,
                      "name"   : 'KOTAK Bank',
                      "balance": '89027',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 14,
                      "name"   : 'Lokesh Bank',
                      "balance": '1892.54',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 10,
                      "name"   : 'ICICI OD Account',
                      "balance": '-52345',
                      'suffix' : '1'
                    },
                  ],
                  'cash_ac': [
                    {
                      "lid"    : 4,
                      "name"   : 'Cash Main',
                      "balance": '348971',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 5,
                      "name"   : 'Cash Local',
                      "balance": '900.61',
                      'suffix' : '0'
                    }
                  ],
                },
              'status': true
            }
            break;
          case 'table':
            response = {
              'rows'  :
                [
                  {
                    "id"    : "1",
                    "date"  : "2020-11-23",
                    "debit" : "Cash-in-hand",
                    "credit": "SBI Bank",
                    "amount": "12000.23",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "2",
                    "date"  : "2020-11-24",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "14000.66",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "3",
                    "date"  : "2020-11-25",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "12000.90",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "4",
                    "date"  : "2020-11-26",
                    "debit" : "Cash-in-hand",
                    "credit": "ICICI Bank",
                    "amount": "123000.12",
                    "note"  : "this is test"
                  }
                ],
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows'  :
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.mng.customers.add.p.bulk:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  'bank_ac': [
                    {
                      "lid"    : 10,
                      "name"   : 'SBI Bank',
                      "balance": '52374.52',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 11,
                      "name"   : 'HDFC Bank',
                      "balance": '1234.2',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 12,
                      "name"   : 'KOTAK Bank',
                      "balance": '89027',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 14,
                      "name"   : 'Lokesh Bank',
                      "balance": '1892.54',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 10,
                      "name"   : 'ICICI OD Account',
                      "balance": '-52345',
                      'suffix' : '1'
                    },
                  ],
                  'cash_ac': [
                    {
                      "lid"    : 4,
                      "name"   : 'Cash Main',
                      "balance": '348971',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 5,
                      "name"   : 'Cash Local',
                      "balance": '900.61',
                      'suffix' : '0'
                    }
                  ],
                },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows'  :
                [
                  {
                    "id"    : "1",
                    "date"  : "2020-11-23",
                    "debit" : "Cash-in-hand",
                    "credit": "SBI Bank",
                    "amount": "12000.23",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "2",
                    "date"  : "2020-11-24",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "14000.66",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "3",
                    "date"  : "2020-11-25",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "12000.90",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "4",
                    "date"  : "2020-11-26",
                    "debit" : "Cash-in-hand",
                    "credit": "ICICI Bank",
                    "amount": "123000.12",
                    "note"  : "this is test"
                  }
                ],
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows'  :
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.mng.customers.add.p.upload:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  'bank_ac'   : [
                    {
                      "lid"    : 10,
                      "name"   : 'SBI Bank',
                      "balance": '52374.52',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 11,
                      "name"   : 'HDFC Bank',
                      "balance": '1234.2',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 12,
                      "name"   : 'KOTAK Bank',
                      "balance": '89027',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 14,
                      "name"   : 'Lokesh Bank',
                      "balance": '1892.54',
                      'suffix' : '0'
                    },
                  ],
                  'current_ac': [
                    {
                      "lid"    : 10,
                      "name"   : 'ICICI OD Account',
                      "balance": '-52345',
                      'suffix' : '1'
                    },
                    {
                      "lid"    : 11,
                      "name"   : 'HDFC Bank',
                      "balance": '1234.2',
                      'suffix' : '0'
                    },
                    {
                      "lid"    : 12,
                      "name"   : 'KOTAK Bank',
                      "balance": '89027',
                      'suffix' : '0'
                    },
                  ],
                },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows'  :
                [
                  {
                    "id"    : "1",
                    "date"  : "2020-11-23",
                    "debit" : "Cash-in-hand",
                    "credit": "SBI Bank",
                    "amount": "12000.23",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "2",
                    "date"  : "2020-11-24",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "14000.66",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "3",
                    "date"  : "2020-11-25",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "12000.90",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "4",
                    "date"  : "2020-11-26",
                    "debit" : "Cash-in-hand",
                    "credit": "ICICI Bank",
                    "amount": "123000.12",
                    "note"  : "this is test"
                  }
                ],
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows'  :
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.mng.customers.add.p.vehicle:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  'gateway_ac': [
                    {
                      "lid"    : 40,
                      "name"   : 'Phone PE',
                      "balance": '53484',
                      'suffix' : '5'
                    },
                    {
                      "lid"    : 41,
                      "name"   : 'Google Pay',
                      "balance": '52345',
                      'suffix' : '5'
                    },
                    {
                      "lid"    : 42,
                      "name"   : 'Paytm',
                      "balance": '90000',
                      'suffix' : '5'
                    },
                  ],
                },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows'  :
                [
                  {
                    "id"    : "1",
                    "date"  : "2020-11-23",
                    "debit" : "Cash-in-hand",
                    "credit": "SBI Bank",
                    "amount": "12000.23",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "2",
                    "date"  : "2020-11-24",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "14000.66",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "3",
                    "date"  : "2020-11-25",
                    "debit" : "Cash-in-hand",
                    "credit": "HDFC Bank",
                    "amount": "12000.90",
                    "note"  : "this is test"
                  },
                  {
                    "id"    : "4",
                    "date"  : "2020-11-26",
                    "debit" : "Cash-in-hand",
                    "credit": "ICICI Bank",
                    "amount": "123000.12",
                    "note"  : "this is test"
                  }
                ],
              'status': true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows'  : [
                {
                  'id'     : "1",
                  'date'   : "2022-11-21",
                  'account': "Fuel Sales",
                  'type'   : "Sales Collect",
                  'amount' : "4600",
                  'settled': "3000",
                  'remain' : "1600.00"
                },
                {
                  'id'     : "2",
                  'date'   : "2022-11-23",
                  'account': "Ramesh Ji",
                  'type'   : "Customer Receipt",
                  'amount' : "9000",
                  'settled': "0",
                  'remain' : "9000.00"
                },
                {
                  'id'     : "3",
                  'date'   : "2022-11-25",
                  'account': "Fuel Sales",
                  'type'   : "Sales Collect",
                  'amount' : "14500",
                  'settled': "0",
                  'remain' : "0"
                },
                {
                  'id'     : "4",
                  'date'   : "2022-11-28",
                  'account': "Lokesh Kumar",
                  'type'   : "DIR Deposit",
                  'amount' : "100000",
                  'settled': "0",
                  'remain' : "0"
                },
              ],
              'status': true
            }
            break;
        }
        break;
    }

    if (!response.status) {

      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

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
      PB_extend_foreign.$_remote('double', [data.menu, StateData.categories], [['cate_id', 'name']]);
      // calling render to place data
      PB_render_menu.menuRender(data.menu, 'stack');
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // other things, not connected to dynamic data.
    $table = new tablesProfile_management(thePathArr);

    return ajax;
  }

  const modalsTarget = function (button) {

    // calling ajax with passing type.
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: pb.mng.customers.add.n
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    ajaxResponse = add_ajaxCalling([pb.mng.customers.add.n, pb.mng.customers.add.p.add, pb.mng.customers.add.p.bulk, pb.mng.customers.add.p.upload, pb.mng.customers.add.p.vehicle]);

    // async await sleep(3000);

    return true;
  }

  const _getTable = (button, params, htLen) => {

    var renderedData

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : button.value,
      line   : button.name,
      account: params
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    ajaxResponse = add_ajaxCalling([button.value, button.getAttribute('name')], params)

    if (ajaxResponse !== false) {
      const OPTION = [4, ['view', 'edit', 'delete'], ['view-add', 'edit-add', 'delete-add']];
      let tableProfile = {
        0: {
          type  : TBL_ct.cb,
          method: 'a',
          value : '0',
          param : [],
          style : 0,
          css   : []
        },
        1: {
          type  : TBL_ct.dt,
          method: 'a',
          value : '1',
          param : [],
          style : 0,
          css   : []
        },
        2: {
          type  : TBL_ct.ac,
          method: 'a',
          value : '2',
          param : [],
          style : 0,
          css   : []
        },
        3: {
          type  : TBL_ct.ac,
          method: 'a',
          value : '3',
          param : [],
          style : 0,
          css   : []
        },
        4: {
          type  : TBL_ct.amt,
          method: 'a',
          value : '4',
          param : [2, 1],
          style : 0,
          css   : []
        },
        5: {
          type  : TBL_ct.note,
          method: 'a',
          value : '5',
          param : [],
          style : 0,
          css   : []
        },
        6: {
          type  : TBL_ct.act,
          method: 'b',
          value : '0',
          param : [],
          style : 100,
          css   : ['pe-0 text-end', 100]
        },
      }
      // render the received data from server.
      renderedData = PB_render_table.simpleRender(ajaxResponse, tableProfile);
    }
    else {
      console.log('status has failed, table data :' + JSON.stringify(ajaxResponse));
      renderedData = PB_render_table.zeroRow(htLen);
    }

    return renderedData;
  }

  const _getLoad = function (form, button, values) {

    var fetchEntries;

    // button.getAttribute('data-pb-calling');
    button.querySelector('[data-pb-label="text"]').innerText = 'Loading...';

    ajaxResponse = add_ajaxCalling([button.value, button.getAttribute('name')], values)

    // render into table.
    let tableProfile = {
      0: {
        type  : TBL_ct.cb,
        method: 'a',
        value : '0',
        param : [],
        style : 0,
        css   : []
      },
      1: {
        type  : TBL_ct.dt,
        method: 'a',
        value : '1',
        param : ['b'],
        style : 0,
        css   : []
      },
      2: {
        type  : TBL_ct.ac,
        method: 'a',
        value : '2',
        param : [],
        style : 0,
        css   : []
      },
      3: {
        type  : TBL_ct.txt,
        method: 'a',
        value : '3',
        param : [],
        style : 0,
        css   : []
      },
      4: {
        type  : TBL_ct.amt,
        method: 'a',
        value : '4',
        param : [],
        style : 0,
        css   : []
      },
      5: {
        type  : TBL_ct.amt,
        method: 'a',
        value : '5',
        param : [],
        style : 0,
        css   : []
      },
      6: {
        type  : TBL_ct.in,
        method: 'c',
        value : '6',
        param : ['text', 'amount', 'w-125px inr_mask_62 py-1', true, 'To be Settled Amount', '6'],
        style : 1,
        css   : []
      },
    }
    $table.matchingCalled(pb.mng.customers.add.c.table)
    fetchEntries = PB_render_table.simpleRender(ajaxResponse, $table.tableShapes);

    button.querySelector('[data-pb-label="text"]').innerText = 'Loaded.';
    if (fetchEntries === false) {
      return false;
    }


    tableEl = form.querySelector('[data-pb-table="' + button.getAttribute('data-pb-calling') + '"]');
    tableEl.classList.remove('d-none');
    tableEl.appendChild(fetchEntries);

    // calling custom
    PB_render_common.initOnCall(tableEl);
    Plug_formKeen.loadIndeed(tableEl, [3])
    return true;
  }


  function createsTarget(element, button) {
    // fetching new values or static values for form initial
    formEl = element.querySelector('form');
    console.log(formEl);
    if (formEl.getAttribute('data-pb-form-loaded') !== 'true') {

      //       add page blockUIElement until all things load for the page.
      //       Plug_formKeen.loadIndeed(element, [KT_cps.block], ['Loading Functions', 'primary']);
      //
      //       fetching, rendering and loading values into forms
      //            ajaxResponse = add_ajaxCalling([button.value, button.getAttribute('name')], [])
      //            const ajaxResponseNew = {...StateData, ...ajaxResponse};
      //
      //            const sts = PB__OPR_transactions.getFormReady(ajaxResponseNew, formEl);
      //
      //            if (!sts) return false;
      //
      //            element.setAttribute('data-pb-loaded', 'true');
      //            Plug_formKeen.loadIndeed(element, [KT_cps.block],) // or pass params as ['', '', '', false]
      //            formEl.setAttribute('data-pb-form-loaded', 'true');
    }
  }


  function loadsTarget(element, button) {
    var values = [];
    var target = button.getAttribute('data-pb-calling');
    if (button.getAttribute('data-pb-called') !== 'true') {

      // collect pre-filled required inputs.
      let form = element.querySelector('form'); // button.closest('form');
      form.querySelectorAll('[data-pb-prefill="' + target + '"]').forEach((item) => {
        item.name.search('amount') ? values.push(amt_mask_filter(item.value)) : values.push(item.name);
      });

      success = _getLoad(form, button, values);

      if (success) {
        // todo: this attribute will be changed in case pre-filled data has changed by the user.
        button.setAttribute('data-pb-called', 'true');
      }
    }
    else {
      Plug_sweetAlert.callMe(SW_type.simple, [0, 'ho gya to load', 'Aur kya chahata hai??', 'Nahi, kuch nahi chihiye :)'])
    }
  }

  function tablesTarget(element, button) {
    console.log(element)
    // fetching new values from server and updating into table
    tableEl = element.querySelector('table');
    if (!tableEl) {
      console.log('add table element');
      return;
    }
    if (tableEl.getAttribute('data-pb-table-loaded') !== 'true') {

      var newValforTable = _getTable(button, [], tableEl.querySelectorAll('thead>tr>th').length);

      // appending fetched values
      tableEl.appendChild(newValforTable);
      // update table status
      tableEl.setAttribute('data-pb-table-loaded', 'true');
      // todo: if new entry created then add 'false'

      // dataTables Plugin Calling.
      //

      // calling other basic plugin functions
      PB_render_common.initOnCall(tableEl);

      // for enable dropdown in the table.
      KTMenu.init();
    }
  }


  // Public methods
  //  return {
  //
  //    MCA_creates: function (_event) {
  //      createsTarget(_callEl, _event);
  //    },
  //    MCA_loads  : function (_event) {
  //      loadsTarget(_callEl, _event)
  //    },
  //    MCA_tables : function (_event) {
  //      tablesTarget(_callEl, _event)
  //    },
  //    // quick transaction for modal
  //    MCA_modals: function () {
  //      modalsTarget(type);
  //    },
  //
  //    MCA_state: function () {
  //      pageOpen();
  //    },
  //
  //  };
  return {

    MCA_forms  : function (_event) {
      return eleCheck() ? createsTarget(_callEl, _event) : false;
    },
    MCA_loads  : function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },
    MCA_tables : function (_event) {
      return eleCheck() ? tablesTarget(_callEl, _event) : false;
    },
    MCA_cards  : function (_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },
    MCA_actions: function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },

    MCA_state: function () {
      return pageOpen();
    },

  };
}();