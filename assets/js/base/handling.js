"use strict";

// Class definition
var Handling = function () {

  /**
   * @description This function is used to manage the event handling.
   * to control and event element to be disabled or enabled.
   * with the ability to change the text of the element.
   * and also to show or hide the element.
   * @param LayoutName
   * @param event
   * @param flow
   */
  const init_Event_Handling = (LayoutName, event, flow = 1) => {

    // it checks if the event is in the list of events to be handled.
    if (influenceEvents[LayoutName].indexOf(event.name) === -1) {
      return;
    }

    // inner text
    let textBeforeHit;
    // does the event has inner text element.
    const innerTextEle = event.querySelector('.btnText') !== null;
    // indicator attribute status
    const indicate = event.hasAttribute(atr.inbuild.indicator);

    // switch case to handle the event.
    switch (flow) {
      case 0: // OUT: exiting from the event operation.

        // display manage [show]
        event.classList.contains(CLS.display.none) ? event.classList.remove(CLS.display.none) : false;

        // manage status
        event.disabled = false;

        // manage text
        if (innerTextEle) {
          event.querySelector('.btnText').innerText = textBeforeHit;
        }

        // manage indicator
        indicate ? event.setAttribute(atr.inbuild.indicator, 'off') : false;

        // manage background lock.
        // todo @before-release

        break;

      case 1: // IN: entering into the event operation.

        // display manage [hide]
        event.classList.contains(CLS.display.dnme) ? event.classList.add(CLS.display.none) : false;

        // manage status
        event.disabled = true;

        // manage text
        if (innerTextEle) {
          textBeforeHit = event.querySelector('.btnText').innerText;
          event.querySelector('.btnText').innerText = 'Please Wait...'
        }

        // manager indicator
        indicate ? event.setAttribute(atr.inbuild.indicator, 'on') : false;

        // manage background lock.
        // todo @before-release

        break;
    }
  }

  // Public methods
  return {
    Event: function (Layout, Event, Flow) {
      init_Event_Handling(Layout, Event, Flow);
    }
  };
}();