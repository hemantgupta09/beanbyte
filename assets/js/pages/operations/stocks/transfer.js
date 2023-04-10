"use strict";

// Class definition
var PB_OS_transfer = function () {
  // Shared variables
  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4140',
  };
  let StateData;
  let xData;
  let tableEle, formEle, success, filterEle;
  let tableObject = [];

  // Private functions

  /**
   * this will be used for show page's base-0 data.
   */

  const pageOpen = () => {

    const _process = (data) => {
      _process_a(data);
      _process_b(data);
      return true;
    }
    const _process_a = (data) => {
      StateData = data['pageState'];
    }
    const _process_b = (data) => {
      // calling render to place data into menu.
      PB_render_menu.menuRender(data.menu, 'value');
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  /**
   * this will be used into forms
   * preloaded data that will not change for this page
   */
  function createsTarget(element, event) {

    // fetching new values or static values for form initial
    formEle = element.querySelector('form');

    if (formEle.getAttribute(atr.core.loadOf.form) === '1') {
      return true;
    }

    const _process = (data) => {
      return _process_a(data);
    }
    const _process_a = (data) => {

      const sts = PB_render_form.renderME(rendER.form.method.repeater, {...StateData, ...data}, formEle);

      if (!sts) return false;
      // update form's core element status.
      formEle.setAttribute(atr.core.loadOf.form, '1');
      return true;
    }

    // initiated page blockUIElement until all things load for the page.

    // fetching, rendering and loading values into forms
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;

  }
  // Public methods
  return {
    OST_forms  : function (_event) {
      return eleCheck() ? createsTarget(_callEl, _event) : false;
    },
    // fetching all basic required details

    OST_state: function () {
      console.log("page open here returned");
      return pageOpen();
    },


  };
}();