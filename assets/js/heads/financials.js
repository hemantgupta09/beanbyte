"use strict";

// Class definition
var PB__financials = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {
      case pb.fin.balance.n:
        PB__FIN_balance.basePageRouting()
        break;
    }
  }

  function baseRouting() {
    switch (thePathArr[1]) {
      case pb.fin.balance.n:
        return PB__FIN_balance.baseRouting();
      case pb.fin.profit.n:
        return PB__FIN_profit.baseRouting();
      case pb.fin.reconcile.n:
        return PB__FIN_reconcile.baseRouting();
      case pb.fin.statement.n:
        return PB__FIN_statement.baseRouting();
    }

  }

  function buttonActionRouting(_event, _return) {

    if (_return.indexOf(_event.type) !== -1) return true;

    switch (thePathArr[1]) {
      case pb.fin.balance.n:
        return PB__FIN_balance.actionRouting(_event);
      case pb.fin.profit.n:
        return PB__FIN_profit.actionRouting(_event);
      case pb.fin.reconcile.n:
        return PB__FIN_reconcile.actionRouting(_event);
      case pb.fin.statement.n:
        return PB__FIN_statement.actionRouting(_event);
    }
  }

  // Public methods
  return {
    pageStateRouting : function () {
      return baseRouting();
    },
    userActionRouting: function (_event, _return) {
      return buttonActionRouting(_event, _return);
    },
  };
}();