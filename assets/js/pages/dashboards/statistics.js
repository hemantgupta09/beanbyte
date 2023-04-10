"use strict";

// Class definition
var PB__DSB_statistics = function () {

  // Shared variables
  let redData;

  // Private functions

  /**
   * This support all layouts routing.
   * @param page
   * @param element
   * @param button
   */
  const actionRoute = function (event, data) {
    switch (event.type) {
      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.dsb.statistics.customers.n:
            return PB_DS_customers.DSC_targetChart(event, data);
          case pb.dsb.statistics.business.n:
            return PB_DS_business.DSB_navtabs(event, data);
        }
        break;
    }
  }


  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.dsb.statistics.customers.n:
        return PB_DS_customers.DSC_state();
      case pb.dsb.statistics.business.n:
        return PB_DS_business.DSB_state();
    }
  }

  // Public methods
  return {
    actionRouting   : function (_event, _data) {
      return actionRoute(_event, _data);
    },
    baseStateRouting: function () {
      return baseStateRoute();
    },
  };
}();