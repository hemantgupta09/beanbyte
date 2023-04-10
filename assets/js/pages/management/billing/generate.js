"use strict";

// Class definition
var PB_MB_generate = function () {
  // Shared variables
  let StateData;
  var data;
  let tableEl, formEl, success;
  let myPath;
  let $table;
  let renderData;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4240',
  };

  // Private functions
  function generate_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    console.log(button);
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.mng.billing.generate.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              'rows'  :
                {
                  0: {
                    "id"   : 0,
                    "value": 10000,
                    "type" : "0"
                  },
                  1: {
                    "id"   : 1,
                    "value": 11111,
                    "type" : "1"
                  },
                  2: {
                    "id"   : 2,
                    "value": 22222,
                    "type" : "1"
                  },
                  3: {
                    "id"   : 3,
                    "value": 33333,
                    "type" : "1"
                  },
                  4: {
                    "id"   : 4,
                    "value": 51,
                    "type" : "2"
                  }
                },
              'status': true
            }
            break;
          case "state":
            response = {
              'rows':
                {
                  'handled_by':
                    [
                      {
                        "eid"  : 21,
                        "name" : 'Lokesh Kumar',
                        "post" : 'Manager',
                        "image": 'false'
                      },
                      {
                        "eid"  : 22,
                        "name" : 'Naveen Kumar',
                        "post" : 'Employee',
                        "image": 'false'
                      },
                    ],
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

      case pb.mng.billing.generate.p.recurring:
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
                {
                  'recurring': {
                    //['id':int, 'avatar':url, 'name':string, 'alias':string, 'start_date':date, 'cycle':double, 'pre_discount': number, 'category':string,]
                    11: ["11", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    12: ["12", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    13: ["13", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                  },
                  'dates'    : {
                    11: ["2022-03-25"],
                    12: ["2021-01-21"],
                    13: ["2022-04-23"],
                    14: ["2021-08-26"],
                  }
                },
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

      case pb.mng.billing.generate.p.frequency:
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
                {
                  'recurring': {
                    //['id':int, 'avatar':url, 'name':string, 'alias':string, 'start_date':date, 'cycle':double, 'pre_discount': number, 'category':string,]
                    11: ["11", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    12: ["12", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    13: ["13", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                  },
                  'dates'    : {
                    11: ["2022-03-25"],
                    12: ["2021-01-21"],
                    13: ["2022-04-23"],
                    14: ["2021-08-26"],
                  }
                },
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

      case pb.mng.billing.generate.p.direct:
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
                {
                  'recurring': {
                    //['id':int, 'avatar':url, 'name':string, 'alias':string, 'start_date':date, 'cycle':double, 'pre_discount': number, 'category':string,]
                    11: ["11", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    12: ["12", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                    13: ["13", "avatars/300-2.jpg", "Dinesh Kumar Meena", "Ramu", "11", "1.5", "82479", "cate"],
                  },
                  'dates'    : {
                    11: ["2022-03-25"],
                    12: ["2021-01-21"],
                    13: ["2022-04-23"],
                    14: ["2021-08-26"],
                  }
                },
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

      case pb.mng.billing.generate.p.clearance:
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
      // calling render to place data
      PB_render_menu.menuRender(data.menu, 'value', ['number', 0, 1]);
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

  /**
   * here we target the modals
   * @param button
   * @returns {boolean}
   */
  const modalsTarget = function (button) {

    // calling ajax with passing type.
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: pb.mng.billing.generate.n
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    data = generate_ajaxCalling([pb.mng.billing.generate.n, pb.mng.billing.generate.p.deposit, pb.mng.billing.generate.p.withdrawal, pb.mng.billing.generate.p.transfer, pb.mng.billing.generate.p.clearance]);

    // async await sleep(3000);

    return true;
  }

  /**
   * here we get the table profile and return the table body
   * @param event
   * @param params
   * @param htLen
   * @returns {HTMLTableRowElement | HTMLTableSectionElement}
   * @private
   */
  const _getTable = (event, params, htLen) => {
    // ajaxResponse = generate_ajaxCalling([event.value, event.getAttribute('name')], params)

    const _process = (data) => {
      _process_a(data);
      return true;
    }
    const _process_a = (data) => {
      PB_extend_foreign.$_remote('single', data, [
        [event.value, 'dates', 4, 0],
      ]);
      $table.matchingCalled(pb.mng.billing.generate.c.table);
      console.log($table.tableShapes)
      console.log(data[event.value]);
      //    console.log(ajaxResponse)
      if (data !== false) {
        // render the received data from server.
        renderData = PB_render_table.simpleRender(data[event.value], $table.tableShapes, 'array');
      }
      else {
        console.log('status has failed, table data :' + JSON.stringify(data));
        renderData = PB_render_table.zeroRow(htLen);
      }
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return true;
  }

  /**
   *
   * @param targetTableEle
   * @param ajaxResponse
   * @returns {boolean}
   */
  const renderTable = function (targetTableEle, ajaxResponse) {

    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      if (targetEle.getAttribute('data-pb-table-loaded') === "1") {
        return true;
      }

      //let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      $table.matchingCalled(key);

      if (ajaxResponse[key]) {
        //now we make the profile
        renderedData = PB_render_table.simpleRender(ajaxResponse[key], $table.tableShapes, 'array');

      }
      else {
        let columns;

        console.log('status has failed, table data :' + JSON.stringify(ajaxResponse));
        columns = targetEle.querySelectorAll('thead>tr>th').length;
        renderedData = PB_render_table.zeroRow(columns);
      }

      // calling other basic plugin function
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      targetEle.setAttribute('data-pb-table-loaded', '1');

      //datatable code
      //      dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      //      filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  /**
   * here we fetch the entries
   * @param form
   * @param button
   * @param values
   * @returns {boolean}
   * @private
   */
  const _getLoad = function (form, button, values) {

    var fetchEntries;

    // button.getAttribute('data-pb-calling');
    button.querySelector('[data-pb-label="text"]').innerText = 'Loading...';

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : button.value,
      line   : button.name,
      account: values
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    data = generate_ajaxCalling([button.value, button.getAttribute('name')], values)

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
    fetchEntries = PB_render_table.simpleRender(data, tableProfile);

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


  /**
   * here we load the form when user hit the button
   * @param element
   * @param button
   * @returns {boolean}
   */
  function formsTarget(element, button) {
    // fetching new values or static values for form initial
    formEl = element.querySelector('form');
    if (formEl.getAttribute(atr.core.loadOf.form) === "1") return true;

    // add page blockUIElement until all things load for the page.
    // Plug_formKeen.loadIndeed(element, [KT_cps.block], ['Loading Functions', 'primary']);

    // ajaxResponse = generate_ajaxCalling([button.value, button.getAttribute('name')], [])
    const _process = (data) => {
      return _process_a(data);
    }
    const _process_a = (data) => {

      const ajaxResponseNew = {...StateData, ...data};

      const sts = PB_render_form.formRender_single(ajaxResponseNew, formEl);

      if (!sts) return false;

      element.setAttribute(atr.core.loaded, "1");
      Plug_formKeen.loadIndeed(element, [KT_cps.block],) // or pass params as ['', '', '', false]
      formEl.setAttribute(atr.core.loadOf.form, "1");

      return true;
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : button.value,
      type: button.type,
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  /**
   * here we fill the required input onto form
   * @param element
   * @param button
   */
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

  /**
   * here we load the target table
   * @param element
   * @param event
   */
  function tablesTarget(element, event) {


    const _process = (data) => {
      return _process_a(data);
    }

    const _process_a = (data) => {
      let targetTableEle = {
        customer_table: element
      }

      PB_extend_foreign.$_remote('single', data, [
        [
          'customer_table', 'dates', '4', '0'
        ]
      ])
      renderTable(targetTableEle, data);
      return true;
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }


  // Public methods
  return {

    MBG_forms : function (_event) {
      return eleCheck() ? formsTarget(_callEl, _event) : false;
    },
    MBG_loads : function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },
    MBG_tables: function (_event) {
      return eleCheck() ? tablesTarget(_callEl, _event) : false;
    },
    // quick transaction for modal
    MBG_modals: function () {
      modalsTarget(type);
    },

    MBG_state: function () {
      return pageOpen();
    },

  };
}();