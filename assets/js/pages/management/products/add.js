"use strict";

// Class definition
var PB_MP_add = function () {
  // Shared variables
  let StateData;
  let ajaxResponse;
  let tableEl, formEl, success;

  // Private functions
  function add_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    console.log(button);
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.mng.products.add.n:
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
                    "name": "All Active Products"
                  },
                  '11': {
                    "id"  : 11,
                    "name": "Petroleum Fuel"
                  },
                  '12': {
                    "id"  : 12,
                    "name": "Lubricant Oil"
                  },
                  '13': {
                    "id"  : 13,
                    "name": "LPG Cylinders"
                  },
                  '-1': {
                    "id"  : 0,
                    "name": "Disabled Products"
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
      case pb.mng.products.add.p.Fuels:
        break;
      case pb.mng.products.add.p.Lubes:
        switch (btnType) {
          case 'form':
            response = {
              'rows'  : {
                accounts: {
                  group: {
                    // [id, name, alias, string, group]
                    21: [21, 'Lokesh Kumar', 'lucky', '0', 'Local Customer'],
                    22: [22, 'Naveen Kumar', 'vicky', '0', 'Govt Party'],
                    23: [23, 'Suresh Kumar', 'suri', '0', 'Regular Customer'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '0', 'Random Party'],
                  },
                }
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.products.add.p.goods:
        break;
      case pb.mng.products.add.p.services:
        switch (btnType) {
          case 'form':
            response = {
              'rows': {
                accounts: {
                  customer: {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
                  vehicle : {
                    // [cid, name];
                    21: [21, 'Car'],
                    22: [22, 'Truck'],
                    23: [23, 'Zeep'],
                    24: [24, 'Motor Cycle'],
                  }
                },
              },
              status: true
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


  /**
   * this will be used for show page's base-0 data.
   */
  const basePage = (path) => {
    console.log(path)

    // call data from ajax
    const data = add_ajaxCalling([path[2], 'page']);

    // console.log(data.menu[3].cate_id);
    PB_extend_foreign.$_remote('double', [data.menu, StateData.category], [['cate_id', 'name']])
    // calling render to place data
    PB_render_menu.menuRender(data.menu, 'stack');
  }

  /**
   * this will be used into forms
   * preloaded data that will not change for this page
   */
  const staticData = (path) => {

    // hold data into variables.
    const data = add_ajaxCalling([path[2], 'state'])

    console.log(data);

    // this data save into variables.
    // it will be called when create form initiated.
    StateData = data;
  }

  const modalsTarget = function (button) {

    // calling ajax with passing type.
    // ajaxResponse = banking_ajaxCalling([pb.opr.transactions.banking.n, pb.opr.transactions.banking.p.deposit, pb.opr.transactions.banking.p.withdrawal, pb.opr.transactions.banking.p.transfer, pb.opr.transactions.banking.p.clearance]);

    // async await sleep(3000);

    return true;
  }

  const _getTable = (button, params, htLen) => {

    var renderedData

    ajaxResponse = banking_ajaxCalling([button.value, button.getAttribute('name')], params)

    if (ajaxResponse !== false) {
      const OPTION = [4, ['view', 'edit', 'delete'], ['view-banking', 'edit-banking', 'delete-banking']];
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

    ajaxResponse = banking_ajaxCalling([button.value, button.getAttribute('name')], values)

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
    fetchEntries = PB_render_table.simpleRender(ajaxResponse, tableProfile);

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
    ajaxResponse = add_ajaxCalling([button.value, button.name]);
    console.log(ajaxResponse.accounts);
    PB_render_form.renderME(rendER.form.method.selectOnly, ajaxResponse.accounts, element);
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
  return {

    MPA_creates: function (element, button) {
      createsTarget(element, button);
    },
    MPA_loads  : function (element, button) {
      loadsTarget(element, button)
    },
    MPA_tables : function (element, button) {
      tablesTarget(element, button)
    },
    // quick transaction for modal
    MPA_modals: function () {
      modalsTarget(type);
    },

    // fetching all basic required details
    MPA_page : function (path) {
      basePage(path);
    },
    MPA_state: function (path) {
      return staticData(path);
    },

  };
}();