"use strict";

// Class definition
var PB__SETT_profile = function () {

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
          case pb.set.profile.account.n:
            return PB_SP_account.SPA_loads(event);
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.set.profile.account.n:
            return PB_SP_account.SPA_forms(event);
          case pb.set.profile.billing.n:
            return PB_SP_billing.SPB_forms(event);
        }
        break;
      case eTypes.modal:
        switch (thePathArr[2]) {
          case pb.set.profile.overview.n:
            return PB_SP_overview.SPO_modals(event);
          case pb.set.profile.account.n:
            return PB_SP_account.SPA_modals(event);
          case pb.set.profile.billing.n:
            return PB_SP_billing.SPB_modals(event);
          case pb.set.profile.invoice.n:
            return PB_SP_invoice.SPI_modals(event);
          case pb.set.profile.logs.n:
            return PB_SP_logs.SPL_modals(event);
          case pb.set.profile.referral.n:
            return PB_SP_referral.SPR_modals(event);
          case pb.set.profile.security.n:
            return PB_SP_security.SPS_modals(event);
          case pb.set.profile.wallet.n:
            return PB_SP_wallet.SPW_modals(event);
        }
      default:
        console.log(button);
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.profile.account.n:
        PB_SP_account.SPA_page();
        break;
      case pb.set.profile.billing.n:
        PB_SP_billing.SPB_page();
        break;
      case pb.set.profile.invoice.n:
        PB_SP_invoice.SPI_page();
        break;
      case pb.set.profile.logs.n:
        PB_SP_logs.SPL_page();
        break;
      case pb.set.profile.overview.n:
        PB_SP_overview.SPO_page();
        break;
      case pb.set.profile.referral.n:
        PB_SP_referral.SPR_page();
        break;
      case pb.set.profile.security.n:
        PB_SP_security.SPS_page();
        break;
      case pb.set.profile.wallet.n:
        PB_SP_wallet.SPW_page();
        break;
    }
  }

  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.profile.account.n:
        return PB_SP_account.SPA_state();

      case pb.set.profile.billing.n:
        return PB_SP_billing.SPB_state();

      case pb.set.profile.invoice.n:
        return PB_SP_invoice.SPI_state();

      case pb.set.profile.logs.n:
        return PB_SP_logs.SPL_state();

      case pb.set.profile.overview.n:
        return PB_SP_overview.SPO_state();

      case pb.set.profile.referral.n:
        return PB_SP_referral.SPR_state();

      case pb.set.profile.security.n:
        return PB_SP_security.SPS_state();

      case pb.set.profile.wallet.n:
        return PB_SP_wallet.SPW_state();
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
    baseRouting: function () {
      return baseRoute();
    },
  };
}();