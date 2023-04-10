"use strict";

// Class definition
let PB__OPR_stocks = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param _event
   */
  const actionRoute = function (_event) {
    // fetching required page data
    if (wlEvent[_whichLayout].indexOf(_event.type) === -1) {
      alert('Event is not whitelisted.');
    }

    switch (_event.type) {

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.opr.stock.transfer.n:
            return PB_OS_transfer.OST_forms(_event);

          case pb.opr.stock.incoming.n:
            return PB_OS_incoming.OSI_forms(_event);

          case pb.opr.stock.movement.n:
            return PB_OS_movement.OSM_forms(_event);

          case pb.opr.stock.inspection.n:
            return PB_OS_inspection.OSP_forms(_event);

        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.opr.stock.transfer.n:
            return PB_OS_transfer.OST_loads(_event);

          case pb.opr.stock.incoming.n:
            return PB_OS_incoming.OSI_loads(_event);

          case pb.opr.stock.movement.n:
            return PB_OS_movement.OSM_loads(_event);

          case pb.opr.stock.inspection.n:
            return PB_OS_inspection.OSP_loads(_event);

        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.opr.stock.transfer.n:
            return PB_OS_transfer.OST_tables(_event);

          case pb.opr.stock.incoming.n:
            return PB_OS_incoming.OSI_tables(_event);

          case pb.opr.stock.movement.n:
            return PB_OS_movement.OSM_tables(_event);

          case pb.opr.stock.inspection.n:
            return PB_OS_inspection.OSP_tables(_event);

        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.opr.stock.transfer.n:
            return PB_OS_transfer.OST_cards(_event);

          case pb.opr.stock.incoming.n:
            return PB_OS_incoming.OSI_cards(_event);

          case pb.opr.stock.movement.n:
            return PB_OS_movement.OSM_cards(_event);

          case pb.opr.stock.inspection.n:
            return PB_OS_inspection.OSP_cards(_event);

        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.opr.stock.transfer.n:
            return PB_OS_transfer.OST_actions(_event);

          case pb.opr.stock.incoming.n:
            return PB_OS_incoming.OSI_actions(_event);

          case pb.opr.stock.movement.n:
            return PB_OS_movement.OSM_actions(_event);

          case pb.opr.stock.inspection.n:
            return PB_OS_inspection.OSP_actions(_event);

        }
        break;

      default:
        alert('event :' + _event.type + ' received, that has not initiated.');
    }
  }


  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.stock.transfer.n:
        console.log("stock works here");
        return PB_OS_transfer.OST_state();

      case pb.opr.stock.incoming.n:
        return PB_OS_incoming.OSI_state();

      case pb.opr.stock.movement.n:
        return PB_OS_movement.OSM_state();

      case pb.opr.stock.inspection.n:
        return PB_OS_inspection.OSP_state();

      // and so on
    }
  }

  // Public methods
  return {

    actionRouting: function (_event) {
      return actionRoute(_event);
    },

    //    basePageRouting: function () {
    //      return basePageRoute();
    //    },

    baseRouting: function () {
      console.log("baseState of stock.js");
      return baseStateRoute();
    },

  };
}();