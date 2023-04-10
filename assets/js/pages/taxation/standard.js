"use strict";

// Class definition
var PB__TAX_standard = function () {

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
          case pb.tax.standard.gst.n:
            return PB_TS_gst.TSG_actions(event);

          case pb.tax.standard.incometax.n:
            return PB_TS_incometax.TSI_actions(event);

          case pb.tax.standard.tcs.n:
            return PB_TS_tcs.TST_actions(event);

          case pb.tax.standard.tds.n:
            return PB_TS_tds.TST_actions(event);

          case pb.tax.standard.vat.n:
            return PB_TS_vat.TSV_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.tax.standard.gst.n:
            return PB_TS_gst.TSG_cards(event);

          case pb.tax.standard.incometax.n:
            return PB_TS_incometax.TSI_cards(event);

          case pb.tax.standard.tcs.n:
            return PB_TS_tcs.TST_cards(event);

          case pb.tax.standard.tds.n:
            return PB_TS_tds.TST_cards(event);

          case pb.tax.standard.vat.n:
            return PB_TS_vat.TSV_cards(event);
        }
        break;
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.tax.standard.gst.n:
        return PB_TS_gst.TSG_pageOpen();

      case pb.tax.standard.incometax.n:
        return PB_TS_incometax.TSI_pageOpen();

      case pb.tax.standard.tcs.n:
        return PB_TS_tcs.TST_pageOpen();

      case pb.tax.standard.tds.n:
        return PB_TS_tds.TST_pageOpen();

      case pb.tax.standard.vat.n:
        return PB_TS_vat.TSV_pageOpen();
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