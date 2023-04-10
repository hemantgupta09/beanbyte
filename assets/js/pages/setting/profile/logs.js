"use strict";

// Class definition
var PB_SP_logs = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;
  let $table;
  let xData;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3003',
  };

  // Private functions
  function logs_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.logs.n:
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

      case pb.set.profile.logs.p.sessions:
        response = {
          'rows'  : {
            sessions : {
              //['id':int, 'user_name':string, 'user_type':string, 'device':string, 'date_time':date, 'location':string, 'ip_address':string]
              11: ['11', 'Lokesh Kumar', '11', 'Chrome-Windows', '21', 'india', '236.125.56.78'],
              12: ['12', 'Lokesh Kumar', '12', 'Chrome-Windows', '23', 'india', '236.125.56.78'],
              13: ['13', 'Dinesh Kumar', '13', 'Chrome-Windows', '22', 'india', '236.125.56.78'],
            },
            user_type: {
              11: ['ADMIN'],
              12: ['MANAGER'],
              13: ['STAFF']
            },
            dates    : {
              21: ['12 Oct, 22 - 15:22:43'],
              22: ['12 Oct, 22 - 15:22:43'],
              23: ['12 Oct, 22 - 15:22:43'],
              24: ['12 Oct, 22 - 15:22:43'],
            }
          },
          'status': true
        }
        break;
      case pb.set.profile.logs.p.trans:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            [
              {}
            ],
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
      case pb.set.profile.logs.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.logs.p.sheet:
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
      console.log(Layout)
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

      if (targetEle.getAttribute('data-pb-table-loaded') === '1') {
        return
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

      // calling other basic plugin functions
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      //datatable code
      //dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      //filterEvents(filterEle, key);

      targetEle.setAttribute('data-pb-table-loaded', '1');
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  const loadData = function (element, button) {
    let sessions = element.querySelector('#login-sessions');

    console.log(sessions);
    let targetTableEle = {
      login_sessions: element,
    }

    ajaxResponse = logs_ajaxCalling([pb.set.profile.logs.p.sessions, '']);
    if (!ajaxResponse) return false;

    const _process = (data) => {
      _process_a(data);
    }
    const _process_a = (data) => {
      xData = data;

      PB_extend_foreign.$_remote('single', xData, [
        [pb.set.profile.logs.p.sessions, 'user_type', 2, 0],
        [pb.set.profile.logs.p.sessions, 'dates', 4, 0]
      ]);

      renderTable(targetTableEle, xData);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.logs.p.sessions,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPL_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPL_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPL_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },


    // fetching all upcoming required details
    SPL_state: function (page) {
      return pageOpen();
    },

  };
}();