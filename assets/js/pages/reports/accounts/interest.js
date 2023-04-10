"use strict";

// Class definition
var PB_RA_interest = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4340',
  };
  // Shared variables
  let StateData, formData, redData, tableEle, filterEle;
  var ajaxResponse, data;
  let tableObject = [];
  let myPath;
  let $table;


  // Private functions
  /**
   * connect with server to get response.
   * @param event array [value, name]
   * @param params
   * @returns {*|boolean}
   */

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
    }

    const _process_a = (data) => {
      redData = PB_extend_foreign.$_remote('single', data, [['accounts', 'groups', 4, 1]]);
      let element = PBapp.querySelector('#tab_search').querySelector('form');
      const dataMerged = {...redData, ...StateData};
      PB_render_form.renderME(rendER.form.method.selectOnly, dataMerged, element)
    }
    const _process_b = (data) => {
      StateData = data;
      console.log(StateData);
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
   * preloaded data that will not change for this page
   */



  const action_intr_a = function (element, event) {
    console.log('i am here - action intr -a');
    return true;
  }
  const action_intr_b = function (element, event) {

    if (element.hasAttribute(atr.core.loadOf.tab) && element.getAttribute(atr.core.loadOf.tab) === '1') {
      console.log('report already loaded');
    }
    // run the process.
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[data-pb-target="filter"]');

    // collect form data
    formData = PB_extend_collect.$_step(event.closest('form'));
    if (!formData) return false;


    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      if (Object.keys(ajaxResponse.interest).length === 0) {
        // redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
        toastr.error('No data found in Selected Date Range', 'Failed to Load Report')
        return false;
      }

      // foreign id matching
      redData = PB_extend_foreign.$_remote('single', ajaxResponse,
        [
          ['interest', 'dates', 0, 0],
          ['interest', 'ledgers', 1, 0]
        ])

      $table.matchingCalled(event.value);

      tableFormation(data.data);

      dataTablesInit(event.value);

      filterEvents(event.value);

      console.log(element);

      // console.log(element, event);

      element.setAttribute(atr.core.loadOf.tab, '1');
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    return ajax;

  }

  const action_intr_c = function (element, event) {
    if (!element.hasAttribute(atr.core.loadOf.tab)) {

      // this is the form data as required to fetch data from ajax
      console.log(formData);


      // loading functions

      console.log('i am here to load summary data and append them into the html elements');


      // finished.
      element.setAttribute(atr.core.loadOf.tab, '1');
    }
    return true;
  }

  const action_intr_d = function (element, event) {

    console.log(element);
    // 1. check is report loaded or not.


    var chart = {
      self    : null,
      rendered: false
    };
    var initChart = function () {
      var element = document.getElementById("kt_charts_widget_1");

      if (!element) {
        return;
      }

      var negativeColor = element.hasAttribute('data-kt-negative-color') ? element.getAttribute('data-kt-negative-color') : KTUtil.getCssVariableValue('--kt-danger');

      var height = parseInt(KTUtil.css(element, 'height'));
      var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
      var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');

      var baseColor = KTUtil.getCssVariableValue('--kt-success');

      var options = {
        series     : [
          {
            name: 'Debited',
            data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20]
          }, {
            name: 'Credited',
            data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15]
          }
        ],
        chart      : {
          fontFamily: 'inherit',
          type      : 'bar',
          stacked   : true,
          height    : height,
          toolbar   : {
            show: false
          }
        },
        plotOptions: {
          bar: {
            //horizontal: false,
            columnWidth : "35%",
            barHeight   : "70%",
            borderRadius: [6, 6]
          }
        },
        legend     : {
          show: false
        },
        dataLabels : {
          enabled: false
        },
        xaxis      : {
          categories: ['Jan 5', 'Jan 7', 'Jan 9', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 24', 'Jan 28', 'Jan 29'],
          axisBorder: {
            show: false
          },
          axisTicks : {
            show: false
          },
          tickAmount: 10,
          labels    : {
            //rotate: -45,
            //rotateAlways: true,
            style: {
              colors  : [labelColor],
              fontSize: '12px'
            }
          },
          crosshairs: {
            show: false
          }
        },
        yaxis      : {
          min       : -50,
          max       : 80,
          tickAmount: 6,
          labels    : {
            style    : {
              colors  : [labelColor],
              fontSize: '12px'
            },
            formatter: function (val) {
              return parseInt(val) + "K"
            }
          }
        },
        fill       : {
          opacity: 1
        },
        states     : {
          normal: {
            filter: {
              type : 'none',
              value: 0
            }
          },
          hover : {
            filter: {
              type : 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter                          : {
              type : 'none',
              value: 0
            }
          }
        },
        tooltip    : {
          style: {
            fontSize    : '12px',
            borderRadius: 4
          },
          y    : {
            formatter: function (val) {
              if (val > 0) {
                return val + 'K';
              }
              else {
                return Math.abs(val) + 'K';
              }
            }
          }
        },
        colors     : [baseColor, negativeColor],
        grid       : {
          borderColor    : borderColor,
          strokeDashArray: 4,
          yaxis          : {
            lines: {
              show: true
            }
          }
        }
      };

      chart.self = new ApexCharts(element, options);

      // Set timeout to properly get the parent elements width
      setTimeout(function () {
        chart.self.render();
        chart.rendered = true;
      }, 200);
    }

    // initChart();


    console.log('loading data for charts');

    // update loading status of chart
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

    console.log(DT_options);

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

  const foreignMatch = function (param) {
    switch (param) {
      case 'high-transaction':
      case 'transaction-history':
        PB_extend_foreign.$_remote('single', ajaxResponse, [
          ['transaction', 'dates', 3, 0],
          ['transaction', 'type', 4, 0],
        ])
        break;
      default:
        break;
    }
    return true;
  }
  //here we render the data in cards
  const renderHeader = function (element, event) {
    let headerEle = element.querySelectorAll('[data-pb-target]');

    headerEle.forEach((place) => {

      //todo @needhelp
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act : event.value,
        line: event.name
      });
      ajax.callREQUEST({myPath}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);
      //append the header data
      ajaxResponse = interest_ajaxCalling([event.value, event.name], [place.getAttribute('data-pb-target')]);

      place.querySelectorAll('[data-pb-control]').forEach((ele, index) => {
        ele.removeAttribute(atr.core.formatted);
        ele.innerText = ajaxResponse.report[index + 1];
      });
    });
  }
  const renderNode = function (element, event) {
    element.querySelectorAll('[data-pb-template]').forEach((place, index) => {
      let param = place.getAttribute('data-pb-template');

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act    : event.value,
        line   : event.name,
        account: param
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);

      ajaxResponse = interest_ajaxCalling([event.value, event.name], [param]);
      let target = place.querySelector('div');

      if (!ajaxResponse) {
        return;
      }
      foreignMatch(param);

      for (let key in ajaxResponse.transaction) {
        let cloneNode = target.cloneNode(true);

        cloneNode.classList.remove('d-none');
        cloneNode.querySelectorAll('[data-pb-control]').forEach((ele, index) => {
          ele.removeAttribute(atr.core.formatted);
          ele.innerText = ajaxResponse.transaction[key][index + 1];

        })

        place.appendChild(cloneNode);
      }

      console.log(event)
    });
    console.log(element);
  }
  // navtabsTarget functions
  const navtab_intr_a = function (element, event) {

    // remove tabs attribute and content
    PBapp.querySelector('#navtab_zone').querySelectorAll('[role="tabpanel"]').forEach((tabEle) => {

      // -r attribute
      tabEle.removeAttribute(atr.core.loadOf.tab);

      // -r content
      switch (tabEle.id.substring(4)) {
        case pb.rpt.accounts.interest.p.search:
          // reset the form.
          tabEle.querySelector('form').reset();
          // reset the select dropdown label
          // TODO
          break;
        case pb.rpt.accounts.interest.p.report:
          // empty table
          //tableObject[event.value].clear().destroy();
          break;
        case pb.rpt.accounts.interest.p.summary:
          // empty cards --not required
          break;
        case pb.rpt.accounts.interest.p.charts:
          // destroy charts --not required
          break;
      }
    })
    return true;
  }

  const navtab_intr_b = function (element, event) {
    console.log('i am not in the use');
  }

  const navtab_intr_c = function (element, event) {
    if (element.getAttribute(atr.core.loadOf.tab) === '1') return true;

    renderHeader(element, event);
    renderNode(element, event);
    //return action_stmt_c(element, event);
    PB_render_common.initOnCall(element);

    element.setAttribute(atr.core.loadOf.tab, '1');
  }

  const navtab_intr_d = function (element, event) {
    return action_intr_d(element, event);
  }

  // switch function to route a right function for requested action.
  const navtabsTarget = function (element, event) {
    switch (event.value) {
      case pb.rpt.accounts.interest.p.search:
        return navtab_intr_a(element, event);

      case pb.rpt.accounts.interest.p.report:
        return navtab_intr_b(element, event);

      case pb.rpt.accounts.interest.p.summary:
        return navtab_intr_c(element, event);

      case pb.rpt.accounts.interest.p.charts:
        return navtab_intr_d(element, event);
    }
  }

  const backsTarget = function (element, event) {
    // destroy the datatable
    tableObject[event.value].clear().destroy();
    // tableObject[event.value].destroy();
    return true;
  }

  const actionsTarget = function (element, event) {
    switch (event.value) {
      case pb.rpt.accounts.interest.p.search:
        return action_intr_a(element, event);

      case pb.rpt.accounts.interest.p.report:
        return action_intr_b(element, event);

      case pb.rpt.accounts.interest.p.summary:
        return action_intr_c(element, event);

      case pb.rpt.accounts.interest.p.charts:
        return action_intr_d(element, event);
    }
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

    RAI_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    RAI_loads  : function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },
    RAI_backs  : function (_event) {
      return eleCheck() ? backsTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    RAI_pageOpen: function () {
      return pageOpen();
    },

  };
}();