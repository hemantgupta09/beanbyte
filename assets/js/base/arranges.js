"use strict";

/**
 * this class used to manage the html element of the layout
 * manage elements as per the response getting from the target JS file using event handler.
 * elements that are used in elements.js will be arranged here according the event passed by the user.
 * @type {{}}
 */

var Arranging = function () {

  // few common variables functions.
  const didntFind = (event) => {
    toastr.error(event.type, 'Arrange is not setup');
  }
  const imHere = (e) => {
    console.log(e)
    console.log(`Arranges = Events: ${e.type} hit with the value of ${e.value}`);
  }

  /**
   * this is sample for create arrange function for new layout.
   * @param _event
   * @param trigger
   */
  const sample = (_event, trigger) => {
    // adding the event to acknowledge the event.
    imHere(_event);
    // control the event as per the flow.
    Handling.Event(Lyt.sample, trigger, 0);

    // manage the layout elements as per the event type.
    switch (_event.type) {
      case eTypes.load:
        // load the element.
        return;
      case eTypes.action:
        // action the element.
        return;
      default:
        // if the event is not found.
        return didntFind(_event);
    }
  }

  // there are functions to manage elements of the layout.
  const sheets = (_event, trigger) => {

    imHere(_event);
    Handling.Event(Lyt.sheets, trigger, 0);

    // manage the element as oer event type.
    switch (_event.type) {

      case eTypes.load:
        // current element hide.
        _sheetLE[_event.place].classList.add(CLS.display.none);
        // targeted element show.
        _sheetLE[_event.value].classList.remove(CLS.display.none);
        return;

      case eTypes.action:
        // print, export, resize
        return;


      case eTypes.back:
        // hide the current sheet.
        _sheetLE[_event.place].classList.add(CLS.display.none);
        // show the targeted (previous) sheet.
        _sheetLE[_event.value].classList.remove(CLS.display.none);

        // reset the sheet data or table data.
        // targeted(origin) element for reset is data-pb-space="master"
        _sheetLE[_event.place].querySelectorAll('[' + atr.core.space + '="master"]').forEach((ele) => {
          // empty the loaded sheet.
          ele.innerHTML = ''
        });
        // remove the loaded attribute from the targeted(origin) element.
        _sheetLE[_event.place].removeAttribute(atr.core.loaded);

        return;
      default:
        return didntFind(_event);
    }
  }

  const reports = (_event, trigger) => {

    imHere(_event);

    Handling.Event(Lyt.reports, trigger, 0);

    /**
     * this function is used to handle the tab.
     * as per the event value it will update the class of the nav and tab.
     * @param value
     */
    const tabHandling = (value) => {
      // update class into nav
      _reportLE.navlink.querySelectorAll('button').forEach((links) => {
        links.value === value ? links.classList.add(CLS.visible.nav.active) : links.classList.remove(CLS.visible.nav.active);
      })
      // update class into tab
      _reportLE.navtab.querySelectorAll('[role="tabpanel"]').forEach((element) => {
        value === element.id ? element.classList.add(...CLS.visible.tab.active) : element.classList.remove(...CLS.visible.tab.active);
      })
    }

    switch (_event.type) {

      case eTypes.navtab:
        _event.value === 'search'
          // hide NavLink in case of search click for new report.
          ? _reportLE.navlink.classList.add(CLS.display.none)
          : (_reportLE.navlink.classList.contains(CLS.display.none)
            // visible the navlink in case of other tab click.
            ? _reportLE.navlink.classList.remove(CLS.display.none)
            : false);
        return;

      case eTypes.load:
        _reportLE.navlink.classList.contains(CLS.display.none)
          // display navlink if hide.
          ? _reportLE.navlink.classList.remove(CLS.display.none)
          : false;

        // open report tab element and hide others.
        tabHandling(_event.value);
        return;

      default:
        return didntFind(_event);
    }
  }

  const listing = (_event, trigger) => {

    imHere(_event);
    Handling.Event(Lyt.listing, trigger, 0);

    switch (_event.type) {
      case eTypes.action:
        return;

      case eTypes.navtab:
        // hide the intro part, if contains the d-none class.
        _listingLE.intro.classList.contains(CLS.display.none) ? justPass() : _listingLE.intro.classList.add(CLS.display.none);
        // show the form part to get details.
        _listingLE.form.classList.contains(CLS.display.none) ? _listingLE.form.classList.remove(CLS.display.none) : justPass();
        return;

      case eTypes.paging:
        return;

      default:
        return didntFind(_event);
    }
  }

  const panels = (_event, trigger) => {

    imHere(_event);

    Handling.Event(Lyt.panels, trigger, 0);

    switch (_event.type) {
      case eTypes.load:
        // hide search form and show outcome.
        _panelLE.search.classList.add(CLS.display.none);
        _panelLE.outcome.classList.remove(CLS.display.none);
        break;

      case eTypes.tab:
        return;

      case eTypes.back:
        // hide outcome and show search form.
        _panelLE.outcome.classList.add(CLS.display.none);
        _panelLE.search.classList.remove(CLS.display.none);
        // remove the active class from tab.
        _panelLE.outcome.querySelectorAll(_panelLE.zone.tab + ' > div').forEach((node) => {
          node.classList.remove(...CLS.visible.tab.active);
        });
        // remove the active class from nav.
        _panelLE.outcome.querySelector(_panelLE.zone.nav).querySelectorAll('button').forEach((node) => {
          node.classList.remove(CLS.visible.nav.active);
        });
        return;

      default:
        didntFind(_event);
        return;
    }
  }

  const tables = (_event, trigger) => {

    imHere(_event);

    Handling.Event(Lyt.tables, trigger, 0);

    switch (_event.type) {

      case eTypes.navtab:
        return;

      case eTypes.result:
        return;

      case eTypes.goto:
        // active navbar if @todo validate.
        _tableLE.navbar.querySelectorAll('button').forEach((btn) => {
          if (btn.value === this.value) {
            btn.classList.add(CLS.visible.nav.active);
          }
          else {
            btn.classList.remove(CLS.visible.nav.active);
          }
        })
        // update class into navtabs.
        _tableLE.navtab.querySelectorAll('.tab-pane').forEach((ele) => {
          console.log(ele.id);
          if ('tab_' + this.value === ele.id) {
            ele.classList.add(...CLS.visible.tab.active);
          }
          else {
            ele.classList.remove(...CLS.visible.tab.active);
          }
        })
        return;
      default:
        didntFind(_event);
        return;
    }
  }

  const cards = (_event, trigger) => {
    imHere(_event);
    Handling.Event(Lyt.cards, trigger, 0);

    switch (_event.type) {
      case eTypes.card:
        // show the targeted element
        _cardLE[_event.value].classList.remove(CLS.display.none);
        // hide the current event element
        _cardLE[_event.place].classList.add(CLS.display.none);

        // making full screen
        // event value is not menu leave attribute value.
        if (_event.value !== _cardLE.menu.getAttribute(atr.core.leave)) {
          if (!_cardLE.menu.classList.contains(CLS.display.none)) {
            _cardLE.menu.classList.add(CLS.display.none);
          }
          _cardLE.cards.classList.add(...CLS.screen.full.all);
        }
        else {
          _cardLE.menu.classList.remove(CLS.display.none);
          _cardLE.cards.classList.remove(...CLS.screen.full.all);
        }
        break;

      case eTypes.action:
        break;

      case eTypes.redirect:
        break;

      case eTypes.navtab:
        _callEl.classList.remove(CLS.display.none);
        break;

      case eTypes.back:
        _cardLE[_event.value].classList.remove(CLS.display.none);
        _cardLE[_event.place].classList.add(CLS.display.none);
        // remove full screen mode.
        if (_event.value === _cardLE.menu.getAttribute(atr.core.leave)) {
          _cardLE.menu.classList.remove(CLS.display.none);
          _cardLE.cards.classList.remove(...CLS.screen.full.all);
        }
        break;
      default:
        didntFind(_event);
        return;
    }
  }

  const buttons = (_event, trigger) => {
    console.log(_event)
    console.log(trigger)
    imHere(_event);

    Handling.Event(Lyt.buttons, trigger, 0);
    // inner private functions.
    const resizeElements = function (button, flow) {
      console.log(flow, button);
      switch (flow) {
        case kws.flow.forward:
          // hide menu bar
          _buttonLE.menu.classList.add(CLS.display.none);
          // hide buttons_zone
          _buttonLE.buttons.classList.add(CLS.display.none);
          // extend columns
          CLS.screen.full.all.forEach((cls) => {
            _buttonLE.working.classList.add(cls);
          });
          break;

        case kws.flow.backward:
          _buttonLE.menu.classList.remove(CLS.display.none);
          // show menu bar
          _buttonLE.buttons.classList.remove(CLS.display.none);
          // coming back to default width settings
          CLS.screen.full.all.forEach((cls) => {
            _buttonLE.working.classList.remove(cls);
          });
          break;

        case kws.flow.stable:
          //
          break;

      }
    }


    switch (_event.type) {

      case eTypes.form:
        _callEl.classList.remove(CLS.display.none);
        resizeElements(trigger, kws.flow.forward);
        break;

      case eTypes.table:
        _callEl.classList.remove(CLS.display.none);
        resizeElements(trigger, kws.flow.forward);
        break;

      case eTypes.card:
        _buttonLE.elements.classList.add(CLS.display.none);
        _buttonLE.cards.classList.remove(CLS.display.none);
        _callEl.classList.remove(CLS.display.none);
        resizeElements(trigger, kws.flow.forward);
        break;

      case eTypes.modal:
        _buttonLE.modals.classList.remove(CLS.display.none);
        // show modal.
        _callEl.classList.remove(CLS.display.none);
        break;

      case eTypes.action:
        console.log(eTypes.action);
        _callEl.classList.remove(CLS.display.none);
        break;

      //      case eTypes.card:
      //        _buttonLE.cards.querySelector('#' + trigger.getAttribute(atr.core.target)).classList.add(CLS.display.none);
      //        _callEl.classList.remove(CLS.display.none);
      //        break;

      case eTypes.element:
        console.log(_buttonLE.zones)
        _buttonLE.elements.classList.remove(CLS.display.none);
        _buttonLE.buttons.classList.add(CLS.display.none);
        _buttonLE.menu.classList.add(CLS.display.none);
        _callEl.classList.remove(CLS.display.none);
        resizeElements(trigger, kws.flow.forward);
        break;

      case eTypes.back:
        console.log(_event.place);
        _callEl.classList.add(CLS.display.none);
        resizeElements(trigger, kws.flow.backward);
        break;

      default:
        didntFind(_event);
        return;
    }
  }
  const tabs = (_event, trigger) => {
    imHere(_event);

    Handling.Event(Lyt.tabs, trigger, 0);
    switch (_event.type) {
      case eTypes.report:
        // action and changes are required.
        _tabLE.result.classList.remove(CLS.display.none);
        _callEl.classList.remove(CLS.display.none);
        _tabLE.tabs.classList.add(CLS.display.none);

        return;

      case eTypes.tab:
        let intro = _tabLE.action.querySelector('#intro');
        !intro.classList.contains(CLS.display.none) ? intro.classList.add(CLS.display.none) : '';
        return;

      case eTypes.back:
        // hide targeted element and result zone.
        _callEl.classList.add(CLS.display.none);
        _tabLE.result.classList.add(CLS.display.none);
        // display selection option.
        _tabLE.tabs.classList.remove(CLS.display.none);
        // empty the table body.
        _tableEl = _callEl.querySelector('table')
        _tableEl.setAttribute(atr.core.loadOf.table, '0');
        _tableEl.querySelector('tbody').remove();
        return;

      default:
        didntFind(_event);
        return;
    }
  }

  const dashboards = (_event, trigger) => {
    imHere(_event);

    Handling.Event(Lyt.dashboard, trigger, 0);
    switch (_event.type) {
      case eTypes.refresh:
        // nothing changes are required.
        break;
      case eTypes.wizard:
        // nothing changes are required.
        break;

      case eTypes.aside:
        switch (_event.value) {
          case kws.status.hide:
            // hide table
            _tableEl.classList.add(CLS.display.none);
            // adjust the width of the chart and table.
            _chartEl.classList.add(...CLS.screen.cols.charts.full);
            _tableEl.classList.add(...CLS.screen.cols.charts.full);
            _chartEl.classList.remove(...CLS.screen.cols.charts.half);
            _tableEl.classList.remove(...CLS.screen.cols.charts.half);
            trigger.value = 1;
            break;
          case kws.status.show:
            // show table
            _tableEl.classList.remove(CLS.display.none);
            // adjust the width of the chart and table.
            _chartEl.classList.add(...CLS.screen.cols.charts.half);
            _tableEl.classList.add(...CLS.screen.cols.charts.half);
            _chartEl.classList.remove(...CLS.screen.cols.charts.full);
            _tableEl.classList.remove(...CLS.screen.cols.charts.full);
            trigger.value = 0;
            break;
        }
        break;

      case eTypes.mode:
        switch (_event.value) {
          case kws.status.hide:
            // show charts and hide table
            _chartEl.classList.remove(CLS.display.none);
            _tableEl.classList.add(CLS.display.none);
            break;
          case kws.status.show:
            // hide charts and show table
            _chartEl.classList.add(CLS.display.none);
            _tableEl.classList.remove(CLS.display.none);
            break;
        }
        return;

      default:
        didntFind(_event);
        return;
    }

  }

  const directs = (_event, trigger) => {
    imHere(_event);

    Handling.Event(Lyt.directs, trigger, 0);

    switch (_event.type) {

      case eTypes.navtab:
        // remove active class from the nav buttons.
        // const lists = _directLE.navtab.querySelector('[' + atr.core.append + '="' + trigger.name + '"]');
        const lists = _directLE.layout.querySelector('#' + _event.value).querySelector('[' + atr.core.append + '="' + trigger.name + '"]');
        lists.children.forEach((li) => {
          if (li.getAttribute(atr.core.value) !== _event.data) {
            li.children[0].classList.remove(CLS.visible.nav.active);
          }
        });
        // add active class into the button.
        trigger.classList.add(CLS.visible.nav.active);

        // remove class from the tab.
        const tabs = _directLE.layout.querySelector('#' + _event.value + '-' + _event.type).children[0].children;

        tabs.forEach((tab) => {
          if (tab.getAttribute(atr.core.value) === _event.data) {
            tab.classList.remove(CLS.display.none);
            console.log(tab);
          }
          else {
            tab.classList.add(CLS.display.none);
          }
        });

        return;

      case eTypes.goto:
        //
        return;
      default:
        didntFind(_event);
        return;
    }
  }

  const wizards = (_event, trigger) => {
    imHere(_event);

    Handling.Event(Lyt.wizards, trigger, 0);

    const step_loop = (eValue, flow) => {
      Object.keys(_wizardLE.zones).forEach(function (key) {
        if (flow === 1) {
          key === eValue
            ? _wizardLE[key].classList.remove(CLS.display.none)
            : _wizardLE[key].classList.add(CLS.display.none);
        }
        else {
          key === eValue
            ? _wizardLE[key].classList.add(CLS.display.none)
            : _wizardLE[key].classList.remove(CLS.display.none);
        }
      })
    }
    switch (_event.type) {

      case eTypes.redirect:
      case eTypes.load:
        // no changes required.
        break;

      case eTypes.back:
        step_loop(_event.place, 0)
        break;

      case eTypes.card:
        step_loop(_event.value, 1)
        break;

      default:
        didntFind(_event);
        return;
    }
  }

  const __noChanges = (status) => {
    console.log('return from routing is false.');
    console.log(status);
    return false;
  }

  // Public methods
  return {
    _sheets    : function (event, trigger) {
      sheets(event, trigger);
    },
    _reports   : function (event, trigger) {
      reports(event, trigger);
    },
    _listing   : function (event, trigger) {
      listing(event, trigger);
    },
    _panels    : function (event, trigger) {
      panels(event, trigger);
    },
    _tables    : function (event, trigger) {
      tables(event, trigger);
    },
    _cards     : function (event, trigger) {
      cards(event, trigger);
    },
    _tabs      : function (event, trigger) {
      tabs(event, trigger);
    },
    _buttons   : function (event, trigger) {
      buttons(event, trigger);
    },
    _dashboards: function (event, trigger) {
      dashboards(event, trigger);
    },
    _directs   : function (event, trigger) {
      directs(event, trigger);
    },
    _wizards   : function (event, trigger) {
      wizards(event, trigger);
    }
  };
}();