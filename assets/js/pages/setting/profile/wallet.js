"use strict";

// Class definition
var PB_SP_wallet = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;
  let $table;
  let xData;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3007',
  };

  // Private functions
  function wallet_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.wallet.n:
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
      case pb.set.profile.wallet.p.details:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              header       : {
                'net_balance'  : '234324',
                'cash_balance' : '23432',
                'coins_balance': '4524234'
              },
              referrals_one: {
                //['id':int, 'date':date, 'order_id':int, 'details':string, 'amount':int]
                11: ['11', '21', '32432', 'On Successful Referral - New User Register', '92845'],
                12: ['12', '22', '32432', 'On Successful Referral - New User Register', '92845'],
                13: ['13', '23', '32432', 'On Successful Referral - New User Register', '92845'],
              },
              referrals_two: {
                //['id':int, 'date':date, 'order_id':int, 'details':string, 'amount':int]
                11: ['11', '21', '32432', 'On Successful Referral - New User Register', '92845'],
                12: ['12', '22', '32432', 'On Successful Referral - New User Register', '92845'],
                13: ['13', '23', '32432', 'On Successful Referral - New User Register', '92845'],
              },
              dates        : {
                21: ['2022-03-04'],
                22: ['2022-03-04'],
                23: ['2022-03-04'],
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
      case pb.set.profile.wallet.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.wallet.p.sheet:
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
      referrals_one: element.querySelector('#referrals-one'),
      referrals_two: element.querySelector('#referrals-two')
    }

    const _process = (data) => {
      _process_a(data);
      return true;
    }
    const _process_a = (data) => {
      ajaxResponse = data;

      if (!ajaxResponse) return false;

      PB_extend_foreign.$_remote('single', ajaxResponse, [
        [pb.set.profile.wallet.c.one, 'dates', 1, 0],
        [pb.set.profile.wallet.c.two, 'dates', 1, 0]
      ]);

      let header = element.querySelector('[data-pb-control="header"]');

      header.innerHTML = PB_extend_append.$_single(header.innerHTML, ajaxResponse.header);
      renderTable(targetTableEle, ajaxResponse);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.wallet.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }

  // Public methods
  return {

    SPW_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPW_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPW_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },
    // fetching all upcoming required details
    SPW_state: function () {
      return pageOpen();
    },

  };
}();