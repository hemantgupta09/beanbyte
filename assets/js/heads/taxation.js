"use strict";

// Class definition
var PB__taxation = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {
      case pb.tax.gstreport.n:
        PB__TAX_gstreport.basePageRouting()
        break;

    }
  }

  function baseStateRouting() {
    switch (thePathArr[1]) {

      case pb.tax.gstreport.n:
        return PB__TAX_gstreport.baseStateRouting()

    }

  }

  function buttonActionRouting(_event, _return) {
    if (_return.indexOf(_event.type) !== -1) return true;

    switch (thePathArr[1]) {
      case pb.tax.gstreport.n:
        return PB__TAX_gstreport.actionRouting(_event);
    }
  }

  // Public methods
  return {
    basePageCall     : function () {
      basePageRouting();
    },
    pageStateRouting : function () {
      return baseStateRouting();
    },
    userActionRouting: function (_event, _return) {
      return buttonActionRouting(_event, _return);
    },
  };
}();
