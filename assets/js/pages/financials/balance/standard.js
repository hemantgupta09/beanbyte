"use strict";

// Class definition
var PB_FB_standard = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4220',
  };

  // Shared variables
  let iam;
  let StateData;
  let ajaxResponse;

  // Private functions

  const generateSheet = (element, data) => {
    // basic update
    element.querySelectorAll('[' + atr.core.update + ']').forEach((ele) => {
      ele.innerText = data.basic[ele.getAttribute(atr.core.update)];
    });

    const templates = _sheetLE.templates.querySelectorAll('[' + atr.core.template + ']');
    let temps = {};
    templates.forEach((template) => {
      //      template.removeAttribute(atr.core.template);
      temps[template.getAttribute(atr.core.template)] = template;
    });


    /**
     * master
     * HTML space elements.
     */
    const $master = () => {
      // element fir append.
      let Target = {};
      _sheetLE.sheet.querySelectorAll('[' + atr.core.space + '="master"]').forEach((ele) => {
        Target[ele.getAttribute(atr.core.value)] = ele;
      });

      let masterNode;
      for (const accountKey in data.master) {
        Object.keys(data.master[accountKey]).forEach((masterKey) => {
          const row = data.master[accountKey][masterKey];
          masterNode = temps.master.cloneNode(true);
          masterNode.querySelector('[' + atr.core.child + ']').innerText = row[1];
          masterNode.querySelector('[' + atr.core.space + '="head"]').setAttribute(atr.core.value, row[0]);
          Target[accountKey].append(masterNode);
        });
      }
    }
    $master();

    // head
    const $head = () => {
      // element fir append.
      let Target = {};
      _sheetLE.sheet.querySelectorAll('[' + atr.core.space + '="head"]').forEach((ele) => {
        Target[ele.getAttribute(atr.core.value)] = ele;
      });

      let headNode;
      for (const masterKey in data.head) {
        Object.keys(data.head[masterKey]).forEach((headKey) => {
          const row = data.head[masterKey][headKey];
          headNode = temps.head.cloneNode(true);
          headNode.querySelector('[' + atr.core.child + ']').innerText = row[1];
          headNode.querySelector('[' + atr.core.space + '="group"]').setAttribute(atr.core.value, row[0]);
          Target[masterKey].append(headNode);
        });
      }
    }
    $head();

    // group
    const $group = () => {
      // element fir append.
      let Target = {};
      _sheetLE.sheet.querySelectorAll('[' + atr.core.space + '="group"]').forEach((ele) => {
        Target[ele.getAttribute(atr.core.value)] = ele;
      });

      let groupNode;
      for (const headKey in data.group) {
        Object.keys(data.group[headKey]).forEach((groupKey) => {
          const row = data.group[headKey][groupKey];
          groupNode = temps.group.cloneNode(true);
          groupNode.querySelector('[' + atr.core.put + '="group"]').innerText = row[1];
          groupNode.querySelector('[' + atr.core.put + '="balance"]').innerText = row[2];
          groupNode.querySelector('[' + atr.core.space + '="ledger"]').setAttribute(atr.core.value, row[0]);
          // accordion id update
          const id_a = 'accord_' + row[0];
          const id_b = 'accord_' + row[0] + '_item';
          groupNode.querySelector('#accord_gid').setAttribute('id', id_a);
          groupNode.querySelector('.accordion-header').setAttribute('data-bs-target', '#' + id_b);
          const accord_body = groupNode.querySelector('.accordion-content')
          accord_body.setAttribute('id', id_b);
          accord_body.setAttribute('data-bs-parent', '#' + id_a);
          Target[headKey].append(groupNode);
        });
      }
    }
    $group();

    // ledger
    const $ledger = () => {
      // element fir append.
      let Target = {};
      _sheetLE.sheet.querySelectorAll('[' + atr.core.space + '="ledger"]').forEach((ele) => {
        Target[ele.getAttribute(atr.core.value)] = ele;
      });

      let ledgerNode;
      for (const groupKey in data.ledger) {
        Object.keys(data.ledger[groupKey]).forEach((ledgerKey) => {
          const row = data.ledger[groupKey][ledgerKey];
          ledgerNode = temps.ledger.cloneNode(true);
          // <td>
          ledgerNode.querySelector('[' + atr.core.put + '="name"]').innerText = row[1];
          ledgerNode.querySelector('[' + atr.core.put + '="alias"]').innerText = row[2];
          ledgerNode.querySelector('[' + atr.core.put + '="balance"]').innerText = row[3];

          // button
          // data-pb-value
          ledgerNode.querySelectorAll('button').forEach((btn) => {
            btn.setAttribute(atr.core.value, row[0]);
          })

          Target[groupKey].append(ledgerNode);
        });
      }
    }
    $ledger();
  }
  const Sheet = (element, event) => {
    console.log('calling to create sheet');

    const sheetData = dummy_ajax_balances_fin.standard([pb.fin.balance.standard.p.sheet]);
    console.log(sheetData);
    generateSheet(element, sheetData);

    element.setAttribute(atr.core.loaded, '1');

    PB_render_common.initOnCall(element);
    return true;
  }

  const Table = () => {
    console.log('calling to create table');

    const tableData = dummy_ajax_balances_fin.standard([pb.fin.balance.standard.p.trans]);
    console.log(tableData);

  }
  console.log(Table)
  const loadsTarget = function (element, event) {
    switch (event.value) {
      case pb.fin.balance.standard.p.sheet:
        return Sheet(element, event);

      case pb.fin.balance.standard.p.trans:
        return Table(element, event.value);
    }
    console.log(loadsTarget);
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.fin.balance.standard.p.sheet:
        return true;
      case pb.fin.balance.standard.p.trans:
        return true;
      default:
        return true;
    }
  }

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
      const sheet_head = _sheetLE.sheet.querySelector('[' + atr.core.control + '="business"]');
      console.log(sheet_head);

      // update business details.
      sheet_head.innerHTML = PB_extend_append.$_single(sheet_head.innerHTML, StateData.business);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }


  const eleCheck = () => {
    if (_callEl === null || _callEl === undefined) {
      alert('call element is not defined');
      return false;
    }
    else {
      return true;
    }
  }

  // Public methods
  return {

    FBS_loads: function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },

    FBS_actions: function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    FBS_pageOpen: function () {
      return pageOpen();
    },

  };
}();