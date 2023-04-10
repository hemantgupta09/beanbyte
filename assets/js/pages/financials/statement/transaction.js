"use strict";

// Class definition
var PB_FS_transaction = function () {

  const host = {
    server: '',
    local : 'http://localhost:0000',
  };
  // Shared variables
  let StateData, redData;
  let tableEle, $table;

  // Private functions

  /**
   * preloaded data that will be same for this page
   */
  const pageOpen = () => {
    /**
     * this data save into variables.
     * it will be called when create form initiated.
     * @param data
     * @private
     */
    const _process = (data) => {
      _process_a(data);
      _process_b(data);
      return true;
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_b = (data) => {
      // what your want to process on page load.
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // other things, not connected to dynamic data.

    return ajax;
  }

  const cardsTarget = function (element, event) {

    /*
     ------------------
     internal functions
     ------------------
     */


    const _process_a = (data) => {


      const _process_a_inner_fun_a = function (element, data, event) {

        //
        return true;

      }
      // here we load receipts tab data
      const _process_a_inner_fun_b = function (element, data, event) {

        return true;
      }

      // switching
      switch (event.value) {

        case pb.fin.statement.transaction.a:
          return _process_a_inner_fun_a(element, event);

        case pb.fin.statement.transaction.b:
          return _process_a_inner_fun_b(element, event);

        default :
          eventNotFound(event);
          return false;
      }
    }

    const _process = (data) => {
      return _process_a(data);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act    : event.value,
      type   : event.type,
      account: event.data
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }


  const actionsTarget = function (element, _event) {
    /*
     ------------
     internal functions
     ------------
     */

    /**
     * here we delete the contact
     * @param element
     * @param event
     * @returns {AjaxPB}
     */
    const eType_eValue_function_1 = (element, event) => {
      // :page-event-value-fn to get complete function.

      // code here for the event_value_function_1 function

      const _process = (data) => {
        console.log(data);
        // process.
        let _return = true;
        // data is returned object from backend.
        _return &&= _process_a(data);
        _return &&= _process_b(data);
        _return &&= _process_c(data);
        return _return
      }
      const _process_a = (data) => {

        if (!data) {
          toastr.error('We are unable to delete this account', "Failed to delete");
          return false;
        }

        // return on save data call.
        return true;
      }
      const _process_b = (data) => {
        // use the data for processing

        return true;
      }
      const _process_c = (data) => {
        // use the data for processing

        return true;
      }

      // calling ajax function for connect
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: event.data
      }, host.local);
      ajax.callREQUEST({formData}, urlID, true, _process);

      return ajax;
    }

    const eType_eValue_function_2 = (element, event) => {

      // code here for the event_value_function_2 function

      // add process
      // :page-process-function

      // call ajax
      // :page-ajax-calling
    };


    // request switching.
    // switching
    switch (_event.value) {

      case pb.fin.statement.transaction:
        return eType_eValue_function_1(element, _event);

      case pb.fin.statement.transaction:
        return eType_eValue_function_2(element, _event);

      default :
        eventNotFound(_event);
        return false;
    }
  }

  // Public methods
  return {

    // works on card event type hit
    FST_cards: function (_event) {
      // note: single ajax calling for any event
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },

    // works on action event type hit
    FST_actions: function (_event) {
      // note: multiple ajax calling for all events.
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    FST_pageOpen: function () {
      return pageOpen();
    },

  };
}
();