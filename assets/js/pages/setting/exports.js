"use strict";

// Class definition
var PB__SETT_exports = function () {
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
          case pb.set.exports.excel.n:
            return PB_SE_excel.SEE_actions(event);

          case pb.set.exports.tally.n:
            return PB_SE_tally.SET_actions(event);


        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.set.exports.excel.n:
            return PB_SE_excel.SEE_cards(event);

          case pb.set.exports.tally.n:
            return PB_SE_tally.SET_cards(event);

        }
        break;


    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.exports.excel.n:
        return PB_SE_excel.SEE_pageOpene();

      case pb.set.exports.tally.n:
        return PB_SE_tally.SET_pageOpen();


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