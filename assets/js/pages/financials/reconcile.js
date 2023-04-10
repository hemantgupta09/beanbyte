"use strict";

// Class definition
var PB__FIN_reconcile = function () {

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
          case pb.fin.reconcile.summary.n:
            return PB_FR_summary.FRS_actions(event);
          case pb.fin.reconcile.initiate.n:
            return PB_FR_initiate.FRI_actions();
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.fin.reconcile.summary.n:
            return PB_FR_summary.FRS_cards(event);
          case pb.fin.reconcile.initiate.n:
            return PB_FR_initiate.FRI_cards();
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.fin.reconcile.summary.n:
        return PB_FR_summary.FRS_pageOpen();
      case pb.fin.reconcile.initiate.n:
        return PB_FR_initiate.FRI_pageOpen();
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