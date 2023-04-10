"use strict";

// Class definition
var PB__MNG_employees = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param event
   */
  const actionRoute = function (event) {
    // fetching required page data
    switch (event.type) {

      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.mng.employees.detail.n:
            return PB_ME_detail.MED_navtabs(event);
          case pb.mng.employees.listing.n:
            return PB_ME_listing.MEL_navtabs(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.mng.employees.listing.n:
            return PB_ME_listing.MEL_creates(event);
          case pb.mng.employees.detail.n:
            PB_ME_detail.MED_creates(event);
            break;
        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.mng.employees.detail.n:
            return PB_ME_detail.MED_loads(event);
        }
        break;

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.mng.employees.add.n:
            PB_ME_add.MEA_creates(event);
            break;
          case pb.mng.employees.listing.n:
            PB_ME_listing.MEA_creates(event);
            break;
        }
        break;

      case  eTypes.table:
        switch (thePathArr[2]) {
          case pb.mng.employees.add.n:
            PB_ME_add.MEA_tables(event);
            break;
        }
        break;

      case eTypes.paging:
        switch (thePathArr[2]) {
          case pb.mng.employees.listing.n:
            return PB_ME_listing.MEL_paging(event);
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.mng.employees.listing.n:
            return PB_ME_listing.MEL_actions(event);
          case pb.mng.employees.detail.n:
            return PB_ME_detail.MED_actions(event);
        }
        break;

      case eTypes.paging:
        switch (thePathArr[2]) {
          case pb.mng.employees.listing.n:
            return PB_ME_listing.MEL_paging(event);
        }
    }
  }


  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.employees.add.n:
        // PB_ME_add.MEA_state();
        break;
      case pb.mng.employees.listing.n:
        return PB_ME_listing.MEL_state();

      case pb.mng.employees.detail.n:
        return PB_ME_detail.MED_state();
      // and so on
    }
  }

  // Public methods
  return {

    actionRouting   : function (_event, _data) {
      return actionRoute(_event, _data);
    },
    baseStateRouting: function () {
      return baseRoute();
    },
  };
}();