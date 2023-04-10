"use strict";

// Class definition
var PB_MA_setting = function () {
  // Shared variables
  let StateData;
  var ajaxResponse;
  let tableEl, formEl, success;
  let myPath;

  // Private functions
  function setting_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    console.log(button);
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.mng.accounts.setting.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
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
                    "cate_id": "14",
                    "value"  : 44444,
                    "type"   : '1'
                  },
                  5: {
                    "id"     : 5,
                    "cate_id": "15",
                    "value"  : 4233,
                    "type"   : '1'
                  },
                  6: {
                    "id"     : 6,
                    "cate_id": "-1",
                    "value"  : 5,
                    "type"   : '2'
                  },
                },
              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'rows'  : {
                'category': {
                  '0' : {
                    "id"  : 0,
                    "name": "All Contacts"
                  },
                  '11': {
                    "id"  : 11,
                    "name": "Local Connections"
                  },
                  '12': {
                    "id"  : 12,
                    "name": "Family Member"
                  },
                  '13': {
                    "id"  : 13,
                    "name": "Related Business"
                  },
                  '14': {
                    "id"  : 14,
                    "name": "Local Business"
                  },
                  '15': {
                    "id"  : 15,
                    "name": "Local Connections"
                  },
                  '-1': {
                    "id"  : 0,
                    "name": "Deactivated"
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
      case pb.mng.accounts.setting.p.one:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  group: {
                    // [id, name, alias, string, group]
                    21: [21, 'Lokesh Kumar', 'lucky', '0', 'Local Customer'],
                    22: [22, 'Naveen Kumar', 'vicky', '0', 'Govt Party'],
                    23: [23, 'Suresh Kumar', 'suri', '0', 'Regular Customer'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '0', 'Random Party'],
                  },
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
          case 'group':
            switch (params[0]) {
              case '21':
              case '22':
                response = {
                  'rows'  :
                    {
                      account: {
                        "amount": "11198",
                        "suffix": "OutStanding"
                      },
                    },
                  'status': true
                }
                break;
              case '23':
              case '24':
                response = {
                  'rows'  :
                    {
                      account: {
                        "amount": "894398",
                        "suffix": "OutStanding"
                      },
                    },
                  'status': true
                }
                break;
            }
            break;
        }
        break;

      case pb.mng.accounts.setting.p.group:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  group: {
                    // [id, name, alias, string, group]
                    21: [21, 'Lokesh Kumar', 'lucky', '0', 'Local Customer'],
                    22: [22, 'Naveen Kumar', 'vicky', '0', 'Govt Party'],
                    23: [23, 'Suresh Kumar', 'suri', '0', 'Regular Customer'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '0', 'Random Party'],
                  },
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
          case 'group':
            switch (params[0]) {
              case '21':
              case '22':
                response = {
                  'rows'  :
                    {
                      groupBy: {
                        //["SR":int, "ledger_name":string, "new_Bal":amount,]
                        11: ['11', 'Dinesh Kumar Meena', "98329"],
                        12: ['12', 'Lout', "18329"],
                        13: ['13', 'Mukul Lout', "934329"],
                      },
                    },
                  'status': true
                }
                break;
              case '23':
              case '24':
                response = {
                  'rows'  :
                    {
                      groupBy: {
                        //["SR":int, "ledger_name":string, "new_Bal":amount,]
                        11: ['11', 'Cake Murder', "98329"],
                        12: ['12', 'Proud Meena', "18329"],
                        13: ['13', 'Mukul Lout', "934329"],
                      },
                    },
                  'status': true
                }
                break;
            }
            break;
        }
        break;

      case pb.mng.accounts.setting.p.all:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              'rows'  :
                {
                  allRequired: {
                    //["SR":int, "ledger_name":string, "new_Bal":amount,]
                    11: ['11', 'Dinesh Kumar Meena', "98329"],
                    12: ['12', 'Lout', "18329"],
                    13: ['13', 'Mukul Lout', "934329"],
                  },
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
    //    console.log(path)

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: 'page'
    });
    ajax.callREQUEST({myPath}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    // call data from ajax
    const data = setting_ajaxCalling([path[2], 'page']);

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
    myPath = path;

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: 'state'
    });
    ajax.callREQUEST({myPath}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    let data = setting_ajaxCalling([pb.mng.accounts.setting.n, 'state']);

    //    console.log(data);
    // this data save into variables.
    // it will be called when create form initiated.

    StateData = data;

    return ajax;
  }
  /**
   * here we get the table profile
   * @param type
   * @returns {{methods: {"0": string, "1": string, "2": string, "3": string, "4": string, "5": string}, profile: {"0": *[], "1": *[], "2": *[]}, options: {"0": boolean, "1": boolean, "2": boolean, "3": boolean, "4": boolean, "5": boolean}, table: {"0": {css: *[], method: string, param: number[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: *[], style: number, type, value: string}}}}
   */
  const getProfile = function (type) {
    let OPTION;
    let tableProfile, profile, methods, options;
    switch (type) {
      case 'groupBy':
        tableProfile = {
          '0': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '0',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '1',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.in,
            method: 'c',
            value : '0',
            param : [],
            style : 0,
            css   : []
          },
        }
        methods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal',
        };
        options = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
        };
        profile = {
          0: [],
          1: [],
          2: []
        };
        break;
      case 'allRequired':
        tableProfile = {
          '0': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '0',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '1',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.in,
            method: 'c',
            value : '0',
            param : [],
            style : 0,
            css   : []
          },
        }
        methods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal',
        };
        options = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true,
        };
        profile = {
          0: [],
          1: [],
          2: []
        };
        break;
    }
    return {
      table  : tableProfile,
      options: options,
      methods: methods,
      profile: profile
    };
  }

  const modalsTarget = function (button) {
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: pb.mng.accounts.setting.n
    });
    ajax.callREQUEST({myPath}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    // calling ajax with passing type.
    ajaxResponse = setting_ajaxCalling([pb.mng.accounts.setting.n, pb.mng.accounts.setting.p.deposit, pb.mng.accounts.setting.p.withdrawal, pb.mng.accounts.setting.p.transfer, pb.mng.accounts.setting.p.clearance]);

    // async await sleep(3000);

    return true;
  }

  const _getTable = (button, params, htLen) => {
  }
  /**
   * here we render the table as well as here we can call the datatable also and we append the table body
   * @param targetTableEle
   * @param ajaxResponse
   * @returns {boolean}
   */
  const renderTable = function (targetTableEle, ajaxResponse) {
    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      //let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      let property = getProfile(key);

      if (ajaxResponse[key]) {
        //now we make the profile
        renderedData = PB_render_table.simpleRender(ajaxResponse[key], property.table, 'array');

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

  const _getLoad = function (form, button, values) {

  }

  /**
   * here we load the target form
   * @param element
   * @param button
   * @returns {boolean}
   */
  function formTarget(element, button) {
    // fetching new values or static values for form initial
    formEl = element.querySelector('form');

    if (formEl.getAttribute('data-pb-form-loaded') !== "1") {
      // add page blockUIElement until all things load for the page.
      // Plug_formKeen.loadIndeed(element, [KT_cps.block], ['Loading Functions', 'primary']);

      // fetching, rendering and loading values into forms
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act : button.value,
        line: button.name
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);

      ajaxResponse = setting_ajaxCalling([button.value, button.getAttribute('name')], [])
      //      console.log(ajaxResponse)
      const ajaxResponseNew = {...StateData, ...ajaxResponse};

      const sts = PB_render_form.formRender_single(ajaxResponseNew, formEl);

      if (!sts) return false;

      element.setAttribute('data-pb-loaded', 'true');
      Plug_formKeen.loadIndeed(element, [KT_cps.block],) // or pass params as ['', '', '', false]
      formEl.setAttribute('data-pb-form-loaded', "1");
    }
    return true;
  }

  /**
   * here we load the target table
   * @param element
   * @param button
   * @returns {boolean}
   */
  function tablesTarget(element, button) {
    if (element.querySelector('table').getAttribute('data-pb-table-loaded') === '1') return true;

    let loadTableTarget = {
      allRequired: element,
    }
    ajaxResponse = setting_ajaxCalling([pb.mng.accounts.setting.p.all, button.name]);

    renderTable(loadTableTarget, ajaxResponse)

    element.querySelector('table').setAttribute('data-pb-table-loaded', '1');
  }

  /**
   * here we open the target form using routing
   * @param element
   * @param button
   * @returns {boolean}
   */
  function createsTarget(element, button) {
    console.log(element)
    let routePath = element.id.split('-')[0] + '-' + element.id.split('-')[1];

    switch (routePath) {
      case pb.mng.accounts.setting.p.one:
      case pb.mng.accounts.setting.p.group:
        return formTarget(element, button);
      case pb.mng.accounts.setting.p.all:
        return tablesTarget(element, button);
    }
  }


  function loadsTarget(element, button) {

  }


  /**
   * here we load the data for One-by-One  form
   * @param element
   * @param button
   * @param data
   * @returns {boolean}
   */
  const dynamicOneBy = function (element, button, data) {
    //    console.log(button)
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : pb.mng.accounts.setting.p.one,
      line   : button.type,
      account: button.value
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    ajaxResponse = setting_ajaxCalling([pb.mng.accounts.setting.p.one, button.name], [button.value]);
    //    console.log(ajaxResponse)
    element.querySelector('[data-pb-control="amount"]').value = ajaxResponse.account.amount;

    element.querySelector('[data-pb-control="suffix"]').innerText = ajaxResponse.account.suffix;

    return true;
  }
  /**
   * here we load all dynamic data for GroupBy form
   * @param element
   * @param button
   * @param data
   * @returns {boolean}
   */
  const dynamicGroupBy = function (element, button, data) {
    //    console.log('success')
    let loadTableTarget = {
      groupBy: element
    }

    if (element.querySelector('tbody')) {
      element.querySelector('table').removeChild(element.querySelector('tbody'));
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : pb.mng.accounts.setting.p.group,
      line   : button.type,
      account: button.value
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    ajaxResponse = setting_ajaxCalling([pb.mng.accounts.setting.p.group, button.name], [button.value])
    renderTable(loadTableTarget, ajaxResponse);
    return true;
  }
  const dynamicAllRequired = function (element, button, data) {
    return true;
  }
  /**
   * here we make the routing for a form when user will click then target values will show inside the form
   * @param element
   * @param button
   * @param data
   * @returns {boolean}
   */
  const dynamicTarget = function (element, button, data) {
    console.log(element)
    let routePath = element.id.split('-')[0] + '-' + element.id.split('-')[1];

    switch (routePath) {
      case pb.mng.accounts.setting.p.one:
        return dynamicOneBy(element, button, data);
      case pb.mng.accounts.setting.p.group:
        return dynamicGroupBy(element, button, data);
      case pb.mng.accounts.setting.p.all:
        return dynamicAllRequired(element, button, data);
    }

  }
  const targetActions = function (element, button) {
    let data = PB_extend_collect.$_form(element.querySelector('form'));
    console.log(data);
  }

  // Public methods
  return {
    MAS_dynamicCall(element, button, data) {
      return dynamicTarget(element, button, data);
    },
    MAS_creates: function (element, button) {
      return createsTarget(element, button);
    },
    MAS_loads  : function (element, button) {
      loadsTarget(element, button)
    },
    MAS_tables : function (element, button) {
      tablesTarget(element, button)
    },
    // quick transaction for modal
    MAS_modals : function () {
      modalsTarget(type);
    },
    MAS_actions: function (element, button) {
      targetActions(element, button);
    },
    // fetching all basic required details
    MAS_page : function (page) {
      basePage(page);
    },
    MAS_state: function () {
      return staticData();
    },

  };
}();