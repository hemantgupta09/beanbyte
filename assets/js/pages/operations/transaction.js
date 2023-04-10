"use strict";

// Class definition
var PB__OPR_transactions = function () {

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
          case pb.opr.transactions.banking.n:
            return PB_OT_banking.OTB_forms(_event);

          case pb.opr.transactions.sales.n:
            return PB_OT_sales.OTS_forms(_event);

          case pb.opr.transactions.purchases.n:
            return PB_OT_purchases.OTP_forms(_event);

          case pb.opr.transactions.payments.n:
            return PB_OT_payments.OTY_forms(_event);

          case pb.opr.transactions.receipts.n:
            return PB_OT_receipts.OTR_forms(_event);

          case pb.opr.transactions.journals.n:
            return PB_OT_journals.OTJ_forms(_event);

          case pb.opr.transactions.miscellaneous.n:
            return PB_OT_miscellaneous.OTM_forms(_event);

        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.opr.transactions.banking.n:
            return PB_OT_banking.OTB_loads(_event);

          case pb.opr.transactions.sales.n:
            return PB_OT_sales.OTS_loads(_event);

          case pb.opr.transactions.purchases.n:
            return PB_OT_purchases.OTP_loads(_event);

          case pb.opr.transactions.payments.n:
            return PB_OT_payments.OTY_loads(_event);

          case pb.opr.transactions.receipts.n:
            return PB_OT_receipts.OTR_loads(_event);

          case pb.opr.transactions.journals.n:
            return PB_OT_journals.OTJ_loads(_event);

          case pb.opr.transactions.miscellaneous.n:
            return PB_OT_miscellaneous.OTM_loads(_event);

        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.opr.transactions.banking.n:
            return PB_OT_banking.OTB_tables(_event);

          case pb.opr.transactions.sales.n:
            return PB_OT_sales.OTS_tables(_event);

          case pb.opr.transactions.purchases.n:
            return PB_OT_purchases.OTP_tables(_event);

          case pb.opr.transactions.payments.n:
            return PB_OT_payments.OTY_tables(_event);

          case pb.opr.transactions.receipts.n:
            return PB_OT_receipts.OTR_tables(_event);

          case pb.opr.transactions.journals.n:
            return PB_OT_journals.OTJ_tables(_event);

          case pb.opr.transactions.miscellaneous.n:
            return PB_OT_miscellaneous.OTM_tables(_event);

        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.opr.transactions.banking.n:
            return PB_OT_banking.OTB_cards(_event);

          case pb.opr.transactions.sales.n:
            return PB_OT_sales.OTS_cards(_event);

          case pb.opr.transactions.purchases.n:
            return PB_OT_purchases.OTP_cards(_event);

          case pb.opr.transactions.payments.n:
            return PB_OT_payments.OTY_cards(_event);

          case pb.opr.transactions.receipts.n:
            return PB_OT_receipts.OTR_cards(_event);

          case pb.opr.transactions.journals.n:
            return PB_OT_journals.OTJ_cards(_event);

          case pb.opr.transactions.miscellaneous.n:
            return PB_OT_miscellaneous.OTM_cards(_event);

        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.opr.transactions.banking.n:
            return PB_OT_banking.OTB_actions(_event);

          case pb.opr.transactions.sales.n:
            return PB_OT_sales.OTS_actions(_event);

          // return PB_OT_sales.OTS_cards(_event);

          case pb.opr.transactions.purchases.n:
            return PB_OT_purchases.OTP_actions(_event);

          case pb.opr.transactions.payments.n:
            return PB_OT_payments.OTY_actions(_event);

          case pb.opr.transactions.receipts.n:
            return PB_OT_receipts.OTR_actions(_event);

          // return PB_OT_receipts.OTR_cards(_event);

          case pb.opr.transactions.journals.n:
            return PB_OT_journals.OTJ_actions(_event);

          case pb.opr.transactions.miscellaneous.n:
            return PB_OT_miscellaneous.OTM_actions(_event);

        }
        break;

      default:
        alert('event :' + _event.type + ' received, that has not initiated.');
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.transactions.banking.n:
        PB_OT_banking.OTB_page();
        break;

      case pb.opr.transactions.sales.n:
        PB_OT_sales.OTS_page();
        break;

      case pb.opr.transactions.purchases.n:
        PB_OT_purchases.OTP_page();
        break;
      //
      case pb.opr.transactions.payments.n:
        PB_OT_payments.OTY_page();
        break;
      //
      case pb.opr.transactions.receipts.n:
        PB_OT_receipts.OTR_page();
        break;

      case pb.opr.transactions.journals.n:
        PB_OT_journals.OTJ_page();
        break;
      // and so on
    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.opr.transactions.banking.n:
        return PB_OT_banking.OTB_pageOpen();

      case pb.opr.transactions.sales.n:
        return PB_OT_sales.OTS_pageOpen();

      case pb.opr.transactions.purchases.n:
        return PB_OT_purchases.OTP_pageOpen();

      case pb.opr.transactions.payments.n:
        return PB_OT_payments.OTY_pageOpen();

      case pb.opr.transactions.receipts.n:
        return PB_OT_receipts.OTR_pageOpen();

      case pb.opr.transactions.journals.n:
        return PB_OT_journals.OTJ_pageOpen();

      case pb.opr.transactions.miscellaneous.n:
        return PB_OT_miscellaneous.OTM_pageOpen();
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