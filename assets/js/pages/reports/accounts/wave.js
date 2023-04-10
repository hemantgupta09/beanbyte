"use strict";

// Class definition
var PB_RA_wave = function () {

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4220',
  };
  // Shared variables
  let StateData, formData, redData, tableEle, filterEle;
  var ajaxResponse;
  let tableObject = [];
  let myPath;

  // Private functions
  /**
   * connect with server to get response.
   * @param button array [value, name]
   * @param params
   * @returns {*|boolean}
   */
  function wave_ajaxCalling(button, params = []) {
    let response;

    console.log(button);

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnName = button[1];

    console.log(btnName)

    switch (btnValue) {
      case pb.rpt.accounts.wave.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnName) {
          case 'page':
            response = {
              rows  : {
                'accounts': {
                  // [id, name, alias, prefix, group_id]
                  21: ['21', 'Cash-in-hand', 'cash', '0', '2'],
                  22: ['22', 'SBI Bank', 'xx7623', '0', '3'],
                  23: ['23', 'PAYTM POS', 'paytm', '0', '4'],
                  24: ['24', 'ICICI OD A/c', '1880', '0', '5'],
                },
                'groups'  : {
                  // [id, name]
                  2: ['2', 'Cash'],
                  3: ['3', 'Bank Accounts'],
                  4: ['4', 'Gateways'],
                  5: ['5', 'Over Draft A/c'],
                }
              },
              status: true
            }
            break;
          case 'state':
            response = {
              rows  : {
                'users': {
                  3: ['3', 'Lokesh Kumar', 'manager'],
                  4: ['4', 'Naveen Kumar', 'admin']
                },
                'types': {
                  1: ['1', 'Sales'],
                  2: ['2', 'Purchases'],
                  3: ['3', 'Receipts'],
                  4: ['4', 'Payments'],
                  5: ['5', 'Banking'],
                  6: ['6', 'Journals'],
                },

              },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.accounts.wave.p.search:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnName) {
          case 'tab':
            response = {
              rows  : {},
              status: true
            }
            break;

          case 'report':
            console.log(params);
            // params:
            response = {
              rows  :
                {
                  data : {
                    // [id, date_id, item_id, rate, qty, amount, slip, token]
                    12: [234, '12', 1, '87.60', '171.23', 1, '15,000', '4', '132', '1'],
                    13: [406, '13', 2, '89.20', '168.16', 1, '16,000', '2', '132', '4'],
                    14: [496, '14', 3, '87.60', '171.23', 1, '17,000', '9', '132', ''],
                    15: [505, '18', 4, '87.60', '171.23', 4, '18,000', '6', '132', '3']
                  },
                  items: {
                    1: [1, 'Diesel'],
                    2: [2, 'Petrol'],
                    3: [3, 'Speed'],
                    4: [4, 'MAK 4T'],
                  },
                  units: {
                    1: [1, 'LTR'],
                    4: [4, 'PCS'],
                  },
                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.accounts.wave.p.report:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnName) {

          case 'navtab':
          case 'action':
            console.log(params);
            response = {
              rows  :
                {
                  wave   : {
                    // [date_id, ledger_id, voucher_id, voucher_no, entry_type, amount, behave, description]
                    12: [112, 312, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    13: [113, 361, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    14: [212, 234, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    15: [213, 235, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    16: [214, 236, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    17: [218, 237, 2, 53, 52, 51362.12, 1, 'this is cool'],
                  },
                  dates  : {
                    112: ['2022-12-12'],
                    113: ['2023-01-01'],
                    212: ['2022-12-12'],
                    213: ['2022-03-23'],
                    214: ['2022-12-15'],
                    218: ['2022-12-20']
                  },
                  ledgers: {
                    312: ['POS machine'],
                    361: ['Rakesh Supplier'],
                    234: ['Lokesh'],
                    235: ['Suresh'],
                    236: ['ICICI Bank'],
                    237: ['Shriram Finance'],
                    238: ['Indian Oil'],
                    239: ['Jai Bahgvati Travels']
                  }
                },
              status: true
            }
            break;
        }
        break;
      case pb.rpt.accounts.wave.p.summary:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnName) {
          case 'navtab':
            switch (params[0]) {
              case 'header':
                response = {
                  rows  :
                    {
                      report: ['11', '4754897', '2022-03-03', '73467', '343244'],
                    },
                  status: true
                }
                break;
              case 'amount-status':
                response = {
                  rows  :
                    {
                      report: ['11', '4754897', '565434', '734645', '343244'],
                    },
                  status: true
                }
                break;
              case 'top-debits':
                response = {
                  rows  :
                    {
                      transaction: {
                        //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                        11: ['11', 'ICICI OD', 'Long Term Liability', '73467', '11%'],
                        12: ['12', 'BOB OD', 'Short Term Liability', '2343', '12%'],
                        13: ['13', 'SBI OD', 'Long Term Liability', '32432', '13%'],
                        14: ['14', 'PNB OD', 'Short Term Liability', '23432', '14%'],
                      }
                    },
                  status: true
                }
                break;
              case 'top-credits':
                response = {
                  rows  :
                    {
                      transaction: {
                        //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                        11: ['11', 'ICICI OD', 'Long Term Liability', '73467', '11%'],
                        12: ['12', 'BOB OD', 'Short Term Liability', '2343', '12%'],
                        13: ['13', 'SBI OD', 'Long Term Liability', '32432', '13%'],
                        14: ['14', 'PNB OD', 'Short Term Liability', '23432', '14%'],
                      }
                    },
                  status: true
                }
                break;
              case 'high-transaction':
                response = {
                  rows  :
                    {
                      transaction: {
                        //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                        11: ['11', 'Cash Account', '5489324', '21', '11', 'this is note1'],
                        12: ['12', 'Cash Account', '54897', '22', '12', 'this is note3'],
                        13: ['13', 'Online Account', '543497', '23', '13', 'this is note'],
                        14: ['14', 'Cash Account', '5423497', '24', '14', 'this is note3'],
                      },
                      type       : {
                        11: ["Emi Payment"],
                        12: ["sdfg Payment"],
                        13: ["Emi sdfgsdfPayment"],
                        14: ["Emisdfg ment"],
                        15: ["Emi Paymasdent"],
                        16: ["Emi Payment"],

                      }
                      ,
                      dates: {
                        21: ["2022-03-03"],
                        22: ["2021-03-03"],
                        23: ["2022-04-03"],
                        24: ["2020-03-04"],
                      }
                    },
                  status: true
                }
                break;
              case 'transaction-history':
                response = {
                  rows  :
                    {
                      transaction: {
                        //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                        11: ['11', 'Cash Account', '5489324', '21', '11', 'this is note1'],
                        12: ['12', 'Cash Account', '54897', '22', '12', 'this is note3'],
                        13: ['13', 'Online Account', '543497', '23', '13', 'this is note'],
                        14: ['14', 'Cash Account', '5423497', '24', '14', 'this is note3'],
                      },
                      type       : {
                        11: ["Emi Payment"],
                        12: ["sdfg Payment"],
                        13: ["Emi sdfgsdfPayment"],
                        14: ["Emisdfg ment"],
                        15: ["Emi Paymasdent"],
                        16: ["Emi Payment"],

                      }
                      ,
                      dates: {
                        21: ["2022-03-03"],
                        22: ["2021-03-03"],
                        23: ["2022-04-03"],
                        24: ["2020-03-04"],
                      }
                    },
                  status: true
                }
                break;
            }
            break;
          case 'action':
            console.log(params);
            response = {
              rows  :
                {},
              status: true
            }
            break;
        }
        break;
    }


    if (!response.status) {
      //      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
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
      return true
    }

    const _process_a = (data) => {
      StateData = data['pageState'];
    }

    const _process_b = (data) => {
      // calling render to place data
      redData = PB_extend_foreign.$_remote('single', data, [['accounts', 'groups', 4, 1]]);
      let element = PBapp.querySelector('#tab_search').querySelector('form');
      const dataMerged = {...redData, ...StateData};
      PB_render_form.renderME(rendER.form.method.selectOnly, dataMerged, element)
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);


    return ajax;
  }


  const action_wave_a = function (element, button) {
    console.log('i am here - action intr -a');
    return true;
  }
  const action_wave_b = function (element, button) {

    if (element.hasAttribute(atr.core.loadOf.tab) && element.getAttribute(atr.core.loadOf.tab) === '1') {
      console.log('report already loaded');
    }
    // run the process.
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[data-pb-target="filter"]');

    // collect form data
    formData = PB_extend_collect.$_step(button.closest('form'));
    if (!formData) return false;


    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : button.value,
      line   : button.name,
      account: formData
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);


    // get account detail using form data
    ajaxResponse = wave_ajaxCalling([button.value, button.name], formData)

    // if no data found from server in the requested account.
    if (Object.keys(ajaxResponse.wave).length === 0) {
      // redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
      toastr.error('No data found in Selected Date Range', 'Failed to Load Report')
      return false;
    }

    // foreign id matching
    redData = PB_extend_foreign.$_remote('single', ajaxResponse,
      [
        ['wave', 'dates', 0, 0],
        ['wave', 'ledgers', 1, 0]
      ])

    const property = propertyDetails(button.value);

    basicTableCalling(property.table, 'array');

    dataTableCalling(property.options, property.methods, property.profile, button.value);

    filterEvents(filterEle, button.value);

    console.log(element);

    // console.log(element, button);

    element.setAttribute(atr.core.loadOf.tab, '1');

    return true;
  }

  const action_wave_c = function (element, button) {
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

  const action_wave_d = function (element, button) {

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

  const basicTableCalling = (tableProfile, type = 'array') => {
    // rendering data into table using above profile.
    redData = PB_render_table.simpleRender(ajaxResponse.wave, tableProfile, type);

    // have look into plain HTML table
    //console.log(redData);

    tableEle.appendChild(redData)

    // update table status
    tableEle.setAttribute('data-pb-table-loaded', '1');

    // apply common renders
    PB_render_common.updateOnCall(tableEle);
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
  const propertyDetails = (call) => {
    let tableProfile, profile, methods, options;
    switch (call) {
      case pb.rpt.accounts.wave.p.report:
        tableProfile = {
          '0': {
            type  : TBL_ct.dt,
            method: 'a',
            value : '0',
            param : ['a'],
            style : 0,
            css   : [true]
          },
          '1': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '1',
            param : [],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '2',
            param : [],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '3',
            param : [],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '4',
            param : [],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.amt,
            method: 'c',
            value : '5',
            param : [],
            style : 0,
            css   : []
          },
          '6': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '6',
            param : [],
            style : 0,
            css   : []
          },
          '7': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '7',
            param : [],
            style : 0,
            css   : [true]
          },
          // '8': {type: TBL_ct.act, method: 'c', value: '0', param: [], style: 100, css: ['pe-0 text-end', 100]},
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
        break;

    }
    return {
      table  : tableProfile,
      options: options,
      methods: methods,
      profile: profile
    };
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
  const renderHeader = function (element, button) {
    let headerEle = element.querySelectorAll('[data-pb-target]');

    headerEle.forEach((place) => {
      //append the header data

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act    : button.value,
        line   : button.name,
        account: 'target'
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);


      ajaxResponse = wave_ajaxCalling([button.value, button.name], [place.getAttribute('data-pb-target')]);

      place.querySelectorAll('[data-pb-control]').forEach((ele, index) => {
        ele.removeAttribute(atr.core.formatted);
        ele.innerText = ajaxResponse.report[index + 1];
      });
    });
  }
  const renderNode = function (element, button) {
    element.querySelectorAll('[data-pb-template]').forEach((place, index) => {
      let param = place.getAttribute('data-pb-template');

      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL([], {
        act    : button.value,
        line   : button.name,
        account: param
      });
      ajax.callREQUEST({}, urlID, false);
      const responseX = ajax.getRESPONSE();
      console.log(responseX);

      ajaxResponse = wave_ajaxCalling([button.value, button.name], [param]);
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

      console.log(button)
    });
    console.log(element);
  }
  // navtabsTarget functions
  const navtab_wave_a = function (element, button) {

    // remove tabs attribute and content
    PBapp.querySelector('#navtab_zone').querySelectorAll('[role="tabpanel"]').forEach((tabEle) => {

      // -r attribute
      tabEle.removeAttribute(atr.core.loadOf.tab);

      // -r content
      switch (tabEle.id.substring(4)) {
        case pb.rpt.accounts.wave.p.search:
          // reset the form.
          tabEle.querySelector('form').reset();
          // reset the select dropdown label
          // TODO
          break;
        case pb.rpt.accounts.wave.p.report:
          // empty table
          //tableObject[button.value].clear().destroy();
          break;
        case pb.rpt.accounts.wave.p.summary:
          // empty cards --not required
          break;
        case pb.rpt.accounts.wave.p.charts:
          // destroy charts --not required
          break;
      }
    })
    return true;
  }

  const navtab_wave_b = function (element, button) {
    console.log('i am not in the use');
  }

  const navtab_wave_c = function (element, button) {
    if (element.getAttribute(atr.core.loadOf.tab) === '1') return true;

    renderHeader(element, button);
    renderNode(element, button);
    //return action_stmt_c(element, button);
    PB_render_common.initOnCall(element);

    element.setAttribute(atr.core.loadOf.tab, '1');
  }

  const navtab_wave_d = function (element, button) {
    return action_wave_d(element, button);
  }

  // switch function to route a right function for requested action.
  const navtabsTarget = function (element, button) {
    switch (button.value) {
      case pb.rpt.accounts.wave.p.search:
        return navtab_wave_a(element, button);

      case pb.rpt.accounts.wave.p.report:
        return navtab_wave_b(element, button);

      case pb.rpt.accounts.wave.p.summary:
        return navtab_wave_c(element, button);

      case pb.rpt.accounts.wave.p.charts:
        return navtab_wave_d(element, button);
    }
  }

  const backsTarget = function (element, button) {
    // destroy the datatable
    tableObject[button.value].clear().destroy();
    // tableObject[button.value].destroy();
    return true;
  }

  const actionsTarget = function (element, button) {
    switch (button.value) {
      case pb.rpt.accounts.wave.p.search:
        return action_wave_a(element, button);

      case pb.rpt.accounts.wave.p.report:
        return action_wave_b(element, button);

      case pb.rpt.accounts.wave.p.summary:
        return action_wave_c(element, button);

      case pb.rpt.accounts.wave.p.charts:
        return action_wave_d(element, button);
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

    RAW_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    RAW_loads  : function (_event) {
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },
    RAW_backs  : function (_event) {
      return eleCheck() ? backsTarget(_callEl, _event) : false;
    },

    // fetching all upcoming required details
    RAW_pageOpen: function () {
      return pageOpen();
    },

  };
}();