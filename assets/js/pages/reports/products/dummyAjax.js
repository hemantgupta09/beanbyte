"use strict";

// Class definition
var dummy_ajax_products_rpt = function () {
  // Shared variables


  // Private functions

  const purchases = (event, params) => {
    let response;

    console.log(event);
    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.products.purchases.n:
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

      case pb.rpt.products.purchases.p.category:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                categories:
                  {
                    // [cid, name];
                    21: [21, 'Category 1'],
                    22: [22, 'Category 2'],
                    23: [23, 'Category 3'],
                    24: [24, 'Category 4'],
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
                    12: [234, '1', 1, '87', '171', '15', '4', '132', '1', 'A-1'],
                    13: [406, '3', 2, '89', '168', '16', '2', '132', '4', 'A-1'],
                    14: [496, '4', 3, '87', '171', '17', '9', '132', '9', 'A-1'],
                    15: [505, '8', 4, '87', '171', '18', '6', '132', '3', 'A-1']
                  },
                  items: {
                    1: [1, 'Book 1'],
                    2: [2, 'Book 1'],
                    3: [3, 'Book 2'],
                    4: [4, 'Book 2'],
                  }
                },
              status: true
            }
            break;
        }
        break;

      case pb.rpt.products.purchases.p.item:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                items:
                  {
                    // [cid, name];
                    21: [21, 'item 1'],
                    22: [22, 'item 2'],
                    23: [23, 'item 3'],
                    24: [24, 'item 4'],
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

      case pb.rpt.products.purchases.p.supplier:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                suppliers:
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

      case pb.rpt.products.purchases.p.invoice:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                invoices:
                  {
                    // [id, name, alias];
                    21: [21, 'invoice 1', '12'],
                    22: [22, 'invoice 2', '13'],
                    23: [23, 'invoice 3', '14'],
                    24: [24, 'invoice 4', '18'],
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
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const sales = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.products.sales.n:
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

      case pb.rpt.products.sales.p.category:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                categories:
                  {
                    // [cid, name];
                    21: [21, 'Category 1'],
                    22: [22, 'Category 2'],
                    23: [23, 'Category 3'],
                    24: [24, 'Category 4'],
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

      case pb.rpt.products.sales.p.item:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                items:
                  {
                    // [cid, name];
                    21: [21, 'item 1'],
                    22: [22, 'item 2'],
                    23: [23, 'item 3'],
                    24: [24, 'item 4'],
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

      case pb.rpt.products.sales.p.customer:
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
                    // [0:id, 1:date_id, 2:vehicle_id, 3:item_id, 4:token, 5:value, 6:note, 7:reject, 8:cash, 9:book, 10:bill]
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

      case pb.rpt.products.sales.p.advance:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                items:
                  {
                    // [cid, name];
                    21: [21, 'item 1'],
                    22: [22, 'item 2'],
                    23: [23, 'item 3'],
                    24: [24, 'item 4'],
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
                    12: [234, 12, 1, 1, '171.23', '98', '15,000', '4', '132', '1', '63'],
                    13: [406, 13, 2, 1, '168.16', '98', '16,000', '2', '132', '4', '63'],
                    14: [496, 14, 3, 1, '171.23', '98', '17,000', '9', '132', '9', '63'],
                    15: [505, 18, 4, 1, '171.23', '98', '18,000', '6', '132', '3', '63']
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
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  const stocks = (event, params) => {
    let response;

    console.log(event);

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType)

    switch (btnValue) {
      case pb.rpt.products.stocks.n:
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

      case pb.rpt.products.stocks.p.item:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                items:
                  {
                    // [cid, name];
                    21: [21, 'item 1'],
                    22: [22, 'item 2'],
                    23: [23, 'item 3'],
                    24: [24, 'item 4'],
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


      case pb.rpt.products.stocks.p.location:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'tab':
            response = {
              rows: {
                locations:
                  {
                    // [cid, name];
                    21: [21, 'Location 1'],
                    22: [22, 'Location 2'],
                    23: [23, 'Location 3'],
                    24: [24, 'Location 4'],
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
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }


  // Public methods
  return {
    purchases: function (event, params = []) {
      return purchases(event, params);
    },
    sales: function (event, params = []) {
      return sales(event, params);
    },
    stocks: function (event, params = []) {
      return stocks(event, params);
    },

  };
}();
