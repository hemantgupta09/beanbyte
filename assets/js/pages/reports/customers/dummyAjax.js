"use strict";

// Class definition
var dummy_ajax_customers_rpt = function () {
  // Shared variables


  // Private functions

  const sales = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.customers.sales.n:
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

      case pb.rpt.customers.sales.p.direct:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                customers:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, 'Lokesh Kumar', 'lucky', '0', '2'],
                    22: [22, 'Naveen Kumar', 'vicky', '0', '3'],
                    23: [23, 'Suresh Kumar', 'suri', '0', '4'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '0', '2'],
                  },
                categories:
                  {
                    // gid, name
                    2: [2, 'Govt Vehicles'],
                    3: [3, 'Regular Customers'],
                    4: [4, 'Agriculture Customers'],
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
                    // [0 => id, 1 => date_id, 2 => item_id, 3 => rate, 4 => qty, 5 => unit, 6 => amount, 7 => slip, 8 => token, 9 => vehicle_id]
                    12: [234, '12', 1, '87.60', '171.23', 1, '15000', '4', '132', '1'],
                    13: [406, '13', 2, '89.20', '1168.16', 1, '16000', '2', '132', '4'],
                    14: [496, '14', 3, '87.60', '171.23', 1, '17000', '9', '132', ''],
                    15: [505, '18', 4, '87.60', '171.23', 4, '18000', '6', '132', '3']
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
                  },
                  vehicles: {
                    1: ['VEHICLE - 1'],
                    2: ['VEHICLE - 2'],
                    3: ['VEHICLE - 3'],
                    4: ['VEHICLE - 4']
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.sales.p.group:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                groups:
                  {
                    // gid, name, prefix, counts, counts, status
                    2: [2, 'Govt Vehicles', '10 A/cs', '2', '1'],
                    3: [3, 'Regular Customers', '10 A/cs', '2', '1'],
                    4: [4, 'Agriculture Customers', '10 A/cs', '2', '1'],
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
                    // [0 => id, 1 => date_id, 2 => item_id, 3 => rate, 4 => qty, 5 => unit, 6 => amount, 7 => slip, 8 => token, 9 => vehicle_id]
                    12: [234, '12', 1, '87.60', '171.23', 1, '15000', '4', '132', '1'],
                    13: [406, '13', 2, '89.20', '1168.16', 1, '16000', '2', '132', '4'],
                    14: [496, '14', 3, '87.60', '171.23', 1, '17000', '9', '132', ''],
                    15: [505, '18', 4, '87.60', '171.23', 4, '18000', '6', '132', '3']
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
                  },
                  vehicles: {
                    1: ['VEHICLE - 1'],
                    2: ['VEHICLE - 2'],
                    3: ['VEHICLE - 3'],
                    4: ['VEHICLE - 4']
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.sales.p.vehicle:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                customers:
                  {
                    // [cid, name];
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  },
                vehicles:
                  {
                    // vid, name, customer_id, type
                    342: [342, 'RJ 14 GA 4523', '21'],
                    424: [424, 'RJ 34 FA 5345', '21'],
                    426: [426, 'RJ 34 CA 9928', '21'],
                    427: [427, 'RJ 34 CA 0897', '22'],
                  }
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
                    12: [234, '212', '12', 1, '87.60 /Ltr', '171.23', '15000', '1000', '273', '2000'],
                    13: [406, '213', '12', 2, '89.20 /Ltr', '168.16', '15000', '1000', '273', '2000'],
                    14: [496, '214', '12', 3, '87.60 /Ltr', '171.23', '15000', '1000', '273', '2000'],
                    15: [505, '218', '12', 4, '87.60 /Ltr', '171.23', '15000', '1000', '273', '2000']
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

  const transactions = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.customers.transactions.n:
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

      case pb.rpt.customers.transactions.p.simple:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {


                customers:
                  {
                    342: [342, 'Lokesh Kumar'],
                    424: [424, 'Naveen Kumar'],
                    426: [426, 'Suresh Kumar'],
                    427: [427, 'Rakesh Kumar'],
                  }

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

      case pb.rpt.customers.transactions.p.detailed:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {

                customers:
                  {
                    // vid, name, customer_id, type
                    342: [342, 'Lokesh Kumar', '21', '1'],
                    424: [424, 'Naveen Kumar', '22', '3'],
                    426: [426, 'Suresh Kumar', '23', '4'],
                    427: [427, 'Rakesh Kumar', '24', '4'],
                  }
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

      case pb.rpt.customers.transactions.p.statement:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                customers:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, 'Lokesh Kumar', 'lucky', '3', '2'],
                    22: [22, 'Naveen Kumar', 'vicky', '3', '3'],
                    23: [23, 'Suresh Kumar', 'suri', '3', '4'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '3', '2'],
                  },
                dues:
                  {
                    // gid, name
                    2: [2, '10000'],
                    3: [3, '2000'],
                    4: [4, '40000'],
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
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const bills = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.customers.bills.n:
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

      case pb.rpt.customers.bills.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                customers:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, 'Lokesh Kumar', 'lucky', '4', '2'],
                    22: [22, 'Naveen Kumar', 'vicky', '4', '3'],
                    23: [23, 'Suresh Kumar', 'suri', '4', '4'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '4', '2'],
                  },
                bills:
                  {
                    // gid, name
                    2: [2, '54'],
                    3: [3, '88'],
                    4: [4, '98'],
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
                    // [0:id, 1:date, 2:product_id, 3:bill, 4:slip, 5:vehiclea_id, 6:qty, 7:rate, 8:amount]
                    12: [234, '12', '212', '2222', '', '1', '163.90 Ltr	', '88.47 / Ltr', ' 132212334'],
                    13: [406, '18', '214', '2222', '', '4', '12.90 Ltr	', '88.47 / Ltr', ' 132212334'],
                    14: [496, '14', '213', '2222', '', '1', '163.54 Ltr	', '88.47 / Ltr', ' 132212334'],
                    15: [505, '12', '214', '2222', '', '2', '163.90 Ltr	', '88.47 / Ltr', ' 132212334']
                  },
                  products: {
                    212: [212, 'diesel'],
                    213: [213, 'Bishal Engine Oil'],
                    214: [214, 'petrol'],
                  },
                  vehicles: {
                    1: [1, 'RJ 14 GA 4523'],
                    2: [2, 'RJ 34 FA 5345'],
                    4: [4, 'RJ 34 CA 9928'],
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

      case pb.rpt.customers.bills.p.statement:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                months:
                  {
                    // vid, name, customer_id, type
                    342: [342, 'JAN-2023', '21', '1'],
                    424: [424, 'APR-2023', '21', '3'],
                    426: [426, 'JULY-2023', '21', '4'],
                    427: [427, 'ACT-2023', '22', '4'],
                  },
                years:
                  {
                    // [cid, name];
                    21: [21, 'JAN_FEB_MAR'],
                    22: [22, 'APR-MAY-JUN'],
                    23: [23, 'JULY-AUG-SEP'],
                    24: [24, 'OCT-NOV-DEC'],
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
                    // [0:id, 1:date, 2:cus_id, 3:bill_value, 4:slip, 5:bill no, 6:discount, 7:tcs, 8:amount, 9:received, 10:status_id, 11:actions]
                    12: [234, '12', '212', '2222', '5', '1', '163	', '0', ' 1322', '0', '312'],
                    13: [406, '18', '214', '2222', '3', '4', '12	', '0', ' 1322', '0', '312'],
                    14: [496, '14', '213', '2222', '4', '1', '163	', '0', ' 1322', '0', '312'],
                    15: [505, '12', '214', '2222', '9', '2', '163	', '0', ' 1322', '0', '312']
                  },
                  customers: {
                    212: [212, 'DPS School, India'],
                    213: [213, 'DPS School, India'],
                    214: [214, 'DPS School, India'],
                  },
                  bill_no: {
                    1: [1, 'NGST-353'],
                    2: [2, '1 / 67'],
                    4: [4, 'NGST-3213'],
                  },
                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                  status: {
                    312: ['due'],
                    313: ['no due'],

                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.bills.p.customer:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {

                customers:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, 'Lokesh Kumar', 'lucky', '5', '2'],
                    22: [22, 'Naveen Kumar', 'vicky', '5', '3'],
                    23: [23, 'Suresh Kumar', 'suri', '5', '4'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '5', '2'],
                  },
                bills:
                  {
                    // gid, name
                    2: [2, '55'],
                    3: [3, '99'],
                    4: [4, '45'],
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
                    // [0:id , 1:date, 2:bill_no, 3:slips, 4:bill_val, 5:discount, 6:tcs, 7:amount, 8:received, 9:status, 10:actions]
                    12: [234, '12', '1', '34', '1,08,000', '15', '0', '132', '0', '312', 'a'],
                    13: [406, '12', '1', '34', '1,08,000', '15', '0', '132', '0', '312', 'a'],
                    14: [496, '12', '1', '34', '1,08,000', '15', '0', '132', '0', '312', 'a'],
                    15: [505, '12', '1', '34', '1,08,000', '15', '0', '132', '0', '312', 'a']
                  },
                  bill_no: {
                    1: [1, 'NGST-353'],
                    2: [2, '1 / 67'],
                    4: [4, 'NGST-3213'],
                  },
                  dates: {
                    12: ['2022-12-12'],
                    13: ['2022-03-23'],
                    14: ['2022-12-15'],
                    18: ['2022-12-20']
                  },
                  status: {
                    312: ['due'],
                    313: ['no due'],

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


  const indents = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.customers.indents.n:
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

      case pb.rpt.customers.indents.p.bucket:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                years:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, '2020-2021' ],
                    22: [22, '2021-2022' ],
                    23: [23, '2022-2023' ],
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
                    // [0:id, 1:sr, 2:book_id, 3:from, 4:to, 5:total, 6:used, 7:avl, 8:valid, 9:actions]
                    12: [234, '1', 1, '87', '171', '15', '4', '132', '1'],
                    13: [406, '3', 2, '89', '168', '16', '2', '132', '4'],
                    14: [496, '4', 3, '87', '171', '17', '9', '132', '9'],
                    15: [505, '8', 4, '87', '171', '18', '6', '132', '3']
                  },
                  items: {
                    1: [1, 'Diesel'],
                    2: [2, 'Petrol'],
                    3: [3, 'Speed'],
                    4: [4, 'MAK 4T'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.indents.p.period:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                groups:
                  {
                    // gid, name, prefix, counts, counts, status
                    2: [2, 'Govt Vehicles', '2', '10 A/cs', '10', '1'],
                    3: [3, 'Regular Customers', '2', '10 A/cs', '10', '1'],
                    4: [4, 'Agriculture Customers', '2', '10 A/cs', '10', '1'],
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
                    // [0:id, 1:date_id, 2:vehicle_id, 3:item_id, 4:token, 5:value, 6:note, 7:reject, 8:cash, 9:book, 10:bill]
                    12: [234, '12', 1, '1', '171.23', '98', '15,000', '4', '132', '1', '63', "aaa"],
                    13: [406, '13', 2, '1', '168.16', '98', '16,000', '2', '132', '4', '63', "aaa"],
                    14: [496, '14', 3, '1', '171.23', '98', '17,000', '9', '132', '9', '63', "aaa"],
                    15: [505, '18', 4, '1', '171.23', '98', '18,000', '6', '132', '3', '63', "aaa"]
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
                  },
                  vehicles: {
                    1: ['VEHICLE - 1'],
                    2: ['VEHICLE - 2'],
                    3: ['VEHICLE - 3'],
                    4: ['VEHICLE - 4']
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.indents.p.book:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                books:
                  {
                    // vid, name, customer_id, type
                    342: [342, 'Science Book'],
                    424: [424, 'BeanByte Book'],
                    426: [426, 'History Book'],
                    427: [427, 'Maths Book'],
                  },

                customers: {
                  // [id, name, alias, [string]]
                  21: [21, 'Lokesh Kumar', 'lucky', '342'],
                  22: [22, 'Lokesh Kumar', 'lucky', '342'],
                  23: [23, 'Lokesh Kumar', 'lucky', '342'],
                  24: [24, 'Lokesh Kumar', 'lucky', '342'],
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
                    // [id, date_id, vehicle_id, item_id, token, value, note, reject, cash, book, bill]
                    12: [234, '12', 1, 1, '171.23', '98', '15,000', '4', '132', '1', '63'],
                    13: [406, '13', 2, 1, '168.16', '98', '16,000', '2', '132', '4', '63'],
                    14: [496, '14', 3, 1, '171.23', '98', '17,000', '9', '132', '9', '63'],
                    15: [505, '18', 4, 1, '171.23', '98', '18,000', '6', '132', '3', '63']
                  },
                  items: {
                    1: [1, 'Diesel'],
                    2: [2, 'Petrol'],
                    3: [3, 'Speed'],
                    4: [4, 'MAK 4T'],
                  },
                  vehicles: {
                    1: ['VEHICLE - 1'],
                    2: ['VEHICLE - 2'],
                    3: ['VEHICLE - 3'],
                    4: ['VEHICLE - 4']
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

      case pb.rpt.customers.indents.p.customer:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {

                customers:
                  {
                    21: [21, 'Lokesh Kumar'],
                    22: [22, 'Naveen Kumar'],
                    23: [23, 'Suresh Kumar'],
                    24: [24, 'Rakesh Kumar'],
                  }
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
                    // [id, date_id, vehicle_id, item_id, token, value, note, reject, cash, book, bill]
                    12: [234, '12', 1, '1', '171.23', '98', '15,000', '4', '132', '1', '63'],
                    13: [406, '13', 2, '1', '168.16', '98', '16,000', '2', '132', '4', '63'],
                    14: [496, '14', 3, '1', '171.23', '98', '17,000', '9', '132', '9', '63'],
                    15: [505, '18', 4, '1', '171.23', '98', '18,000', '6', '132', '3', '63']
                  },
                  items: {
                    1: [1, 'Diesel'],
                    2: [2, 'Petrol'],
                    3: [3, 'Speed'],
                    4: [4, 'MAK 4T'],
                  },
                  vehicles: {
                    1: ['VEHICLE - 1'],
                    2: ['VEHICLE - 2'],
                    3: ['VEHICLE - 3'],
                    4: ['VEHICLE - 4']
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
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const summary = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.customers.summary.n:
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

      case pb.rpt.customers.summary.p.accounts:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                customers:
                  {
                    // [cid, name, prefix, alias, category_id, status];
                    21: [21, 'Lokesh Kumar', '0', 'lucky', '2', '1'],
                    22: [22, 'Naveen Kumar', '0', 'vicky', '2', '1'],
                    23: [23, 'Suresh Kumar', '0', 'suri', '2', '0'],
                    24: [24, 'Rakesh Kumar', '0', 'rakhi', '3', '1'],
                  },
                categories:
                  {
                    // gid, name
                    2: [2, 'Govt Vehicles'],
                    3: [3, 'Regular Customers'],
                    4: [4, 'Agriculture Customers'],
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
                    // [id, date_id, customer_id, rate, qty, amount, slip, token]
                    12: [234, 1, '1', '87.60', '171.23', '1', '15,000', '4', '132'],
                    13: [406, 1, '2', '89.20', '168.16', '1', '16,000', '2', '132'],
                    14: [496, 1, '3', '87.60', '171.23', '1', '17,000', '9', '132'],
                    15: [505, 1, '4', '87.60', '171.23', '4', '18,000', '6', '132']
                  },
                  customers: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.summary.p.trade:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                dates:
                  {
                    // [id, name, alias];
                    21: [21, 'January', '2021'],
                    22: [22, 'February', '2021'],
                    23: [23, 'March', '2021'],
                    24: [24, 'April', '2021'],
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
                    // [id, date_id, item_id, rate, qty, amount, slip, token]
                    12: [234, 1, '1', '87.60', '171.23', '1', '15,000', '4', '132'],
                    13: [406, 1, '2', '89.20', '168.16', '1', '16,000', '2', '132'],
                    14: [496, 1, '3', '87.60', '171.23', '1', '17,000', '9', '132'],
                    15: [505, 1, '4', '87.60', '171.23', '4', '18,000', '6', '132']
                  },
                  customers: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.customers.summary.p.group:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                groups:
                  {
                    // [cid, name];
                    21: [21, 'Group 1'],
                    22: [22, 'Group 2'],
                    23: [23, 'Group 3'],
                    24: [24, 'Group 4'],
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
                    // [id, date_id, item_id, rate, qty, amount, slip, token]
                    12: [234, 1, '1', '87.60', '171.23', '1', '15,000', '4', '132'],
                    13: [406, 1, '2', '89.20', '168.16', '1', '16,000', '2', '132'],
                    14: [496, 1, '3', '87.60', '171.23', '1', '17,000', '9', '132'],
                    15: [505, 1, '4', '87.60', '171.23', '4', '18,000', '6', '132']
                  },
                  customers: {
                    1: [1, 'Lokesh Kumar'],
                    2: [2, 'Naveen Kumar'],
                    3: [3, 'Suresh Kumar'],
                    4: [4, 'Rakesh Kumar'],
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
    sales: function (event, params = []) {
      return sales(event, params);
    },
    transactions: function (event, params = []) {
      return transactions(event, params);
    },
    bills: function (event, params = []) {
      return bills(event, params);
    },
    indents: function (event, params = []) {
      return indents(event, params);
    },
    summary: function (event, params = []) {
      return summary(event, params);
    }
  };
}();
