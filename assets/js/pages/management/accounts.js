"use strict";

// Class definition
var PB__MNG_accounts = function () {

  // Shared variables
  let redData;

  // Private functions

  /**
   * This support all layouts routing.
   * @param event
   * @param data
   */
  const actionRoute = function (event, data) {
    // fetching required page data

    switch (event.type) {

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.mng.accounts.contacts.n:
            // return PB_MA_contacts.MAC_loads(event);
            break;
          case pb.mng.accounts.banks.n:
            // return PB_MA_banks.MAB_loads(event);
            break;
          case pb.mng.accounts.suppliers.n:
            return PB_MA_suppliers.MAS_loads(event);
          case pb.mng.accounts.vendors.n:
            // return PB_MA_vendors.MAV_loads(event);
            break;
          case pb.mng.accounts.gateways.n:
            // return PB_MA_gateways.MAG_loads(event);
            break;
          case pb.mng.accounts.ledgers.n:
            // return PB_MA_ledgers.MAL_loads(event);
            break;
          case pb.mng.accounts.expenses.n:
            // return PB_MA_expenses.MAE_loads(event);
            break;
        }
        break;

      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.mng.accounts.loans.n:
            return PB_MA_loans.MAL_actions(event);
          case pb.mng.accounts.contacts.n:
            return PB_MA_contacts.MAC_actions(event);
          case pb.mng.accounts.gateways.n:
            return PB_MA_gateways.MAG_actions(event);
          case pb.mng.accounts.banks.n:
            return PB_MA_banks.MAB_actions(event);
          case pb.mng.accounts.suppliers.n:
            return PB_MA_suppliers.MAS_actions(event);
          case pb.mng.accounts.vendors.n:
            return PB_MA_vendors.MAV_actions(event);
          case pb.mng.accounts.ledgers.n:
            return PB_MA_ledgers.MAL_actions(event);
          case pb.mng.accounts.expenses.n:
            return PB_MA_expenses.MAE_actions(event);
          case pb.mng.accounts.setting.n:
            return PB_MA_setting.MAS_actions(event);
        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.mng.accounts.contacts.n:
            return PB_MA_contacts.MAC_cards(event);
          case pb.mng.accounts.banks.n:
            return PB_MA_banks.MAB_cards(event);
          case pb.mng.accounts.suppliers.n:
            return PB_MA_suppliers.MAS_cards(event);
          case pb.mng.accounts.vendors.n:
            return PB_MA_vendors.MAV_cards(event);
          case pb.mng.accounts.gateways.n:
            return PB_MA_gateways.MAG_cards(event);
          case pb.mng.accounts.ledgers.n:
            return PB_MA_ledgers.MAL_cards(event);
          case pb.mng.accounts.expenses.n:
            return PB_MA_expenses.MAE_cards(event);
          case pb.mng.accounts.loans.n:
            return PB_MA_loans.MAL_cards(event);
        }
        break;

      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.mng.accounts.loans.n:
            return PB_MA_loans.MAL_navtabs(event);

          case pb.mng.accounts.contacts.n:
            return PB_MA_contacts.MAC_navtabs(event);

          case pb.mng.accounts.gateways.n:
            return PB_MA_gateways.MAG_navtabs(event);

          case pb.mng.accounts.banks.n:
            return PB_MA_banks.MAB_navtabs(event);

          case pb.mng.accounts.suppliers.n:
            return PB_MA_suppliers.MAS_navtabs(event);

          case pb.mng.accounts.vendors.n:
            return PB_MA_vendors.MAV_navtabs(event);

          case pb.mng.accounts.ledgers.n:
            return PB_MA_ledgers.MAL_navtabs(event);

          case pb.mng.accounts.expenses.n:
            return PB_MA_expenses.MAE_navtabs(event);

        }
        break;

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.mng.accounts.setting.n:
            return PB_MA_setting.MAS_creates(event);
        }
        break;

      case eTypes.group:
        switch (thePathArr[2]) {
          case pb.mng.accounts.setting.n:
            return PB_MA_setting.MAS_dynamicCall(event, data);
        }
        break;

      case eTypes.back:
        switch (thePathArr[2]) {
          case pb.mng.accounts.setting.n:
            return PB_MA_setting.MAS_dynamicCall(event, data);
        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.accounts.contacts.n:
        PB_MA_contacts.MAC_page();
        break;
      case pb.mng.accounts.gateways.n:
        PB_MA_gateways.MAG_page();
        break;
      case pb.mng.accounts.loans.n:
        PB_MA_loans.MAL_page();
        break;
      case pb.mng.accounts.banks.n:
        PB_MA_banks.MAB_page();
        break;
      case pb.mng.accounts.ledgers.n:
        PB_MA_ledgers.MAL_page();
        break;
      case pb.mng.accounts.suppliers.n:
        PB_MA_suppliers.MAS_page();
        break;
      case pb.mng.accounts.vendors.n:
        PB_MA_vendors.MAV_page();
        break;
      case pb.mng.accounts.expenses.n:
        PB_MA_expenses.MAE_page();
        break;
      case pb.mng.accounts.setting.n:
        PB_MA_setting.MAS_page();
      //and so on
    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.accounts.contacts.n:
        return PB_MA_contacts.MAC_state();

      case pb.mng.accounts.gateways.n:
        return PB_MA_gateways.MAG_state();

      case pb.mng.accounts.loans.n:
        return PB_MA_loans.MAL_state();

      case pb.mng.accounts.banks.n:
        return PB_MA_banks.MAB_state();

      case pb.mng.accounts.ledgers.n:
        return PB_MA_ledgers.MAL_state();

      case pb.mng.accounts.suppliers.n:
        return PB_MA_suppliers.MAS_state();

      case pb.mng.accounts.vendors.n:
        return PB_MA_vendors.MAV_state();

      case pb.mng.accounts.expenses.n:
        return PB_MA_expenses.MAE_state();

      case pb.mng.accounts.setting.n:
        return PB_MA_setting.MAS_state();
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
    getFormReady    : function (element, data) {
      alert('this has replaced, follow contacts.js');
    }
  };
}();