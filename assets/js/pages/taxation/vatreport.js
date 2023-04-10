"use strict";

// Class definition
var PB__TAX_vatreport = function () {

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
          case pb.tax.vatreport.combined.n:
            return PB_TV_combined.TVC_actions(event);

          case pb.tax.vatreport.overview.n:
            return PB_TV_overview.TVO_actions(event);

          case pb.tax.vatreport.purchases.n:
            return PB_TV_purchases.TVP_actions(event);

          case pb.tax.vatreport.sales.n:
            return PB_TV_sales.TVS_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.tax.vatreport.combined.n:
            return PB_TV_combined.TVC_cards(event);

          case pb.tax.vatreport.overview.n:
            return PB_TV_overview.TVO_cards(event);

          case pb.tax.vatreport.purchases.n:
            return PB_TV_purchases.TVP_cards(event);

          case pb.tax.vatreport.sales.n:
            return PB_TV_sales.TVS_cards(event);
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.tax.vatreport.combined.n:
        return PB_TV_combined.TVC_pageOpen();

      case pb.tax.vatreport.overview.n:
        return PB_TV_overview.TVO_pageOpen();

      case pb.tax.vatreport.purchases.n:
        return PB_TV_purchases.TVP_pageOpen();

      case pb.tax.vatreport.sales.n:
        return PB_TV_sales.TVS_pageOpen();
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