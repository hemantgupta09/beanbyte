"use strict";

// Class definition
var dummy_ajax_employees_rpt = function () {
  // Shared variables


  // Private functions

  const activity = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.employees.activity.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              rows: {
                items: {},
                employee: {},
              },
              status: true
            }
            break;
          case 'state':
            response = {
              rows: {},
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.activity.p.absents:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;

          case 'report':
            console.log(params);
            // params:
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:date_id, 3:absent, 4:charge, 5:description]
                    12: [234, 1, 12, '87.60', '171.23', 'none'],
                    13: [406, 1, 12, '89.20', '168.16', 'none'],
                    14: [496, 1, 13, '87.60', '171.23', 'none'],
                    15: [505, 1, 14, '87.60', '171.23', 'none']
                  },
                  names: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  },

                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.activity.p.overtime:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;

          case 'report':
            console.log(params);
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:date_id, 3:absent, 4:charge, 5:description]
                    12: [234, 1, 12, '87.60', '171.23', 'none'],
                    13: [406, 1, 12, '89.20', '168.16', 'none'],
                    14: [496, 1, 13, '87.60', '171.23', 'none'],
                    15: [505, 1, 14, '87.60', '171.23', 'none']
                  },
                  names: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  },

                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.activity.p.expenses:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;
          case 'report':
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:date_id, 3:absent, 4:charge, 5:description]
                    12: [234, 1, 12, '87.60', '171.23', 'none'],
                    13: [406, 1, 12, '89.20', '168.16', 'none'],
                    14: [496, 1, 13, '87.60', '171.23', 'none'],
                    15: [505, 1, 14, '87.60', '171.23', 'none']
                  },
                  names: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  },

                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                },
              status: true
            }
            break;
        }

        break;

      case pb.rpt.employees.activity.p.shortage:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;
          case 'report':
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:date_id, 3:absent, 4:charge, 5:description]
                    12: [234, 1, 12, '87.60', '171.23', 'none'],
                    13: [406, 1, 12, '89.20', '168.16', 'none'],
                    14: [496, 1, 13, '87.60', '171.23', 'none'],
                    15: [505, 1, 14, '87.60', '171.23', 'none']
                  },
                  names: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  },

                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                },
              status: true
            }
            break;
        }

        break;

      case pb.rpt.employees.activity.p.commission:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;
          case 'report':
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:date_id, 3:absent, 4:charge, 5:description]
                    12: [234, 1, 12, '87.60', '171.23', 'none'],
                    13: [406, 1, 12, '89.20', '168.16', 'none'],
                    14: [496, 1, 13, '87.60', '171.23', 'none'],
                    15: [505, 1, 14, '87.60', '171.23', 'none']
                  },
                  names: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  },

                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                },
              status: true
            }
            break;
        }

        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const salary = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.employees.salary.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              rows: {
                items: {},
                employee: {},
              },
              status: true
            }
            break;
          case 'state':
            response = {
              rows: {},
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.salary.p.payroll:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;

          case 'report':
            console.log(params);
            // params:
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:name_id, 2:month_id, 3:salary, 4:activities, 5:shortages, 6:net, 7:status]
                    12: [234, 12, 1, '87.60', '171.23', '23', '15,000', '4', '132'],
                    13: [406, 12, 2, '89.20', '168.16', '23', '16,000', '2', '132'],
                    14: [496, 12, 3, '87.60', '171.23', '23', '17,000', '9', '132'],
                    15: [505, 12, 4, '87.60', '171.23', '23', '18,000', '6', '132']
                  },
                  months: {
                    1: [1, 'Jan'],
                    2: [2, 'Jan'],
                    3: [3, 'Feb'],
                    4: [4, 'Feb'],
                  },

                  names: {
                    11: [ 'Lokesh Kumar'],
                    12: [ 'Naveen Kumar'],
                    13: [ 'Suresh Kumar'],
                    14: [ 'Rakesh Kumar'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.salary.p.ledger:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;

          case 'report':
            console.log(params);
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:way_id, 2:date , 3:particulars, 4:v type, 5:trans_id,  6:debited, 7:credited, 8:closing, 9:view]
                    12: [234, '112', '12', '212', '1', 'VNO-78', '171.23', '15,000', '25,000', 'view1'],
                    13: [406, '113', '18', '213', '2', 'NGST-353', '168.16', '15,000', '25,000', 'view2'],
                    14: [496, '113', '14', '214', '1', 'VNO-78', '171.23', '15,000', '25,000', 'view3'],
                    15: [505, '112', '12', '215', '4', 'VNO-78', '171.23', '15,000', '25,000', 'view4']
                  },
                  particulars: {
                    212: [212, 'Opening Balance'],
                    213: [213, 'Sales Fuel'],
                    214: [214, 'SBI Bank C/A'],
                    215: [215, 'Cash'],
                  },
                  types: {
                    1: [1, 'sales'],
                    2: [2, 'receipt'],
                    4: [4, 'journal'],
                  },
                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                  way: {
                    112: ['to'],
                    113: ['by'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.employees.salary.p.slip:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                employees:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
              },
              status: true
            }
            break;
          case 'report':
            response = {
              rows:
                {
                  detail: {
                    account: 'DPS School, India',
                    closing: '340971',
                    range: ['2021-10-20', '2022-01-30'],
                    ledger_id: 232,
                  },
                  data: {
                    // [0:id, 1:customer_id ,  2:date_id, 3:item_id, 4:rate, 5:qty, 6:amount, 7:slip, 8:v_no, 9:bill]
                    12: [234, '212', '12', 1, '87.60 /Ltr', '171.23', '15,000', '', '273', ''],
                    13: [406, '213', '12', 2, '89.20 /Ltr', '168.16', '15,000', '', '273', ''],
                    14: [496, '214', '12', 3, '87.60 /Ltr', '171.23', '15,000', '', '273', ''],
                    15: [505, '218', '12', 4, '87.60 /Ltr', '171.23', '15,000', '', '273', '']
                  },
                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                  customers: {
                    212: ['DPS School, India'],
                    213: ['DPS School, India'],
                    214: ['chennai '],
                    218: ['DPS School, India']
                  },
                  items: {
                    1: ['Diesel'],
                    2: ['Diesel'],
                    3: ['Petrol'],
                    4: ['Petrol']
                  }
                },
              status: true
            }
            break;
        }

        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }


  // Public methods
  return {
    activity: function (event, params = []) {
      return activity(event, params);
    },
    salary: function (event, params = []) {
      return salary(event, params);
    }
  };
}();
