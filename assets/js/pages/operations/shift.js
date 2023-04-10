"use strict";

// Class definition
var PB__OPR_shifts = function () {

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
          case pb.opr.shifts.control.n:
            return PB_OS_control.OSC_actions(event);

          case pb.rpt.shifts.listing.n:
            return PB_OS_listing.OSL_actions(event);

          case pb.rpt.shifts.overview.n:
            return PB_OS_overview.OSO_actions(event);

          case pb.rpt.shifts.process.n:
            return PB_OS_process.OSP_actions(event);

        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.opr.shifts.control.n:
            return PB_OS_control.OSC_cards(event);

          case pb.rpt.shifts.listing.n:
            return PB_OS_listing.OSL_cards(event);

          case pb.rpt.shifts.overview.n:
            return PB_OS_overview.OSO_cards(event);

          case pb.rpt.shifts.process.n:
            return PB_OS_process.OSP_cards(event);


        }
        break;

    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.shifts.control.n:
        return PB_OS_control.OSC_pageOpen();

      case pb.rpt.shifts.listing.n:
        return PB_OS_listing.OSL_pageOpen();

      case pb.rpt.shifts.overview.n:
        return PB_OS_overview.OSO_pageOpen();

      case pb.rpt.shifts.process.n:
        return PB_OS_process.OSP_pageOpen();


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
