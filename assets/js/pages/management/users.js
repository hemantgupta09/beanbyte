"use strict";

// Class definition
var PB__MNG_users = function () {

  // Shared variables
  let redData;

  // Private functions

  /**
   * This support all layouts routing.
   * @param page
   * @param element
   * @param button
   */
  const actionRoute = function (event, data) {
    // fetching required page data
    switch (event.type) {

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.mng.users.listing:
            return PB_MU_listing.MUL_loads(event);
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.mng.users.listing:
            PB_MU_listing.MUL_tables(event);
            break;
          case pb.mng.users.roles:
            PB_MU_roles.MUR_tables(event);
            break;
          case pb.mng.users.permissions:
            PB_MU_permissions.MUP_tables(event);
            break;
          case pb.mng.users.detail:
            PB_MU_detail.MUD_tables(event);
            break;
        }
        break;

      default:
        console.log(button);
        break;
    }
  }

  const pageStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.users.listing:
        return PB_MU_listing.MUL_state();

      case pb.mng.users.detail:
        return PB_MU_detail.MUD_state();

      case pb.mng.users.roles:
        return PB_MU_roles.MUR_state();

      case pb.mng.users.permissions:
        return PB_MU_permissions.MUP_state();
    }
  }

  // Public methods
  return {
    actionRouting   : function (_event, _data) {
      return actionRoute(_event, _data);
    },
    baseStateRouting: function () {
      return pageStateRoute();
    },
  };
}();