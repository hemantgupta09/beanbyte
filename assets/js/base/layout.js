"use strict";

var PB_Layout = function () {

  let LayoutID, Layout, myLYTname;
  let pageAjax;
  // user events
  let $userEvent = {
    button: '', // event on click.
    select: '', // event on select.
    input : '' // event on change.
  };
  let $heldEvents = {
    button: '', // event on click.
    select: '', // event on select.
    input : '', // event on change.
  };
  let $newEvents = {
    button: '', // event on click.
    select: '', // event on select.
    input : '', // event on change.
  };
  // private variables for PB_layout.
  let isSuccess, eventType, eventValue, eventTarget;
  // this is unused by machine but created for humans.
  // todo: update as per usages
  const LYT_AT = {
    buttons   : [
      // transactions => operations.
      pb.opr.transactions.payments.n, pb.opr.transactions.receipts.n, pb.opr.transactions.banking.n, pb.opr.transactions.purchases.n, pb.opr.transactions.sales.n
      // transactions => stock

      // management => billing

    ],
    dashboards: [
      // dashboards => charts
      pb.dsb.charts.business.n, pb.dsb.charts.customer.n, pb.dsb.charts.stock.n, pb.dsb.charts.profit.n

    ],
    listings  : [
      // dashboards => charts
      pb.rpt

    ],
    tabs      : [
      // dashboards => charts
      pb.rpt

    ],
    panels    : [
      // dashboards => charts
      pb.mng.customers.detail.n, pb.mng.employees.detail.n, pb.mng.users.detail.n

    ],
    reports   : [
      // dashboards => charts


    ],
    tables    : [
      // dashboards => charts


    ],

  }

  const isEventValid = (layoutName, eventType) => {
    if (Object.values(wlEvent[layoutName]).indexOf(eventType) === -1) {
      alert('Event is not WhileListed for this layout. add into wlEvent of events.js page.');
    }
  }

  const defineOrigin = (event, button) => {
    if (event.place === null) {
      // this is not fix for all, this can be changed as per the layout.
      event.place = _callEl === undefined ? Layout.getAttribute(atr.core.welcome) : _callEl.id;
      button.setAttribute(atr.core.origin, event.place);
    }
  }

  const rejected = () => {
    toastr.error('Failed to return success', 'action routing has failed');
  }

  const reCollect = (layoutName) => {
    // lets see.
  }

  const isNewButtons = () => {
    $heldEvents.button = _callEl.querySelectorAll('button');

    $heldEvents.select = _callEl.querySelectorAll('select[' + atr.core.on.change + ']')

    return true;
  }

  const recallTheLayout = () => {

    console.log('--------------- recall the layout');
    // manage the status.
    if (_callEl.hasAttribute(atr.core.loadOf.button)) {
      return true;
    }
    // events holding.
    $newEvents.button = _callEl.querySelectorAll('button');
    // console.log($newEvents.button);
    const heldButton = Array.from($heldEvents.button);
    const newButton = Array.from($newEvents.button);

    // used common vars
    let filterEvents;
    // method - 1, filter events.
    const _method_1 = () => {
      filterEvents = newButton.filter(n => !heldButton.includes(n));
    }
    // console.log(filterEvents);

    // method - 2 [more optimizations]
    const _method_2 = () => {
      filterEvents = new Set(newButton);
      heldButton.forEach((button) => {
        filterEvents.has(button) ? filterEvents.delete(button) : justPass();
      });

      // some test code
      console.log(filterEvents);
    }

    // calling the method for filter newly created events.
    _method_2();


    switch (myLYTname) {
      case Lyt.cards:
        listen_cards(filterEvents, true);
        break;
      case Lyt.buttons:
        listen_buttons(filterEvents, true);
        break;
      case Lyt.tabs:
        listen_tabs(filterEvents, true);
        break;
      case Lyt.reports:
        listen_reports(filterEvents, true);
        break;
      case Lyt.sheets:
        listen_sheets(filterEvents, true);
        break;
      case Lyt.panels:
        listen_panels(filterEvents, true);
        break;
      case Lyt.dashboard:
        listen_dashboards(filterEvents, true);
        break;
      case Lyt.directs:
        listen_directs(filterEvents, true);
        break;
      case  Lyt.listing:
        listen_listing(filterEvents, true);
        break;
      case Lyt.tables:
        listen_tables(filterEvents, true);
        break;
      case Lyt.wizards:
        listen_wizards(filterEvents, true);
        break;
    }
  }

  const getBlankEvents = () => {
    switch (myLYTname) {
      case Lyt.dashboard:
        return blankEvents.dashboard.button;

      case Lyt.buttons:
        return blankEvents.buttons.button;

      case Lyt.panels:
        return blankEvents.panels.button;

      case Lyt.reports:
        return blankEvents.reports.button;

      case Lyt.sheets:
        return blankEvents.sheets.button;

      case Lyt.tabs:
        return blankEvents.tabs.button;

      case Lyt.cards:
        return blankEvents.cards.button;

      case Lyt.direct:
        return blankEvents.direct.button;

      case Lyt.tables:
        return blankEvents.tables.button;

      case Lyt.listing:
        return blankEvents.listing.button;

      case Lyt.wizards:
        return blankEvents.wizards.button;
    }
  }

  const deployLayout_selectEvent = (select, event) => {
    // code.
    _actionData = event.params.data;

    // routing the action.
    const _event = {
      value: select.getAttribute(atr.core.target),
      type : select.name,
      data : select.value,
    };


    //2. checking the whitelisted event
    isEventValid(myLYTname, _event.type);

    // routing the action.
    ActionRouting(_event);
  }
  const deployLayout_buttonEvent = (button) => {
    // event to return true for any user action.
    let eBlank;

    // event assignment as per user trigger.
    const _event = {
      value: button.value,
      type : button.name,
      place: button.getAttribute(atr.core.origin),
      data : button.getAttribute(atr.core.value),
    };
    // checking the whitelisted event.
    isEventValid(myLYTname, _event.type);

    // putting value in data-pb-origin, if not set for the button.
    defineOrigin(_event, button);

    // collect blank event that will not hit targeted page file.
    eBlank = getBlankEvents();

    // handling the event
    Handling.Event(myLYTname, button, 1);

    // getting call element
    Holding.Element(myLYTname, _event, button);

    // check for new event creations and holding targeted.
    const isNB = button.hasAttribute(atr.custom.recall) ? isNewButtons() : false;

    // reinitialize the layout if new buttons are created.
    const ReInitLayout = (e, r) => {
      recallTheLayout(e, r);
    }

    //
    const arrangeElements = (event, trigger) => {
      console.log(myLYTname);
      switch (myLYTname) {
        case Lyt.tabs:
          Arranging._tabs(event, trigger);
          break;
        case Lyt.cards:
          Arranging._cards(event, trigger);
          break;
        case Lyt.reports:
          Arranging._reports(event, trigger);
          break;
        case Lyt.tables:
          Arranging._tables(event, trigger);
          break;
        case Lyt.buttons:
          Arranging._buttons(event, trigger);
          break;
        case Lyt.directs:
          Arranging._directs(event, trigger);
          break;
        case  Lyt.panels:
          Arranging._panels(event, trigger);
          break;
        case Lyt.listing:
          Arranging._listing(event, trigger);
          break;
        case Lyt.dashboard:
          Arranging._dashboards(event, trigger);
          break;
        case Lyt.sheets:
          Arranging._sheets(event, trigger);
          break;
        case  Lyt.wizards:
          Arranging._wizards(event, trigger);
          break;
      }
    }

    // create a promise to handle the event.
    const myReturn = new Promise((resolve) => {
      resolve();
    });
    // to store the return for managing the event after arrangement.
    let returnObject;

    // calling the promise.
    myReturn
      .then(() => {
          // targeting the page file to make sure the event is handled.
          returnObject = ActionRouting(_event, eBlank);
          // to check if the event is handled or not.
          console.log(returnObject);
        },
      )
      .then(() => {
        // re-call the event listener for enable new buttons.
        if (returnObject === true || returnObject === false) {
          justPass();
        }
        else {
          // if the event is handled by ajax, then re-call the event listener.
          returnObject.onStateChangeCalling(ReInitLayout, isNB, _event, eBlank);
        }
      })
      .finally(() => {
        // arrange the elements after the event is handled.
        if (returnObject === true || returnObject === false) {
          // if the event is not called ajax, then arrange the elements.
          returnObject === true ? arrangeElements(_event, button) : Handling.Event(myLYTname, button, 0);
        }
        else {
          // arrange the elements after onStateChangeCalling is done.
          returnObject.onStateChangeCalling(arrangeElements, undefined, _event, button);
        }
      });
  }

  /**
   * it collects the user event and deliver it to the final page.
   * @param _event an object with keys of {'type', 'data', 'value', 'place'}
   * @param _return on which event types I want to return the function true, and do not call the apge function.
   * @returns {boolean|void|*|boolean}
   */
  function ActionRouting(_event, _return) {

    // print the event to check user action:
    console.log(_event);
    switch (thePathArr[0]) {
      case pb.dsb.n:
        return PB__dashboards.userActionRouting(_event, _return);

      case pb.opr.n:
        return PB__operations.userActionRouting(_event, _return);

      case pb.mng.n:
        return PB__management.userActionRouting(_event, _return);

      case pb.rpt.n:
        return PB__reports.userActionRouting(_event, _return);

      case pb.fin.n:
        return PB__financials.userActionRouting(_event, _return);

      case pb.tax.n:
        return PB__taxation.userActionRouting(_event, _return);

      case pb.com.n:
      // return PB__communication.userActionRouting(_event, _return);

      case pb.set.n:
        return PB__setting.userActionRouting(_event, _return);

    }
  }

  function loadingPage() {
    switch (thePathArr[0]) {
      case pb.dsb.n:
        return PB__dashboards.pageStateRouting();

      case pb.opr.n:
        return PB__operations.pageStateRouting();

      case pb.mng.n:
        return PB__management.pageStateRouting();

      case pb.rpt.n:
        return PB__reports.pageStateRouting();

      case pb.fin.n:
        return PB__financials.pageStateRouting();

      case pb.tax.n:
        return PB__taxation.pageStateRouting();

      case pb.set.n:
        return PB__setting.pageStateRouting();
    }
  }

  const run_dashboards = function (nodes = []) {

    /*
     ## looping the route function events ##
     for select / input we will use 'data-pb-target' for value for target.
     */

    myLYTname = Lyt.dashboard;

    // buttons actions.
    if (nodes.length !== 0) $userEvent.select = nodes;
    // select events.
    $userEvent.select.forEach((select) => {
      $(select).on('select2:select', function (event) {
        deployLayout_selectEvent(select, event);
      });
    });

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const dashboard_buttons = function (button = []) {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    };
    $userEvent.button.forEach(dashboard_buttons);
  }

  const run_buttons = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.buttons;

    // select events.
    // todo: pending.
    if ($userEvent.select.length > 0) {
      $userEvent.select.forEach((select) => {

        $(select).on('select2:select', function (e) {
          _actionData = e.params.data;

          const _event = {
            type : select.name,
            value: select.getAttribute(atr.core.target),
            place: select.getAttribute(atr.core.origin),
            data : select.value
          };

          // checking the whitelisted event.
          //          isEventValid(myLYTname, _event.type);

          // 3. putting value in data-pb-origin, if not set for the button.
          defineOrigin(_event, select);


          // getting the call element
          _callEl = _buttonLE.forms.querySelector('#' + _event.value + '-' + _event.type);
          const _return = [eTypes.back];

          // routing the action.
          isSuccess = ActionRouting(_event, _return);
          console.log(isSuccess);

          //          console.log(select + "select is called");
          // HTML stacks handling
          Arranging._buttons(isSuccess, _event, select);

        });
      });
    }
    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const buttons_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    };
    $userEvent.button.forEach(buttons_button);
  }

  const run_tabs = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.tabs;

    // buttons actions.
    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const tabs_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    };
    $userEvent.button.forEach(tabs_button);
  }

  const run_cards = function (nodes = []) {
    myLYTname = Lyt.cards;
    /*
     ## looping the route function events ##
     */
    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const cards_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      });
    }
    $userEvent.button.forEach(cards_button);
  }

  const run_tables = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.tables;

    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const tables_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    }
    $userEvent.button.forEach(tables_button);
  }

  const run_panels = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.panels;

    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const panels_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    }
    $userEvent.button.forEach(panels_button);
  }

  const run_listing = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.listing;

    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const listing_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    }
    $userEvent.button.forEach(listing_button);
  }

  const run_reports = function (nodes = []) {

    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.reports;
    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const reports_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    }
    $userEvent.button.forEach(reports_button);
  }

  const run_sheets = function (nodes = []) {

    myLYTname = Lyt.sheets;

    /*
     ## looping the route function events ##
     */

    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;

    const sheets_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      })
    }
    $userEvent.button.forEach(sheets_button);
  }

  const run_directs = function (nodes = []) {
    /*
     ## looping the route function events ##
     */
    myLYTname = Lyt.directs;

    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const directs_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      });
    }
    $userEvent.button.forEach(directs_button);
  }

  const run_wizards = function (nodes = []) {
    myLYTname = Lyt.wizards;
    /*
     ## looping the route function events ##
     */
    // select events.

    // input events.

    // buttons actions.
    if (nodes.length !== 0) $userEvent.button = nodes;
    const wizards_button = (button) => {
      button.addEventListener('click', function () {
        deployLayout_buttonEvent(button);
      });
    }
    $userEvent.button.forEach(wizards_button);
  }

  /*
   --------------------------------------------------------------
   Layout routing.
   --------------------------------------------------------------
   */

  const listen_dashboards = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_dashboards(nodes);
      return;
    }
    // store User Events
    $userEvent.button = _dashboardLE.charts.querySelectorAll(['button', 'input']);
    // todo: add attribute into select events in charts.
    $userEvent.select = _dashboardLE.layout.querySelectorAll('select[' + atr.core.on.change + ']');

    // initialize the layout
    run_dashboards();
  }

  const listen_buttons = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_buttons(nodes);
      return;
    }

    console.log('i am hitting');

    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');
    $userEvent.select = Layout.querySelectorAll('select[' + atr.core.on.change + ']');
    console.log(nodes);
    run_buttons();
  }

  const listen_tabs = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_tabs(nodes);
      return;
    }

    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_tabs();
  }

  const listen_cards = (nodes = [], reInit = false) => {

    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_cards(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_cards();
  }

  const listen_tables = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_tables(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_tables();
  }

  const listen_panels = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_panels(nodes);
      return;
    }

    // store User Events
    $userEvent.button = document.querySelector(_Lkey).querySelectorAll('button');

    console.log($userEvent);
    // initialize the layout
    run_panels();
  }

  const listen_listing = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_listing(nodes);
      return;
    }

    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_listing();
  }

  const listen_reports = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_reports(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_reports();
  }

  const listen_sheets = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_sheets(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_sheets();
  }

  const listen_directs = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_directs(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    // initialize the layout
    run_directs();
  }

  const listen_wizards = (nodes = [], reInit = false) => {
    // reInit in case of new buttons append in the loaded page,
    if (reInit) {
      run_wizards(nodes);
      return;
    }
    // store User Events
    $userEvent.button = Layout.querySelectorAll('button');

    run_wizards();
  }


  /*
   ----------------------------------------------------------------
   Layout Handing Element Routing.
   ----------------------------------------------------------------
   */
  const holdingLayout = function (reCollect = false) {

    // holding HTML page from layout zone to handle them.
    Layout = document.querySelector(_Lkey);
    if (!Layout) return;

    _whichLayout = Layout.getAttribute(atr.core.layout);

    Holding.Layout(_whichLayout, Layout, reCollect);

  }

  const loadingLayout = () => {
    if (thePage === undefined) {
      alert('Kindly add thePage in HTML page.');
    }
    thePathArr = thePage.split('@');

    // loading the first page.
    pageAjax = loadingPage();

    LayoutID = KTUtil.getUniqueId('PBL');
    return LayoutID;
  }

  const listeningLayout = function (initID) {
    if (initID !== LayoutID) {
      console.log('Invalid request calling by user directly.');
    }

    // working on ajax.
    const _listen_layout = () => {

      switch (_whichLayout) {
        case Lyt.dashboard:
          listen_dashboards();
          break;

        case Lyt.buttons:
          listen_buttons();
          break;

        case Lyt.tabs:
          listen_tabs();
          break;

        case Lyt.cards:
          listen_cards();
          break;

        case Lyt.tables:
          listen_tables();
          break;

        case Lyt.panels:
          listen_panels();
          break;

        case Lyt.listing:
          listen_listing();
          break;

        case Lyt.reports:
          listen_reports();
          break;

        case Lyt.sheets:
          listen_sheets();
          break;

        case Lyt.directs:
          listen_directs();
          break;

        case Lyt.wizards:
          listen_wizards();
          break;
      }
    }

    pageAjax.onStateChangeCalling(
      _listen_layout,
      undefined,
      0,
      0
    );

    // todo: @lokesh: first load all loaded buttons, then load enw buttons that created after ajax state== 4.

  }


  /*
   ----------------------------------------------------------------
   Public returns
   ----------------------------------------------------------------
   */
  return {

    /**
     * this is the first function that called when DOM loaded to init the layout functionality
     */
    holding: function () {
      holdingLayout();
    },

    /**
     * Load the zero action required data from server.
     * @returns {*}
     */
    loading: function () {
      return loadingLayout();
    },


    /**
     * enable the routing and initiate layout functionality
     * as per user event listening
     * @param initID
     */
    listening: function (initID) {
      listeningLayout(initID);
    },
  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {

  // initialize the layout element handling
  PB_Layout.holding();

  const initPage = new Promise((resolve) => {
    resolve();
    // setTimeout(() => {}, 1000)
  });

  let initID;
  initPage
    .then(() => {

        // initialize the starting process of page.
        initID = PB_Layout.loading();
      },
    )
    .then(() => {
      // initiate the page functionality
      PB_Layout.listening(initID);
    })
    .finally(() => {
      // remove the loading logo
    });
});