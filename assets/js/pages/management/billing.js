"use strict";

// Class definition
var PB__MNG_billing = function () {

  /**
   * This support all layouts routing.
   * @param page
   * @param element
   * @param button
   */
  const actionRoute = function (event, data) {
    // fetching required page data
    switch (event.type) {

      case eTypes.form:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_forms(event);


          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_creates(event);


          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_creates(event);


          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_creates(event);

        }
        break;

      case eTypes.load:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_loads(event);

          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_loads(event);

          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_loads(event);

          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_loads(event);

          case pb.mng.billing.display.n:
            return PB_MB_display.MBD_loads(event);
        }
        break;

      case eTypes.action:
        // todo : for edit or delete any entry
        switch (thePathArr[2]) {
          case pb.mng.billing.display.n:
            return PB_MB_display.MBD_actions(event);
        }
        break;

      case eTypes.table:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_tables(event);

          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_tables(event);

          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_tables(event);

          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_tables(event);
        }
        break;
      case eTypes.navtab:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_navtabs(event);

          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_navtabs(event);

          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_navtabs(event);

          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_navtabs(event);
        }
        break;
      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_reports(event);

          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_cards(event);

          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_reports(event);

          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_reports(event);
        }
        break;
      case eTypes.element:
        switch (thePathArr[2]) {
          case pb.mng.billing.generate.n:
            return PB_MB_generate.MBG_gotos(event);

          case pb.mng.billing.bucket.n:
            return PB_MB_bucket.MBB_elements(event);

          case pb.mng.billing.create.n:
            return PB_MB_create.MBC_gotos(event);

          case pb.mng.billing.view.n:
            return PB_MB_view.MBV_gotos(event);
        }
        break;
    }
  }

  const basePageRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.billing.generate.n:
        PB_MB_generate.MBG_page();
        break;
      case pb.mng.billing.bucket.n:
        PB_MB_bucket.MBB_page();
        break;
      case pb.mng.billing.create.n:
        PB_MB_create.MBC_page();
        break;
      case pb.mng.billing.view.n:
        PB_MB_view.MBV_page();
        break;
      // and so on
    }
  }

  const baseStateRoute = function () {
    switch (thePathArr[2]) {
      case pb.mng.billing.generate.n:
        return PB_MB_generate.MBG_state();

      case pb.mng.billing.bucket.n:
        return PB_MB_bucket.MBB_state();

      case pb.mng.billing.create.n:
        return PB_MB_create.MBC_state();

      case pb.mng.billing.view.n:
        return PB_MB_view.MBV_state();

      case pb.mng.billing.display.n:
        return PB_MB_display.MBD_state();

    }
  }

  // Public methods
  return {

    actionRouting: function (_event, _data) {
      return actionRoute(_event, _data);
    },

    basePageRouting: function () {
      basePageRoute();
    },

    baseStateRouting: function () {
      return baseStateRoute();
    },

  };
}();