"use strict";

var Holding = function () {
  // Shared variables
  let Layout;
  // Private functions

  const init_Layout_Holding = function (type, layout, recollect) {
    Layout = layout;

    // all private function that wil be called into switch
    const dashboards = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _dashboardLE[zone] = Layout.querySelector(_dashboardLE.zones[zone]);
      });
      return true;
    }
    const buttons = function (zones) {
      // hold elements into variable to control as per events.

      zones.forEach((zone) => {
        console.log(zone)
        _buttonLE[zone] = Layout.querySelector(_buttonLE.zones[zone]);
      });
      return true;
    }
    const tabs = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _tabLE[zone] = Layout.querySelector(_tabLE.zones[zone]);
      });
      return true;
    }
    const cards = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _cardLE[zone] = Layout.querySelector(_cardLE.zones[zone]);
        console.log(_cardLE.zones[zone]);
      });
      return true;
    }
    const tables = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _tableLE[zone] = Layout.querySelector(_tableLE.zones[zone]);
      });
      return true;
    }
    const panels = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _panelLE[zone] = Layout.querySelector(_panelLE.zones[zone]);
      });
      return true;
    }
    const listing = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _listingLE[zone] = Layout.querySelector(_listingLE.zones[zone]);
      });
      return true;
    }
    const reports = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _reportLE[zone] = Layout.querySelector(_reportLE.zones[zone]);
      });
      return true;
    }
    const sheets = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _sheetLE[zone] = Layout.querySelector(_sheetLE.zones[zone]);
      });
      return true;
    }
    const directs = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _directLE[zone] = Layout.querySelector(_directLE.zones[zone]);
      });
      return true;
    }
    const wizards = function (zones) {
      // hold elements into variable to control as per events.
      zones.forEach((zone) => {
        _wizardLE[zone] = Layout.querySelector(_wizardLE.zones[zone]);
      });
      return true;
    }

    // lets check zones
    let zones;

    switch (type) {
      case Lyt.dashboard:
        zones = recollect === true ? Object.keys(_dashboardLE.recollect) : Object.keys(_dashboardLE.zones);
        return dashboards(zones);

      case Lyt.buttons:
        zones = recollect === true ? Object.keys(_buttonLE.recollect) : Object.keys(_buttonLE.zones);
        console.log(Object.keys(_buttonLE.zones));
        return buttons(zones);

      case Lyt.tabs:
        zones = recollect === true ? Object.keys(_tabLE.recollect) : Object.keys(_tabLE.zones);
        return tabs(zones);

      case Lyt.cards:
        zones = recollect === true ? Object.keys(_cardLE.recollect) : Object.keys(_cardLE.zones);
        return cards(zones);

      case Lyt.tables:
        zones = recollect === true ? Object.keys(_tableLE.recollect) : Object.keys(_tableLE.zones);
        return tables(zones);

      case Lyt.panels:
        zones = recollect === true ? Object.keys(_panelLE.recollect) : Object.keys(_panelLE.zones);
        return panels(zones);

      case Lyt.listing:
        zones = recollect === true ? Object.keys(_listingLE.recollect) : Object.keys(_listingLE.zones);
        return listing(zones);

      case Lyt.reports:
        zones = recollect === true ? Object.keys(_reportLE.recollect) : Object.keys(_reportLE.zones);
        return reports(zones);

      case Lyt.sheets:
        zones = recollect === true ? Object.keys(_sheetLE.recollect) : Object.keys(_sheetLE.zones);
        return sheets(zones);

      case Lyt.directs:
        zones = recollect === true ? Object.keys(_directLE.recollect) : Object.keys(_directLE.zones);
        return directs(zones);

      case Lyt.wizards:
        zones = recollect === true ? Object.keys(_wizardLE.recollect) : Object.keys(_wizardLE.zones);
        return wizards(zones);
    }
  }

  /**
   * used to hold tageted element as call element.
   * @param layoutType
   * @param event
   * @returns {*|void}
   */
  const init_Element_Holding = (layoutType, event) => {
    const dashboards = function (_event) {
      switch (_event.type) {
        case eTypes.chart:
          _callEl = _dashboardLE.charts.querySelector('#' + _event.value);
          // child call elements.
          _chartEl = _callEl.querySelector('[' + atr.core.child + '="chart"]');
          _tableEl = _callEl.querySelector('[' + atr.core.child + '="table"]');
      }
    }
    const buttons = function (_event) {
      console.log(_event)
      // getting call element
      switch (_event.type) {
        case eTypes.form:
          _callEl = _buttonLE.forms.querySelector('#' + _event.value + '-' + _event.type);
          break;

        case eTypes.table:
          _callEl = _buttonLE.tables.querySelector('#' + _event.value + '-' + _event.type);
          break;

        case eTypes.card:
          console.log(_event.type + "-" + _event.value);
          _callEl = _buttonLE.cards.querySelector('#' + _event.value + '-' + _event.type);

          break;

        case eTypes.load:
          // no call element required. or not need to change.
          break;

        case eTypes.action:
          // no call element required. or not need to change.
          break;

        case eTypes.back:
          // no call element required. or not need to change.
          break;

        case eTypes.navtab:
          // _callEl = _buttonLE.tabs;
          break;
        case eTypes.element:
          _callEl = _buttonLE.elements.querySelector('#' + _event.value + '-' + _event.type);
          break;
      }
    }
    const tabs = function (_event) {
      switch (_event.type) {
        case eTypes.report:
          _callEl = _tabLE.result.querySelector('#' + _event.type + '-' + _event.value);
          break;
        case eTypes.tab:
          _callEl = _tabLE.tabs.querySelector('#' + _event.type + '-' + _event.value);
          break;
      }
    }
    const cards = function (_event, button) {
      // getting call element
      switch (_event.type) {
        case eTypes.card:
          console.log("cardsssssssss");
          _callEl = _cardLE[_event.value];
          console.log(_callEl);
          console.log(_event.value);
          break;
        case eTypes.back:
          _callEl = _cardLE[_event.value];
          break;
        case eTypes.navtab:
          _callEl = _cardLE.view.querySelector('#' + _event.value);
          break;
        case eTypes.action:
          // action => any form submission.
          _callEl = Layout.querySelector('#' + _event.place);
          // _callEl = _cardLE.view.querySelector('#' + _event.value);
          break;

      }
    }
    const tables = function (_event) {

    }
    const panels = function (_event) {
      // getting call element
      _callEl = _panelLE.outcome;
    }
    const listing = function (_event) {
      // getting call element
      _callEl = _listingLE.tabs;
    }
    const reports = function (_event) {

      // getting call element
      switch (_event.type) {
        case eTypes.load:
          _callEl = _reportLE[_event.value];
          break;
        case eTypes.navtab:
          _callEl = _reportLE[_event.value];
          break;
      }
    }
    const sheets = function (_event) {
      // getting call element
      switch (_event.type) {
        case eTypes.load:
          _callEl = _sheetLE[_event.value];
      }
    }
    const directs = function (_event) {
      // getting call element
      switch (_event.type) {
        case eTypes.action:
          _callEl = _directLE.direct.querySelector('#' + _event.value);
          break;
        case eTypes.modal:
          _callEl = _directLE.direct.querySelector('#' + _event.value);
          break;
        case eTypes.navtab:
          _callEl = _directLE.visits.querySelector('#' + _event.value + "-" + _event.type);
          break;
      }
    }

    const wizards = function (_event) {
      // getting call element
      switch (_event.type) {
        case eTypes.action:
          console.log(_wizardLE.working)
          //_callEl = _wizardLE..querySelector('#' + _event.value);
          console.log(_callEl);
          break;

        case eTypes.card:
          // used to how details in a card
          _callEl = _wizardLE[_event.value]; // .querySelector('table');
          break;

        case eTypes.load:
          // used to load data as per filter inputs.
          _callEl = _wizardLE[_event.value]; // .querySelector('table');
          break;
      }
    }

    switch (layoutType) {
      case Lyt.dashboard:

        return dashboards(event);

      case Lyt.buttons:
        return buttons(event);

      case Lyt.tabs:

        return tabs(event);

      case Lyt.cards:
        return cards(event);

      case Lyt.tables:

        return tables(event);

      case Lyt.panels:

        return panels(event);

      case Lyt.listing:

        return listing(event);

      case Lyt.reports:

        return reports(event);

      case Lyt.sheets:
        return sheets(event);

      case Lyt.directs:
        return directs(event);

      case Lyt.wizards:
        return wizards(event);
    }
  }


  // Public methods
  return {
    Layout : function (whichLayout, Layout, reCollect = false) {
      console.log(whichLayout);
      init_Layout_Holding(whichLayout, Layout, reCollect);
    },
    Element: function (whichLayout, Event, button) {
      console.log(whichLayout);
      console.log(Event);
      console.log(button);
      init_Element_Holding(whichLayout, Event, button);
    }
  };
}();