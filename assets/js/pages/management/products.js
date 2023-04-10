"use strict";

// Class definition
var PB__MNG_products = function () {

  // Shared variables
  let redData;

  // Private functions

  /**
   * This support all layouts routing.
   * @param page
   * @param element
   * @param button
   */
  const actionRoute = function (page, element, button) {
    // fetching required page data
    switch (button.getAttribute('name')) {

      case 'form':
        switch (page) {
          case pb.mng.products.add.n:
            PB_MP_add.MPA_creates(element, button);
            break;
        }
        break;

      case 'load':
        switch (page) {
          case pb.mng.products.add.n:
            PB_MP_add.MPA_loads(element, button);
            break;
        }
        break;

      case 'edit':
        // todo : for edit any entry.
        break;

      case 'delete':
        // todo: for delete any entry
        break;

      case 'table':
        switch (page) {
          case pb.mng.products.add.n:
            PB_MP_add.MPA_tables(element, button);
            break;
        }
        break;
    }
  }

  const basePageRoute = function (path) {
    switch (path[2]) {
      case pb.mng.products.add.n:
        PB_MP_add.MPA_page(path);
        break;
      case pb.mng.products.fuels.n:
        PB_MP_fuels.MPF_page(path);
        break;
      case pb.mng.products.lubes.n:
        PB_MP_lubes.MPL_page(path);
        break;

      // and so on
    }
  }

  const baseStateRoute = function (path) {
    switch (path[2]) {
      case pb.mng.products.add.n:
        return PB_MP_add.MPA_state(path);

      case pb.mng.products.fuels.n:
        return PB_MP_fuels.MPF_state(path);

      case pb.mng.products.lubes.n:
        return PB_MP_lubes.MPL_state(path);
    }
  }

  const _formReady = function (data, element) {

    // moved to render.form.js
  }

  // Public methods
  return {

    actionRouting: function (page, element, button) {
      actionRoute(page, element, button);
    },

    basePageRouting: function (path) {
      basePageRoute(path);
    },

    baseStateRouting: function (path) {
      return baseStateRoute(path);
    },

  };
}();