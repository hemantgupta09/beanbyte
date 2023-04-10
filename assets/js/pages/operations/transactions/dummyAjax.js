"use strict";

// Class definition
var dummy_ajax_transactions_opr = function () {
  // Shared variables


  // Private functions

  const banking = (event, params) => {

    let response;
    var xResponse, xData;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log(btnValue);
    const btnType = event[1];
    console.log(btnType);

    switch (btnValue) {
      case pb.opr.transactions.banking.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  "menu": {
                    0: {"id": 0, "value": 10000, "type": "0"},
                    1: {"id": 1, "value": 11111, "type": "1"},
                    2: {"id": 2, "value": 22222, "type": "1"},
                    3: {"id": 3, "value": 33333, "type": "1"},
                    4: {"id": 4, "value": 44444, "type": "1"},
                    5: {"id": 5, "value": 51, "type": "1"}
                  }
                },
              },
              "status": true

            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'handled_by':
                    {
                      21: [21, 'Lokesh Kumar', '', 'Manager'],
                      22: [22, 'Naveen Kumar', '', 'SalesMan'],
                      23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
                      24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
                    },
                },
              },
              "status": true

            }
            break;

          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.banking.p.deposit:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':

            response = {

              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'cash_ac': [
                    // [id, name, alias, string, amount, behave]
                    {"lid": 4, "name": 'Cash Main', "alias": 'cash', "prefix": 1, "balance": '348971', 'behave': '0'},
                    {"lid": 5, "name": 'Cash Local', "alias": 'cash', "prefix": 1, "balance": '900.61', 'behave': '1'}
                  ],
                  'bank_ac': [
                    // [id, name, alias, string, amount, behave]
                    {"lid": 10, "name": 'SBI Bank', "alias": 'xx52345', "prefix": 1, "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "alias": 'xx23456', "prefix": 1, "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "alias": 'xx42234', "prefix": 1, "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "alias": '', "prefix": 1, "balance": '1892.54', 'suffix': '0'},
                    {"lid": 10, "name": 'ICICI OD Account', "alias": '', "prefix": 1, "balance": '-52345', 'suffix': '1'},
                  ]
                },
              },
              "status": true
            }
            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Diesel", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Online", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"},
                      {"id": "1", "date": "2020-11-23", "debit": "MAK", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Online Transaction", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "MAK", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"},
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Diesel", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Online Transaction", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              "status": true


            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.banking.p.withdrawal:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {

              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      'bank_ac': [
                        {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                        {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                        {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                        {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                        {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                      ],
                      'cash_ac': [
                        {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                        {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                      ],
                    },
                  'status': true
                }
              },
              "status": true
            }
            break;

          case 'table':
            response = {

              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              "status": true

            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.banking.p.transfer:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {

              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'current_ac': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows':
                [
                  {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                  {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                  {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                  {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                ],
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.banking.p.clearance:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {

              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'gateway_ac': [
                    {"lid": 40, "name": 'Phone PE', "balance": '53484', 'suffix': '5'},
                    {"lid": 41, "name": 'Google Pay', "balance": '52345', 'suffix': '5'},
                    {"lid": 42, "name": 'Paytm', "balance": '90000', 'suffix': '5'},
                  ],

                },
                //                  'status': true
                //                }
              },
              "status": true


            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              "status": true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows': [
                {'id': "1", 'date': "2022-11-21", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "4600", 'settled': "3000", 'remain': "1600.00"},
                {'id': "2", 'date': "2022-11-23", 'account': "Ramesh Ji", 'type': "Customer Receipt", 'amount': "9000", 'settled': "0", 'remain': "9000.00"},
                {'id': "3", 'date': "2022-11-25", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "14500", 'settled': "0", 'remain': "0"},
                {'id': "4", 'date': "2022-11-28", 'account': "Lokesh Kumar", 'type': "DIR Deposit", 'amount': "100000", 'settled': "0", 'remain': "0"},
              ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.banking.c.card.delete:
        response = {}
    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }
  const sales = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log("working");
    const btnType = event[1];

    switch (btnValue) {
      case pb.opr.transactions.sales.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      0: {"id": 0, "value": 10000, "type": "0"},
                      1: {"id": 1, "value": 11111, "type": "1"},
                      2: {"id": 2, "value": 22222, "type": "1"},
                      3: {"id": 3, "value": 33333, "type": "1"},
                      4: {"id": 4, "value": 44444, "type": "1"},
                      5: {"id": 5, "value": 51, "type": "1"}
                    }
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'handled_by':
                    {
                      21: [21, 'Lokesh Kumar', '', 'Manager'],
                      22: [22, 'Naveen Kumar', '', 'SalesMan'],
                      23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
                      24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
                    },
                },
              },

              "status": true
            }
            break;
          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.sales.p.credit:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'item': [
                    {"lid": 40, "name": 'Petrol', "balance": ''},
                    {"lid": 41, "name": 'Diesel', "balance": ''},
                    {"lid": 42, "name": 'Cheque Box', "balance": ''},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash_ac': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                },
              },
              'status': true
            }
            var amount1 = document.querySelector(".amount1");
            var litre1 = document.querySelector(".litre1");
            amount1.addEventListener("keyup", function () {
              var x = amount1.value;
              litre1.value = x * amount1.getAttribute("data-pb-amount");
            });
            litre1.addEventListener("keyup", function () {
              var y = litre1.value;
              amount1.value = y / litre1.getAttribute("data-pb-litre");
            });


            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.sales.p.cash:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      'pos': [
                        {"lid": 40, "name": 'SBI Bank', "balance": ''},
                        {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                        {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                      ],
                      'bank_ac': [
                        {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                        {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                        {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                        {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                      ],
                      'item': [
                        {"lid": 40, "name": 'Petrol', "balance": ''},
                        {"lid": 41, "name": 'Diesel', "balance": ''},
                        {"lid": 42, "name": 'Cheque Box', "balance": ''},
                      ],
                      'credit': [
                        {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                      ],
                      'cash_ac': [
                        {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                        {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                      ],
                    },
                  'status': true
                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        var amount2 = document.querySelector(".amount2");
        var litre2 = document.querySelector(".litre2");
        amount2.addEventListener("keyup", function () {
          var x = amount2.value;
          litre2.value = x * amount2.getAttribute("data-pb-amount");
        });
        litre2.addEventListener("keyup", function () {
          var y = litre2.value;
          amount2.value = y / litre2.getAttribute("data-pb-litre");
        });

        break;

      case pb.opr.transactions.sales.p.separate:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash_ac': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.sales.p.regular:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash_ac': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows':
                [
                  {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                  {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                  {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                  {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                ],
              'status': true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows': [
                {'id': "1", 'date': "2022-11-21", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "4600", 'settled': "3000", 'remain': "1600.00"},
                {'id': "2", 'date': "2022-11-23", 'account': "Ramesh Ji", 'type': "Customer Receipt", 'amount': "9000", 'settled': "0", 'remain': "9000.00"},
                {'id': "3", 'date': "2022-11-25", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "14500", 'settled': "0", 'remain': "14500.00"},
                {'id': "4", 'date': "2022-11-28", 'account': "Lokesh Kumar", 'type': "DIR Deposit", 'amount': "100000", 'settled': "0", 'remain': "100000.00"},
              ],
              'status': true
            }
            break;
        }
        break;
    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }

  const receipts = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log("working");
    const btnType = event[1];

    switch (btnValue) {
      case pb.opr.transactions.receipts.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      0: {"id": 0, "value": 10000, "type": "0"},
                      1: {"id": 1, "value": 11111, "type": "1"},
                      2: {"id": 2, "value": 22222, "type": "1"},
                      3: {"id": 3, "value": 33333, "type": "1"},
                      4: {"id": 4, "value": 44444, "type": "1"},
                      5: {"id": 5, "value": 51, "type": "1"}
                    }
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'received_by':
                    {
                      21: [21, 'Lokesh Kumar', '', 'Manager'],
                      22: [22, 'Naveen Kumar', '', 'SalesMan'],
                      23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
                      24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
                    },
                },
              },

              "status": true
            }
            break;
          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.receipts.p.customer:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                },
              },
              'status': true
            }

            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.receipts.p.contact:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      'contact': [
                        {"lid": 40, "name": 'Rakesh Junjanwala', "type": 'Bal:', "balance": '56000', 'suffix': '5'},
                        {"lid": 40, "name": 'Elon Bhai', "type": 'Bal:', "balance": '135000', 'suffix': '6'},
                      ],
                      'nature': [
                        {"id": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                        {"id": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                      ],
                      'fund': [
                        {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                        {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                        {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                        {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                        {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                        {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                      ],
                    },
                  'status': true
                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.receipts.p.income:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                  'incomeAcc': [
                    {"lid": 46, "name": 'Discount Received'},
                    {"lid": 47, "name": 'Incentive Received'},
                    {"lid": 47, "name": 'Shortage Reimbursement'}


                  ]

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.receipts.p.transact:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                  'nature': [
                    {"id": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"id": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows':
                [
                  {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                  {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                  {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                  {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                ],
              'status': true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows': [
                {'id': "1", 'date': "2022-11-21", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "4600", 'settled': "3000", 'remain': "1600.00"},
                {'id': "2", 'date': "2022-11-23", 'account': "Ramesh Ji", 'type': "Customer Receipt", 'amount': "9000", 'settled': "0", 'remain': "9000.00"},
                {'id': "3", 'date': "2022-11-25", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "14500", 'settled': "0", 'remain': "14500.00"},
                {'id': "4", 'date': "2022-11-28", 'account': "Lokesh Kumar", 'type': "DIR Deposit", 'amount': "100000", 'settled': "0", 'remain': "100000.00"},
              ],
              'status': true
            }
            break;
        }
        break;
    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }

  const payments = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log("working");
    const btnType = event[1];

    switch (btnValue) {
      case pb.opr.transactions.payments.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      0: {"id": 0, "value": 10000, "type": "0"},
                      1: {"id": 1, "value": 11111, "type": "1"},
                      2: {"id": 2, "value": 22222, "type": "1"},
                      3: {"id": 3, "value": 33333, "type": "1"},
                      4: {"id": 4, "value": 44444, "type": "1"},
                      5: {"id": 3, "value": 55555, "type": "1"},
                      6: {"id": 4, "value": 51, "type": "1"},
                    }
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'received_by':
                    {
                      21: [21, 'Lokesh Kumar', '', 'Manager'],
                      22: [22, 'Naveen Kumar', '', 'SalesMan'],
                      23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
                      24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
                    },
                },
              },

              "status": true
            }
            break;
          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.payments.p.supplier:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'supplier_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'payment_ac': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ]
                },
              },
              'status': true
            }

            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.payments.p.operating:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                },
              },
              'status': true
            }

            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.payments.p.salary:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      'bank': [
                        {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                        {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                        {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                        {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                      ],

                      'credit': [
                        {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                      ],
                      'month': [
                        {"lid": 4, "name": 'January'},
                        {"lid": 5, "name": 'February'},
                        {"lid": 5, "name": 'March'},
                        {"lid": 5, "name": 'April'},
                        {"lid": 5, "name": 'May'},
                        {"lid": 5, "name": 'June'},
                        {"lid": 5, "name": 'July'},
                        {"lid": 5, "name": 'August'},
                        {"lid": 5, "name": 'September'},
                        {"lid": 5, "name": 'October'},
                        {"lid": 5, "name": 'Novemeber'},
                        {"lid": 5, "name": 'December'},

                      ],
                    },
                  'status': true
                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.payments.p.vendor:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.payments.p.loans:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows':
                [
                  {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                  {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                  {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                  {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                ],
              'status': true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows': [
                {'id': "1", 'date': "2022-11-21", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "4600", 'settled': "3000", 'remain': "1600.00"},
                {'id': "2", 'date': "2022-11-23", 'account': "Ramesh Ji", 'type': "Customer Receipt", 'amount': "9000", 'settled': "0", 'remain': "9000.00"},
                {'id': "3", 'date': "2022-11-25", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "14500", 'settled': "0", 'remain': "14500.00"},
                {'id': "4", 'date': "2022-11-28", 'account': "Lokesh Kumar", 'type': "DIR Deposit", 'amount': "100000", 'settled': "0", 'remain': "100000.00"},
              ],
              'status': true
            }
            break;
        }
        break;
    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }

  const purchases = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log("working");
    const btnType = event[1];

    switch (btnValue) {
      case pb.opr.transactions.purchases.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      0: {"id": 0, "value": 10000, "type": "0"},
                      1: {"id": 1, "value": 11111, "type": "1"},
                      2: {"id": 2, "value": 22222, "type": "1"},
                      3: {"id": 3, "value": 33333, "type": "1"},
                      4: {"id": 4, "value": 44444, "type": "1"},
                      5: {"id": 5, "value": 51, "type": "1"}
                    }
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'received_by':
                    {
                      21: [21, 'Lokesh Kumar', '', 'Manager'],
                      22: [22, 'Naveen Kumar', '', 'SalesMan'],
                      23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
                      24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
                    },
                },
              },

              "status": true
            }
            break;
          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.purchases.p.fuel:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'item': [
                    {"lid": 5, "name": 'Petrol', "balance": ''},
                    {"lid": 6, "name": 'Diesel', "balance": ''},
                    {"lid": 42, "name": 'Cheque Box', "balance": ''},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],

                },
              },
              'status': true
            }

            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.purchases.p.oil:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      'bank_ac': [
                        {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                        {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                        {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                        {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                      ],
                      'credit': [
                        {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                      ],
                      'cash_ac': [
                        {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                        {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                      ],
                    },
                  'status': true
                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.purchases.p.goods:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'bank_ac': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;

          case 'load':
            response = {
              'rows':
                [
                  {}
                ],
              'status': true
            }
            break;
        }
        break;

      case pb.opr.transactions.purchases.p.expense:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  //                  'rows':
                  //                    {
                  'taxrate': [
                    {"lid": 40, "name": 'Out of Scope'},
                    {"lid": 41, "name": 'non-GST supply'},
                    {"lid": 42, "name": '12% GST'},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'nature': [
                    {"lid": 4, "name": 'TAX Inclusive'},
                    {"lid": 5, "name": 'TAX Exclusive'},
                  ],

                },
                //                  'status': true
                //                }
              },
              'status': true
            }
            break;

          case 'table':
            response = {
              'rows':
                [
                  {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                  {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                  {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                  {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                ],
              'status': true
            }
            break;

          case 'load':
            console.log(params);
            response = {
              'rows': [
                {'id': "1", 'date': "2022-11-21", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "4600", 'settled': "3000", 'remain': "1600.00"},
                {'id': "2", 'date': "2022-11-23", 'account': "Ramesh Ji", 'type': "Customer Receipt", 'amount': "9000", 'settled': "0", 'remain': "9000.00"},
                {'id': "3", 'date': "2022-11-25", 'account': "Fuel Sales", 'type': "Sales Collect", 'amount': "14500", 'settled': "0", 'remain': "14500.00"},
                {'id': "4", 'date': "2022-11-28", 'account': "Lokesh Kumar", 'type': "DIR Deposit", 'amount': "100000", 'settled': "0", 'remain': "100000.00"},
              ],
              'status': true
            }
            break;
        }
        break;
    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }

  const journals = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    console.log("working");
    const btnType = event[1];

    switch (btnValue) {
      case pb.opr.transactions.journals.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case "page":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    {
                      0: {"id": 0, "value": 10000, "type": "0"},
                      1: {"id": 1, "value": 11111, "type": "1"},
                      2: {"id": 2, "value": 22222, "type": "1"},
                      3: {"id": 3, "value": 33333, "type": "1"},
                      4: {"id": 4, "value": 44444, "type": "1"},
                      5: {"id": 5, "value": 51, "type": "1"}
                    }
                },
              },
              'status': true
            }
            break;
          case "state":
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'employ':
                    [
                      {"eid": 21, "name": 'Lokesh Kumar', "post": 'Manager', "image": 'false'},
                      {"eid": 22, "name": 'Naveen Kumar', "post": 'Employee', "image": 'false'},
                    ],
                },
              },

              "status": true
            }
            break;
          case "modal":
            response = {
              "body": {
                "status": true,
                "message": "title",
                "data": {
                  'rows':
                    [
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462},
                      {"id": 0, "debit": 53462, "credit": 53462, "amount": 53462, "note": 53462}
                    ],
                }
              },
              'status': true
            }
            break;
        }
        break;


      case pb.opr.transactions.journals.p.entry:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'form':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'pos': [
                    {"lid": 40, "name": 'SBI Bank', "balance": ''},
                    {"lid": 41, "name": 'HDFC Bank', "balance": ''},
                    {"lid": 42, "name": 'KOTAK Bank', "balance": ''},
                  ],
                  'item': [
                    {"lid": 40, "name": 'Petrol', "balance": ''},
                    {"lid": 41, "name": 'Diesel', "balance": ''},
                    {"lid": 42, "name": 'Cheque Box', "balance": ''},
                  ],
                  'bank': [
                    {"lid": 10, "name": 'SBI Bank', "balance": '52374.52', 'suffix': '0'},
                    {"lid": 11, "name": 'HDFC Bank', "balance": '1234.2', 'suffix': '0'},
                    {"lid": 12, "name": 'KOTAK Bank', "balance": '89027', 'suffix': '0'},
                    {"lid": 14, "name": 'Lokesh Bank', "balance": '1892.54', 'suffix': '0'},
                  ],
                  'credit': [
                    {"lid": 10, "name": 'ICICI OD Account', "balance": '-52345', 'suffix': '1'},
                  ],
                  'cash': [
                    {"lid": 4, "name": 'Cash Main', "balance": '348971', 'suffix': '0'},
                    {"lid": 5, "name": 'Cash Local', "balance": '900.61', 'suffix': '0'}
                  ],
                },
              },
              'status': true
            }
            break;
          case 'table':
            response = {
              "body": {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'rows':
                    [
                      {"id": "1", "date": "2020-11-23", "debit": "Cash-in-hand", "credit": "SBI Bank", "amount": "12000.23", "note": "this is test"},
                      {"id": "2", "date": "2020-11-24", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "14000.66", "note": "this is test"},
                      {"id": "3", "date": "2020-11-25", "debit": "Cash-in-hand", "credit": "HDFC Bank", "amount": "12000.90", "note": "this is test"},
                      {"id": "4", "date": "2020-11-26", "debit": "Cash-in-hand", "credit": "ICICI Bank", "amount": "123000.12", "note": "this is test"}
                    ],
                }
              },
              'status': true
            }
            break;
          case 'load':
            response = {
              'rows':
                [

                  {}
                ],
              'status': true
            }
            break;
        }
        break;

    }

    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;

  }


  // Public methods
  return {
    banking: function (event, params = []) {
      return banking(event, params);
    },
    sales: function (event, params = []) {
      return sales(event, params);
    },
    receipts: function (event, params = []) {
      return receipts(event, params);
    },
    payments: function (event, params = []) {
      return payments(event, params);
    },
    purchases: function (event, params = []) {
      return purchases(event, params);
    },
    journals: function (event, params = []) {
      return journals(event, params);
    },
  };
}();
