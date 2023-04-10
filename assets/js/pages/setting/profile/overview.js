"use strict";

// Class definition
var PB_SP_overview = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;
  let xData;


  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4710',
  };

  // Private functions
  function overview_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.overview.n:
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

      case pb.set.profile.overview.p.details:
        response = {
          'rows'  : {
            license_detail: {
              'id'               : '11',
              'license_code'     : '23243233232',
              'deployed_date'    : '2022-02-03',
              'activation_date'  : '2022-04-02',
              'life_days'        : '2017-03-04',
              'subscription_type': 'basic',
              'expire_date'      : '2022-02-05',
            },
            profile_detail: {
              'id'            : '11',
              'user_name'     : 'lokesh kumar',
              'business_name' : 'bean byte pvt ltd',
              'contact_number': '7845340923',
              'account_status': 'verified',
              'gstin'         : 'UWE32432R2R23323',
              'tin'           : '456235345',
              'address'       : 'lalsot',
              'state'         : 'rajasthan',
              'district'      : 'dausa',
              'communication' : 'phone',
              'allow_market'  : 'Yes'
            },
            account_detail: {
              'id'            : '11',
              'bank_name'     : 'SBI India',
              'account_type'  : 'primary',
              'account_number': '89247398473294',
              'ifsc'          : 'BARB0JHILLA'
            },
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
      case pb.set.profile.overview.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.overview.p.sheet:
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
      Direct = _directLE.direct;
      loadData(Direct);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax
  }


  const loadData = function (element, button) {

    const allDetails = function (element, button) {

      ajaxResponse['license_detail']['life_days'] = PB_render_common.returnOnCall(ajaxResponse['license_detail']['life_days'], 'gap', [false, 'z'])[0];
      element.querySelectorAll('[data-pb-control]').forEach((targetEle, index) => {
        let key = targetEle.getAttribute('data-pb-control');

        targetEle.innerHTML = PB_extend_append.$_single(targetEle.innerHTML, ajaxResponse[key]);
      })

      return true;
    }


    ajaxResponse = overview_ajaxCalling([pb.set.profile.overview.p.details, '']);

    const _process = (data) => {
      ajaxResponse = data;
      _process_a(data);
    }
    const _process_a = (data) => {
      allDetails(element, button);

      PB_render_common.initOnCall(element);
      return true;
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.overview.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPO_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPO_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPO_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },
    // fetching all upcoming required details
    SPO_state: function () {
      return pageOpen();
    },

  };
}();