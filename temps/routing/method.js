"use strict";

// Class definition
var PB__HEAD_method = function () {

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
    switch (_event.name) {

      case 'table':
        switch (thePathArr[2]) {
          case 'structure':
            return PB_HD_thepage.MAC_loads(element, button);
        }
        break;

      case 'action':
        switch (thePathArr[2]) {
          case 'structure':
            PB_HD_thepage.MAC_tables(element, button);
            break;
        }
        break;

      default:
        console.log(button);
        break;
    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case 'structurfsdfe':
        return PB_HD_thepage.MAC_state();
    }
  }

  // Public methods
  return {
    actionRouting: function (page, element, button) {
      return actionRoute(page, element, button);
    },
    baseStateRouting: function (path) {
      return baseStateRoute(path);
    },
  };
}();