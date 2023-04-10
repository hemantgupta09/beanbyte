"use strict";

// Class definition
var PB_SP_account = function () {

  // Shared variables
  let StateData;
  let xResponse, xData;
  let Layout, Direct;
  let formEl;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:3001',
  };

  // Private functions
  function account_ajaxCalling(button, params = []) {

  }

  const tablesTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.account.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.set.profile.account.p.sheet:
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
      //here we call the new functions
      Layout = PBapp.querySelector('#layout_zone');
      Direct = Layout.querySelector('#direct_zone');

      PB_render_form.renderME(rendER.form.method.selectOnly, StateData, Direct);

      loadData(Direct);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  const loadData = function (element) {
    let profile = element.querySelector('#profile-details');
    formEl = profile.querySelector('form');

    if (!formEl) {
      toastr.error('Element Not Loaded', 'Failed to Load')
      return true;
    }
    const _process = (data) => {
      _process_a(data);
    }

    const _process_a = (data) => {
      xData = data
      if (!xData) {
        toastr.error('', 'Failed to Load')
        return false;
      }
      console.log(xData)
      PB_extend_placement.$_form(xData.profile, formEl);
      Plug_formKeen.loadIndeed(formEl, [3]);
      Plug_datePicker.onCalling(formEl);
      Plug_selectPicker.onCalling_direct(formEl);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : pb.set.profile.account.p.details,
      type: ''
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }


  const formTarget = function (element, button) {
    formEl = element.querySelector('form');

    let collectEle = PB_extend_collect.$_form(formEl);
    console.log(collectEle);
    account_ajaxCalling([button.value, button.name], collectEle);
    return true;
  }

  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPA_forms  : function (event) {
      return eleCheck() ? formTarget(_callEl, event) : false;
    },
    SPA_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPA_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },

    // fetching all upcoming required details
    SPA_state: function () {
      return pageOpen();
    },

  };
}();