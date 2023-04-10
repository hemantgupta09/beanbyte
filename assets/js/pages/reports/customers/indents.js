"use strict";

// Class definition
var PB_RC_indents = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4350',
  };
  // Shared variables
  let StateData, formData, redData;
  let tableEle, filterEle;
  var ajaxResponse, data;
  let tableObject = [];
  let $table;


  // Private functions


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
      _process_b(data);
      return true

      return true;
    }

    const _process_a = (data) => {
      $table = new tablesProfile_reports(thePathArr);

    }
    const _process_b = (data) => {
      StateData = data['pageState'];
      console.log(StateData);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    // other things, not connected to dynamic data.
    return ajax;
  }

  /**
   * preloaded data that will not change for this page
   */


        // get list of all contacts
  const report_indent_bucket = function (element, event) {

          // form for parameters
          console.log(event);

          formData = PB_extend_collect.$_step(
            _tabLE.action.querySelector('#form-' + event.value)
          );

          if (!formData) return false;
          // table for data loading
          tableEle = element.querySelector('table');
          filterEle = element.querySelector('[' + atr.core.target + '="' + kws.value.filters + '"]');

          // checking that table is loaded or not.
          if (tableEle.getAttribute(atr.core.loadOf.table) === '1') return true;


          const _process = (data) => {
            _process_a(data)
          }
          const _process_a = (data) => {
            console.log(data);
            data = PB_extend_foreign.$_remote(
              kws.value.single,
              data,
              [
                ['data', 'dates', 1, 0],
                ['data', 'items', 2, 1],
                ['data', 'units', 5, 1],
                ['data', 'vehicles', 9, 0],
              ]);

            // template render.
            if (typeof data.detail.range === 'object') {
              let range = '';
              range += PB_render_common.returnOnCall(data.detail.range[0], 'date', ['fo']);
              range += ' to ';
              range += PB_render_common.returnOnCall(data.detail.range[1], 'date', ['to']);
              data.detail.range = range;
            }
            data.detail.closing = PB_render_common.returnOnCall(data.detail.closing, 'number', [rendER.common.num.amount, 2, true]);
            const header = element.querySelector('[' + atr.core.control + '="' + kws.value.header + '"]');
            header.innerHTML = PB_extend_append.$_single(header.innerHTML, data.detail);


            // creating a profile for table.
            if (!data) {
              redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
              return true;
            }

            $table.matchingCalled(event.value);

            // shape = $table.tableShapes;
            // option = $table.tableOptions;
            // method = $table.tableMethods;
            // profile = $table.tableParams;

            tableFormation(data.data);

            dataTablesInit(event.value);

            filterEvents(event.value);
          }

          const ajax = new AjaxPB();
          const urlID = ajax.buildingURL([], {
            act    : event.value,
            line   : event.name,
            account: formData
          });
          ajax.callREQUEST({}, urlID, false);
          const responseX = ajax.getRESPONSE();
          console.log(responseX);

          // get data from ajax
          ajaxResponse = dummy_ajax_customers_rpt.indents([event.value, event.type], formData);

          // matching the dataset
          ajaxResponse = PB_extend_foreign.$_remote(
            kws.value.single,
            ajaxResponse,
            [
              ['data', 'dates', 1, 0],
              ['data', 'vehicles', 2, 0],
              ['data', 'units', 3, 1],
            ]);


          // template render.
          if (typeof ajaxResponse.detail.range === 'object') {
            let range = '';
            range += PB_render_common.returnOnCall(ajaxResponse.detail.range[0], 'date', ['fo']);
            range += ' to ';
            range += PB_render_common.returnOnCall(ajaxResponse.detail.range[1], 'date', ['to']);
            ajaxResponse.detail.range = range;
          }
          ajaxResponse.detail.closing = PB_render_common.returnOnCall(ajaxResponse.detail.closing, 'number', [rendER.common.num.amount, 2, true]);
          const header = element.querySelector('[' + atr.core.control + '="' + kws.value.header + '"]');
          header.innerHTML = PB_extend_append.$_single(header.innerHTML, ajaxResponse.detail);


          // creating a profile for table.
          if (!ajaxResponse) {
            redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
            return true;
          }

          $table.matchingCalled(event.value);

          // shape = $table.tableShapes;
          // option = $table.tableOptions;
          // method = $table.tableMethods;
          // profile = $table.tableParams;

          tableFormation();

          dataTablesInit(event.value);

          filterEvents(event.value);

          return true;
        }

  const report_indent_period = function (element, event) {

    // form for parameters
    console.log(event);

    formData = PB_extend_collect.$_step(
      _tabLE.action.querySelector('#form-' + event.value)
    );

    if (!formData) return false;
    // table for data loading
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[' + atr.core.target + '="' + kws.value.filters + '"]');

    // checking that table is loaded or not.
    if (tableEle.getAttribute(atr.core.loadOf.table) === '1') return true;


    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);
      data = PB_extend_foreign.$_remote(
        kws.value.single,
        data,
        [
          ['data', 'dates', 2, 0],
          ['data', 'items', 3, 0],
          ['data', 'customers', 1, 0],
        ]);

      // template render.
      if (typeof data.detail.range === 'object') {
        let range = '';
        range += PB_render_common.returnOnCall(data.detail.range[0], 'date', ['fo']);
        range += ' to ';
        range += PB_render_common.returnOnCall(data.detail.range[1], 'date', ['to']);
        data.detail.range = range;
      }
      data.detail.closing = PB_render_common.returnOnCall(data.detail.closing, 'number', [rendER.common.num.amount, 2, true]);
      const header = element.querySelector('[' + atr.core.control + '="' + kws.value.header + '"]');
      header.innerHTML = PB_extend_append.$_single(header.innerHTML, data.detail);


      // creating a profile for table.
      if (!data) {
        redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
        return true;
      }

      $table.matchingCalled(event.value);

      // shape = $table.tableShapes;
      // option = $table.tableOptions;
      // method = $table.tableMethods;
      // profile = $table.tableParams;

      tableFormation(data.data);

      dataTablesInit(event.value);

      filterEvents(event.value);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    return true;
  }

  const report_indent_book = function (element, event) {

    // form for parameters
    console.log(event);

    formData = PB_extend_collect.$_step(
      _tabLE.action.querySelector('#form-' + event.value)
    );

    if (!formData) return false;
    // table for data loading
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[' + atr.core.target + '="' + kws.value.filters + '"]');

    // checking that table is loaded or not.
    if (tableEle.getAttribute(atr.core.loadOf.table) === '1') return true;


    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);
      data = PB_extend_foreign.$_remote(
        kws.value.single,
        data,
        [
          ['data', 'dates', 1, 0],
          ['data', 'items', 2, 1],
          ['data', 'vehicles', 3, 0], data
        ]);

      // template render.
      if (typeof data.detail.range === 'object') {
        let range = '';
        range += PB_render_common.returnOnCall(data.detail.range[0], 'date', ['fo']);
        range += ' to ';
        range += PB_render_common.returnOnCall(data.detail.range[1], 'date', ['to']);
        data.detail.range = range;
      }
      data.detail.closing = PB_render_common.returnOnCall(data.detail.closing, 'number', [rendER.common.num.amount, 2, true]);
      const header = element.querySelector('[' + atr.core.control + '="' + kws.value.header + '"]');
      header.innerHTML = PB_extend_append.$_single(header.innerHTML, data.detail);


      // creating a profile for table.
      if (!data) {
        redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
        return true;
      }

      $table.matchingCalled(event.value);

      // shape = $table.tableShapes;
      // option = $table.tableOptions;
      // method = $table.tableMethods;
      // profile = $table.tableParams;

      tableFormation(data.data);

      dataTablesInit(event.value);

      filterEvents(event.value);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    return true;
  }

  const report_indent_customer = function (element, event) {

    // form for parameters
    console.log(event);

    formData = PB_extend_collect.$_step(
      _tabLE.action.querySelector('#form-' + event.value)
    );

    if (!formData) return false;
    // table for data loading
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[' + atr.core.target + '="' + kws.value.filters + '"]');

    // checking that table is loaded or not.
    if (tableEle.getAttribute(atr.core.loadOf.table) === '1') return true;


    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);
      data = PB_extend_foreign.$_remote(
        kws.value.single,
        data,
        [
          ['data', 'dates', 2, 0],
          ['data', 'items', 3, 0],
          ['data', 'customers', 1, 0],
        ]);

      // template render.
      if (typeof data.detail.range === 'object') {
        let range = '';
        range += PB_render_common.returnOnCall(data.detail.range[0], 'date', ['fo']);
        range += ' to ';
        range += PB_render_common.returnOnCall(data.detail.range[1], 'date', ['to']);
        data.detail.range = range;
      }
      data.detail.closing = PB_render_common.returnOnCall(data.detail.closing, 'number', [rendER.common.num.amount, 2, true]);
      const header = element.querySelector('[' + atr.core.control + '="' + kws.value.header + '"]');
      header.innerHTML = PB_extend_append.$_single(header.innerHTML, data.detail);


      // creating a profile for table.
      if (!data) {
        redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
        return true;
      }

      $table.matchingCalled(event.value);

      // shape = $table.tableShapes;
      // option = $table.tableOptions;
      // method = $table.tableMethods;
      // profile = $table.tableParams;

      tableFormation(data.data);

      dataTablesInit(event.value);

      filterEvents(event.value);
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    return true;
  }

  const dataTablesInit = (eventValue) => {

    let DT_options = {};

    // create options
    const end = PB_option_datatables.optionKeys();
    end.forEach((i) => {
      if ($table.tableOptions[i]) {
        DT_options[i] = PB_option_datatables.building(i, $table.tableMethods[i], $table.tableParams[i]);
      }
    })

    let optionsObj = {};
    Object.entries(DT_options).forEach(([key, value]) => {
      optionsObj = {...optionsObj, ...value}
    })

    // console.log(optionsObj);

    // Init datatable --- more info on datatables: https://datatables.net/manual/
    tableObject[eventValue] = Plug_dataTables.Init_onCalling(tableEle, optionsObj, 'new');

    // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
    /*
     tableObject[_RG_SAMP_A].on('draw', function () {
     console.log('i am call at the time of re-inti.')
     });
     */
  }

  const tableFormation = function (data) {
    // rendering data into table using above profile.
    redData = PB_render_table.simpleRender(data, $table.tableShapes, 'array');

    // have look into plain HTML table
    //console.log(redData);

    tableEle.appendChild(redData)

    // update table status
    tableEle.setAttribute(atr.core.loadOf.table, '1');

    // apply common renders
    PB_render_common.initOnCall(tableEle);
  }


  const filterEvents = (eventValue) => {
    filterEle.querySelectorAll('select, input').forEach((value) => {

      //let col = value.getAttribute('data-dt-column');

      switch (value.name) {
        case 'search':
          const regex = value.getAttribute('data-dt-regex') === '1';
          value.addEventListener('keyup', function (evt) {
            tableObject[eventValue].search(evt.target.value, regex).draw();
          })
          break;

        case 'select':
          value.addEventListener('change', function (evt) {
            var val = evt.target.value;
            if (val === 'all') val = '';
            tableObject[eventValue].column(evt.target.getAttribute('data-dt-column')).search(val).draw();
          })
          break;

        case 'clear':
          value.addEventListener('click', function (evt) {
            const iid = evt.target.getAttribute('data-pb-instance');
            console.log(iid);
            const fp = Plug_datePicker.getInstanceOnChange(iid)
            fp.clear();
            $.fn.dataTable.ext.search.push(function () { return true});
            tableObject[eventValue].draw();
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
            tableObject[eventValue].draw();
          })
          break;
      }
    })
  }

  // tabsTarget functions
  const tab_indent_bucket = function (element, data, event) {
    PB_render_form.renderME(rendER.form.method.selectOnly, data, element, atr.core.source);

    element.setAttribute(atr.core.loadOf.select, '1');
    return true;

  }

  const tab_indent_period = function (element, data, event) {

    PB_render_form.renderME(rendER.form.method.selectOnly, data, element, atr.core.source);

    element.setAttribute(atr.core.loadOf.select, '1');
    return true;
  }

  const tab_indent_book = function (element, data, event) {

    // value putting for category_id into customers.
    redData = PB_extend_foreign.$_remote('single', data, [['customers', 'books', 3, 1]]);
    // append options into selects.
    PB_render_form.renderME(rendER.form.method.selectOnly, redData, element, atr.core.source);

    element.setAttribute(atr.core.loadOf.select, '1');
    return true;

  }

  const tab_indent_customer = function (element, data, event) {

    PB_render_form.renderME(rendER.form.method.selectOnly, data, element, atr.core.source);

    element.setAttribute(atr.core.loadOf.select, '1');
    return true;
  }


  const tabsTarget = function (element, event) {

    console.log(event);
    if (element.hasAttribute(atr.core.loadOf.select)) return true;

    const _process = (data) => {
      _process_a(data)
    }

    const _process_a = (data) => {
      console.log(data);
      switch (event.value) {
        case pb.rpt.customers.indents.p.bucket:
          return tab_indent_bucket(element, data, event);
        case pb.rpt.customers.indents.p.period:
          return tab_indent_period(element, data, event);
        case pb.rpt.customers.indents.p.book:
          return tab_indent_book(element, data, event);
        case pb.rpt.customers.indents.p.customer:
          return tab_indent_customer(element, data, event);
      }
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
  }

  const reportsTarget = function (element, event) {
    switch (event.value) {
      case pb.rpt.customers.indents.p.bucket:
        return report_indent_bucket(element, event);
      case pb.rpt.customers.indents.p.period:
        return report_indent_period(element, event);
      case pb.rpt.customers.indents.p.book:
        return report_indent_book(element, event);
      case pb.rpt.customers.indents.p.customer:
        return report_indent_customer(element, event);

    }
  }
  const tablesTarget = function (element, event) {
    return tabsTarget(element, event);
  }
  const backsTarget = function (element, button) {
    // destroy the datatable
    tableObject[button.value].clear().destroy();
    // tableObject[button.value].destroy();
    return true;
  }

  // Public methods
  return {

    RCS_tabs   : function (_event) {
      return eleCheck() ? tabsTarget(_callEl, _event) : false;
    },
    RCS_reports: function (_event) {
      return eleCheck() ? reportsTarget(_callEl, _event) : false;
    },
    RCS_tables : function (_event) {
      return eleCheck() ? tablesTarget(_callEl, _event) : false;
    },
    RCS_backs  : function (_event) {
      return eleCheck() ? backsTarget(_callEl, _event) : false;
    },

    // fetching all basic required details


    // fetching all upcoming required details
    RCS_state: function () {
      return pageOpen();
    },

  };
}();