"use strict";

// Class definition
var PB__management = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {

      case pb.mng.products.n:
        PB__MNG_products.basePageRouting();
        break;

      case pb.mng.accounts.n:
        PB__MNG_accounts.basePageRouting();
        break;

      case pb.mng.customers.n:
        PB__MNG_customers.basePageRouting();
        break;

      case pb.mng.employees.n:
        PB__MNG_employees.basePageRouting();
        break;

      case pb.mng.billing.n:
        PB__MNG_billing.basePageRouting();
        break;
    }
  }

  function baseStateRouting() {
    switch (thePathArr[1]) {

      case pb.mng.products.n:
        return PB__MNG_products.baseStateRouting();

      case pb.mng.accounts.n:
        return PB__MNG_accounts.baseStateRouting();

      case pb.mng.customers.n:
        return PB__MNG_customers.baseStateRouting();

      case pb.mng.employees.n:
        return PB__MNG_employees.baseStateRouting();

      case pb.mng.billing.n:
        return PB__MNG_billing.baseStateRouting();

      case pb.mng.users.n:
        return PB__MNG_users.baseStateRouting();
    }

  }

  function buttonActionRouting(_event, _return, _data) {
    if (_return.indexOf(_event.type) !== -1) return true;
    switch (thePathArr[1]) {
      case pb.mng.products.n:
        return PB__MNG_products.actionRouting(_event, _data);

      case pb.mng.accounts.n:
        return PB__MNG_accounts.actionRouting(_event, _data);

      case pb.mng.customers.n:
        return PB__MNG_customers.actionRouting(_event, _data);

      case pb.mng.employees.n:
        return PB__MNG_employees.actionRouting(_event, _data);

      case pb.mng.billing.n:
        return PB__MNG_billing.actionRouting(_event, _data);

      case pb.mng.users.n:
        return PB__MNG_users.actionRouting(_event, _data);
    }
  }

  // Public methods
  return {
    basePageCall     : function () {
      basePageRouting();
    },
    pageStateRouting : function () {
      return baseStateRouting();
    },
    userActionRouting: function (_event, _return, _data) {
      return buttonActionRouting(_event, _return, _data);
    },
  };
}();