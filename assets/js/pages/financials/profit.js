"use strict";

// Class definition
var PB__FIN_profit = function () {

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
          case pb.fin.profit.comparison.n:
            return PB_FP_comparison.FPC_actions();
          case pb.fin.profit.clients.n:
            return PB_FP_clients.FPC_actions();
          case pb.fin.profit.days.n:
            return PB_FP_days.FPD_actions();
          case pb.fin.profit.detailed.n:
            return PB_FP_detailed.FPD_actions();
          case pb.fin.profit.months.n:
            return PB_FP_months.FPM_actions();
          case pb.fin.profit.rates.n:
            return PB_FP_rates.FPR_actions();
          case pb.fin.profit.schedule.n:
            return PB_FP_schedule.FPS_actions();
          case pb.fin.profit.standard.n:
            return PB_FP_standard.FPS_actions();
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.fin.profit.comparison.n:
            return PB_FP_comparison.FPC_cards();
          case pb.fin.profit.clients.n:
            return PB_FP_clients.FPC_cards();
          case pb.fin.profit.days.n:
            return PB_FP_days.FPD_cards();
          case pb.fin.profit.detailed.n:
            return PB_FP_detailed.FPD_cards();
          case pb.fin.profit.months.n:
            return PB_FP_months.FPM_cards();
          case pb.fin.profit.rates.n:
            return PB_FP_rates.FPR_cards();
          case pb.fin.profit.schedule.n:
            return PB_FP_schedule.FPS_cards();
          case pb.fin.profit.standard.n:
            return PB_FP_standard.FPS_cards();
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.fin.profit.comparison.n:
        return PB_FP_comparison.FPC_pageOpen();
      case pb.fin.profit.clients.n:
        return PB_FP_clients.FPC_pageOpen();
      case pb.fin.profit.days.n:
        return PB_FP_days.FPD_pageOpen();
      case pb.fin.profit.detailed.n:
        return PB_FP_detailed.FPD_pageOpen();
      case pb.fin.profit.months.n:
        return PB_FP_months.FPM_pageOpen()
      case pb.fin.profit.rates.n:
        return PB_FP_rates.FPR_pageOpen();
      case pb.fin.profit.schedule.n:
        return PB_FP_schedule.FPS_pageOpen();
      case pb.fin.profit.standard.n:
        return PB_FP_standard.FPS_pageOpen();
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