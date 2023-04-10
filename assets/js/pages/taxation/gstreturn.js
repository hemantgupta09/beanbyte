"use strict";

// Class definition
var PB__TAX_gstreturn = function () {

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
          case pb.tax.gstreturn.fetch2b.n:
            return PB_TG_fetch2b.TGF_actions(event);

          case pb.tax.gstreturn.gstrone.n:
            return PB_TG_gstrone.TGG_actions(event);

          case pb.tax.gstreturn.gstrthreeb.n:
            return PB_TG_gstrthreeb.TGG_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.tax.gstreturn.fetch2b.n:
            return PB_TG_fetch2b.TGF_cards(event);

          case pb.tax.gstreturn.gstrone.n:
            return PB_TG_gstrone.TGG_cards(event);

          case pb.tax.gstreturn.gstrthreeb.n:
            return PB_TG_gstrthreeb.TGG_cards(event);
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.tax.gstreturn.fetch2b.n:
        return PB_TG_fetch2b.TGF_pageOpen();

      case pb.tax.gstreturn.gstrone.n:
        return PB_TG_gstrone.TGG_pageOpen();

      case pb.tax.gstreturn.gstrthreeb.n:
        return PB_TG_gstrthreeb.TGG_pageOpen();
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