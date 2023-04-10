"use strict";

// Class definition
var PB__RPT_customers = function () {

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
          case pb.rpt.customers.sales.n:
            return PB_RC_sales.RCS_reports(_event);

          case pb.rpt.customers.transactions.n:
            return PB_RC_transactions.RCS_reports(_event);

          case pb.rpt.customers.bills.n:
            return PB_RC_bills.RCS_reports(_event);

          case pb.rpt.customers.indents.n:
            return PB_RC_indents.RCS_reports(_event);

          case pb.rpt.customers.summary.n:
            return PB_RC_summary.RCS_reports(_event);
        }
        break;

      case eTypes.tab:
        switch (thePathArr[2]) {
          case pb.rpt.customers.sales.n:
            return PB_RC_sales.RCS_tabs(_event);

          case pb.rpt.customers.transactions.n:
            return PB_RC_transactions.RCS_tabs(_event);

          case pb.rpt.customers.bills.n:
            return PB_RC_bills.RCS_tabs(_event);

          case pb.rpt.customers.indents.n:
            return PB_RC_indents.RCS_tabs(_event);

          case pb.rpt.customers.summary.n:
            return PB_RC_summary.RCS_tabs(_event);
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.rpt.customers.sales.n:
            return PB_RC_sales.RCS_tables(_event);

          case pb.rpt.customers.transactions.n:
            return PB_RC_transactions.RCS_tables(_event);

          case pb.rpt.customers.bills.n:
            return PB_RC_bills.RCS_tables(_event);

          case pb.rpt.customers.indents.n:
            return PB_RC_indents.RCS_tables(_event);

          case pb.rpt.customers.summary.n:
            return PB_RC_summary.RCS_tables(_event);
        }
        break;

      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.rpt.customers.sales.n:
            return PB_RC_sales.RCS_backs(_event);

          case pb.rpt.customers.transactions.n:
            return PB_RC_transactions.RCS_backs(_event);

          case pb.rpt.customers.bills.n:
            return PB_RC_bills.RCS_backs(_event);

          case pb.rpt.customers.indents.n:
            return PB_RC_indents.RCS_backs(_event);

          case pb.rpt.customers.summary.n:
            return PB_RC_summary.RCS_backs(_event);
        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.customers.sales.n:
        PB_RC_sales.RCS_page();
        break;
      case pb.rpt.customers.transactions.n:
        PB_RC_transactions.RCS_page();
        break;
      case pb.rpt.customers.bills.n:
        PB_RC_bills.RCS_page();
        break;
      case pb.rpt.customers.indents.n:
        PB_RC_indents.RCS_page();
        break;
      case pb.rpt.customers.summary.n:
        PB_RC_summary.RCS_page();
        break;
    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.rpt.customers.sales.n:
        return PB_RC_sales.RCS_state();

      case pb.rpt.customers.transactions.n:
        return PB_RC_transactions.RCS_state();

      case pb.rpt.customers.bills.n:
        return PB_RC_bills.RCS_state();

      case pb.rpt.customers.indents.n:
        return PB_RC_indents.RCS_state();

      case pb.rpt.customers.summary.n:
        return PB_RC_summary.RCS_state();

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
      return baseStateRoute();
    },
  };
}();