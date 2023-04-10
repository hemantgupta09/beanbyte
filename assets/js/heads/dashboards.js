"use strict";

// Class definition
var PB__dashboards = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function baseStateRouting() {
    switch (thePathArr[1]) {

      case pb.dsb.charts.n:
        return PB__BRD_charts.baseRouting();
      case pb.dsb.statistics.n:
        return PB__DSB_statistics.baseStateRouting();
    }

  }

  function buttonActionRouting(_event, _return) {
    if (_return.indexOf(_event.type) !== -1) return true;
    switch (thePathArr[1]) {
      case pb.dsb.charts.n:
        return PB__BRD_charts.actionRouting(_event);
      case pb.dsb.statistics.n:
        return PB__DSB_statistics.actionRouting(_event);
    }
  }

  // Public methods
  return {

    pageStateRouting : function () {
      return baseStateRouting();
    },
    userActionRouting: function (_event, _return) {
      return buttonActionRouting(_event, _return);
    },
  };
}();