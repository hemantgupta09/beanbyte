"use strict";

// Class definition
var PB__SETT_subscriptions = function () {

  // Shared variables

  // Private functions

  /**
   * This support all layouts routing.
   * @param event
   * @param data
   */
  const actionRoute = function (event) {
    // fetching required page data

    switch (event.type) {
      case eTypes.action:
        switch (thePathArr[2]) {
          case pb.set.subscriptions.add.n:
            return PB_SS_add.SSA_actions(event);

          case pb.set.subscriptions.detail.n:
            return PB_SS_detail.SSD_actions(event);

          case pb.set.subscriptions.listing.n:
            return PB_SS_listing.SSL_actions(event);

        }
        break;

      case eTypes.card:
        switch (thePathArr[2]) {
          case pb.set.subscriptions.add.n:
            return PB_SS_add.SSA_cards(event);

          case pb.set.subscriptions.detail.n:
            return PB_SS_detail.SSD_cards(event);

          case pb.set.subscriptions.listing.n:
            return PB_SS_listing.SSL_cards(event);


        }
        break;


    }
  }



  const baseRoute = function () {
    switch (thePathArr[2]) {
      case pb.set.subscriptions.add.n:
        return PB_SS_add.SSA_pageOpen();

      case pb.set.subscriptions.detail.n:
        return PB_SS_detail.SSD_pageOpen();

      case pb.set.subscriptions.listing.n:
        return PB_SS_listing.SSL_pageOpen();

    }
  }

  // Public methods
  return {
    actionRouting   : function (_event) {
      return actionRoute(_event);
    },

    baseRouting: function () {
      return baseRoute();
    },
  };
}();