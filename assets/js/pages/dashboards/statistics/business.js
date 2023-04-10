"use strict";

// Class definition
var PB_DS_business = function () {

  // Shared variables
  let StateData;
  let xResponse, xData;
  let Layout, Direct;
  let formEl;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4011',
  };

  /**
   * this will be used for show page's base-0 data.
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
      _process_header(data);
      _process_summary(data);
      return true;
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_header = (data) => {
      Direct = _directLE.visits;
      //render the data into header
      let header = Direct.querySelector('[' + atr.core.control + '="header"]');


      let percent = PB_render_common.returnOnCall(StateData.header.amount, 'percent', [StateData.header.target]);
      StateData.header['percent'] = percent[0];
      header.innerHTML = PB_extend_append.$_single(header.innerHTML, StateData.header);

      PB_render_common.initOnCall(header);
    }
    const _process_summary = (data) => {

      //now load the navtab
      let summary = _directLE.layout.querySelector('#' + pb.dsb.statistics.business.p.summary);
      console.log(summary);

      // collect templates.
      const temps = _directLE.layout.querySelector('#template_' + pb.dsb.statistics.business.p.summary);
      let lastNodeKey = "";

      //first set all summary
      let navtabPlace = summary.querySelector('[data-pb-append="navtab"]');
      let node = temps.querySelector('[data-pb-template="navtab"]');

      let cloneNode;
      Object.keys(data.summary.navtab).forEach((key) => {
        let date = data.summary.navtab[key];
        // convert the date format
        let form = PB_render_common.returnOnCall(date[0], 'date', ['fo']);

        cloneNode = node.cloneNode(true);

        cloneNode.removeAttribute(atr.core.template);
        cloneNode.setAttribute(atr.core.key, key);
        cloneNode.querySelectorAll('span')[0].innerText = form.split('-')[1];
        cloneNode.querySelectorAll('span')[1].innerText = form.split('-')[0];

        let button = cloneNode.querySelector('button');
        button.setAttribute(atr.core.value, key);
        button.classList.remove('d-none');
        navtabPlace.appendChild(cloneNode);
        // hold node for active update.
        lastNodeKey = key;
      });

      cloneNode.setAttribute(atr.core.loadOf.tab, '1');


      //now set the navtab body
      let summaryPlace = summary.querySelector('[data-pb-append="summary"]');

      // let cloneNode = node.cloneNode(true);
      Object.keys(data.summary.navtab).forEach((key) => {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('data-pb-value', key);
        newDiv.classList.add(CLS.display.none);
        summaryPlace.appendChild(newDiv);
      });

      let targetElement;
      summaryPlace.children.forEach((div) => {
        if (div.getAttribute(atr.core.value) * 1 === data.summary.detail['date_id']) {
          div.classList.remove(CLS.display.none);
          targetElement = div;
        }
      })

      xData = data.summary.detail;
      navtabsTarget(summaryPlace, {
        type : 'navtab',
        value: 'summary',
        data : lastNodeKey
      }, true);

      // onload arranging.
      Arranging._directs(
        {
          type : 'navtab',
          value: 'summary',
          data : lastNodeKey
        },
        cloneNode.children[0]
      );
    }

    // AJAX Calling
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }

  const navtabsTarget = (element, event, onPageLoad = false) => {

    const summary = (_element, _event, _onPageLoad) => {

      const targetEle = _element.querySelector('[' + atr.core.value + '="' + _event.data + '"]');
      if (targetEle.getAttribute(atr.core.loadOf.tab) === "1") return true;

      const _process = (data) => {
        _process_a(data);
        return true;
      }
      const _process_a = (data) => {

        //now we put the data into variables
        data['cr_percent'] = PB_render_common.returnOnCall(data.credit_sale, 'percent', [data.sales_revenue])[0];
        data['gross_percent'] = PB_render_common.returnOnCall(data.gross_profit, 'percent', [data.sales_revenue])[0];

        // finding template
        const temps = _directLE.layout.querySelector('#template_' + _event.value);
        const template = temps.querySelector('[' + atr.core.template + '="' + _event.value + '"]');

        targetEle.innerHTML = PB_extend_append.$_single(template.innerHTML, data);

        targetEle.setAttribute(atr.core.loadOf.tab, "1");
        PB_render_common.initOnCall(targetEle);
        return true;
      }

      if (_onPageLoad) {
        _process(xData);
        return true;
      }
      else {
        const ajax = new AjaxPB();
        const urlID = ajax.buildingURL(thePathArr, {
          act : _event.value,
          type: _event.type,
          data: _event.data
        }, host.local);
        ajax.callREQUEST({}, urlID, false, _process);
        return ajax;
      }
    }

    switch (event.value) {
      case pb.dsb.statistics.business.p.summary:
        return summary(element, event, onPageLoad);
    }


  }


  // Public methods
  return {

    DSB_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    // fetching all upcoming required details
    DSB_state: function () {
      return pageOpen();
    },

  };
}();