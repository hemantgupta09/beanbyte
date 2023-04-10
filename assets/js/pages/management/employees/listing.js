"use strict";

// Class definition
var PB_ME_listing = function () {

  // Shared variables
  let StateData;
  let tableEle, filterEle, redData;
  let ajaxResponse;
  let cardsData;
  let tableObject = [];
  let $table;
  let Employee;


  const host = {
    server: 'https://9d0f471e-1577-48ff-8802-95b4084dc031.mock.pstmn.io',
    local : 'http://localhost:4250',
  };

  // Private functions
  function listing_ajaxCalling(button, params = []) {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];

    switch (btnValue) {
      case pb.mng.employees.listing.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'rows'  :
                {
                  employees: '56'
                },
              'status': true
            }
            break;
          case 'state':
            response = {
              'rows'  :
                {},
              'status': true
            }
            break;
        }
        break;

      case pb.mng.employees.listing.p.card:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  :
            {
              0: [

                {
                  'id'      : 10,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 11,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 12,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 14,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 15,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 16,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
              ],
              1: [
                {
                  'id'      : 9,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 10,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 11,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
              ],
              2: [
                {
                  'id'      : 9,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
                {
                  'id'      : 10,
                  'type'    : "card",
                  'name'    : "DPS School, India",
                  'balance' : "₹ 45,000",
                  'progress': "58%\n" + "Credit Used"
                },
              ],
            },
          'status': true
        }
        break;
      case pb.mng.employees.listing.p.table:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'rows'  : [
            {
              "id"             : 0,
              "employee_name"  : "Lokesh Kumar",
              "type"           : "regular",
              "contact"        : "8347342321",
              "credit_uses"    : "26% Used",
              "credit_amt"     : "823488",
              "current_balance": "244252",
              "current_status" : "Due",
              "last_update"    : "2023-06-05",
              "gap"            : "4 Mo & 0 Days ago\t"
            },
            {
              "id"             : 0,
              "employee_name"  : "Lokesh Kumar",
              "type"           : "regular",
              "contact"        : "8347342321",
              "credit_uses"    : "26% Used",
              "credit_amt"     : "823488",
              "current_balance": "244252",
              "current_status" : "Due",
              "last_update"    : "2023-06-05",
              "gap"            : "4 Mo & 0 Days ago\t"
            },
            {
              "id"             : 0,
              "employee_name"  : "Lokesh Kumar",
              "type"           : "regular",
              "contact"        : "8347342321",
              "credit_uses"    : "26% Used",
              "credit_amt"     : "823488",
              "current_balance": "244252",
              "current_status" : "Due",
              "last_update"    : "2023-06-05",
              "gap"            : "4 Mo & 0 Days ago\t"
            }
          ],
          'status': true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  // todo: add functions here.

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
      Employee = data.employees;

      const handleAdvancedSearchToggle = () => {
        let link = _listingLE.form.querySelector('#advance_search_toggle');

        link.addEventListener('click', function (e) {
          e.preventDefault();

          if (link.innerHTML === "Advanced Search") {
            link.innerHTML = "Hide Advanced Search";
          }
          else {
            link.innerHTML = "Advanced Search";
          }
        })
      }

      handleAdvancedSearchToggle();

      //now load the employees number
      let tarEle = _listingLE.action.querySelector('h3>span');
      tarEle.innerHTML = Employee;

      loadElement(_listingLE.tabs);

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
   * it integrates the datatables with simple table
   * @param options
   * @param methods
   * @param profile
   * @param call
   */
  const dataTableCalling = (options, methods, profile, call) => {
    let DT_options = {};
    //    console.log(methods);
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
  /**
   * It does basic tables rendering for the table
   * @param tableProfile
   * @param type
   */
  const basicTableCalling = (tableProfile, type = 'array') => {
    // rendering data into table using above profile.
    redData = PB_render_table.simpleRender(ajaxResponse, tableProfile, type);

    // have look into plain HTML table
    //console.log(redData);

    tableEle.appendChild(redData)

    // update table status
    tableEle.setAttribute('data-pb-table-loaded', '1');

    // apply common renders
    PB_render_common.initOnCall(tableEle);
  }
  /**
   * it returns all tables property
   * @param call
   * @returns {{methods: {"0": string, "1": string, "2": string, "3": string, "4": string, "5": string}, profile: {"0": *[], "1": *[], "2": *[]}, options: {"0": boolean, "1": boolean, "2": boolean, "3": boolean, "4": boolean, "5": boolean}, table: {"0": {css: *[], method: string, param: number[], style: number, type, value: string}, "1": {css: *[], method: string, param: number[], style: number, type, value: string}, "2": {css: *[], method: string, param: number[], style: number, type, value: string}, "3": {css: *[], method: string, param: number[], style: number, type, value: string}, "4": {css: *[], method: string, param: number[], style: number, type, value: string}, "5": {css: (string|number)[], method: string, param: (number|string[])[], style: number, type, value: string}}}}
   */
  const propertyDetails = (call) => {
    let tableProfile, profile, methods, options;
    switch (call) {
      case pb.mng.employees.listing.p.table:
        let OPTION = [3, ['card', 'card', 'card'], ['view-list', 'edit-list', 'delete-list']];
        tableProfile = {
          '0': {
            type  : TBL_ct.txt,
            method: 'd',
            value : '1,2',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '1': {
            type  : TBL_ct.txt,
            method: 'a',
            value : '3',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '2': {
            type  : TBL_ct.txt,
            method: 'd',
            value : '4,5',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '3': {
            type  : TBL_ct.txt,
            method: 'd',
            value : '6,7',
            param : [2, 1],
            style : 0,
            css   : []
          },
          '4': {
            type  : TBL_ct.txt,
            method: 'd',
            value : '8,9',
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
  /**
   * it handles all filters of datatables
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
            const iid = evt.target.getAttribute('data-pb-instance');
            console.log(iid);
            const fp = Plug_datePicker.getInstanceOnChange(iid);
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

  /**
   * It targets the particular card and handles all rendering of the data inside the card
   * @param element
   * @param params
   * @returns {AjaxPB}
   */
  const loadCards = function (element, event) {


    let targetEle = element.querySelector('[data-pb-target="cards"]');
    let place = targetEle.querySelector('[data-pb-paging="' + event.value + '"]');

    //set the page range
    let pageSize = targetEle.getAttribute('data-pb-size') ?? "20";
    let targetEntry = element.querySelectorAll('[data-pb-control="entry"]>span');

    targetEntry[0].innerText = (event.value - 1) * pageSize + 1;
    targetEntry[1].innerText = (event.value) * pageSize;
    targetEntry[2].innerText = Employee;


    targetEle.children.forEach((item) => {
      item.classList.add(CLS.display.none);
    });
    place.classList.remove(CLS.display.none);

    if (place.getAttribute(atr.core.loadOf.card) === "1") {
      return true;
    }

    const _process = (data) => {
      _process_a(data);
      return _process_b(data.employees);
    }

    const _process_a = (data) => {
      PB_extend_foreign.$_remote('single', data, [
        [
          "employees", "dates", "overdue", 0
        ],
        [
          "employees", "category", "category_id", 0
        ]
      ]);
    }
    const _process_b = (data) => {
      let template = element.querySelector('[data-pb-template="card"]>div');

      Object.keys(data).forEach((key, index) => {
        let node = template.cloneNode(true);
        let nodeData = data[key];

        //hide and show the tags
        let tags = node.querySelector('[data-pb-target="tags"]');

        Object.keys(nodeData.tags).forEach((tag, index) => {
          if (!nodeData.tags[tag]) {
            tags.querySelector('span[name="' + tag + '"]').classList.add(CLS.display.none);
          }
        })

        //convert status from value to string
        nodeData.status = PB_render_common.returnOnCall(nodeData.status, 'string', [6]);

        //calculate the gap
        nodeData.overdue = PB_render_common.returnOnCall(nodeData.overdue, 'gap', [0, 'z'])[0];

        // add src attribute or image.
        const image = node.querySelector('img');
        image.setAttribute('src', '../../assets/media/avatars/$$@icon@$$');

        //render the most common data
        node.innerHTML = PB_extend_append.$_single(node.innerHTML, nodeData);

        // remove image src attribute.
        image.removeAttribute('src');

        PB_render_common.initOnCall(node);
        node.classList.remove(CLS.display.none);
        place.children[0].appendChild(node);
        place.setAttribute(atr.core.loadOf.card, '1');
      });
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
  /**
   * It loads the cards
   * @param element
   * @param button
   * @returns {boolean}
   */
  const loadElement = function (element) {
    //first we make the div
    let place = element.querySelector('[data-pb-target="cards"]');

    for (let i = 1; i <= Math.ceil(Employee / 20); i++) {
      let node = document.createElement('div');
      node.setAttribute('data-pb-paging', i);
      node.setAttribute("data-pb-page-loaded", "0");
      node.classList.add(CLS.display.none);

      let childnode = document.createElement('div');
      childnode.classList.add("row", "g-6", "g-xl-9");
      node.append(childnode);

      place.appendChild(node);
    }
    //make paging button
    place = element.querySelector('[' + atr.core.target + '="pagination"]');

    let arrList = Array.from(place.children);

    for (let i = 2; i <= Math.ceil(Employee / 20); i++) {
      let clonenode = arrList[1].cloneNode(true);
      clonenode.classList.remove(CLS.visible.nav.active);
      clonenode.children[0].value = i;
      clonenode.children[0].innerText = i;
      arrList.splice(i, 0, clonenode);
    }
    place.innerHTML = "";

    arrList.forEach((item) => {
      place.appendChild(item);
    });

  }
  /**
   * It changes the active state of paging
   * @param element
   * @param button
   */
  const pagingTarget = function (element, event) {
    let tarEle = element.querySelector('[' + atr.core.target + '="pagination"]');

    let startPin = "0", endPin = tarEle.children.length.toString();

    //this is special case
    if (event.value === "++" || event.value === "--") {
      tarEle.children.forEach((ele, index) => {
        if (ele.classList.contains(CLS.visible.nav.active)) {
          if (event.value == "++") {
            event.value = (index + 1).toString();
          }
          else {
            event.value = (index - 1).toString();
          }
        }
        ;
      })
    }

    //this  is the edge case
    if (event.value === startPin) {
      event.value = "1";
    }
    if (event.value === endPin) {
      event.value = (tarEle.children.length - 1).toString();
    }

    let pin = "1";

    tarEle.children.forEach((ele, index) => {

      if (ele.classList.contains(CLS.visible.nav.active)) {
        ele.classList.remove(CLS.visible.nav.active);
        ele.classList.add(CLS.display.none);

        if (!tarEle.children[index + 1].classList.contains('next')) {
          tarEle.children[index + 1].classList.add(CLS.display.none);
        }
        if (!tarEle.children[index - 1].classList.contains('previous')) {
          tarEle.children[index - 1].classList.add(CLS.display.none);
        }
      }

      if (ele.children[0].value === event.value) {
        pin = index.toString();
      }
    });

    tarEle.children.forEach((ele, index) => {

      if (ele.children[0].value === pin) {
        ele.classList.add(CLS.visible.nav.active);
        ele.classList.remove(CLS.display.none);

        tarEle.children[index + 1].classList.remove(CLS.display.none);
        tarEle.children[index - 1].classList.remove(CLS.display.none);
      }
    });


    return loadCards(element, event);
  }
  /**
   * It loads the table  as well as integrates with datatables
   * @param element
   * @param button
   * @returns {boolean}
   */
  const renderTable = function (element, button) {
    tableEle = element.querySelector('table');
    filterEle = element.querySelector('[' + atr.core.target + '="filter"]');

    if (tableEle.getAttribute(atr.core.loadOf.table) === "1") {
      return true;
    }
    const ajax = new AjaxPB();
    const urlID = ajax.buildingURL([], {
      act : button.value.split('-')[1],
      line: button.name
    });
    ajax.callREQUEST({}, urlID, false);
    const responseX = ajax.getRESPONSE();
    console.log(responseX);

    ajaxResponse = listing_ajaxCalling([button.value.split('-')[1], button.name]);

    if (!ajaxResponse) {
      redData = PB_render_table.zeroRow(tableEle.querySelectorAll('thead>tr>th').length);
      return true;
    }

    const property = propertyDetails(button.value.split('-')[1]);

    basicTableCalling(property.table, 'object');
    dataTableCalling(property.options, property.methods, property.profile, button.value);

    // user is filtering
    filterEvents(filterEle, button.value.split('-')[1]);

    tableEle.setAttribute(atr.core.loadOf.table, '1');
    return true;
  }
  /**
   * It makes the routing for both tabs(cards, tables)
   * @param element
   * @param button
   */
  const navtabsTarget = function (element, event) {
    const navtab_cards = function (element, event) {
      return pagingTarget(element, {
        value: "1",
        type : "paging",
      });
    }
    const navtab_table = function (element, event) {
      // TODO:render the table @somesh Shirpe
      //return renderTable();
      return true;
    }

    switch (event.value) {
      case pb.mng.employees.listing.p.cards:
        return navtab_cards(element, event);

      case pb.mng.employees.listing.p.table:
        return navtab_table(element, event);

      default:
        return eventNotFound(event);
    }
  }

  return {

    // loading form
    MEL_action : function (path) {
      return true;
    },
    MEL_navtabs: function (_event) {
      return eleCheck() ? navtabsTarget(_callEl, _event) : false;
    },
    MEL_paging : function (_event) {
      return eleCheck() ? pagingTarget(_callEl, _event) : false;
    },
    MEL_creates: function (path) {
      return true;
    },


    // fetching all upcoming required details
    MEL_state: function () {
      return pageOpen();
    },

  };
}();