"use strict";

// Class definition
var PB__RPT_petroleum = function () {

  // Shared variables
  let redData;

  // Private functions

  /**
   * This support all layouts routing.
   * @param page
   * @param element
   * @param button
   */
  const actionRoute = function (_event) {
    // fetching required page data
    switch (_event.type) {

      case eTypes.report:
        switch (thePathArr[2]) {
          case pb.rpt.petroleum.rates.n:
            return PB_RP_rates.RPR_reports(_event);
          case pb.rpt.petroleum.pistol.n:
            return PB_RP_pistol.RPP_reports(_event);
          case pb.rpt.petroleum.summary.n:
            return PB_RP_summary.RPS_reports(_event);
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.rpt.petroleum.rates.n:
            return PB_RP_rates.RPR_tabs(_event);
          case pb.rpt.petroleum.pistol.n:
            return PB_RP_pistol.RPP_tabs(_event);
          case pb.rpt.petroleum.summary.n:
            return PB_RP_summary.RPS_tabs(_event);

        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.rpt.petroleum.rates.n:
            return PB_RP_rates.RPR_tables(_event);
          case pb.rpt.petroleum.pistol.n:
            return PB_RP_pistol.RPP_tables(_event);
          case pb.rpt.petroleum.summary.n:
            return PB_RP_summary.RPS_tables(_event);

        }
        break;

      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.rpt.petroleum.rates.n:
            return PB_RP_rates.RPR_backs(_event);
          case pb.rpt.petroleum.pistol.n:
            return PB_RP_pistol.RPP_backs(_event);
          case pb.rpt.petroleum.summary.n:
            return PB_RP_summary.RPS_backs(_event);

        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.petroleum.rates.n:
        PB_RP_rates.RPR_page();
        break;
      case pb.rpt.petroleum.pistol.n:
        PB_RP_pistol.RPR_page();
        break;
      case pb.rpt.petroleum.summary.n:
        PB_RP_summary.RPS_page();
        break;

    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.petroleum.rates.n:
        return PB_RP_rates.RPR_state();
      case pb.rpt.petroleum.pistol.n:
        return PB_RP_pistol.RPP_state();
      case pb.rpt.petroleum.summary.n:
        return PB_RP_summary.RPS_state();


    }
  }

  // Public methods
  return {

    actionRouting   : function (_event) {
      return actionRoute(_event);
    },
    basePageRouting : function () {
      basePageRoute();
    },
    baseStateRouting: function () {
      return baseStateRoute();
    },
  };
}();