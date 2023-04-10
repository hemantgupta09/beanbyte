"use strict";

// Class definition
var PB_MC_detail = function () {
  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4230',
  };
  // Shared variables
  let StateData, targetEl, tableEle;
  var data;
  let CID = 0;
  let redData;
  let chartObject = {}, tableObject = {};
  let myPath;

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
      case pb.mng.customers.detail.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              rows    :
                {
                  recent   : {
                    // [id, name, tab, group]
                    12: [12, 'Lokesh Kumar', 'overview', 'Regular Customers'],
                    13: [13, 'Ramesh Kumar', 'profits', 'Regular Customers'],
                  },
                  customers: {
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
      case pb.mng.customers.detail.p.overview:
        //overviewTable
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'overDue_invoice': {
                // ['id':int, 'date':date, 'date':date, 'days':int, 'invoice_number':int, 'invoice_amount':double, 'discount':percentage, 'received_amount':int, 'percentage': percentage]
                11: ['11', '10', '21', '98', '12', '834738', '15%', '565464', '20%'],
                12: ['12', '11', '22', '32', '14', '834738', '15%', '565464', '20%'],
                13: ['13', '12', '23', '234', '15', '834738', '15%', '565464', '20%']
              },
              'receipts'       : {
                //  ['id':int ,'date':int,'account':string,'against':string,'received':int,'remaining':int]
                11: ['11', '10', 'cash', '12', '834834', '23434'],
                12: ['12', '21', 'cash', '12', '834834', '23434'],
                13: ['13', '22', 'cash', '12', '834834', '23434'],
                14: ['14', '11', 'cash', '12', '834834', '23434'],
                15: ['15', '12', 'cash', '12', '834834', '23434']
              },
              'credit_balance' :
                [
                  {
                    'id'    : 75,
                    'amount': 7576444
                  }
                ],

              'invoice': {
                /// ['id':int,'invoice id:int', 'date from:int' 'date to:int', value:decimal, amount:decimal, status:int]
                12: ['12', 'NGST-232', '10', '21', '9000', '12000', 0],
                13: ['13', 'NGST-232', '11', '22', '9000', '12000', 1],
                14: ['14', 'NGST-232', '12', '23', '9000', '12000', 2],
                15: ['15', 'NGST-232', '12', '24', '9000', '12000', 2],
                16: ['16', 'NGST-232', '12', '25', '9000', '12000', 1],
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

            },
          'status': true
        }
        break;

      case pb.mng.customers.detail.p.charts:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              0: {
                dataset: [
                  {
                    name: 'Sold',
                    type: 'area',
                    data: [30, 40, 40, 90, 90, 70, 70, 90, 90, 70, 70]
                  },
                ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              },
              1: {
                dataset: [
                  {
                    name: 'Sales',
                    type: 'bar',
                    data: [44, 55, 57, 56, 61, 58, 44, 55, 57, 56, 61, 58]
                  },
                  {
                    name: 'Received',
                    type: 'bar',
                    data: [76, 85, 101, 98, 87, 105, 76, 85, 101, 98, 87, 105]
                  }
                ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
              },
              2: {
                dataset: [
                  {
                    name   : 'Sales, Paid',
                    type   : 'bar',
                    stacked: true,
                    data   : [40, 50, 65, 70, 50, 30]
                  },
                  {
                    name   : 'Sales, Unpaid',
                    type   : 'bar',
                    stacked: true,
                    data   : [20, 20, 25, 30, 30, 20]
                  },
                  {
                    name: 'Total Sale',
                    type: 'area',
                    data: [60, 70, 90, 100, 80, 50]
                  }
                ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              }
            },
          'status': true
        }
        break;

      case pb.mng.customers.detail.p.profits:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'earnings'        :
                [
                  {
                    'id'    : 875,
                    'name'  : "Gross Profit",
                    'amount': 75645
                  },
                  {
                    'id'    : 876,
                    'name'  : "Interest Paid",
                    'amount': 75645
                  },
                  {
                    'id'    : 877,
                    'name'  : "Net Profit",
                    'amount': 75645
                  },
                ],
              'monthlyStatement': {
                //['id':int, 'month':date, 'sales':int ,'receipt':int ,'margin': int ,'interest': int, 'netprofit': int]
                11: ['11', '10', '2644', '826328', '75382', '8263', '86'],
                12: ['12', '12', '2644', '826328', '75382', '8263', '86'],
                13: ['13', '11', '2644', '826328', '75382', '8263', '86'],
                14: ['14', '21', '2644', '826328', '75382', '8263', '86']
              },
              'dates'           : {
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

        //
        break;


      case pb.mng.customers.detail.p.vehicles:
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

      case pb.mng.customers.detail.p.interest:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              'basic' :
                {
                  //['id':int, 'txndata':date, 'litre':int, 'amount':int, 'days':int, 'margin':int, 'interest':int, 'nett': int]
                  11: ["11", "22", "2644", "826328", "45", "8263", "86", "6877"],
                  12: ["12", "11", "26234", "826328", "95", "8263", "86", "6877"],
                  13: ["13", "12", "26442", "826328", "45", "8263", "86", "6877"]
                },
              'custom':
                {
                  //['id'int, ' ,'txndate':date, 'amount':int, 'dayscleared':int, 'interest':int , 'cumulative':int]
                  11: ["11", "21", "826328", "45", "86", "6877"],
                  12: ["12", "22", "826328", "45", "86", "6877"],
                  13: ["13", "11", "826328", "45", "86", "6877"],
                },
              'dates' : {
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
    }

    //
    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  /**
   * this will be used for show page's base-0 data.
   */
  /**
   * it handles all search functionality for customers
   * @param page
   */
  const pageOpen = () => {

    const _process = (data) => {
      _process_a(data);
      _process_b(data)
    }
    const _process_a = (data) => {
      StateData = data['pageState'];

      // init the search


      var PB_customer_search = function () {
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

          function findCustomer(item) {
            if (
              item.getAttribute('data-user-name').indexOf(user_search_for) > -1
              ||
              item.getAttribute('data-user-alias').indexOf(user_search_for) > -1
            ) {
              got = true;
              item.classList.remove('d-none');
            }
            else {
              item.classList.add('d-none');
            }
          }

          setTimeout(function () {

            // Hide recently viewed
            suggestionsElement.classList.add('d-none');

            user_search_for = searchObject.getQuery().toLowerCase();
            console.log(user_search_for);

            var searchable_zone = resultsElement.querySelector('[data-kt-target="search"]').children;


            searchable_zone.forEach(findCustomer)

            if (got) {
              // Show results
              resultsElement.classList.remove('d-none');
              // Hide empty message
              emptyElement.classList.add('d-none');
              got = false;
            }
            else {
              // Hide results
              resultsElement.classList.add('d-none');
              // Show empty message
              emptyElement.classList.remove('d-none');
            }

            // Complete search
            search.complete();
          }, 100);
        }

        var clear = function (search) {
          // Show recently viewed
          suggestionsElement.classList.remove('d-none');
          // Hide results
          resultsElement.classList.add('d-none');
          // Hide empty message
          emptyElement.classList.add('d-none');
          // got value reset
          got = false;
        }

        // Public methods
        return {
          init: function () {
            // Elements
            element = document.querySelector('#pb_customer_search_handler');

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


      PB_customer_search.init();

    }
    const _process_b = (data) => {
      console.log(data);
      // console.log(data);
      let custEle, results, temp;

      results = PBapp.querySelector('[data-kt-search-element="results"] > div');
      temp = results.querySelector('[data-pb-template="search"]')
      let child;

      // append customers
      $.each(data.customers, (index, value) => {
        custEle = temp.cloneNode(true);
        custEle.classList.remove('d-none');
        custEle.setAttribute('data-user-name', value[1].toLowerCase());
        custEle.setAttribute('data-user-alias', value[2]);
        custEle.querySelector('input').value = value[0];
        child = custEle.querySelector('[data-pb-target="search"]').children;
        child[0].innerText = value[1];
        child[1].innerText = value[2];
        child[2].innerText = 'Group:' + value[3];
        results.appendChild(custEle);
      })


      // append recent
      results = PBapp.querySelector('[data-kt-search-element="suggestions"] > div');
      temp = results.querySelector('[data-pb-template="recent"]')
      $.each(data.recent, (index, value) => {
        custEle = temp.cloneNode(true);
        custEle.value = value[2]; // tab
        custEle.querySelector('input').value = value[0]; // customer_id
        custEle.classList.remove('d-none');
        child = custEle.querySelector('[data-pb-target="recent"]').children;
        child[0].innerText = value[1]; // customer name
        child[1].innerText = value[3]; // customer group
        results.appendChild(custEle);
      });
    }

    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : 'page',
      type: 'open'
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);

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
    const data = details_ajaxCalling([pb.mng.customers.detail.n, 'state'])

    // this data save into variables.
    // it will be called when create form initiated.
    StateData = data;

    // init the search


    var PB_customer_search = function () {
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

        function findCustomer(item) {
          if (
            item.getAttribute('data-user-name').indexOf(user_search_for) > -1
            ||
            item.getAttribute('data-user-alias').indexOf(user_search_for) > -1
          ) {
            got = true;
            item.classList.remove('d-none');
          }
          else {
            item.classList.add('d-none');
          }
        }

        setTimeout(function () {

          // Hide recently viewed
          suggestionsElement.classList.add('d-none');

          user_search_for = searchObject.getQuery().toLowerCase();
          console.log(user_search_for);

          var searchable_zone = resultsElement.querySelector('[data-kt-target="search"]').children;


          searchable_zone.forEach(findCustomer)

          if (got) {
            // Show results
            resultsElement.classList.remove(CLS.display.none);
            // Hide empty message
            emptyElement.classList.add('d-none');
            got = false;
          }
          else {
            // Hide results
            resultsElement.classList.add('d-none');
            // Show empty message
            emptyElement.classList.remove('d-none');
          }

          // Complete search
          search.complete();
        }, 100);
      }

      var clear = function (search) {
        // Show recently viewed
        suggestionsElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message
        emptyElement.classList.add('d-none');
        // got value reset
        got = false;
      }

      // Public methods
      return {
        init: function () {
          // Elements
          element = document.querySelector('#pb_customer_search_handler');

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


    PB_customer_search.init();


  }

  /**
   * it loads ajax response for overview_tabs and save into ajaxresponse global variable
   * @param element
   * @param params
   * @returns {boolean}
   */
  const account_details = function (element, event) {
    const setCID = (id) => {
      CID = id;
    }
    setCID(params[2]);
    // get data from ajax

    //    const ajax = new AjaxPB();
    //    const urlID = ajax.buildingURL([], {
    //      act    : pb.mng.customers.detail.p.charts,
    //      line   : params[0],
    //      account: params[2]
    //    });
    //    ajax.callREQUEST({}, urlID, false);
    //    const responseX = ajax.getRESPONSE();
    //    console.log(responseX);
    const _process = (data) => {
      return _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);

      //      data = details_ajaxCalling([pb.mng.customers.detail.p.charts, params[0]], [params[2]]);
      if (!data) return false;

      console.log(data);

      // render the response data (if required)

      // append the data into element.
      // todo: @bharti append data into element,

      return true;
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act    : event.value,
      type   : event.type,
      account: event.data
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }
  /**
   * it integrates the datatables with the target table
   * @param options
   * @param methods
   * @param profile
   * @param call
   */
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
  /**
   * it retuns the profile for target table
   * @param type
   * @returns {{methods: {"0": string, "1": string, "2": string, "3": string, "4": string, "5": string}, profile: {"0": *[], "1": *[], "2": *[]}, options: {"0": boolean, "1": boolean, "2": boolean, "3": boolean, "4": boolean, "5": boolean}, table: ({"0": {css: *[], method: string, param: *[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: number[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}, "5": {css: (string|number)[], method: string, param: (number|string[])[], style: number, type, value: string}}|{"0": {css: *[], method: string, param: number[], style: number, type, value: string}, "1": {css: *[], method: string, param: string[], style: number, type, value: string}, "2": {css: *[], method: string, param: *[], style: number, type, value: string}, "3": {css: *[], method: string, param: number[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}, "5": {css: (string|number)[], method: string, param: (number|string[])[], style: number, type, value: string}}|{"0": {css: *[], method: string, param: *[], style: number, type, value: string}, "1": {css: *[], method: string, param: *[], style: number, type, value: string}, "2": {css: *[], method: string, param: *[], style: number, type, value: string}, "3": {css: *[], method: string, param: *[], style: number, type, value: string}, "4": {css: *[], method: string, param: *[], style: number, type, value: string}, "5": {css: *[], method: string, param: number[], style: number, type, value: string}, "6": {css: (string|number)[], method: string, param: (number|string[])[], style: number, type, value: string}}|{"0": {css: *[], method: string, param: number[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: number[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}, "5": {css: *[], method: string, param: number[], style: number, type, value: string}, "6": {css: *[], method: string, param: number[], style: number, type, value: string}}|{"0": {css: *[], method: string, param: *[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: *[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}}|{"0": {css: *[], method: string, param: *[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: number[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}, "5": {css: *[], method: string, param: number[], style: number, type, value: string}})}}
   */
  const getProfile = function (type) {
    let OPTION;
    let tableProfile, profile, methods, options;
    switch (type) {
      case 'receipts':
        OPTION = [3, ['card', 'card', 'action'], ['view-detail', 'edit-detail', 'delete-detail']];
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
            type  : TBL_ct.amt,
            method: 'b',
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
            style : 2,
            css   : ['', 'end', 150]
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
      case 'invoice':
        OPTION = [3, ['card', 'card', 'action'], ['view-detail', 'edit-detail', 'delete-detail']];
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
            type  : TBL_ct.dt,
            method: 'c',
            value : '2,3',
            param : ['a'],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '4',
            param : [],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '5',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.sts,
            method: 'a',
            value : '6',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.act,
            method: 'b',
            value : '0',
            param : OPTION,
            style : 2,
            css   : ['', 'end', 150]
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
      case 'monthlyStatement':
        OPTION = [3, ['card', 'card', 'action'], ['view-statement', 'edit-statement', 'delete-statement']];
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
            type  : TBL_ct.amt,
            method: 'a',
            value : '2',
            param : [],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '3',
            param : [],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '4',
            param : [],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '5',
            param : [],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.amt,
            method: 'b',
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
            style : 2,
            css   : ['', 'end', 150]
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
      case 'vehicle':
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
            type  : TBL_ct.txt,
            method: 'a',
            value : '1',
            param : [2, 1],
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
            type  : TBL_ct.txt,
            method: 'a',
            value : '4',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '5',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '6': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '6',
            param : [2, 1],
            style : 0,
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
      case 'custom':
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
            type  : TBL_ct.amt,
            method: 'b',
            value : '3',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.amt,
            method: 'a',
            value : '4',
            param : [],
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
      case 'basic':
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
            type  : TBL_ct.amt,
            method: 'b',
            value : '2',
            param : [2, 0],
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
            type  : TBL_ct.txt,
            method: 'a',
            value : '4',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '5',
            param : [2, 0],
            style : 0,
            css   : []
          },
          '5': {
            type  : TBL_ct.amt,
            method: 'b',
            value : '6',
            param : [2, 0],
            style : 0,
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
    }
    return {
      table  : tableProfile,
      options: options,
      methods: methods,
      profile: profile
    };
  }

  /**
   * it handles all filters
   * @param element
   * @param btnValue
   */
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

  /**
   * it does table rendering for multiple tables and add the datatable also as well as append the target body to target element
   * @param targetTableEle
   * @param data
   * @returns {boolean}
   */
  const renderTable = function (targetTableEle, data) {
    let renderedData;
    Object.keys(targetTableEle).forEach((key, index) => {
      let targetEle = targetTableEle[key].querySelector('table');
      let filterEle = targetTableEle[key].querySelector('[data-pb-target="filter"]');
      let property = getProfile(key);

      if (data[key]) {
        //now we make the profile
        renderedData = PB_render_table.simpleRender(data[key], property.table, 'array');

      }
      else {
        let columns;

        console.log('status has failed, table data :' + JSON.stringify(data));
        columns = targetEle.querySelectorAll('thead>tr>th').length;
        renderedData = PB_render_table.zeroRow(columns);
      }

      // calling other basic plugin functions
      targetEle.appendChild(renderedData);
      PB_render_common.initOnCall(targetEle);

      //datatable code
      dataTableCalling(property.options, property.methods, property.profile, key);

      // user is filtering
      filterEvents(filterEle, key);
    })

    // for enable dropdown in the table.
    KTMenu.init();
    return true;
  }

  /**
   * it does card rendering multiple time (it clone the node then put the data dynamically into cards)
   * @param targetNodeEle
   * @param data
   */
  const renderNode = function (targetNodeEle, data) {
    //here we write the node logic so let get started
    let targetEle = targetNodeEle.querySelector('[data-pb-template="node"]');
    let place = targetNodeEle.querySelector('#kt_customer_view_payment_method')

    console.log(data)
    Object.keys(data).forEach((key, index) => {
      let cloneNode = targetEle.cloneNode(true);

      cloneNode.querySelectorAll('td').forEach((item, index) => {
        item.innerText = data[key][index + 1];
      })
      cloneNode.classList.remove('d-none');
      place.appendChild(cloneNode);
    })
  }
  /**
   * It loads tab_overview data
   * @param element
   * @param button
   * @returns {boolean}
   */
  const tab_overview = function (element, event) {
    if (element.getAttribute("data-pb-tab-loaded") === "1") {
      return true;
    }
    //    console.log(element)
    //    // console.log(button);
    //    console.log('calling overview for get data from ajax function and load into html element')
    // get data from ajax
    //        const ajax = new AjaxPB();
    //        const urlID = ajax.buildingURL([], {
    //
    //          act : button,
    //          line: [getCID()]
    //        });
    //        ajax.callREQUEST({}, urlID, true);
    //        const responseX = ajax.getRESPONSE();
    //        console.log(responseX);
    //
    //        data = details_ajaxCalling(button, [getCID()]);
    //        console.log(data);

    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);

      if (data) {
        // match the foreign key matching
        PB_extend_foreign.$_remote('single', data,
          [
            ['receipts', 'dates', 1, 0],
            ['invoice', 'dates', 2, 0],
            ['invoice', 'dates', 3, 0],
            ['overDue_invoice', 'dates', 1, 0],
            ['overDue_invoice', 'dates', 2, 0],
          ]
        )
      }

      let targetTableEle = {
        receipts: element.children[1],
        invoice : element.children[3]
      }

      let targetCommonEle = {
        credit_balance: element.children[0].querySelector('span'),
      }

      renderTable(targetTableEle, data);

      renderNode(element.children[2], data['overDue_invoice']);


      targetCommonEle.credit_balance.innerText = PB_render_common.returnOnCall(data.credit_balance[0].amount, 'amount', [0, 1]);

      element.setAttribute("data-pb-tab-loaded", "1");
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
   * it loads tab_profits data
   * @param element
   * @param event
   * @param htLen
   * @returns {boolean}
   */
  const tab_profits = function (element, event, htLen) {

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
    // _ProfitTable(data);
    //    console.log(data);
    //    console.log(element)

    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);

      PB_extend_foreign.$_remote('single', data, [
          ['monthlyStatement', 'dates', 1, 0]
        ]
      );
      // render the response data (if required)
      let targetTableEle = {
        'monthlyStatement': element.children[1],
      }
      let targetCommonEle = {
        'earnings': element.children[0]
      }
      console.log(element.children[0])
      console.log(targetCommonEle.earnings.querySelectorAll('h1'))
      targetCommonEle.earnings.querySelectorAll('h1').forEach((item, index) => {
        item.setAttribute('data-kt-countup-value', data['earnings'][index].amount);
      })

      renderTable(targetTableEle, data);
      element.setAttribute("data-pb-tab-loaded", "1");
      return true;
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type,
    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }
  /**
   * it loads tab_charts data
   * @param element
   * @param event
   * @returns {boolean}
   */
  const tab_charts = function (element, event) {
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
    }
    const _process_a = (data) => {
      console.log(data);

      let targetEles = element.querySelectorAll('[data-pb-child="chart"] > div');

      const profile = {
        0: {
          chart: {
            type  : targetEles[0].getAttribute('data-pb-chart'),
            height: parseInt(KTUtil.css(targetEles[0], 'height')),
          },

          color  : ['Classic10'],
          tooltip: {
            style: ['light', 10]
          }
        },
        1: {
          chart: {
            type  : targetEles[1].getAttribute('data-pb-chart'),
            height: parseInt(KTUtil.css(targetEles[1], 'height')),
          },

          color  : ['Classic10'],
          tooltip: {
            style: ['light', 10]
          }
        },
        2: {
          chart: {
            type  : targetEles[2].getAttribute('data-pb-chart'),
            height: parseInt(KTUtil.css(targetEles[2], 'height')),
            stack : true,
          },

          color  : ['Classic10'],
          tooltip: {
            style: ['light', 10]
          }
        },
      }
      const method = {
        chart     : ACT_keys.method.sim,
        legend    : ACT_keys.method.min,
        colors    : ACT_keys.method.sim,
        grid      : ACT_keys.method.adv,
        tooltip   : ACT_keys.method.sim,
        states    : ACT_keys.method.min,
        fill      : ACT_keys.method.min,
        xaxis     : ACT_keys.method.adv,
        yaxis     : ACT_keys.method.adv,
        strock    : ACT_keys.method.min,
        dataLabels: ACT_keys.method.min,
      };

      targetEles.forEach((targetEle, index) => {
        redData = Option_charts.createDataset(data[index]);

        let chartOpt = Option_charts.getProperty('options');
        let chartDft = Option_charts.getProperty('default');
        for (const chartOptKey in chartOpt) {
          redData[chartOptKey] = Option_charts.buildingOptions(
            chartOptKey,
            method[chartOptKey] ?? CT_min,
            profile[index][chartOptKey] ?? chartDft[chartOptKey]);
        }
        for (let i = 0; i < 11; i++) {

        }

        console.log(redData);
        // console.log(redData);
        chartObject[pb.mng.customers.detail.p.charts] = Plug_apexChart.Init_onCalling(targetEle, redData, 'new');
      })
      element.setAttribute("data-pb-tab-loaded", "1");

    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL(thePathArr, {
      act : event.value,
      type: event.type,

    }, host.local);
    ajax.callREQUEST({}, urlID, false, _process);
  }
  /**
   * it loads the tab_vehicles  data
   * @param element
   * @param event
   * @param htLen
   * @returns {boolean}
   */
  const tab_vehicles = function (element, event, htLen) {
    // console.log(event);
    if (element.getAttribute("data-pb-tab-loaded") === "1") {
      return true;
    }
    //    console.log('calling vehicles for get data from ajax function and load into html element')
    // get data from ajax
    //        const ajax = new AjaxPB();
    //        const urlID = ajax.buildingURL([], {
    //          act : event,
    //          line: [getCID()]
    //        });
    //        ajax.callREQUEST({}, urlID, false);
    //        const responseX = ajax.getRESPONSE();
    //        console.log(responseX);
    //
    //        data = details_ajaxCalling(event, [getCID()]);
    //        console.log(data);
    // _VehicleTable(data,event);
    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);

      let targetTableEle = {
        'vehicle': element
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
  }
  /**
   * it loads the tab_interest data
   * @param element
   * @param event
   * @param htLen
   * @returns {boolean}
   */
  const tab_interest = function (element, event, htLen) {
    if (element.getAttribute("data-pb-tab-loaded") === "1") {
      return true;
    }
    // console.log(event);
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
    //    console.log(element)
    const _process = (data) => {
      _process_a(data)
    }
    const _process_a = (data) => {
      console.log(data);

      PB_extend_foreign.$_remote('single', data, [
          ['basic', 'dates', 1, 0],
          ['custom', 'dates', 1, 0]
        ]
      );
      // _VehicleTable(data,event);
      let targetTableEle = {
        'basic' : element.children[0],
        'custom': element.children[1]
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
  }
  /**
   * it set the routing for the tabs
   * @param element
   * @param event
   * @param isClick
   */
  const navtabsTarget = function (element, event, isClick = true) {
    console.log('i am here - ');
    let a, b;
    // console.log(event);
    if (isClick) {
      targetEl = element.querySelector('#customer-' + event.value)
      a = event.value;
      b = event.getAttribute('name');
    }
    else {
      targetEl = element.querySelector('#' + event[1] + '-' + event[4])
      a = event[4];
      b = event[3];
    }

    switch (a) {
      case pb.mng.customers.detail.p.charts:
        return tab_overview(targetEl, [a, b]);
        break;
      case pb.mng.customers.detail.p.charts:
        return tab_charts(targetEl, [a, b]);
        break;
      case pb.mng.customers.detail.p.profits:
        return tab_profits(targetEl, [a, b]);
        break;
      case pb.mng.customers.detail.p.vehicles:
        return tab_vehicles(targetEl, [a, b]);
        break;
      case pb.mng.customers.detail.p.interest:
        return tab_interest(targetEl, [a, b]);
        break;
    }
  }

  /**
   * when user Select the particular customer profile then this function load the first tab (overview) data of that customer
   * @param element
   * @param event
   * @returns {boolean}
   */
  const gotosTarget = function (element, event) {
    let isChecked = false;
    let params = [];// i.e. ['goto', 'customer', '12', 'navtab', 'profits']
    // only one time goto. (from search page to profile page.)
    params.push(event.name);
    var form = event.closest('form');

    if (event.value !== '0') {
      // direct
      const input = event.querySelector('input');
      params.push(input.name);
      params.push(input.value);
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
    console.log(isChecked);

    if (!isChecked) {
      Plug_sweetAlert.callMe(SW_type.simple, [3, 'Select Customer', 'Kindly click on a customer that you want to view']);
      return false;
    }

    // 1. account_details
    const account_sts = account_details(element.querySelector('#aside_zone'), params)
    if (!account_sts) {
      Plug_sweetAlert.callMe(SW_type.simple, [3, 'Customer Fetching Failed', 'Timeout for customer detail fetching, failed.'])
    }
    // 2. predefined page loading
    // console.log(params);
    if (isChecked && params[4] !== '') {
      console.log('i am in');
      // element
      navtabsTarget(element.querySelector('#tab_zone'), params, false);
      // html class adding
      element.querySelector('[href="#' + params[1] + '-' + params[4] + '"]').classList.add('active');
      element.querySelector('#' + params[1] + '-' + params[4]).classList.add(...CLS.visible.tab.active);
    }
    else {
      console.log('i am out');
    }
    const formEle = event.closest('form');
    formEle.reset();
    params = [];

    return true;
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

    // loading form
    MCD_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    MCD_creates: function (_event) {
      return eleCheck() ? cardsTarget(_callEl, _event) : false;
    },

    /**
     * todo: @lokesh
     * use case: [balance update modal, profile update modal, details showing, vehicle edit]
     * @param element
     * @param event
     * @constructor
     */
    MCD_modals: function (element, event) {
      // modalsTarget(element, button);
    },

    /**
     * todo: @lokesh
     * use case: [save new balance, save new account detail, save configs, download PDF, send alerts, stop credit, save vehicle ]
     * @param element
     * @param button
     * @constructor
     */
    MCD_saves: function (button) {
      // savesTarget(element, button);
    },

    MCD_gotos: function (_event) {
      return eleCheck() ? gotosTarget(_callEl, _event) : false;
    },

    // fetching all basic required details
    MCD_page: function () {
      pageOpen();
    },

    //    // fetching all upcoming required details
    //    MCD_state: function () {
    //      staticData();
    //    },

  };
}();