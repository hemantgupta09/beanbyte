"use strict";

// Class definition
var PB__TAX_gstreport = function () {

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
          case pb.tax.gstreport.sales.n:
            return PB_TG_sales.TGR_reports(_event);
          case pb.tax.gstreport.purchases.n:
            return PB_TG_purchases.TGR_reports(_event);
            
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.tax.gstreport.sales.n:
            return PB_TG_sales.TGR_tabs(_event);
          case pb.tax.gstreport.purchases.n:
            return PB_TG_purchases.TGR_tabs(_event);
            
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.tax.gstreport.sales.n:
            return PB_TG_sales.TGR_tables(_event);
          case pb.tax.gstreport.purchases.n:
            return PB_TG_purchases.TGR_tables(_event);
        }
        break;

      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.tax.gstreport.sales.n:
            return PB_TG_sales.TGR_backs(_event);
          case pb.tax.gstreport.purchases.n:
            return PB_TG_purchases.TGR_backs(_event);
        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.tax.gstreport.sales.n:
        PB_TG_sales.TGR_page();
        break;

    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.tax.gstreport.sales.n:
        return PB_TG_sales.TGR_state();
      case pb.tax.gstreport.purchases.n:
        return PB_TG_purchases.TGR_state();
    }
  }

  // Public methods
  return {

    actionRouting   : function (_event) {
      return actionRoute(_event);
    },
    basePageRouting : function () {
      basePageRoute();
    },
    baseStateRouting: function () {
      return baseStateRoute();
    },
  };
}();