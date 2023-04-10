"use strict";

// Class definition
var PB__operations = function () {
  // Shared variables

  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {

      case pb.opr.transactions.n:
        PB__OPR_transactions.basePageRouting()
        break;
      case pb.opr.stock.n:
        PB__OPR_stocks.basePageRouting();
        break;
      case pb.opr.employees.n:
        PB__OPR_employees.basePageRouting()
        break;
      case pb.opr.shifts.n:
        //
        break;

    }
  }

  function baseRouting() {
    switch (thePathArr[1]) {

      case pb.opr.transactions.n:
        return PB__OPR_transactions.baseRouting();

      case pb.opr.stock.n:
        console.log("stock clicked");
        return PB__OPR_stocks.baseRouting();

      case pb.opr.employees.n:
        return PB__OPR_employees.baseRouting();

      case pb.opr.indents.n:
        return PB__OPR_indents.baseRouting();

      case pb.opr.loyalty.n:
        return PB__OPR_layalty.baseRouting();

      case pb.opr.shifts.n:
        return PB__OPR_shift.baseRouting();
        break;
    }

  }

  function buttonActionRouting(_event, _return) {
    if (_return.indexOf(_event.type) !== -1) return true;

    switch (thePathArr[1]) {
      case pb.opr.transactions.n:
        return PB__OPR_transactions.actionRouting(_event);
        break;

      case pb.opr.shifts.n:
        return PB__OPR_shifts.actionRouting(_event);
        break;
      case pb.opr.stock.n:
        return PB__OPR_stocks.actionRouting(_event);
        break;
      case pb.opr.employees.n:
        return PB__OPR_employees.actionRouting(_event);
        break;

      case pb.opr.indents.n:
        return PB__OPR_indents.actionRouting(_event);
        break;

      case pb.opr.loyalty.n:
        return PB__OPR_loyalty.actionRouting(_event);
        break;

    }
  }

  // Public methods
  return {
    basePageCall     : function () {
      basePageRouting();
    },
    pageStateRouting : function () {
      console.log("baseRouting");
      return baseRouting();
    },
    userActionRouting: function (_event, _return) {
      return buttonActionRouting(_event, _return);
    },
  };
}();