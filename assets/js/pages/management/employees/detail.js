"use strict";

// Class definition
var PB_ME_detail = function () {

  // Shared variables
  let StateData, targetEl, tableEle;
  var data;
  let CID = 0;
  let redData;
  let chartObject = {}, tableObject = {};
  let myPath;
  let $table;

  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4250',
  };
  // Private functions
  const getCID = () => {
    return CID;

  }

  function details_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case _ME_DETL:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              rows    :
                {
                  recent   : {
                    // [id, name, tab, group]
                    12: [12, 'Lokesh Kumar', 'overview', 'Regular Employees'],
                    13: [13, 'Ramesh Kumar', 'profits', 'Regular Employees'],
                  },
                  employees: {
                    12: [12, 'Dinesh Meena', 'dinu', 'Regulars'],
                    13: [13, 'Mukul Loat', 'aki', 'Regulars'],
                    11: [13, 'Mukesh Singh', 'aki', 'Regulars'],
                    14: [14, 'Bharti Meena', 'idk', 'Regulars'],
                    15: [15, 'Saloni Mathur', 'chinu', 'Regulars'],
                  }
                },
              'status': true
            }
            break;
          case 'state':
            response = {
              'employ':
                [
                  {
                    "eid"  : 21,
                    "name" : 'Lokesh Kumar',
                    "post" : 'Manager',
                    "image": 'false'
                  },
                  {
                    "eid"  : 22,
                    "name" : 'Naveen Kumar',
                    "post" : 'Employee',
                    "image": 'false'
                  },
                ],
              'status': true
            }
            break;
        }
        break;
      case _ME_DETL_A:
        //overviewTable
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'transaction_history': {
                //  ['id':int , 'date':int, 'description':string, 'type':string, 'payment':int, 'posted':int, 'closing':int]
                11: ['11', '10', 'Salary Payment of Jun2022', '10', '834834', '23434', '49857'],
                12: ['12', '21', 'Salary Infuse of SEP', '11', '834834', '23434', '873748'],
                13: ['13', '22', 'Salary Payment of July', '10', '834834', '23434', '809832'],
                14: ['14', '11', 'Salary Payment of Jun2022', '11', '834834', '23434', '87389'],
                15: ['15', '12', 'Salary Payment of Jun2022', '11', '834834', '23434', '8374893']
              },
              'outSanding_salary'  :
                [
                  {
                    'id'    : 75,
                    'amount': '7576444'
                  }
                ],
              'activities'         : [
                {
                  'id'      : 123,
                  'absents' : [5, 1],
                  'self_exp': '3534534'
                }
              ],
              'type'               : {
                10: ["Salary  Payment"],
                11: ["Payable"]
              },
              'dates'              : {
                10: ['2022-12-12'],
                11: ['2022-12-12'],
                12: ['2022-12-12'],
                21: ['2022-03-23'],
                22: ['2022-12-15'],
                23: ['2022-12-20'],
                24: ['2022-12-20'],
                25: ['2022-12-20'],
              },

            },
          'status': true
        }
        break;

      case _ME_DETL_B:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'activities': {
                //['id':int, 'date':date, 'activity_type':string, 'description':string, 'amount':int, 'status':string,]
                10: ['10', '11', '11', 'full day', '674564', '10'],
                11: ['11', '10', '12', 'end day', '894564', '11'],
                12: ['12', '12', '13', '3 hours', '284564', '11'],
                13: ['13', '21', '14', 'Petrol', '944564', '10'],
              },
              'type'      : {
                11: ["Absent"],
                12: ["OverTime"],
                13: ["Bonus"],
                14: ["Expense"],
                15: ["Difference"],
                16: ["Commission"],
              },
              'dates'     : {
                10: ['2022-12-12'],
                11: ['2022-12-12'],
                12: ['2022-12-12'],
                21: ['2022-03-23'],
                22: ['2022-12-15'],
                23: ['2022-12-20'],
                24: ['2022-12-20'],
                25: ['2022-12-20'],
              },
              'status'    : {
                10: ['Locked'],
                11: ['Open'],
              }
            },
          'status': true
        }
        break;

      case _ME_DETL_C:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'payroll': {
                //['id':int, 'date':date, 'salary':int, 'activities':int, 'allowances':int, 'net_payable':int, 'status':string]
                10: ['10', '2022-JULY', '24233', '12134', '54544', '89374', '10'],
                11: ['11', '2022-AUGUST', '24233', '12134', '54544', '89374', '11'],
                12: ['12', '2022-OCTOBER', '24233', '12134', '54544', '89374', '12'],
                13: ['13', '2022-JULY', '24233', '12134', '54544', '89374', '13'],
              },
              'dates'  : {
                10: ['2022-12-12'],
                11: ['2022-12-12'],
                12: ['2022-12-12'],
                21: ['2022-03-23'],
                22: ['2022-12-15'],
                23: ['2022-12-20'],
                24: ['2022-12-20'],
                25: ['2022-12-20'],
              },
              'status' : {
                10: ['Created'],
                11: ['Ready'],
                12: ['Open'],
                13: ['Skipped']
              }
            },
          'status': true
        }

        //
        break;


      case _ME_DETL_D:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response =
          {
            'rows'  :
              {
                'vehicle': {
                  //['id':int, 'vehicle':string, 'driver':string, 'contact':int, 'type':string, 'lastvisit':date, 'sales':int
                  3234: ["3234", "RJ-45-FA-5245", "Rakesh", "9876543211", "DRUM", "25 Oct 2022, 8 Mo & 14 Days ago", "8687677"],
                  3235: ["3235", "RJ-45-FA-5245", "Rakesh", "9876543211", "DRUM", "25 Oct 2022, 8 Mo & 14 Days ago", "8687677"],
                  3236: ["3236", "RJ-45-FA-5245", "Balram", "9834543211", "DRUM", "25 Oct 2022, 8 Mo & 14 Days ago", "8687677"],
                }
              },
            'status': true
          }
        break;

      case _ME_DETL_E:
        // call the ajax
        console.log(params)
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {},
          'status': true
        }
        break;
    }

    //
    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }


  const pageOpen = () => {

    const justRunMe = () => {
      // other things, not connected to dynamic data.
      $table = new tablesProfile_management(thePathArr);
    }
    justRunMe();

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

      //foreign
      PB_extend_foreign.$_remote('single', data, [["employees", "category", "post_id", 0], ["recent", "category", "post_id", 0]])
      // console.log(data);
      let empEle, results, temp;

      results = _panelLE.search.querySelector('[data-kt-search-element="results"] > div');
      temp = results.querySelector('[data-pb-template="search"]');
      results.innerHTML = "";
      let child;
      // todo, add template engine,
      // append employees
      //      todo: and data "12" : {"id":  12, "name" : "Lokesh Kumar", "page" : "overview" , "post_id" :  12},
      $.each(data.employees, (index, value) => {
        empEle = temp.cloneNode(true);
        empEle.classList.remove(CLS.display.none);
        value.name = value.name.toLowerCase();
        empEle.innerHTML = PB_extend_append.$_single(empEle.innerHTML, value);
        results.appendChild(empEle);
      })


      // append recent
      results = PBapp.querySelector('[data-kt-search-element="suggestions"] > div');
      temp = results.querySelector('[data-pb-template="recent"]')
      let newButton;
      $.each(data.recent, (index, value) => {
        newButton = temp.cloneNode(true);
        newButton.classList.remove(CLS.display.none);
        newButton.innerHTML = PB_extend_append.$_single(newButton.innerHTML, value);
        results.appendChild(newButton);
      });
    }

    const _process_b = (data) => {
      // init the search
      var PB_employee_search = function () {
        // Private variables
        var element;
        var suggestionsElement;
        var resultsElement;
        var wrapperElement;
        var user_search_for;
        var emptyElement;
        var searchObject;
        var got = false;

        // Private functions
        var processs = function (search) {

          // console.log(search);

          function findEmployee(item) {
            console.log(item.children[0].getAttribute('data-user-name'))
            item = item.children[0];
            if (
              item.getAttribute('data-user-name').indexOf(user_search_for) > -1
              ||
              item.getAttribute('data-user-alias').indexOf(user_search_for) > -1
            ) {
              got = true;
              item.classList.remove(CLS.display.none);
            }
            else {
              item.classList.add(CLS.display.none);
            }
          }

          setTimeout(function () {

            // Hide recently viewed
            suggestionsElement.classList.add(CLS.display.none);

            user_search_for = searchObject.getQuery().toLowerCase();
            console.log(user_search_for)

            var searchable_zone = resultsElement.querySelector('[data-kt-target="search"]').children;


            searchable_zone.forEach(findEmployee)

            if (got) {
              // Show results
              resultsElement.classList.remove(CLS.display.none);
              // Hide empty message
              emptyElement.classList.add(CLS.display.none);
              got = false;
            }
            else {
              // Hide results
              resultsElement.classList.add(CLS.display.none);
              // Show empty message
              emptyElement.classList.remove(CLS.display.none);
            }

            // Complete search
            search.complete();
          }, 100);
        }

        var clear = function (search) {
          // Show recently viewed
          suggestionsElement.classList.remove(CLS.display.none);
          // Hide results
          resultsElement.classList.add(CLS.display.none);
          // Hide empty message
          emptyElement.classList.add(CLS.display.none);
          // got value reset
          got = false;
        }

        // Public methods
        return {
          init: function () {
            // Elements
            element = document.querySelector('#pb_employee_search_handler');

            if (!element) return;

            suggestionsElement = element.querySelector('[data-kt-search-element="suggestions"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');

            // console.log(resultsElement);
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);
          }
        };
      }();


      PB_employee_search.init();

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
   * this will be used for show page's base-0 data.
   */
  const pageData = (path) => {
    //    console.log('this is pageData')
    //call data from ajax
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: 'page'
    });
    ajax.callREQUEST({myPath}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);
    const data = details_ajaxCalling([_ME_DETL, 'page']);

    // console.log(data);
    let empEle, results, temp;

    results = PBapp.querySelector('[data-kt-search-element="results"] > div');
    temp = results.querySelector('[data-pb-template="search"]')
    let child;
    // append employees
    $.each(data.employees, (index, value) => {
      empEle = temp.cloneNode(true);
      empEle.classList.remove(CLS.display.none);
      empEle.setAttribute('data-user-name', value[1].toLowerCase());
      empEle.setAttribute('data-user-alias', value[2]);
      empEle.querySelector('input').value = value[0];
      child = empEle.querySelector('[data-pb-target="search"]').children;
      child[0].innerText = value[1];
      child[1].innerText = value[2];
      child[2].innerText = 'Group:' + value[3];
      results.appendChild(empEle);
    })


    // append recent
    results = PBapp.querySelector('[data-kt-search-element="suggestions"] > div');
    temp = results.querySelector('[data-pb-template="recent"]')
    $.each(data.recent, (index, value) => {
      empEle = temp.cloneNode(true);
      empEle.value = value[2]; // tab
      empEle.querySelector('input').value = value[0]; // employee_id
      empEle.classList.remove(CLS.display.none);
      child = empEle.querySelector('[data-pb-target="recent"]').children;
      child[0].innerText = value[1]; // employee name
      child[1].innerText = value[3]; // employee group
      results.appendChild(empEle);
    });
  }

  /**
   * preloaded data that will not change for this page
   */
  const staticData = (path) => {
    myPath = path;

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : 'auto',
      line: 'state'
    });
    ajax.callREQUEST({myPath}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    // hold data into variables.
    const data = details_ajaxCalling([_ME_DETL, 'state'])

    // this data save into variables.
    // it will be called when create form initiated.
    StateData = data;

    // init the search


    var PB_employee_search = function () {
      // Private variables
      var element;
      var suggestionsElement;
      var resultsElement;
      var wrapperElement;
      var user_search_for;
      var emptyElement;
      var searchObject;
      var got = false;

      // Private functions
      var processs = function (search) {

        // console.log(search);

        function findEmployee(item) {
          if (
            item.getAttribute('data-user-name').indexOf(user_search_for) > -1
            ||
            item.getAttribute('data-user-alias').indexOf(user_search_for) > -1
          ) {
            got = true;
            item.classList.remove(CLS.display.none);
          }
          else {
            item.classList.add(CLS.display.none);
          }
        }

        setTimeout(function () {

          // Hide recently viewed
          suggestionsElement.classList.add(CLS.display.none);

          user_search_for = searchObject.getQuery().toLowerCase();
          console.log(user_search_for);

          var searchable_zone = resultsElement.querySelector('[data-kt-target="search"]').children;


          searchable_zone.forEach(findEmployee)

          if (got) {
            // Show results
            resultsElement.classList.remove(CLS.display.none);
            // Hide empty message
            emptyElement.classList.add(CLS.display.none);
            got = false;
          }
          else {
            // Hide results
            resultsElement.classList.add(CLS.display.none);
            // Show empty message
            emptyElement.classList.remove(CLS.display.none);
          }

          // Complete search
          search.complete();
        }, 100);
      }

      var clear = function (search) {
        // Show recently viewed
        suggestionsElement.classList.remove(CLS.display.none);
        // Hide results
        resultsElement.classList.add(CLS.display.none);
        // Hide empty message
        emptyElement.classList.add(CLS.display.none);
        // got value reset
        got = false;
      }

      // Public methods
      return {
        init: function () {
          // Elements
          element = document.querySelector('#pb_employee_search_handler');

          if (!element) return;

          suggestionsElement = element.querySelector('[data-kt-search-element="suggestions"]');
          resultsElement = element.querySelector('[data-kt-search-element="results"]');
          emptyElement = element.querySelector('[data-kt-search-element="empty"]');

          // console.log(resultsElement);
          // Initialize search handler
          searchObject = new KTSearch(element);

          // Search handler
          searchObject.on('kt.search.process', processs);

          // Clear handler
          searchObject.on('kt.search.clear', clear);
        }
      };
    }();


    PB_employee_search.init();


  }

  const


    account_details = function (element, event) {
      console.log('account_details')
      const setCID = (id) => {
        CID = id;
      }
      setCID(event[2]);
      // get data from ajax
      //    const ajax = new AjaxPB();
      //    const urlID = ajax.buildingURL([], {
      //      act    : _ME_DETL_A,
      //      line   : event[0],
      //      account: event[2]
      //    });
      //    ajax.callREQUEST({}, urlID, false);
      //    const responseX = ajax.getRESPONSE();
      //    console.log(responseX);
      //
      //
      //    data = details_ajaxCalling([_ME_DETL_A, event[0]], [event[2]]);
      const _process = (data) => {
        _process_a(data)
      }
      const _process_a = (data) => {
        console.log(data);


        if (!data) return false;

        //    console.log(data);

        // render the response data (if required)

        // append the data into element.
        // todo: @bharti append data into element,

        return true;
      }

      console.log(event)
      const ajax = new AjaxPB();
      const urlID = ajax.buildingURL(thePathArr, {
        act    : event.value,
        type   : event.type,
        account: event.data
      }, host.local);
      ajax.callREQUEST({}, urlID, false, _process);
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


  }
  const getProfile = function (type) {
    let OPTION;
    let tableProfile, profile, methods, options;
    switch (type) {
      case 'transaction_history':
        tableProfile = {
          '0': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '0',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.dt,
            method: 'a',
            value : '1',
            param : [],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '3',
            param : [2, 1],
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
            method: 'a',
            value : '5',
            param : [],
            style : 0,
            css   : []
          },
          '6': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '6',
            param : [2, 1],
            style : 1,
            css   : []
          },
        }
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
      case 'activities':
        OPTION = [3, ['card', 'card', 'action'], ['view-activity', 'edit-activity', 'delete-activity']];
        tableProfile = {
          '0': {
            type  : TBL_ct.dt,
            method: 'a',
            value : '1',
            param : [],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '3',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '4',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '5',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.act,
            method: 'b',
            value : '0',
            param : OPTION,
            style : 1,
            css   : ['', 'end']
          },
        }
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
      case 'payroll':
        OPTION = [3, ['card', 'card', 'action'], ['view-payroll', 'edit-payroll', 'delete-payroll']];
        tableProfile = {
          '0': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '1',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '3',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '4',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '5',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '6',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '6': {
            type  : TBL_ct.act,
            method: 'b',
            value : '0',
            param : OPTION,
            style : 1,
            css   : ['', 'end']
          },
        }
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
            var iid = evt.target.getAttribute('data-pb-target');
            console.log(iid);
            var fp = Plug_datePicker.instanceOnChange(iid)
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
            dates = Plug_datePicker.valueOnChange()[0];
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

  const renderTable = function (targetTableEle, ajaxResponse) {
    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      let property = getProfile(key);
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

      // calling other basic plugin functions
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      //datatable code
      // dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      // filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  const renderNode = function (targetNodeEle, data) {
    //here we write the node logic so let get started
    let targetEle = targetNodeEle.querySelector('[data-pb-template="node"]');
    let place = targetNodeEle.querySelector('#kt_employee_view_payment_method')

    console.log(data)
    Object.keys(data).forEach((key, index) => {
      let cloneNode = targetEle.cloneNode(true);

      cloneNode.querySelectorAll('td').forEach((item, index) => {
        item.innerText = data[key][index + 1];
      })
      cloneNode.classList.remove(CLS.display.none);
      place.appendChild(cloneNode);
    })
  }
  const tab_overview = function (element, event) {
    //    console.log(element)
    if (element.getAttribute("data-pb-tab-loaded") === "1") {
      return true;
    }
    // console.log(event);
    //    console.log('calling overview for get data from ajax function and load into html element')
    // get data from ajax
    //    const ajax = new AjaxPB();
    //    const urlID = ajax.buildingURL([], {
    //      act : event,
    //      line: [getCID()]
    //    });
    //    ajax.callREQUEST({}, urlID, false);
    //    const responseX = ajax.getRESPONSE();
    //    console.log(responseX);

    //    data = details_ajaxCalling(event, [getCID()]);
    //    console.log(data);
    const _process = (data) => {
      _process_a(data);
      return true;
    }
    const _process_a = (data) => {
      console.log(data);

      // match the foreign key matching
      PB_extend_foreign.$_remote('single', data,
        [
          ['transaction_history', 'dates', 1, 0],
          ['transaction_history', 'type', 3, 0],
        ]
      );

      let targetTableEle = {
        transaction_history: element.children[1]
      }

      let targetCommonEle = {
        outStanding_salary: element.children[0].querySelector('[data-pb-child="salary"]'),
        activities        : element.children[0].querySelector('[data-pb-child="activity"]')
      }

      renderTable(targetTableEle, data);

      //    todo: let me know @balram
      targetCommonEle.outStanding_salary.querySelector('span').innerText = PB_render_common.returnOnCall(data['outSanding_salary'][0].amount, 'amount', [0, 1]);
      targetCommonEle.activities.querySelector('[data-pb-amount="expense"]').innerText = PB_render_common.returnOnCall(data['activities'][0].self_exp, 'amount');

      targetCommonEle.activities.querySelector('[data-pb-count="present"]').innerText = data['activities'][0].absents[0];
      targetCommonEle.activities.querySelector('[data-pb-count="absent"]').innerText = '(' + data['activities'][0].absents[1] + ')';

      element.setAttribute("data-pb-tab-loaded", "1");
      return true;
    }
    console.log(event)
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

    return ajax;
  }
  const tab_payroll = function (element, event, htLen) {
    //    console.log('i am here - payroll');
    if (element.getAttribute(atr.core.loadOf.tab) === '1') {
      return true;
    }

    // console.log(event);
    //    console.log('calling profits for get data from ajax function and load into html element');
    //    const ajax = new AjaxPB();
    //    const urlID = ajax.buildingURL([], {
    //      act : event,
    //      line: [getCID()]
    //    });
    //    ajax.callREQUEST({}, urlID, false);
    //    const responseX = ajax.getRESPONSE();
    //    console.log(responseX);
    //
    //    const ajaxResponse = details_ajaxCalling(event, [getCID()]);
    const _process = (data) => {
      _process_a(data)
      return true
    }
    const _process_a = (data) => {
      console.log(data);

      // _ProfitTable(data);
      PB_extend_foreign.$_remote('single', data, [
          ['payroll', 'dates', 1, 0],
          ['payroll', 'status', 6, 0]
        ]
      );

      // render the response data (if required)
      let targetTableEle = {
        'payroll': element,
      }


      renderTable(targetTableEle, data);
      element.setAttribute("data-pb-tab-loaded", "1");
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
  const tab_activites = function (element, event) {
    //    console.log(element)
    //
    //    console.log('i am here - cart chart');
    //check the state if data is already loaded then no need to load the data again
    if (element.getAttribute("data-pb-tab-loaded") === "1") {
      return true;
    }
    //    const ajax = new AjaxPB();
    //    const urlID = ajax.buildingURL([], {
    //      act : event,
    //      line: [getCID()]
    //    });
    //    ajax.callREQUEST({}, urlID, false);
    //    const responseX = ajax.getRESPONSE();
    //    console.log(responseX);
    //
    //    data = details_ajaxCalling(event, [getCID()]);
    //    console.log('calling charts for get data from ajax function and load into html element')
    // get data from ajax
    const _process = (data) => {
      _process_a(data)
      return true
    }
    const _process_a = (data) => {
      console.log(data);

      if (data) {
        // match the foreign key matching
        PB_extend_foreign.$_remote('single', data,
          [
            ['activities', 'dates', 1, 0],
            ['activities', 'type', 2, 0],
            ['activities', 'status', 5, 0]
          ]
        )
      }
      let targetTableEle = {
        activities: element
      }
      renderTable(targetTableEle, data);

      element.setAttribute("data-pb-tab-loaded", "1");

    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
    return ajax
  }
  const tab_account = function (element, event, htLen) {
    // console.log(event);
    PB_render_form.formRender_simple(StateData, element);
    console.log('dklfjdslfjsdlfjdslfj')
    const _process = (data) => {
      console.log(data)
      _process_a(data)
      return true
    }
    const _process_a = (data) => {
      if (element.getAttribute("data-pb-tab-loaded") === "1") {
        return true;
      }


      if (!data) {
        toastr.error('Unable to get data from the Server', 'Failed to Load');
        return false;
      }

      // set account id into submit button.
      //const form_id = formEl.getAttribute('id');
      //element.querySelector('button[form="' + form_id + '"]').setAttribute(atr.core.value, account_id);

      // save into global variable
      StateData['edit'] = data;
      console.log(StateData);

      console.log(data)
      console.log(element)

      PB_extend_placement.$_form(data, element);
      return true;

      element.setAttribute("data-pb-tab-loaded", "1");
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


  const navtabsTarget = function (element, event, isClick = true) {
    let a, b;
    // console.log(event);
    if (isClick) {
      targetEl = element.querySelector('#employee-' + event.value)
      a = event.value;
      b = event.type
    }
    else {
      targetEl = element.querySelector('#' + event[1] + '-' + event[4])
      a = event[4];
      b = event[3];
    }

    switch (a) {
      case pb.mng.employees.detail.p.overview:
        return tab_overview(targetEl, {
          value: a,
          type : b
        });

      case pb.mng.employees.detail.p.activities:
        return tab_activites(targetEl, {
          value: a,
          type : b
        });

      case pb.mng.employees.detail.p.payroll:
        return tab_payroll(targetEl, {
          value: a,
          type : b
        });

      case pb.mng.employees.detail.p.account:
        return tab_account(targetEl, {
          value: a,
          type : b
        });

      default:
        return eventNotFound(event);

    }
  }

  const loadsTarget = function (element, event) {
    let isChecked = false;
    let params = [];// i.e. ['goto', 'employee', '12', 'load', 'profits']
    // only one time goto. (from search page to profile page.)
    params.push(event.type);
    var form = _panelLE.search.querySelector("#" + event.place);
    console.log(form)
    if (event.value !== '0') {
      // direct
      // const input = event.querySelector('input');
      // params.push(input.name);
      //params.push(input.value);
      params.push('employee');
      params.push(event.data);
      params.push('navtab');
      params.push(event.value);
      isChecked = true;
      console.log(params);
    }
    else {
      // search
      form.querySelectorAll('input[type="radio"]').forEach((radio) => {
        if (radio.checked) {
          const select = radio.closest('label').querySelector('select');
          params.push(radio.getAttribute('name'));
          params.push(radio.value);
          params.push(select.getAttribute('name'));
          params.push(select.value);
          isChecked = true;
        }
      });
    }

    if (!isChecked) {
      Plug_sweetAlert.callMe(SW_type.simple, [3, 'Select Employee', 'Kindly click on a employee that you want to view']);
      return false;
    }
    console.log(params[4])
    event.data = params[4];
    // 1. account_details
    const account_sts = account_details(element.querySelector('#aside_zone'), event);
    if (!account_sts) {
      Plug_sweetAlert.callMe(SW_type.simple, [3, 'Employee Fetching Failed', 'Timeout for employee detail fetching, failed.'])
    }
    // 2. predefined page loading
    console.log(params);
    let _return = false;
    if (isChecked && params[4] !== '') {
      console.log('i am in');
      // element
      _return = navtabsTarget(element.querySelector('#tab_zone'), params, false);
      // html class adding
      console.log(params[1])
      element.querySelector('[href="#' + params[1] + '-' + params[4] + '"]').classList.add('active');
      element.querySelector('#' + params[1] + '-' + params[4]).classList.add(...CLS.visible.tab.active);
    }
    else {
      console.log('i am out');
    }
    //    const formEle = button.closest('form');
    //    formEle.reset();
    //params = [];
    return _return;
  }
  const actionsTarget = function (element, button) {
    targetEl = button.closest('form');

    let dataObj = PB_extend_collect.$_form(targetEl);
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act    : button.value,
      line   : 'profile',
      account: dataObj
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);


    details_ajaxCalling([button.value, 'profile'], dataObj);
  }

  // Public methods
  return {

    MED_forms  : function (_event) {
      return eleCheck() ? createsTarget(_callEl, _event) : false;
    },
    MED_tables : function (_event) {
      return eleCheck() ? tablesTarget(_callEl, _event) : false;
    },
    MED_cards  : function (_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },
    MED_actions: function (_event) {
      console.log('action')
      return eleCheck() ? actionsTarget(_callEl, _event) : false;
    },
    MED_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    MED_loads  : function (_event) {
      return eleCheck() ? loadsTarget(_callEl, _event) : false;
    },

    MED_state: function () {
      return pageOpen();
    },

  }
}();