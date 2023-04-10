"use strict";

// Class definition
var PB_OT_receipts = function () {
  // Shared variables
  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4110',
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
      return true
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
  const cardsTarget = function (element, event) {

    const _card_modal = (element, event) => {

      const _process = (data) => {
        _process_a(data);
      }
      const _process_a = (data) => {
        let modal = new bootstrap.Modal(element);
        modal.show();
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act : event.value,
        type: 'modal'
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);


      // calling ajax with passing type.
      //      xResponse = dummy_ajax_transactions_opr.banking([pb.opr.transactions.banking.n, pb.opr.transactions.banking.p.deposit, pb.opr.transactions.banking.p.withdrawal, pb.opr.transactions.banking.p.transfer, pb.opr.transactions.banking.p.clearance]);

      // async await sleep(3000);
    }

    return true;
  }

  const actionsTarget = function (element, event) {

    // event print
    console.log(event);

    /*
     -------------------------------
     private functions of actions
     -------------------------------
     */
    const action_save = (element, event) => {


      sleep(100).then(() => {
        formEle = element.querySelector('#' + event.place + '-' + event.data);
        const f_sno = formEle.getAttribute(atr.form.sno);
        if (!Plug_formValid.getStatus(f_sno)) {
          toastr.error('Kindly fill all required steps', 'Incomplete Form');
          return false;
        }

        // collect form data.
        const formData = PB_extend_collect.$_form(formEle);

        // send POST ajax
        const ajax = new AjaxPB();
        const urlID = ajax.buildingURL([thePathArr], {
          act : event.value,
          type: event.type
        });
        ajax.callREQUEST({formData}, urlID, true);
        const responseX = ajax.getRESPONSE();
        console.log(responseX);

        // take status true from dummy

        // get response from server.

        swal.fire('Form has submitted');

        // reset the form after submission of transaction to database.
        PB_extend_reset.$_form(formEle, kws.labels.manual);

        return true;
      })
    }

    const action_reset = (element, event) => {
      const method = true;
      if (method) {
        formEle = element.querySelector('form');
        PB_extend_reset.$_form(formEle, kws.labels.manual);
      }
      else {
        formEle = element.querySelector('form-' + event.value);
        PB_extend_reset.$_form(formEle, kws.labels.manual);
      }
      return true;
    }

    switch (event.value) {
      case eV.action.save:
        return action_save(element, event);

      case eV.action.reset:
        return action_reset(element, event);

      default :
        eventNotFound(_event);
        return false;
    }


    console.log('actions event hit');

    return true;
  }

  function createsTarget(element, event) {

    // fetching new values or static values for form initial
    formEle = element.querySelector('form');

    if (formEle.getAttribute(atr.core.loadOf.form) === '1') {
      return true;
    }

    const _process = (data) => {
      return _process_form_a(data);
    }
    const _process_form_a = (data) => {

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

  function loadsTarget(element, button) {

    const getLoad = function (form, button, values) {

      var fetchEntries;
      const _process = (data) => {
        return _process_load_a(data);
      }
      const _process_load_a = (data) => {
        button.querySelector('[data-pb-label="text"]').innerText = 'Loading...';
        let tableProfile = {
          0: {
            type  : TBL_ct.cb,
            method: 'a',
            value : '0',
            param : [],
            style : 0,
            css   : []
          },
          1: {
            type  : TBL_ct.dt,
            method: 'a',
            value : '1',
            param : ['b'],
            style : 0,
            css   : []
          },
          2: {
            type  : TBL_ct.ac,
            method: 'a',
            value : '2',
            param : [],
            style : 0,
            css   : []
          },
          3: {
            type  : TBL_ct.txt,
            method: 'a',
            value : '3',
            param : [],
            style : 0,
            css   : []
          },
          4: {
            type  : TBL_ct.amt,
            method: 'a',
            value : '4',
            param : [],
            style : 0,
            css   : []
          },
          5: {
            type  : TBL_ct.amt,
            method: 'a',
            value : '5',
            param : [],
            style : 0,
            css   : []
          },
          6: {
            type  : TBL_ct.in,
            method: 'c',
            value : '6',
            param : ['text', 'amount', 'w-125px inr_mask_62 py-1', true, 'To be Settled Amount', '6'],
            style : 1,
            css   : []
          },
        }
        fetchEntries = PB_render_table.simpleRender(data, tableProfile);

        button.querySelector('[data-pb-label="text"]').innerText = 'Loaded.';
        if (fetchEntries === false) {
          return false;
        }


        tableEle = form.querySelector('[data-pb-table="' + button.getAttribute('data-pb-calling') + '"]');
        tableEle.classList.remove('d-none');
        tableEle.appendChild(fetchEntries);

        // calling custom
        PB_render_common.initOnCall(tableEle);
        Plug_formKeen.loadIndeed(tableEle, [3])
        return true;
      }
      // button.getAttribute('data-pb-calling');

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : button.value,
        type   : button.name,
        account: values
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);
      return ajax;


      //      xResponse = dummy_ajax_transactions_opr.receipts([button.value, button.getAttribute('name')], values)

      // render into table.

    }
    const load_fund_clearance = (a, event) => {
      var values = [];
      var target = event.getAttribute('data-pb-calling');
      if (event.getAttribute('data-pb-called') !== 'true') {

        // collect pre-filled required inputs.
        let form = element.querySelector('form'); // button.closest('form');
        form.querySelectorAll('[data-pb-prefill="' + target + '"]').forEach((item) => {
          item.name.search('amount') ? values.push(amt_mask_filter(item.value)) : values.push(item.name);
        });

        success = getLoad(form, event, values);

        if (success) {
          // todo: this attribute will be changed in case pre-filled data has changed by the user.
          event.setAttribute('data-pb-called', 'true');
        }
      }
      else {
        Plug_sweetAlert.callMe(SW_type.simple, [0, 'ho gya to load', 'Aur kya chahata hai??', 'Nahi, kuch nahi chihiye :)'])
      }
    }
  }

  function tablesTarget(element, button) {
    const getTable = (button, params, htLen) => {

      var renderedData
      let profile, methods, options;
      const _process = (data) => {
        _process_a(data);
      }
      const _process_a = (data) => {
        if (data !== false) {
          const OPTION = [4, ['view', 'edit', 'delete'], ['view-receipts', 'edit-receipts', 'delete-receipts']];
          let tableProfile = {
            0: {
              type  : TBL_ct.cb,
              method: 'a',
              value : '0',
              param : [],
              style : 0,
              css   : []
            },
            1: {
              type  : TBL_ct.dt,
              method: 'a',
              value : '1',
              param : [],
              style : 0,
              css   : []
            },
            2: {
              type  : TBL_ct.ac,
              method: 'a',
              value : '2',
              param : [],
              style : 0,
              css   : []
            },
            3: {
              type  : TBL_ct.ac,
              method: 'a',
              value : '3',
              param : [],
              style : 0,
              css   : []
            },
            4: {
              type  : TBL_ct.amt,
              method: 'a',
              value : '4',
              param : [2, 1],
              style : 0,
              css   : []
            },
            5: {
              type  : TBL_ct.note,
              method: 'a',
              value : '5',
              param : [],
              style : 0,
              css   : []
            },
            6: {
              type  : TBL_ct.act,
              method: 'b',
              value : '0',
              param : [],
              style : 100,
              css   : ['pe-0 text-end', 100]
            },
          };
          methods = {
            0: 'minimal',
            1: 'minimal',
            2: 'basic',
            3: 'minimal',
            4: 'minimal',
            5: 'minimal',
          };
          options = {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
          };
          profile = {
            0: [],
            1: [],
            2: []
          };
          // render the received data from server.
          renderedData = PB_render_table.simpleRender(data, tableProfile);
        }
        else {
          console.log('status has failed, table data :' + JSON.stringify(data));
          renderedData = PB_render_table.zeroRow(htLen);
        }

        return {
          redData: renderedData,
          methods: methods,
          options: options,
          profile: profile
        };
      }

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : button.value,
        type   : button.name,
        account: params
      });
      ajax.callREQUEST({}, urlID, false, _process);


      //      xResponse = dummy_ajax_transactions_opr.receipts([button.value, button.getAttribute('name')], params)


    }
    // fetching new values from server and updating into table
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[data-pb-target="filter"]');

    if (!tableEle) {
      console.log('add table element');
      return;
    }
    if (tableEle.getAttribute('data-pb-table-loaded') !== 'true') {

      var newValforTable = getTable(button, [], tableEle.querySelectorAll('thead>tr>th').length);

      // appending fetched values
      tableEle.appendChild(newValforTable.redData);
      // update table status
      tableEle.setAttribute('data-pb-table-loaded', 'true');
      // todo: if new entry created then add 'false'

      // dataTables Plugin Calling.
      dataTableCalling(newValforTable.options, newValforTable.methods, newValforTable.profile, button.value);
      filterEvents(filterEle, button.value);


      // calling other basic plugin functions
      PB_render_common.initOnCall(tableEle);

      // for enable dropdown in the table.
      KTMenu.init();
    }
  }

  const dataTableCalling = (options, methods, profile, call) => {
    let DT_options = {};
    console.log(methods);
    // create options
    const end = PB_option_datatables.optionKeys();
    end.forEach((i) => {
      if (options[i]) {
        DT_options[i] = PB_option_datatables.building(i, methods[i], profile[i]);
      }
    })

    console.log(DT_options);

    let optionsObj = {};
    Object.entries(DT_options).forEach(([key, value]) => {
      optionsObj = {...optionsObj, ...value}
    })

    // console.log(optionsObj);

    // Init datatable --- more info on datatables: https://datatables.net/manual/
    tableObject[call] = Plug_dataTables.Init_onCalling(tableEle, optionsObj, 'new');

    // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
    /*
     tableObject[_RG_SAMP_A].on('draw', function () {
     console.log('i am call at the time of re-inti.')
     });
     */
  }

  const filterEvents = (element, btnValue) => {
    element.querySelectorAll('select, input').forEach((value, key, parent) => {

      //let col = value.getAttribute('data-dt-column');

      switch (value.name) {
        case 'search':
          const regex = value.getAttribute('data-dt-regex') === '1';
          value.addEventListener('keyup', function (evt) {
            tableObject[btnValue].search(evt.target.value, regex).draw();
          })
          break;

        case 'select':
          value.addEventListener('change', function (evt) {
            var val = evt.target.value;
            if (val === 'all') val = '';
            tableObject[btnValue].column(evt.target.getAttribute('data-dt-column')).search(val).draw();
          })
          break;

        case 'clear':
          value.addEventListener('click', function (evt) {
            const iid = evt.target.getAttribute('data-pb-instance');
            console.log(iid);
            const fp = Plug_datePicker.getInstanceOnChange(iid)
            fp.clear();
            $.fn.dataTable.ext.search.push(function () { return true});
            tableObject[btnValue].draw();
          })
          break;

        case 'date':
          value.addEventListener('change', function (evt) {
            let dates;
            var val = evt.target.value;
            if (!val.includes(' to ')) {
              return;
            }
            else {
              //dates = val.split(' to ');
            }
            dates = Plug_datePicker.getValueOnChange()[0];
            let min = moment(dates[0]).format('YYYY-MM-DD');
            let max = moment(dates[1]).format('YYYY-MM-DD');
            $.fn.dataTable.ext.search.push(
              function (settings, data, dataIndex) {
                let date = moment(data[evt.target.getAttribute('data-dt-column')]).format('YYYY-MM-DD');
                //console.log(date);
                //console.log(min, max);
                return (min === null && max === null) ||
                  (min === null && date <= max) ||
                  (min <= date && max === null) ||
                  (min <= date && date <= max);
              }
            );
            tableObject[btnValue].draw();
          })
          break;
      }
    })
  }

  // Public methods
  return {

    OTR_forms  : function (_event) {
      return eleCheck() ? createsTarget(_callEl, _event) : false;
    },
    OTR_loads  : function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },
    OTR_tables : function (_event) {
      return eleCheck() ? tablesTarget(_callEl, _event) : false;
    },
    OTR_cards  : function (_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },
    OTR_actions: function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },

    // fetching all basic required details

    OTR_pageOpen: function () {
      return pageOpen();
    },

  };
}();