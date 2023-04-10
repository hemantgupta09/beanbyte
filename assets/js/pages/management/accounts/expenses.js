"use strict";

// Class definition
var PB_MA_expenses = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4220',
  };
  // Shared variables
  let StateData, redData, formEl;
  var data;
  let tableEle;
  let chartObject = [];
  var $table;
  // to store file path value.

  // ajax
  //  var ajax;


  // Private functions
  function expenses_ajaxCalling(button, params = []) {

  }

  /**
   * this will be used for show page's base-0 data.
   */
  const pageOpen = () => {

    const _process = (data) => {
      console.log(data)
      _process_a(data);
      _process_b(data);
      return true;
    }
    const _process_a = (data) => {
      StateData = data['pageState'];
    }
    const _process_b = (data) => {
      // console.log(data.menu[3].cate_id);sales
      PB_extend_foreign.$_remote('double', [data.menu, StateData.categories], [['cate_id', 1]])
      // calling render to place data
      PB_render_menu.menuRender(data.menu, 'stack');
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    $table = new tablesProfile_management(thePathArr);

    return ajax;
  }
  /**
   * preloaded data that will not change for this page
   */

        // create basic HTML table for accounts list.
  const tableFormation = function (lists) {

          // rendering data into table using above profile.
          redData = PB_render_table.simpleRender(lists, $table.tableShapes, 'array');

          // have look into plain HTML table
          //console.log(redData);

          tableEle.appendChild(redData)

          // update table status
          tableEle.setAttribute(atr.core.loadOf.table, '1');

          // apply common renders
          PB_render_common.initOnCall(tableEle);

          // for enable dropdown in the table.
          KTMenu.init();
        }

  const dataTablesInit = (eventType) => {
    console.log('to be initialized');
  }
  const filterEvents = (eventType) => {
    console.log('to be initialized');
  }

  const cardsTarget = function (element, event) {

    /*
     ----------------------
     internal functions
     ----------------------
     */

    /**
     * it appends html table of expense list in target from DB.
     * @param element
     * @param event
     * @returns {Promise}
     */
    const card_list_expense = function (element, event) {
      console.log(event);
      tableEle = element.querySelector('table')

      if (!tableEle) {
        return false;
      }

      if (tableEle.getAttribute(atr.core.loadOf.table) === '1') {
        return true;
      }
      const _process = (data) => {
        return _process_a(data)
      }


      const _process_a = (data) => {
        console.log(data);

        if (!data) {
          redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
          tableEle.appendChild(redData)
          return true;
        }
        console.log(data.list)
        console.log(StateData.categories)
        // render the response data (if required)
        PB_extend_foreign.$_remote('double', [data.list, StateData.categories], [[4, 1]])

        $table.matchingCalled(event.value);

        // shape = $table.tableShapes;
        // option = $table.tableOptions;
        // method = $table.tableMethods;
        // profile = $table.tableParams;

        tableFormation(data.list);

        dataTablesInit(event.value);

        filterEvents(event.value);

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

    /**
     * here we put the data into edit form for editing the data
     * @param element
     * @param event
     * @returns {{AjaxPB},{boolean}}
     */
    const card_edit_expense = function (element, event) {
      let account_id = event.data;

      if (!account_id) {
        toastr.error('Please provide a valid expense', 'Failed to Load')
        return false;
      }

      // init the form
      const formEl = element.querySelector('form');
      const sts = PB_render_form.formRender_simple(StateData, formEl);

      if (!sts) {
        toastr.error('Form initialized has failed', 'Failed to Load');
        return false;
      }

      const _process = (data) => {
        return _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);

        if (!data) {
          toastr.error('Unable to get data from the Server', 'Failed to Load');
          return false;
        }

        // set account id into submit button.
        const form_id = formEl.getAttribute('id');
        element.querySelector('button[form="' + form_id + '"]').setAttribute(atr.core.value, account_id);

        // save into global variable
        StateData['edit'] = data;
        console.log(StateData);
        console.log(data)
        // append the data into element.
        PB_extend_placement.$_form(data, formEl);
        Plug_datePicker.onCalling(formEl);


        return true;
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
    /**
     * here we load the view expense page and load the header data as well as also call all three tabs data(general, receipts, payments)
     * @param element
     * @param event
     * @returns {AjaxPB}
     */
    const card_view_expense = function (element, event) {
      let expense_id = event.data;

      if (element.getAttribute(atr.core.loadOf.card) === '1') {
        if (element.getAttribute(atr.core.id) === expense_id) {
          toastr.info('Data Already Loaded', 'action repeating');
          return true
        }
        element.querySelectorAll('[' + atr.core.loadOf.tab + ']').forEach((tab) => {
          tab.removeAttribute(atr.core.loadOf.tab);
        });
      }

      const _process = (data) => {
        return _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);
        if (!data) {
          toastr.error('Could not Fetch Account Details', 'Failed to Load');
          return false;
        }

        let childNode;

        // append all account details
        childNode = element.querySelector('[data-pb-control="header"]');
        childNode.querySelector('img').src = '../../assets/media/avatars/' + data.account.avatar;
        childNode.querySelector('h3').innerText = data.account.name;
        let a = childNode.querySelectorAll('a');
        a[0].setAttribute('href', 'mailto:' + data.account.email);
        a[1].setAttribute('href', 'tel:' + data.account.mobile);
        a[0].innerText = data.account.email;
        a[1].innerText = data.account.mobile;

        // set value into button attributes
        element.querySelector('[data-kt-menu="true"]').querySelectorAll('button').forEach((button) => {
          button.setAttribute(atr.core.value, data.account.id);
        });
        element.querySelectorAll('[' + atr.core.catch + '="id"]').forEach((button) => {
          button.setAttribute(atr.core.value, data.account.id);
        });

        // render data into general tab
        //        const navtab = pb.mng.accounts.expenses.c.tab.general;
        //        navtabsTarget(element, {
        //          value: navtab,
        //          data : expense_id
        //        });

        // set attribute about loading status
        element.setAttribute(atr.core.loadOf.card, '1');
        element.setAttribute(atr.core.id, expense_id)

        // reset all inner tabs buttons.
        element.querySelectorAll('[name="navtab"]').forEach((btn) => {
          element.querySelector('#' + btn.value).removeAttribute(atr.core.loadOf.tab);
        })

        return true;
      }
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: expense_id
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);
      return ajax;
    }
    /**
     * here we load add expense page for user
     * @param element
     * @param event
     * @returns {boolean}
     */
    const card_add_expense = function (element, event) {

      // add options in select,
      let formEl = element.querySelector('form');
      const sts = PB_render_form.formRender_simple(StateData, formEl);

      console.log(sts);

      // TODO: Plug_formValid.onCalling(formEl, 10);

      return true;
    }

    /**
     * here we load add category page for user
     * @param element
     * @param button
     * @returns {boolean}
     */
    const card_add_category = function (element, button) {
      // add options in select,
      const sts = PB_extend_placement.$_block(element, StateData, thePathArr[0] + '_' + thePathArr[1]);
      return true;
    }


    // switching
    switch (event.value) {
      case pb.mng.accounts.expenses.p.start:
        return true;

      case pb.mng.accounts.expenses.p.new:
        return card_add_expense(element, event);

      case pb.mng.accounts.expenses.p.edit:
        return card_edit_expense(element, event);

      case pb.mng.accounts.expenses.p.list:
        return card_list_expense(element, event);

      case pb.mng.accounts.expenses.p.view:
        return card_view_expense(element, event);

      case pb.mng.accounts.expenses.p.cate:
        return card_add_category(element, event);
    }
  }

  const navtabsTarget = function (_element, _event) {
    if (_element.getAttribute(atr.core.loadOf.tab) === '1') {
      return true;
    }
    /*
     ------------------
     internal functions
     ------------------
     */
    // here we load general tab data
    const navtab_general_view = function (element, data, event) {

      let childNode;

      const chartFormation = (data) => {

        let key;
        // getting the final HTML element
        childNode.querySelectorAll('[data-pb-child="chart"]>div').forEach((chart) => {
          key = chart.getAttribute(atr.core.key);
          // balance chart
          redData = Option_charts.createDataset(data[key]);
          if (!chartObject[key]) {
            // initialize of the chart
            redData = Option_charts.buildingOptions(redData, thePathArr, key);
            chartObject[key] = Plug_apexChart.Init_onCalling(chart, redData);
          }
          else {
            // data loading into chart
            Plug_apexChart.Update_onCalling(chartObject[key], redData);
          }
        });
      }

      // here we put the general details of account

      // header of general tab
      element.querySelector('[data-pb-control="general-header"]').children.forEach((child) => {
        const key = child.getAttribute(atr.core.key);
        child.innerHTML = PB_extend_append.$_single(child.innerHTML, data[key]);
        PB_render_common.initOnCall(child);
      });

      // body of general tab
      childNode = element.querySelector('[data-pb-control="general-body"]');
      chartFormation(data.charts);

      // footer of general tab
      childNode = element.querySelector('[data-pb-control="general-footer"]');
      data.other.notification = PB_render_common.returnOnCall(data.other.notify_mode, 'string', [0]);
      console.log(data.other.notification);
      childNode.innerHTML = PB_extend_append.$_single(childNode.innerHTML, data.other);

      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }
    // here we load receipts tab data
    const navtab_datewise_view = function (element, data, event) {

      // here we render the table for transactions.
      tableEle = element.querySelector('table');
      if (!tableEle) return false;

      // data foreign matching
      redData = PB_extend_foreign.$_remote(kws.extend.combine, data, [['data', 'date', 1, 0]]);

      Object.keys(redData.data).forEach((key, index) => {
        let item = redData.data[key];
        item.push(PB_render_common.returnOnCall(item[3], 'average', [item[2]]));
      });

      // access table profile
      $table.matchingCalled(event.value)

      let renderedData = PB_render_table.simpleRender(redData.data, $table.tableShapes, 'array');

      if (!renderedData) return false;
      // remove old data or blank table
      tableEle.querySelector('tbody').remove();
      // append tbody into page table
      tableEle.appendChild(renderedData);
      // common render
      PB_render_common.initOnCall(tableEle);
      // for enable dropdown in the table.
      KTMenu.init();
      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }
    // here we load payments tab data
    const navtab_monthwise_view = function (element, data, event) {

      // here we render the table for transactions.
      tableEle = element.querySelector('table');
      if (!tableEle) return false;

      // data foreign matching
      redData = PB_extend_foreign.$_remote(kws.extend.combine, data, [['data', 'date', 1, 0]]);
      // access table profile

      Object.keys(redData.data).forEach((key, index) => {
        let item = redData.data[key];
        item.push(PB_render_common.returnOnCall(item[3], 'average', [item[2]]));

        let days = PB_render_common.returnOnCall(item[1], 'month', ['dc']);
        item.push(PB_render_common.returnOnCall(item[3], 'average', [days]))
      })
      $table.matchingCalled(event.value);

      let renderedData = PB_render_table.simpleRender(redData.data, $table.tableShapes, 'array');

      if (!renderedData) return false;
      // remove old data or blank table
      tableEle.querySelector('tbody').remove();
      // append tbody into page table
      tableEle.appendChild(renderedData);
      // common render
      PB_render_common.initOnCall(tableEle);
      // for enable dropdown in the table.
      KTMenu.init();
      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }

    const navtab_details_view = function (element, data, event) {

      // here we render the table for transactions.
      tableEle = element.querySelector('table');
      if (!tableEle) return false;

      // data foreign matching
      redData = PB_extend_foreign.$_remote(kws.extend.combine, data, [['data', 'date', 1, 0], ['data', 'account', 2, 0]]);

      // access table profile
      $table.matchingCalled(event.value)

      let renderedData = PB_render_table.simpleRender(redData.data, $table.tableShapes, 'array');

      if (!renderedData) return false;
      // remove old data or blank table
      tableEle.querySelector('tbody').remove();
      // append tbody into page table
      tableEle.appendChild(renderedData);
      // common render
      PB_render_common.initOnCall(tableEle);
      // for enable dropdown in the table.
      KTMenu.init();
      // update navtab status
      element.setAttribute(atr.core.loadOf.tab, '1');
      return true;
    }
    const _process_a = (data) => {
      //      const element = _element.querySelector('#' + _event.value);
      // sending to the targeted function.
      switch (_event.value) {
        case pb.mng.accounts.expenses.c.tab.general:
          return navtab_general_view(_element, data, _event);

        case pb.mng.accounts.expenses.c.tab.datewise:
          return navtab_datewise_view(_element, data, _event);

        case pb.mng.accounts.expenses.c.tab.monthwise:
          return navtab_monthwise_view(_element, data, _event);

        case pb.mng.accounts.expenses.c.tab.details:
          return navtab_details_view(_element, data, _event);

      }
    }
    const _process = (data) => {
      return _process_a(data);
    }

    //console.log(_event);
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act    : _event.value,
      type   : _event.type,
      account: _event.data
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    return ajax;
  }

  const actionsTarget = function (element, button) {
    /*
     ------------
     internal functions
     ------------
     */
    /**
     * here we save the add form data into database
     * @param element
     * @param event
     * @returns {boolean}
     */
    const action_save_expense = function (element, event) {

      console.log(event);
      // validate inputs
      const formEle = element.querySelector('form');
      const fno = element.querySelector(`button[form="${formEle.id}"]`).getAttribute(atr.serial.form);
      if (!Plug_formValid.getStatus(fno)) {
        return true;
      }

      // collect data.
      const formData = PB_extend_collect.$_form(formEle);

      const _process = (data) => {
        _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);
        // getting the response
        if (!data.status) {
          toastr.success("Failed to create new expense", `Reason: ${data.message}`);
        }
        toastr.success('New expense has been created', "Success");

        // it will reset the status if table is loaded and new expense has added.
        _cardLE.list.querySelector('table').setAttribute(atr.core.loadOf.table, '0');

        // return on save data call.
        return true;
      }
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: event.type
      }, host.local);
      ajax.callREQUEST({formData}, urlID, true, _process);
    }
    const action_add_category = (element, button) => {
      console.log('i am here to add category in expenses');
    }

    /**
     * here we collect the state for the edit form and save the edit form data into database
     * @param element
     * @param event
     * @returns {boolean}
     */
    const action_edit_expense = function (element, event) {
      console.log(event);
      // collect modified data.
      formEl = element.querySelector('form');
      const formData = PB_extend_collect.$_form(formEl);
      // value change checking

      const _process = (data) => {
        _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);
        // change form state to readonly. (non editable)
        PB_extend_collect.$_state(formEl, 'read');

        toastr.success('Changes has Saved.', "Successfully Edited.");

        // return on save data call.
        return true;
      }
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: event.data
      }, host.local);
      ajax.callREQUEST({formData}, urlID, true, _process);
    }
    /**
     * here we delete the expense
     * @param element
     * @param event
     * @returns {boolean}
     */
    const action_delete_expense = function (element, event) {

      // collect form data.
      const formData = [{account: event.data}, {security: '123456'}];

      // TODO: balram -> this will be replaced by SWAL promise
      if (!confirm('Are your sure for Delete this expense ??')) {
        //      console.log('delete cancelled');
        return false;
      }

      const _process = (data) => {
        _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);
        if (!data) {
          toastr.success('We are unable to delete this account', "Failed to delete");
          return false;
        }

        switch (element.id) {
          // TODO: remove row using id, pass id in tr using table render.
          case pb.mng.accounts.expenses.p.list:
            // 1. remove the row from the list
            break;
          case pb.mng.accounts.expenses.p.view:
            // 1. remove the status of card and value.
            // 2. remove the row from list card.
            break;
        }
        toastr.success('Account has bend deleted', "Success");

        // return on save data call.
        return true;
      }
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: event.data
      }, host.local);
      ajax.callREQUEST({formData}, urlID, true, _process);
    }

    const action_disable_expense = (element, button) => {
      toastr.error('Account can not disabled', "Failed to disable expense");
      return false;
    };


    // request switching.
    switch (button.value) {
      case pb.mng.accounts.expenses.c.form.delete:
        return action_delete_expense(element, button);

      case pb.mng.accounts.expenses.c.form.disable:
        return action_disable_expense(element, button);

      case pb.mng.accounts.expenses.c.form.save:
        return action_save_expense(element, button);

      case pb.mng.accounts.expenses.c.form.update:
        return action_edit_expense(element, button);

      case pb.mng.accounts.expenses.c.form.class:
        return action_add_category(element, button);
    }
  }

  // Public methods
  return {

    // loading form
    MAE_cards  : function (_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },
    MAE_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    MAE_actions: function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },

    // fetching all basic required details


    // fetching all upcoming required details
    MAE_state: function () {
      return pageOpen();
    },

  };
}();