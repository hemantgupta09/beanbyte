"use strict";

// Class definition
var PB__FIN_balance = function () {


  // Private functions

  /**
   * This support all layouts routing.
   * @param _event
   */
  const actionRoute = function (_event) {
    // fetching required page data
    switch (_event.type) {

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.fin.balance.tformat.n:
            return PB_FB_tformat.FBT_loads(_event);
          case pb.fin.balance.standard.n:
            return PB_FB_standard.FBS_loads(_event);
          case pb.fin.balance.comparison.n:
            return PB_FB_comparison.FBC_loads(_event);
          case pb.fin.balance.summary.n:
            return PB_FB_summary.FBSY_loads(_event);

        }

        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.fin.balance.tformat.n:
            return PB_FB_tformat.FBT_actions(_event);
          case pb.fin.balance.standard.n:
            return PB_FB_standard.FBS_actions(_event);
          case pb.fin.balance.comparison.n:
            return PB_FB_comparison.FBC_actions(_event);
          case pb.fin.balance.summary.n:
            return PB_FB_summary.FBSY_actions(_event);
          case pb.fin.balance.detailed.n:
            return PB_FB_detailed.FBD_actions(_event);
          case pb.fin.balance.schedule.n:
            return PB_FB_schedule.FBS_actions(_event);
        }

        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.fin.balance.detailed.n:
            return PB_FB_detailed.FBD_cards(_event);
          case pb.fin.balance.schedule.n:
            return PB_FB_schedule.FBS_cards(_event);
        }
      default:
        alert('No Routing function added into Group file. for ' + _event.type);
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.fin.balance.tformat.n:
        return PB_FB_tformat.FBT_pageOpen();

      case pb.fin.balance.standard.n:
        return PB_FB_standard.FBS_pageOpen();

      case pb.fin.balance.comparison.n:
        return PB_FB_comparison.FBC_pageOpen();

      case pb.fin.balance.summary.n:
        return PB_FB_summary.FBSY_pageOpen();
      case pb.fin.balance.detailed.n:
        return PB_FB_detailed.FBD_pageOpen();
      case pb.fin.balance.schedule.n:
        return PB_FB_schedule.FBS_pageOpen();
    }
  }

  // Public methods
  return {
    actionRouting: function (_event) {
      return actionRoute(_event);
    },
    baseRouting  : function () {
      return baseRoute();
    },
  };
}();