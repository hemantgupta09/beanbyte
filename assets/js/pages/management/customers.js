"use strict";

// Class definition
var PB__MNG_customers = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param page
   * @param
   * @param event
   */
  const actionRoute = function (event, data) {
    // fetching required page data
    switch (event.type) {

      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.mng.customers.detail.n:
            return PB_MC_detail.MCD_navtabs(event);
          case pb.mng.customers.listing.n:
            return PB_MC_listing.MCL_navtab(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.mng.customers.listing.n:
            return PB_MC_listing.MCL_creates(event);
          case pb.mng.customers.detail.n:
            PB_MC_detail.MCD_creates(event);
            break;
        }
        break;

      case eTypes.goto:
        switch (thePathArr[2]) {
          case pb.mng.customers.detail.n:
            return PB_MC_detail.MCD_gotos(event);
        }
        break;

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.mng.customers.add.n:
            PB_MC_add.MCA_forms(event);
            break;
          case pb.mng.customers.listing.n:
            PB_MC_listing.MCA_forms(event);
            break;
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.mng.customers.add.n:
            PB_MC_add.MCA_tables(event);
            break;
        }
        break;

      case eTypes.paging:
        switch (thePathArr[2]) {
          case pb.mng.customers.listing.n:
            return PB_MC_listing.MCL_paging(event);
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.mng.customers.listing.n:
            return PB_MC_listing.MCL_action(event);
        }
        break;
    }
  }

  const basePageRoute = function (path) {
    switch (thePathArr[2]) {
      case pb.mng.customers.add.n:
        PB_MC_add.MCA_page(path);
        break;
      case pb.mng.customers.listing.n:
        PB_MC_listing.MCL_page(path);
        break;
      case pb.mng.customers.detail.n:
        PB_MC_detail.MCD_page(path);
        break;
      // and so on
    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.customers.add.n:
        return PB_MC_add.MCA_state();

      case pb.mng.customers.listing.n:
        return PB_MC_listing.MCL_state();

      case pb.mng.customers.detail.n:
        return PB_MC_detail.MCD_state();
      // and so on
    }
  }

  // Public methods
  return {

    actionRouting   : function (_event, _data) {
      return actionRoute(_event, _data);
    },
    basePageRouting : function () {
      basePageRoute();
    },
    baseStateRouting: function () {
      return baseStateRoute();
    },
  };
}();