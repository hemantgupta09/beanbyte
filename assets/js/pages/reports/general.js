"use strict";

// Class definition
var PB__RPT_general = function () {

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
          case pb.rpt.general.balance.n:
            return PB_RG_balance.RGB_actions(event);

          case pb.rpt.general.board.n:
            return PB_RG_board.RGB_actions(event);

          case pb.rpt.general.dsr.n:
            return PB_RG_dsr.RGD_actions(event);

          case pb.rpt.general.onepage.n:
            return PB_RG_onepage.RGO_actions(event);

          case pb.rpt.general.rocket.n:
            return PB_RG_rocket.RGR_actions(event);

          case pb.rpt.general.transacts.n:
            return PB_RG_transacts.RGT_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.rpt.general.balance.n:
            return PB_RG_balance.RGB_cards(event);

          case pb.rpt.general.board.n:
            return PB_RG_board.RGB_cards(event);

          case pb.rpt.general.dsr.n:
            return PB_RG_dsr.RGD_cards(event);

          case pb.rpt.general.onepage.n:
            return PB_RG_onepage.RGO_cards(event);

          case pb.rpt.general.rocket.n:
            return PB_RG_rocket.RGR_cards(event);

          case pb.rpt.general.transacts.n:
            return PB_RG_transacts.RGT_cards(event);
        }
        break;

      case eTypes.report:
        switch (thePathArr[2]) {
          case pb.rpt.general.sample.n:
            return PB_RG_sample.RGS_reports(event);
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.rpt.general.sample.n:
            return PB_RG_sample.RGS_tabs(event);
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.rpt.general.sample.n:
            return PB_RG_sample.RGS_tables(event);
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.general.balance.n:
        return PB_RG_balance.RGB_pageOpen();

      case pb.rpt.general.sample.n:
        return PB_RG_sample.RGS_pageOpen();

      case pb.rpt.general.board.n:
        return PB_RG_board.RGS_pageOpen();

      case pb.rpt.general.dsr.n:
        return PB_RG_dsr.RGD_pageOpen();

      case pb.rpt.general.onepage.n:
        return PB_RG_onepage.RGO_pageOpen();

      case pb.rpt.general.rocket.n:
        return PB_RG_rocket.RGR_pageOpen();

      case pb.rpt.general.transacts.n:
        return PB_RG_transacts.RGT_pageOpen();
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