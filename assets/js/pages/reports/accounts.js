"use strict";

// Class definition
var PB__RPT_accounts = function () {

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

      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.rpt.accounts.statement.n:
            return PB_RA_statement.RAS_navtabs(_event);

          case pb.rpt.accounts.register.n:
            return PB_RA_register.RAG_navtabs(_event);

          case pb.rpt.accounts.interest.n:
            return PB_RA_interest.RAI_navtabs(_event);

          case pb.rpt.accounts.wave.n:
            return PB_RA_wave.RAW_navtabs(_event);

          case pb.rpt.accounts.group.n:
            return PB_RA_group.RAG_navtabs(_event);
        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.rpt.accounts.statement.n:
            return PB_RA_statement.RAS_loads(_event);

          case pb.rpt.accounts.register.n:
            return PB_RA_register.RAG_loads(_event);

          case pb.rpt.accounts.interest.n:
            return PB_RA_interest.RAI_loads(_event);

          case pb.rpt.accounts.wave.n:
            return PB_RA_wave.RAW_loads(_event);

          case pb.rpt.accounts.group.n:
            return PB_RA_group.RAG_loads(_event);
        }
        break;
      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.rpt.accounts.statement.n:
          //return PB_RA_statement.RAS_backs(_event);

          case pb.rpt.accounts.register.n:
          //return PB_RA_register.RAG_backs(_event);

          case pb.rpt.accounts.interest.n:
          //return PB_RA_interest.RAI_backs(_event);

          case pb.rpt.accounts.wave.n:
          //return PB_RA_wave.RAW_backs(_event);

        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.rpt.accounts.lists.n:
            return PB_RA_lists.RAL_actions(_event);

          case pb.rpt.accounts.summary.n:
            return PB_RA_summary.RAS_actions(_event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.rpt.accounts.lists.n:
            return PB_RA_lists.RAL_cards(_event);

          case pb.rpt.accounts.summary.n:
            return PB_RA_summary.RAS_cards(_event);
        }

      default:
        console.log(_event);
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.accounts.statement.n:
        return PB_RA_statement.RAS_pageOpen();

      case pb.rpt.accounts.register.n:
        return PB_RA_register.RAG_pageOpen();

      case pb.rpt.accounts.interest.n:
        return PB_RA_interest.RAI_pageOpen();

      case pb.rpt.accounts.wave.n:
        return PB_RA_wave.RAW_pageOpen();

      case pb.rpt.accounts.group.n:
        return PB_RA_group.RAG_pageOpen();

      case pb.rpt.accounts.lists.n:
        return PB_RA_lists.RAS_pageOpen();

      case pb.rpt.accounts.summary.n:
        return PB_RA_summary.RAS_pageOpen();
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