"use strict";

// Class definition
var PB__headname = function () {
  // Shared variables


  // Private functions
  /*
   -------------------------------
   Function Route Management
   -------------------------------
   */

  function baseStateRouting(path) {
    switch (path[1]) {

      case pb.fin.balance.n:
        return PB__HEAD_method.baseStateRouting();
    }

  }

  function buttonActionRouting(path, Ele, button, _return) {
    if (_return.indexOf(button.name) !== -1) return true;

    switch (path[1]) {
      case pb.fin.balance.n:
        return PB__HEAD_method.actionRouting(path[2], Ele, button);
    }
  }

  // Public methods
  return {
    baseStateCall: function (path) {
      baseStateRouting(path);
    },
    buttonAction: function (path, Ele, button, _return) {
      return buttonActionRouting(path, Ele, button, _return);
    },
  };
}();