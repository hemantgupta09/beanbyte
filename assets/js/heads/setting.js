"use strict";

// Class definition
var PB__setting = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function basePageRouting() {
    switch (thePathArr[1]) {

      case pb.set.profile.n:
        PB__SETT_profile.basePageRouting();
        break;

      case pb.set.exports.n:
        PB__SETT_exports.basePageRouting();
        break;

      case pb.set.configs.n:
        PB__SETT_configs.basePageRouting();
        break;

      case pb.set.intel.n:
        PB__SETT_intel.basePageRouting();
        break;

      case pb.set.subscriptions.n:
        PB__SETT_subscriptions.basePageRouting();
        break;
    }
  }

  function baseStateRouting() {
    switch (thePathArr[1]) {

      case pb.set.profile.n:
        return PB__SETT_profile.baseRouting();

      case pb.set.exports.n:
        return PB__SETT_exports.baseRouting();

      case pb.set.configs.n:
        return PB__SETT_configs.baseRouting();

      case pb.set.intel.n:
        return PB__SETT_intel.baseRouting();

      case pb.set.subscriptions.n:
        return PB__SETT_subscriptions.baseRouting();
    }

  }

  function buttonActionRouting(_event, _return, _data) {
    if (_return.indexOf(_event.name) !== -1) return true;

    switch (thePathArr[1]) {
      case pb.set.profile.n:
        return PB__SETT_profile.actionRouting(_event, _data);

      case pb.set.exports.n:
        return PB__SETT_exports.actionRouting(_event, _data);

      case pb.set.configs.n:
        return PB__SETT_configs.actionRouting(_event, _data);

      case pb.set.intel.n:
        return PB__SETT_intel.actionRouting(_event, _data);

      case pb.set.subscriptions.n:
        return PB__SETT_subscriptions.actionRouting(_event, _data);
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
    userActionRouting: function (_event, _return, _data) {
      return buttonActionRouting(_event, _return, _data);
    },
  };
}();