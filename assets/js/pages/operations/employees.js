"use strict";

// Class definition
var PB__OPR_employees = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param _event
   */
  const actionRoute = function (_event) {

    switch (_event.type) {

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.opr.employees.activities.n:
            return PB_OT_activities.OTA_forms(_event);

        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.opr.employees.activities.n:
            return PB_OT_activities.OTA_loads(_event);
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.opr.employees.activities.n:
            return PB_OT_activities.OTA_tables(_event);

        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.opr.employees.activities.n:
            return PB_OT_activities.OTA_cards(_event);

          case pb.opr.employees.payroll.n:
            return PB_OE_payroll.OEP_cards(_event);

        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.opr.employees.activities.n:
            return PB_OT_activities.OTA_actions(_event);

          case pb.opr.employees.payroll.n:
            return PB_OE_payroll.OEP_actions(_event);

        }
        break;

      default:
        alert('event :' + _event.type + ' received, that has not initiated.');
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.employees.activities.n:
        PB_OT_activities.OTA_page();
        break;

      // and so on
    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.employees.activities.n:
        return PB_OT_activities.OTA_state();
      case pb.opr.employees.salary.n:
        return PB_OE_salary.OES_state();

      case pb.opr.employees.payroll.n:
        return PB_OE_payroll.OEP_pageOpen();
      // and so on
    }
  }

  // Public methods
  return {

    actionRouting: function (_event) {
      return actionRoute(_event);
    },

    basePageRouting: function () {
      return basePageRoute();
    },

    baseRouting: function () {
      return baseRoute();
    },

  };
}();