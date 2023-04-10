"use strict";

// Class definition
var PB_MB_bucket = function () {
  // Shared variables
  let StateData;
  let $table;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4240',
  };


  const pageOpen = () => {
    /**
     * this data save into variables.
     * it will be called when create form initiated.
     * @param data
     * @private
     */
    const _process = (data) => {
      let _return = true;

      _return &&= _process_a(data);
      _return &&= _process_b(data);

      return _return;
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
      return true;
    }

    const _process_b = (data) => {
      // calling render to place data
      PB_render_menu.menuRender(data.menu, 'value', ['number', 0, 1]);
      return true;
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // other things, not connected to dynamic data.
    $table = new tablesProfile_management(thePathArr);

    return ajax;
  }


  /**
   * here we render the table in the element
   * @param targetTableEle
   * @param ajaxResponse
   * @returns {boolean}
   */
  const renderTable = function (targetTableEle, ajaxResponse) {

    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      if (targetEle.getAttribute(atr.core.loadOf.table) === "1") {
        return true;
      }

      let filterEle = targetTableEle[key].querySelector('[' + atr.core.template + '="filter"]');
      $table.matchingCalled(key);

      if (ajaxResponse[key]) {
        //now we make the profile
        renderedData = PB_render_table.simpleRender(ajaxResponse[key], $table.tableShapes, 'array');

      }
      else {
        let columns;

        console.log('status has failed, table data :' + JSON.stringify(ajaxResponse));
        columns = targetEle.querySelectorAll('thead>tr>th').length;
        renderedData = PB_render_table.zeroRow(columns);
      }

      // calling other basic plugin function
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      targetEle.setAttribute(atr.core.loadOf.table, '1');

      //datatable code
      //      dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      //      filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  /**
   * here we make tabs routing for Customer section there is two tabs in Customer-Section (Cards, Tables)
   * @param element
   * @param button
   * @returns {boolean}
   */
  const navtabsTarget = function (element, event) {

    // cards rendering
    const navtab_card = function (element, event) {

      let place = element.querySelector('#' + pb.mng.billing.bucket.c.card + '>div')
      console.log(element)
      if (place.getAttribute(atr.core.loadOf.card) === "1") return true;

      const _process = (data) => {
        return _process_cards(data);
      }
      const _process_cards = (data) => {
        let target = place.querySelector('[' + atr.core.template + '="card"] > div');

        for (let key in data.customer) {
          let nodeData = data.customer[key];
          let cloneNode = target.cloneNode(true);

          let avatar = cloneNode.querySelector('img');
          avatar.setAttribute('src', '../../assets/media/avatars/$$@avatar@$$')
          //here we attached the customer id in the value
          cloneNode.querySelector('button').setAttribute(atr.core.value, nodeData[0]);

          cloneNode.innerHTML = PB_extend_append.$_single(cloneNode.innerHTML, nodeData);

          avatar.removeAttribute('src')
          PB_render_common.initOnCall(cloneNode);
          cloneNode.classList.remove(CLS.display.none);
          place.appendChild(cloneNode);
        }
        place.setAttribute(atr.core.loadOf.card, "1");
        return true;
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }

    // tables rendering
    const navtab_table = function (element, event) {

      //    data = bucket_ajaxCalling(button);

      const _process = (data) => {
        return _process_tables(data);
      }

      const _process_tables = (data) => {
        let targetTableEle = {
          table: element
        }

        renderTable(targetTableEle, data);
        return true;
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax
    }

    switch (event.value) {
      case pb.mng.billing.bucket.c.card:
        return navtab_card(element, event);

      case pb.mng.billing.bucket.c.table:
        return navtab_table(element, event);

      default:
        return eventNotFound(event);
    }
  }

  /**
   * here we make the routing for load the cards into both Section (Customer-Section, Month-Section)
   * @param element
   * @param event
   * @returns {boolean}
   */
  const elementsTarget = function (element, event) {
    //load the customers cards
    const element_customer = function (element, event) {
      //fetch the cards nav data
      return navtabsTarget(element, {
        type : eTypes.navtab,
        value: pb.mng.billing.bucket.c.card
      });
    }
    //load the months card with info
    const element_month = function (element, event) {

      const appendEle = element.querySelector('[' + atr.core.template + '="card"]');
      if (element.getAttribute(atr.core.loadOf.card) === "1") return true;

      const _process = (data) => {
        _process_cardsLoad(data);
        return true;
      }
      const _process_cardsLoad = (data) => {
        let years = {};

        let end = new Date().getFullYear();
        let cnt = 1;

        for (let i = data.starting.year; i < end + 1; i++) {
          years[i] = {
            index: cnt,
            year : i
          };
          cnt++;
        }

        PB_extend_foreign.$_remote('single', data, [
          ['yearRecord', 'months', 1, 0]
        ]);

        let target = element.querySelector('[' + atr.core.template + '="card"] > div');

        for (let key in data.yearRecord) {
          let nodeData = data.yearRecord[key];
          let cloneNode = target.cloneNode(true);

          //set the data into layout
          cloneNode.querySelector('h1').innerText = nodeData[1];
          cloneNode.querySelector('button').setAttribute(atr.core.value, nodeData[0]);

          cloneNode.classList.remove(CLS.display.none);
          appendEle.appendChild(cloneNode);
        }

        appendEle.setAttribute(atr.core.loadOf.card, "1");
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }

    switch (event.value) {
      case pb.mng.billing.bucket.p.customer:
        return element_customer(element, event);

      case pb.mng.billing.bucket.p.month:
        return element_month(element, event);

      default:
        return eventNotFound(event);
    }

  }

  /**
   * here we make the routing for bills-report for both the sections (Customer-Section, Month-Section)
   * @param element
   * @param button
   * @returns {boolean}
   */
  const cardsTarget = function (element, event) {
    // load monthly reports
    const card_month_Bills = function (element, event) {
      //    let targetYear = element.closest('#elements_zone').querySelector('#month-element')
      //    let year = targetYear.querySelector('[name="years"]').value;
      //    console.log(year)

      const _process = (data) => {
        return _process_report(data);
      }

      const _process_report = (data) => {
        let targetTableEle = {
          month: element
        }

        PB_extend_foreign.$_remote('single', data, [
          [pb.mng.billing.bucket.p.month, 'dates', 3, 0],
          [pb.mng.billing.bucket.p.month, 'status', 9, 0],
        ]);
        renderTable(targetTableEle, data);
        return true;
      }
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type,
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }

    //load customer target report
    const card_customer_Bills = function (element, event) {

      //    let targetYear = element.closest('#elements_zone').querySelector('#customer-element')

      //    data = bucket_ajaxCalling([routeVal, 'cards']);

      const _process = (data) => {
        return _process_a(data);
      }
      const _process_a = (data) => {
        let targetTableEle = {
          customer: element
        }
        PB_extend_foreign.$_remote('single', data, [
          [pb.mng.billing.bucket.p.customer, 'dates', 3, 0],
          [pb.mng.billing.bucket.p.customer, 'status', 9, 0],
        ]);

        renderTable(targetTableEle, data);

        return true;
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);

      return ajax;
    }

    switch (event.value) {
      case pb.mng.billing.bucket.p.customer:
        return card_customer_Bills(element, event);

      case pb.mng.billing.bucket.p.month:
        return card_month_Bills(element, event);

      default:
        return eventNotFound(event);
    }

  }

  // Public methods
  return {
    MBB_cards(_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },
    MBB_navtabs : function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    MBB_elements: function (_event) {
      return eleCheck() ? elementsTarget(_callEl, _event) : false;
    },

    MBB_state: function () {
      return pageOpen();
    },

  };
}();