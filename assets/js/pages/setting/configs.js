"use strict";

// Class definition
var PB__SETT_configs = function () {

  // Shared variables
  let redData;

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
          case pb.set.configs.accounting.n:
            return PB_SC_accounting.SCA_actions(event);

          case pb.set.configs.basic.n:
            return PB_SC_basic.SCB_actions(event);

          case pb.set.configs.communication.n:
            return PB_SC_communication.SCC_actions(event);

          case pb.set.configs.database.n:
            return PB_SC_database.SCD_actions(event);

          case pb.set.configs.miscellaneous.n:
            return PB_SC_miscellaneous.SCM_actions(event);

          case pb.set.configs.reports.n:
            return PB_SC_reports.SCR_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.set.configs.accounting.n:
            return PB_SC_accounting.SCA_cards(event);

          case pb.set.configs.basic.n:
            return PB_SC_basic.SCB_cards(event);

          case pb.set.configs.communication.n:
            return PB_SC_communication.SCC_cards(event);

          case pb.set.configs.database.n:
            return PB_SC_database.SCD_cards(event);

          case pb.set.configs.miscellaneous.n:
            return PB_SC_miscellaneous.SCM_cards(event);

          case pb.set.configs.reports.n:
            return PB_SC_reports.SCR_cards(event);
        }
        break;


    }
  }



  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.configs.accounting.n:
        return PB_SC_accounting.SCA_pageOpen();

      case pb.set.configs.basic.n:
        return PB_SC_basic.SCB_pageOpen();

      case pb.set.configs.communication.n:
        return PB_SC_communication.SCC_pageOpen();

      case pb.set.configs.database.n:
        return PB_SC_database.SCD_pageOpen();

      case pb.set.configs.miscellaneous.n:
        return PB_SC_miscellaneous.SCM_pageOpen();

      case pb.set.configs.reports.n:
        return PB_SC_reports.SCR_pageOpen();

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