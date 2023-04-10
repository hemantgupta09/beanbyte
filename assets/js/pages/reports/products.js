"use strict";

// Class definition
var PB__RPT_products = function () {

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

      case eTypes.report:
        switch (thePathArr[2]) {
          case pb.rpt.products.sales.n:
            return PB_RP_sales.RPS_reports(_event);

          case pb.rpt.products.purchases.n:
            return PB_RP_purchases.RPS_reports(_event);

          case pb.rpt.products.stocks.n:
            return PB_RP_stocks.RPS_reports(_event);
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.rpt.products.sales.n:
            return PB_RP_sales.RPS_tabs(_event);

          case pb.rpt.products.purchases.n:
            return PB_RP_purchases.RPS_tabs(_event);

          case pb.rpt.products.stocks.n:
            return PB_RP_stocks.RPS_tabs(_event);

        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.rpt.products.sales.n:
            return PB_RP_sales.RPS_tables(_event);

          case pb.rpt.products.purchases.n:
            return PB_RP_purchases.RPS_tables(_event);

          case pb.rpt.products.stocks.n:
            return PB_RP_stocks.RPS_tables(_event);


        }
        break;
      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.rpt.products.sales.n:
            return PB_RP_sales.RPS_backs(_event);

          case pb.rpt.products.purchases.n:
            return PB_RP_purchases.RPS_backs(_event);

          case pb.rpt.products.stocks.n:
            return PB_RP_stocks.RPS_backs(_event);


        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.products.sales.n:
        PB_RP_sales.RPS_page();
        break;

      case pb.rpt.products.purchases.n:
        PB_RP_purchases.RPS_page();
        break;

      case pb.rpt.products.stocks.n:
        PB_RP_stocks.RPS_page();
        break;

    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.products.sales.n:
        return PB_RP_sales.RPS_state();

      case pb.rpt.products.purchases.n:
        return PB_RP_purchases.RPS_state();

      case pb.rpt.products.stocks.n:
        return PB_RP_stocks.RPS_state();

    }
  }

  // Public methods
  return {

    actionRouting  : function (_event) {
      return actionRoute(_event);
    },
    basePageRouting: function () {
      basePageRoute();
    },
    baseRouting    : function () {
      return baseStateRoute();
    }
  };
}();