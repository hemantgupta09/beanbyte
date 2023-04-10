"use strict";

// Class definition
var PB_SP_referral = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;
  let $table;
  let xData;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3005',
  };

  // Private functions
  function referral_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.referral.n:
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


      case pb.set.profile.referral.p.details:
        response = {
          'rows'  :
            {
              //['id':int, 'first_date':date, 'referral_user': string, 'details':string,  'status': string, 'profit':int]
              referral_year: {
                11: ['11', '24', 'Lokesh Filling Station', 'any extra detail about the user', '1', '2300'],
                12: ['12', '22', 'Lokesh Filling Station', 'any extra detail about the user', '3', '3000'],
                13: ['13', '21', 'Lokesh Filling Station', 'any extra detail about the user', '2', '2300'],
              },
              //['id':int, 'first_date':date, 'referral_user': string, 'details':string,  'status': string, 'profit':int]
              referral_time   : {
                11: ['11', '24', 'Lokesh Filling Station', 'any extra detail about the user', '1', '2300'],
                12: ['12', '22', 'Lokesh Filling Station', 'any extra detail about the user', '3', '3000'],
                13: ['13', '21', 'Lokesh Filling Station', 'any extra detail about the user', '2', '2300'],
              },
              referral_program: {
                'net_earnings'   : '123434',
                'registrations'  : '33490',
                'paid_referred'  : '125',
                'failed_referral': '223'
              },
              dates           : {
                21: ['2022-02-04'],
                22: ['2022-02-01'],
                23: ['2022-05-04'],
                24: ['2022-02-04'],
              },
              status          : {
                1: ['PAID'],
                2: ['TRIAL'],
                3: ['DUE']
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
      case pb.set.profile.referral.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.referral.p.sheet:
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
    let targetTableEle = {
      referral_year: element.querySelector('[data-pb-control="referral-year"]'),
      referral_time: element.querySelector('[data-pb-control="referral-time"]')
    }


    ajaxResponse = referral_ajaxCalling([pb.set.profile.referral.p.details, '']);

    const _process = (data) => {
      _process_a(data);
    }
    const _process_a = (data) => {
      ajaxResponse = data

      if (!ajaxResponse) return false;

      PB_extend_foreign.$_remote('single', ajaxResponse, [
        [pb.set.profile.referral.c.year, 'dates', 1, 0],
        [pb.set.profile.referral.c.year, 'status', 4, 0]
      ])

      PB_extend_foreign.$_remote('single', ajaxResponse, [
        [pb.set.profile.referral.c.time, 'dates', 1, 0],
        [pb.set.profile.referral.c.time, 'status', 4, 0]
      ]);

      console.log(ajaxResponse)
      renderTable(targetTableEle, ajaxResponse);

      let targetEle = element.querySelector('[data-pb-control="referral-program"]')
      targetEle.innerHTML = PB_extend_append.$_single(targetEle.innerHTML, ajaxResponse.referral_program);
      PB_render_common.initOnCall(targetEle);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.referral.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPR_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPR_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPR_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },

    // fetching all upcoming required details
    SPR_state: function () {
      return pageOpen();
    },

  };
}();