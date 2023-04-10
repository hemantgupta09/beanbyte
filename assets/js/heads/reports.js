"use strict";

// Class definition
var PB__reports = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {
      case pb.rpt.customers.n:
        PB__RPT_customers.basePageRouting()
        break;

      case pb.rpt.general.n:
        PB__RPT_general.basePageRouting()
        break;

      case pb.rpt.accounts.n:
        PB__RPT_accounts.basePageRouting();
        break;

      case pb.rpt.employees.n:
        PB__RPT_employees.basePageRouting();
        break;

      case pb.rpt.products.n:
        PB__RPT_products.basePageRouting();
        break;

      case pb.rpt.petroleum.n:
        PB__RPT_petroleum.basePageRouting();
        break;
    }
  }

  function baseRouting() {
    switch (thePathArr[1]) {

      case pb.rpt.customers.n:
        return PB__RPT_customers.baseRouting()

      case pb.rpt.general.n:
        return PB__RPT_general.baseRouting()

      case pb.rpt.accounts.n:
        return PB__RPT_accounts.baseRouting();

      case pb.rpt.employees.n:
        return PB__RPT_employees.baseRouting();

      case pb.rpt.products.n:
        return PB__RPT_products.baseRouting();

      case pb.rpt.petroleum.n:
        return PB__RPT_petroleum.baseStateRouting();
    }

  }

  function buttonActionRouting(_event, _return) {
    if (_return.indexOf(_event.type) !== -1) return true;

    switch (thePathArr[1]) {
      case pb.rpt.customers.n:
        return PB__RPT_customers.actionRouting(_event);

      case pb.rpt.general.n:
        return PB__RPT_general.actionRouting(_event);

      case pb.rpt.accounts.n:
        return PB__RPT_accounts.actionRouting(_event);

      case pb.rpt.employees.n:
        return PB__RPT_employees.actionRouting(_event);

      case pb.rpt.products.n:
        return PB__RPT_products.actionRouting(_event);

      case pb.rpt.petroleum.n:
        return PB__RPT_petroleum.actionRouting(_event);
    }
  }

  // Public methods
  return {
    basePageCall     : function () {
      basePageRouting();
    },
    pageStateRouting : function () {
      return baseRouting();
    },
    userActionRouting: function (_event, _return) {
      return buttonActionRouting(_event, _return);
    },
  };
}();