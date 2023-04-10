"use strict";

// Class definition
var PB__OPR_loyalty = function () {

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
          case pb.opr.loyalty.instant.n:
            return PB_OL_instant.OLI_actions(event);

          case pb.opr.loyalty.render.n:
            return PB_OL_render.OLR_actions(event);


        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.opr.loyalty.instant.n:
            return PB_OL_instant.OLI_cards(event);

          case pb.opr.loyalty.render.n:
            return PB_OL_render.OLR_cards(event);

        }
        break;


    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.loyalty.instant.n:
        return PB_OL_instant.OLI_pageOpen();

      case pb.opr.loyalty.render.n:
        return PB_OL_render.OLR_pageOpen();
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
