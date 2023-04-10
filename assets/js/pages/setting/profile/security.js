"use strict";

// Class definition
var PB_SP_security = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;
  let $table;
  let xData;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3006',
  };

  // Private functions
  function security_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.security.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'rows'  : {},
              'status': true
            }
            break;
          case 'state':
            response = {
              'data'  : {},
              'status': true
            }
            break;
        }
        break;

      case pb.set.profile.security.p.details:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  : {
            security_option: {
              'logged_devices' : '324',
              'app_signin'     : '2343',
              'failed_attempts': '21'
            },
            admin_enable   : {
              //['id':int, 'name':string, 'username':string, 'signin':int , 'failed':int, 'user_type':string, 'auth':string]
              11: ['11', 'lokesh kumar', 'tiger', '12', '5', '1', '1'],
              12: ['12', 'lokesh kumar', 'tiger', '12', '5', '2', '2'],
              13: ['13', 'lokesh kumar', 'tiger', '12', '25', '2', '3'],
              14: ['14', 'lokesh kumar', 'tiger', '32', '5', '1', '2'],
            },
            admin_disable  : {
              //['id':int, 'name':string, 'username':string, 'signin':int , 'failed':int, 'user_type':string, 'auth':string]
              11: ['11', 'lokesh kumar', 'tiger', '12', '5', '1', '1'],
              12: ['12', 'lokesh kumar', 'tiger', '12', '5', '2', '2'],
              13: ['13', 'lokesh kumar', 'tiger', '12', '25', '2', '3'],
              14: ['14', 'lokesh kumar', 'tiger', '32', '5', '1', '2'],
            },
            user_enable    : {
              //['id':int, 'name':string, 'username':string, 'signin':int , 'failed':int, 'user_type':string, 'auth':string]
              11: ['11', 'lokesh kumar', 'tiger', '12', '5', '1', '1'],
              12: ['12', 'lokesh kumar', 'tiger', '12', '5', '2', '2'],
              13: ['13', 'lokesh kumar', 'tiger', '12', '25', '2', '3'],
              14: ['14', 'lokesh kumar', 'tiger', '32', '5', '1', '2'],
            },
            user_disable   : {
              //['id':int, 'name':string, 'username':string, 'signin':int , 'failed':int, 'user_type':string, 'auth':string]
              11: ['11', 'lokesh kumar', 'tiger', '12', '5', '1', '1'],
              12: ['12', 'lokesh kumar', 'tiger', '12', '5', '2', '2'],
              13: ['13', 'lokesh kumar', 'tiger', '12', '25', '2', '3'],
              14: ['14', 'lokesh kumar', 'tiger', '32', '5', '1', '2'],
            },
            device_use     : {
              //['id':int, 'device':string, 'agent':string, 'ip_address':string , 'last_access':string, 'unique_id':string, 'icon_id':int]
              11: ['11', 'Android', 'Chrome', '236.125.56.78', '20 min ago', 'fftt456765gjkkjhi8306767', '4'],
              12: ['12', 'Window', 'Chrome', '236.125.56.78', '20 min ago', 'fftt456765gjkkjhi8306767', '4'],
              13: ['13', 'Android', 'Chrome', '1236.125.56.7', '20 min ago', 'fftt456765gjkkjhi8306767', '4'],
              14: ['14', 'Android', 'Chrome', '236.125.56.78', '20 min ago', 'fftt456765gjkkjhi8306767', '4'],
            },
            user_type      : {
              1: ['SUPER ADMIN'],
              2: ['ADMIN']
            },
            auth           : {
              1: ['SMS OTP'],
              2: ['WA OTP'],
              3: ['Direct']
            }
          },
          'status': true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const tablesTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.security.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.security.p.sheet:
        return true;
      default:
        return true;
    }
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

    // other things, not connected to dynamic data.
    $table = new tablesProfile_setting(thePathArr);

    return ajax
  }

  const renderTable = function (targetTableEle, ajaxResponse) {
    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
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
  const loadData = function (element, button) {
    let security = element.querySelector('#security-options');
    let adminEle = element.querySelector('#admin-panel');
    let userEle = element.querySelector('#user-panel');

    let targetTableEle = {
      admin_enable : adminEle.querySelector('#admin-enable'),
      admin_disable: adminEle.querySelector('#admin-disable'),
      user_enable  : userEle.querySelector('#user-enable'),
      user_disable : userEle.querySelector('#user-disable'),
      device_use   : element.querySelector('#device-use')
    }

    const _process = (data) => {
      _process_a(data);
    }
    const _process_a = (data) => {
      ajaxResponse = data;

      if (!ajaxResponse) return false;

      security.innerHTML = PB_extend_append.$_single(security.innerHTML, ajaxResponse.security_option);

      PB_extend_foreign.$_remote('single', ajaxResponse, [
        [pb.set.profile.security.c.admin_enable, 'user_type', 5, 0],
        [pb.set.profile.security.c.admin_enable, 'auth', 6, 0],
        [pb.set.profile.security.c.admin_disable, 'user_type', 5, 0],
        [pb.set.profile.security.c.admin_disable, 'auth', 6, 0],
        [pb.set.profile.security.c.user_enable, 'user_type', 5, 0],
        [pb.set.profile.security.c.user_enable, 'auth', 6, 0],
        [pb.set.profile.security.c.user_disable, 'user_type', 5, 0],
        [pb.set.profile.security.c.user_disable, 'auth', 6, 0],
      ]);

      renderTable(targetTableEle, ajaxResponse);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.security.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }

  // Public methods
  return {

    SPS_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPS_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPS_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },

    // fetching all upcoming required details
    SPS_state: function () {
      return pageOpen();
    },

  };
}();