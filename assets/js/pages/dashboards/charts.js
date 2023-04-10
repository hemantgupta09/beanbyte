"use strict";

// Class definition
var PB__BRD_charts = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param _event
   */
  const actionRoute = function (_event) {
    // fetching required page data
    switch (_event.type) {

      case eTypes.chart:
        switch (thePathArr[2]) {
          case pb.dsb.charts.business.n:
            return PB_DC_business.DCB_charts(_event);

          case pb.dsb.charts.profit.n:
            return PB_DC_profit.DCP_charts(_event);

          case pb.dsb.charts.customer.n:
            return PB_DC_customers.DCC_charts(_event);

          case pb.dsb.charts.stock.n:
            return PB_DC_stock.DCS_charts(_event);
        }
        break;

      case eTypes.wizard:
        switch (thePathArr[2]) {
          case pb.dsb.charts.business.n:
            // PB_DC_business.DCB_wizard(element, select);
            break;

          case pb.dsb.charts.profit.n:
            //PB_DC_profit.DCB_wizard(element, select);
            break;

          case pb.dsb.charts.customer.n:
            //PB_DC_customers.DCB_wizard(element, select);
            break;

          case pb.dsb.charts.stock.n:
          //PB_DC_stock.DCB_wizard(element, select);
        }
        break;
    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.dsb.charts.business.n:
        return PB_DC_business.DCB_pageOpen();
      case pb.dsb.charts.stock.n:
        return PB_DC_stock.DCS_pageOpen();
      case pb.dsb.charts.profit.n:
        return PB_DC_profit.DCP_pageOpen();
      case pb.dsb.charts.customer.n:
        return PB_DC_customers.DCC_pageOpen();
    }
  }

  // Public methods
  return {
    // calls when user do any action
    actionRouting: function (_event) {
      return actionRoute(_event);
    },

    // called at the DOM load for default data
    baseRouting: function () {
      return baseRoute();
    },
  };
}();