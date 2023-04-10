"use strict";

// Class definition
var dummy_ajax_balances_fin = function () {
  // Shared variables


  // Private functions

  const tformatRoute = (button, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];


    switch (btnValue) {
      case pb.fin.balance.tformat.n:
        switch (btnType) {
          case 'page':
            response = {
              body: {},
              status: true
            }
            break;
          case 'state':
            response = {
              body: {
                // ledgers accounts with id.
                ledgersAccounts: {
                  12: 'Sales Account', 13: 'Purchase account', 14: 'Lokesh Kumar'
                },

                // business information.
                business: {
                  outlet: 'Jojex Fuel Station',
                  sheet: 'Balance Sheet (T Format)',
                  date: '2023-02-26',
                  basis: 'Accrual',
                },

                // transaction type
                txnTypes: {
                  voucher: {
                    8: 'Sales',
                    5: 'Receipt',
                    6: 'Payment',
                    4: 'Contra',
                    9: 'Purchase',
                    7: 'Journal',
                  },
                  entry: {
                    81: 'Credit-sale',
                    82: 'Cash-sale',
                    91: 'Fuel Purchased',
                    92: 'Lube Purchased',
                    63: 'Loan EMI',
                    64: 'Expenses',
                  }
                }
              },
              status: true
            }
            break;
        }
        break;

      case pb.fin.balance.tformat.p.sheet:
        response = {
          body: {
            basic: {
              date: '2020-04-27',
              left: '560000',
              right: '560000'
            },
            master: {
              // side {0 => left, 1 => right}
              // [id, 'master name', balance, ]
              0: {
                1: [1, 'Assets', 560000],
              },
              1: {
                2: [2, 'Liabilities', 460000],
                3: [3, 'Equities', 100000],
              }
            },
            head: {
              1: {
                11: [11, 'Current Assets', 34000],
                12: [12, 'Non-Current Assets', 34000],
              },
              2: {
                21: [21, 'Current Liability', 34000],
                22: [22, 'non-Current Liability', 34000],
              },
              3: {
                31: [31, 'Reserve & Surplus', 34000],
                32: [32, 'Profit and Loss', 34000],
              },
            },
            group: {
              // [group_id, 'Group Name', balance]
              11: {
                110: [110, 'Customers', 354544],
                111: [111, 'Cash-in-hand', 345345]
              },
              12: {
                120: [120, 'Plant and Machines', 354544],
              },
              21: {
                210: [210, 'Salary Payable', 354544],
                211: [211, 'Bills Payable', 345345]
              },
              22: {
                220: [220, 'Sundry Creditor', 792974],
              },
              31: {
                310: [310, 'Opening balance Offset', 792974],
              },
            },
            ledger: {
              // [ledger_id, Ledger Name, Amount]
              110: {
                1101: [1101, 'Prince School', 354544],
                1103: [1103, 'Naga Farm House', 354544],
                1104: [1104, 'Kapoor Diesel', 354544],
                1105: [1105, 'DPS School', 354544],
              },
              111: {
                1111: [1111, 'CAsh', 354544],
                1113: [1113, 'Local CAsh', 354544],
              },
              120: {
                1201: [1201, 'Office building', 354544],
                1203: [1203, 'Water cooler', 354544],
              },
              210: {
                2101: [2101, 'Dinesh Kumar', 354544],
                2103: [2103, 'Wegfsdfg Kumar', 354544],
                2104: [2104, 'Suresh Kumar', 354544],
                2105: [2105, 'Rakesh Kumar', 354544],
              },
              211: {
                2111: [2111, 'Electricity', 354544],
                2113: [2113, 'Internet Bills', 354544],
              },
              220: {
                2201: [2201, 'BPCL Kumar', 354544],
                2203: [2203, 'IOCL Kumar', 354544],
                2204: [2204, 'HPCL Kumar', 354544],
                2205: [2205, 'NAYARA Kumar', 354544],
              },
              310: {
                3101: [3101, 'asdf', 354544],
                3102: [3102, 'this is fasdfas', 354544],
              },
            }
          },
          status: true
        }
        break;

      case pb.fin.balance.tformat.p.trans:
        response = {
          body: {
            table: {
              // [id, date_id, ledger_id, txn_type, txn_number, description, debit, credit]
              12: [12,]
            },
            dates: {
              112: ['2022-12-12'],
              113: ['2023-01-01'],
              212: ['2022-12-12'],
              213: ['2022-03-23'],
              214: ['2022-12-15'],
              218: ['2022-12-20']
            },
            // no need for ledger [saved into local storage];

          },
          status: true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;
  }
  const standardRoute = (button, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];


    switch (btnValue) {
      case pb.fin.balance.standard.n:
        switch (btnType) {
          case 'page':
            response = {
              body: {},
              status: true
            }
            break;
          case 'state':
            response = {
              body: {
                // ledgers accounts with id.
                ledgersAccounts: {
                  12: 'Sales Account', 13: 'Purchase account', 14: 'Lokesh Kumar'
                },

                // business information.
                business: {
                  outlet: 'Jojex Fuel Station',
                  sheet: 'Balance Sheet Standard',
                  date: '2023-02-26',
                  basis: 'Accrual',
                },

                // transaction type
                txnTypes: {
                  voucher: {
                    8: 'Sales',
                    5: 'Receipt',
                    6: 'Payment',
                    4: 'Contra',
                    9: 'Purchase',
                    7: 'Journal',
                  },
                  entry: {
                    81: 'Credit-sale',
                    82: 'Cash-sale',
                    91: 'Fuel Purchased',
                    92: 'Lube Purchased',
                    63: 'Loan EMI',
                    64: 'Expenses',
                  }
                }
              },
              status: true
            }
            break;
        }
        break;

      case pb.fin.balance.standard.p.sheet:
        response = {
          body: {
            basic: {
              date: '2020-04-27',
              top: '560000',
              bottom: '560000'
            },
            master: {
              // side {0 => left, 1 => right}
              // [id, 'master name', balance, ]
              0: {
                1: [1, 'Assets', 560000],
              },
              1: {
                2: [2, 'Liabilities', 460000],
                3: [3, 'Equities', 100000],
              }
            },
            head: {
              1: {
                11: [11, 'Current Assets', 34000],
                12: [12, 'Non-Current Assets', 34000],
              },
              2: {
                21: [21, 'Current Liability', 34000],
                22: [22, 'non-Current Liability', 34000],
              },
              3: {
                31: [31, 'Reserve & Surplus', 34000],
                32: [32, 'Profit and Loss', 34000],
              },
            },
            group: {
              // [group_id, 'Group Name', balance]
              11: {
                110: [110, 'Customers', 354544],
                111: [111, 'Cash-in-hand', 345345]
              },
              12: {
                120: [120, 'Plant and Machines', 354544],
              },
              21: {
                210: [210, 'Salary Payable', 354544],
                211: [211, 'Bills Payable', 345345]
              },
              22: {
                220: [220, 'Sundry Creditor', 792974],
              },
              31: {
                310: [310, 'Opening balance Offset', 792974],
              },
            },
            ledger: {
              // [ledger_id, Ledger Name, Alias, Amount]
              110: {
                1101: [1101, 'Prince School', 'Alias ', 354544],
                1103: [1103, 'Naga Farm House', 'Alias ', 354544],
                1104: [1104, 'Kapoor Diesel', 'Alias ', 354544],
                1105: [1105, 'DPS School', 'Alias ', 354544],
              },
              111: {
                1111: [1111, 'CAsh', 'Alias ', 354544],
                1113: [1113, 'Local CAsh', 'Alias ', 354544],
              },
              120: {
                1201: [1201, 'Office building', 'Alias ', 354544],
                1203: [1203, 'Water cooler', 'Alias ', 354544],
              },
              210: {
                2101: [2101, 'Dinesh Kumar', 'Alias ', 354544],
                2103: [2103, 'Wegfsdfg Kumar', 'Alias ', 354544],
                2104: [2104, 'Suresh Kumar', 'Alias ', 354544],
                2105: [2105, 'Rakesh Kumar', 'Alias ', 354544],
              },
              211: {
                2111: [2111, 'Electricity', 'Alias ', 354544],
                2113: [2113, 'Internet Bills', 'Alias ', 354544],
              },
              220: {
                2201: [2201, 'BPCL Kumar', 'Alias ', 354544],
                2203: [2203, 'IOCL Kumar', 'Alias ', 354544],
                2204: [2204, 'HPCL Kumar', 'Alias ', 354544],
                2205: [2205, 'NAYARA Kumar', 'Alias ', 354544],
              },
              310: {
                3101: [3101, 'asdf', 'Alias ', 354544],
                3102: [3102, 'this is fasdfas', 'Alias ', 354544],
              },
            }
          },
          status: true
        }
        break;

      case pb.fin.balance.standard.p.trans:
        response = {
          body: {
            table: {
              // [id, date_id, ledger_id, txn_type, txn_number, description, debit, credit]
              12: [12,]
            },
            dates: {
              112: ['2022-12-12'],
              113: ['2023-01-01'],
              212: ['2022-12-12'],
              213: ['2022-03-23'],
              214: ['2022-12-15'],
              218: ['2022-12-20']
            },
            // no need for ledger [saved into local storage];

          },
          status: true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;
  }
  const comparisonRoute = (button, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];


    switch (btnValue) {
      case pb.fin.balance.comparison.n:
        switch (btnType) {
          case 'page':
            response = {
              body: {},
              status: true
            }
            break;
          case 'state':
            response = {
              body: {
                // ledgers accounts with id.
                ledgersAccounts: {
                  12: 'Sales Account', 13: 'Purchase account', 14: 'Lokesh Kumar'
                },

                // business information.
                business: {
                  outlet: 'Bharti Meena Pvt Ltd',
                  sheet: 'Balance Sheet Comparison',
                  date: '2023-02-26',
                },

                // transaction type
                txnTypes: {
                  voucher: {
                    8: 'Sales',
                    5: 'Receipt',
                    6: 'Payment',
                    4: 'Contra',
                    9: 'Purchase',
                    7: 'Journal',
                  },
                  entry: {
                    81: 'Credit-sale',
                    82: 'Cash-sale',
                    91: 'Fuel Purchased',
                    92: 'Lube Purchased',
                    63: 'Loan EMI',
                    64: 'Expenses',
                  }
                }
              },
              status: true
            }
            break;
        }
        break;

      case pb.fin.balance.comparison.p.sheet:
        response = {
          body: {
            basic: {
              date: '2020-04-27',
            },
            master: {
              // side {0 => left, 1 => right}
              // [id, 'master name', balance, ]
              0: {
                1: [1, 'Assets', 560000],
              },
            },
            head: {
              1: {
                11: [11, 'Current Assets', 34000],
                12: [12, 'Non-Current Assets', 34000],
              },
            },
            group: {
              // [group_id, 'Group Name', balance]
              11: {
                110: [110, 'Customers', 354544],
                111: [111, 'Cash-in-hand', 345345]
              },
              12: {
                120: [120, 'Plant and Machines', 354544],
              },
            },
            ledger: {
              // [ledger_id, Ledger Name, Amount1, Amount2]
              110: {
                1101: [1101, 'Prince School', 354544, 354544],
                1103: [1103, 'Naga Farm House', 354544, 354544],
                1104: [1104, 'Kapoor Diesel', 354544, 354544],
                1105: [1105, 'DPS School', 354544, 354544],
              },
              111: {
                1111: [1111, 'CAsh', 354544, 354544],
                1113: [1113, 'Local CAsh', 354544, 354544],
              },
              120: {
                1201: [1201, 'Office building', 354544, 354544],
                1203: [1203, 'Water cooler', 354544, 354544],
              },

            }
          },
          status: true
        }
        break;

      case pb.fin.balance.comparison.p.trans:
        response = {
          body: {
            table: {
              // [id, date_id, ledger_id, txn_type, txn_number, description, debit, credit]
              12: [12,]
            },
            dates: {
              112: ['2022-12-12'],
              113: ['2023-01-01'],
              212: ['2022-12-12'],
              213: ['2022-03-23'],
              214: ['2022-12-15'],
              218: ['2022-12-20']
            },
            // no need for ledger [saved into local storage];

          },
          status: true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body;
  }
  const summaryRoute = (button, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = button[0];
    const btnType = button[1];


    switch (btnValue) {
      case pb.fin.balance.summary.n:
        switch (btnType) {
          case 'page':
            response = {
              body: {},
              status: true
            }
            break;
          case 'state':
            response = {
              body: {
                // ledgers accounts with id.
                ledgersAccounts: {
                  12: 'Sales Account', 13: 'Purchase account', 14: 'Lokesh Kumar'
                },

                // business information.
                business: {
                  outlet: 'Jojex Fuel Station',
                  sheet: 'Balance Sheet Summary',
                  date: '2023-02-26',
                  basis: 'Accrual',
                },

                // transaction type
                txnTypes: {
                  voucher: {
                    8: 'Sales',
                    5: 'Receipt',
                    6: 'Payment',
                    4: 'Contra',
                    9: 'Purchase',
                    7: 'Journal',
                  },
                  entry: {
                    81: 'Credit-sale',
                    82: 'Cash-sale',
                    91: 'Fuel Purchased',
                    92: 'Lube Purchased',
                    63: 'Loan EMI',
                    64: 'Expenses',
                  }
                }
              },
              status: true
            }
            break;
        }
        break;

      case pb.fin.balance.summary.p.sheet:
        response = {
          body: {
            basic: {
              date: '2020-04-27',
              top: '560000',
              bottom: '560000'
            },
            master: {
              // side {0 => left, 1 => right}
              // [id, 'master name', balance, ]
              0: {
                1: [1, 'Assets', 560000],
              },
              1: {
                2: [2, 'Liabilities', 460000],
                3: [3, 'Equities', 100000],
              }
            },
            head: {
              1: {
                11: [11, 'Current Assets', 34000],
                12: [12, 'Non-Current Assets', 34000],
              },
              2: {
                21: [21, 'Current Liability', 34000],
                22: [22, 'non-Current Liability', 34000],
              },
              3: {
                31: [31, 'Reserve & Surplus', 34000],
                32: [32, 'Profit and Loss', 34000],
              },
            },
            group: {
              // [group_id, 'Group Name', balance]
              11: {
                110: [110, 'Customers', 354544],
                111: [111, 'Cash-in-hand', 345345]
              },
              12: {
                120: [120, 'Plant and Machines', 354544],
              },
              21: {
                210: [210, 'Salary Payable', 354544],
                211: [211, 'Bills Payable', 345345]
              },
              22: {
                220: [220, 'Sundry Creditor', 792974],
              },
              31: {
                310: [310, 'Opening balance ', 792974],
              },
            },
          },
          status: true
        }
        break;

      case pb.fin.balance.summary.p.trans:
        response = {
          body: {
            table: {
              // [id, date_id, ledger_id, txn_type, txn_number, description, debit, credit]
              12: [12,]
            },
            dates: {
              112: ['2022-12-12'],
              113: ['2023-01-01'],
              212: ['2022-12-12'],
              213: ['2022-03-23'],
              214: ['2022-12-15'],
              218: ['2022-12-20']
            },
            // no need for ledger [saved into local storage];

          },
          status: true
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
    tformat: function (button, params = []) {
      return tformatRoute(button, params);
    },
    standard: function (button, params = []) {
      return standardRoute(button, params);
    },
    comparison: function (button, params = []) {
      return comparisonRoute(button, params);
    },
    summary: function (button, params = []) {
      return summaryRoute(button, params);
    }
  };
}();