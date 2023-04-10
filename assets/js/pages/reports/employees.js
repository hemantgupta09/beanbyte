"use strict";

// Class definition
var PB__RPT_employees = function () {

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
    switch (_event.type) {

      case eTypes.report:
        switch (thePathArr[2]) {
          case pb.rpt.employees.salary.n:
            return PB_RE_salary.RES_reports(_event);
          case pb.rpt.employees.activity.n:
            return PB_RE_activity.RES_reports(_event);
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.rpt.employees.salary.n:
            return PB_RE_salary.RES_tabs(_event);
          case pb.rpt.employees.activity.n:
            return PB_RE_activity.RES_tabs(_event);
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.rpt.employees.salary.n:
            return PB_RE_salary.RES_tables(_event);
          case pb.rpt.employees.activity.n:
            return PB_RE_activity.RES_tables(_event);
        }
        break;
      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.rpt.employees.salary.n:
            return PB_RE_salary.RES_backs(_event);
          case pb.rpt.employees.activity.n:
            return PB_RE_activity.RES_backs(_event);
        }
        break;
      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.rpt.employees.combined.n:
            return PB_RE_combined.REC_cards(_event);
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.rpt.employees.salary.n:
            return PB_RE_salary.REC_actions(_event);
        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.employees.salary.n:
        PB_RE_salary.RES_page();
        break;
      case pb.rpt.employees.activity.n:
        PB_RE_activity.RES_page();
        break;
    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.employees.salary.n:
        return PB_RE_salary.RES_state(thePathArr[2]);

      case pb.rpt.employees.activity.n:
        return PB_RE_activity.RES_state(thePathArr[2]);

      case pb.rpt.employees.combined.n:
        return PB_RE_combined.REC_pageOpen();
    }
  }


  // Public methods
  return {

    actionRouting  : function (_event) {
      return actionRoute(_event);
    },
    basePageRouting: function () {
      basePageRoute();
    },
    baseRouting    : function () {
      return baseRoute();
    }
  };
}();