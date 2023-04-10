"use strict";

// Class definition
var PB__SETT_intel = function () {

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
          case pb.set.intel.management.n:
            return PB_SI_management.SIM_actions(event);

          case pb.set.intel.onboard.n:
            return PB_SI_onboard.SIO_actions(event);

          case pb.set.intel.operations.n:
            return PB_SI_operations.SIO_actions(event);

          case pb.set.intel.taxation.n:
            return PB_SI_taxation.SIT_actions(event);


        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.set.intel.management.n:
            return PB_SI_management.SIM_cards(event);

          case pb.set.intel.onboard.n:
            return PB_SI_onboard.SIO_cards(event);

          case pb.set.intel.operations.n:
            return PB_SI_operations.SIO_cards(event);

          case pb.set.intel.taxation.n:
            return PB_SI_taxation.SIT_cards(event);

        }
        break;


    }
  }




  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.intel.management.n:
        return PB_SI_management.SIM_pageOpen();

      case pb.set.intel.onboard.n:
        return PB_SI_onboard.SIO_pageOpen();

      case pb.set.intel.operations.n:
        return PB_SI_operations.SIO_pageOpen();

      case pb.set.intel.taxation.n:
        return PB_SI_taxation.SIT_pageOpen();

    }
  }

  // Public methods
  return {
    actionRouting   : function (_event) {
      return actionRoute(_event);
    },

    baseRouting: function () {
      return baseRoute();
    },
  };
}();