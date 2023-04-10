"use strict";

// Class definition
var PB_SP_invoice = function () {

  // Shared variables
  let StateData;
  let ajaxResponse;
  let Layout, Direct;

  // Private functions
  function invoice_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.set.profile.invoice.n:
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

      case pb.set.profile.invoice.p.page:
        response = {
          'rows'  : {},
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
      case pb.fin.balance.invoice.p.sheet:
        return true;
    }
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.fin.balance.invoice.p.sheet:
        return true;
      default:
        return true;
    }
  }

  /**
   * this will be used for show page's base-0 data.
   */
  const baseData = (page) => {

    // call data from ajax
    const data = invoice_ajaxCalling([pb.set.profile.invoice.n, 'page']);

    Layout = PBapp.querySelector('#layout_zone');
    Direct = Layout.querySelector('#direct_zone');

    loadData(Direct);
  }

  /**
   * preloaded data that will not change for this page
   */
  const staticData = (page) => {

    // hold data into variables.
    const data = invoice_ajaxCalling([pb.set.profile.invoice.n, 'state']);

    // this data save into variables.
    // it will be called when create form initiated.
    StateData = data;
  }

  const loadData = function (element, button) {

  }
  const modalsTarget = function (element, button) {
    //here we handle all modals
  }


  // Public methods
  return {

    SPI_tables : function (event) {
      return eleCheck() ? tablesTarget(_callEl, event) : false;
    },
    SPI_actions: function (event) {
      return eleCheck() ? actionsTarget(_callEl, event) : false;
    },
    SPI_modals : function (event) {
      return eleCheck() ? modalsTarget(_callEl, event) : false;
    },

    // fetching all basic required details
    SPI_page: function (page) {
      baseData(page);
    },

    // fetching all upcoming required details
    SPI_state: function (page) {
      return staticData(page);
    },

  };
}();