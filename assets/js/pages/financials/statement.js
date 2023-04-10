"use strict";

// Class definition
var PB__FIN_statement = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param event
   * @param data
   */
  const actionRoute = function (event) {
    // fetching required page data

    switch (event.type) {
      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.fin.statement.cashflow.n:
            return PB_FS_cashflow.FSC_actions(event)
          case pb.fin.statement.negative.n:
            return PB_FS_negative.FSN_actions(event);
          case pb.fin.statement.receipts.n:
            return PB_FS_receipts.FSR_actions(event);
          case pb.fin.statement.transaction.n:
            return PB_FS_transaction.FST_actions(event);
          case pb.fin.statement.trial.n:
            return PB_FS_trial.FST_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.fin.statement.cashflow.n:
            return PB_FS_cashflow.FSC_cards(event);
          case pb.fin.statement.negative.n:
            return PB_FS_negative.FSN_cards(event);
          case pb.fin.statement.receipts.n:
            return PB_FS_receipts.FSR_cards(event);
          case pb.fin.statement.transaction.n:
            return PB_FS_transaction.FST_cards(event);
          case pb.fin.statement.trial.n:
            return PB_FS_trial.FST_cards(event);
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.fin.statement.cashflow.n:
        return PB_FS_cashflow.FSC_pageOpen();
      case pb.fin.statement.negative.n:
        return PB_FS_negative.FSN_pageOpen();
      case pb.fin.statement.receipts.n:
        return PB_FS_receipts.FSR_pageOpen();
      case pb.fin.statement.transaction.n:
        return PB_FS_transaction.FST_pageOpen();
      case pb.fin.statement.trial.n:
        return PB_FS_trial.FST_pageOpen();
    }
  }

  // Public methods
  return {

    actionRouting: function (_event) {
      return actionRoute(_event);
    },

    baseRouting: function () {
      return baseRoute();
    },
  };
}();