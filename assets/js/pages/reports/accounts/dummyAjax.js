"use strict";

// Class definition
var dummy_ajax_accounts_rpt = function () {
  // Shared variables


  // Private functions
  const statement = (event, params) => {
    let response;

    const btnValue = event[0];
    const btnType = event[1];

    console.log(btnType);
    console.log(params);

    switch (btnValue) {
      case pb.rpt.accounts.statement.n:
        switch (btnType) {
          case 'page':
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {
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
              },
              "status": true
            }
            break;
          case 'state':
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {
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

                }
              },
              "status": true
            }
            break;
        }
        break;

      case pb.rpt.accounts.statement.p.search:
        // nothing call.
        break;

      case pb.rpt.accounts.statement.p.report:
        switch (btnType) {
          case eTypes.navtab:
          case eTypes.load:
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {
                  statement: {
                    // [date_id, ledger_id, voucher_id, voucher_no, entry_type, amount, behave, description]
                    12: [112, 312, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    13: [113, 361, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    14: [212, 234, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    15: [213, 235, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    16: [214, 236, 2, 53, 52, 51362.12, 1, 'this is cool'],
                    17: [218, 237, 2, 53, 52, 51362.12, 1, 'this is cool'],

                  },
                  dates    : {
                    112: ['2022-12-12'],
                    113: ['2023-01-01'],
                    212: ['2022-12-12'],
                    213: ['2022-03-23'],
                    214: ['2022-12-15'],
                    218: ['2022-12-20']
                  },
                  ledgers  : {
                    312: ['POS machine'],
                    361: ['Rakesh Supplier'],
                    234: ['Lokesh'],
                    235: ['Suresh'],
                    236: ['ICICI Bank'],
                    237: ['Shriram Finance'],
                    238: ['Indian Oil'],
                    239: ['Jai Bahgvati Travels']
                  }
                }
              },
              "status": true
            }
            break;
        }
        break;
      case pb.rpt.accounts.statement.p.summary:
        switch (btnType) {
          case eTypes.navtab:
          case eTypes.load:
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {
                  "header"             : {
                    'closing_balance': '4754897',
                    'date'           : '2022-03-03',
                    'debited'        : '73467',
                    'credited'       : '343244'
                  },
                  "amount-status"      : {
                    'opening_balance': '4754897',
                    'debited_amount' : '565434',
                    'credited_amount': '734645',
                    'closing_balance': '343244'
                  },
                  "top-debits"         : {
                    transaction: {
                      //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                      11: ['11', 'ICICI OD', 'Long Term Liability', '73467', '11%'],
                      12: ['12', 'BOB OD', 'Short Term Liability', '2343', '12%'],
                      13: ['13', 'SBI OD', 'Long Term Liability', '32432', '13%'],
                      14: ['14', 'PNB OD', 'Short Term Liability', '23432', '14%'],
                    }
                  },
                  "top-credits"        : {
                    transaction: {
                      //['id':int, 'account_name':string, 'amount':int, 'data':data, 'note':string]
                      11: ['11', 'ICICI OD', 'Long Term Liability', '73467', '11%'],
                      12: ['12', 'BOB OD', 'Short Term Liability', '2343', '12%'],
                      13: ['13', 'SBI OD', 'Long Term Liability', '32432', '13%'],
                      14: ['14', 'PNB OD', 'Short Term Liability', '23432', '14%'],
                    }
                  },
                  "high-transaction"   :
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
                      },
                      dates      : {
                        21: ["2022-03-03"],
                        22: ["2021-03-03"],
                        23: ["2022-04-03"],
                        24: ["2020-03-04"],
                      }
                    },
                  "transaction-history": {
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
                    },
                    dates      : {
                      21: ["2022-03-03"],
                      22: ["2021-03-03"],
                      23: ["2022-04-03"],
                      24: ["2020-03-04"],
                    }
                  }

                }
              },
              "status": true
            }
            break;
          case eTypes.action:
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {}
              },
              "status": true
            }
            break;
        }
        break;
      case pb.rpt.accounts.statement.p.charts:
        response = {
          "body"  : {
            "status" : true,
            "message": "message",
            "title"  : "title",
            "data"   : {
              "debited-accounts" : {
                dataset: [40467, 55234, 5234],
                labels : ['Diesel', 'Petrol', 'Speed'],
              },
              "credited-accounts": {
                dataset: [40467, 55234, 5234],
                labels : ['Diesel', 'Petrol', 'Speed'],
              },
              "balance-flow"     : {
                dataset:
                  [
                    {
                      name   : "Average sale",
                      type   : 'area',
                      stacked: false,
                      data   : [50, 50, 50, 50, 50, 50, 50],
                    },
                    {
                      name   : "Daily Sales",
                      type   : 'area',
                      stacked: false,
                      data   : [45, 52, 38, 45, 33, 54, 32]
                    }
                  ],
                labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],
              },
              "transaction"      : {
                dataset:
                  [
                    {
                      name: 'Debited',
                      data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20]
                    },
                    {
                      name: 'Credited',
                      data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15]
                    }
                  ],
                labels : ['Jan 5', 'Jan 7', 'Jan 9', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 24', 'Jan 28', 'Jan 29'],
              }
            }
          },
          "status": true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false;
    }
    return response.body;
  }

  // Public methods
  return {
    statement: function (event, params = []) {
      return statement(event, params);
    }
  };
}();
