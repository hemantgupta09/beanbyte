class tablesProfile_reports {

  // define properties
  tableOptions;
  tableMethods;
  tableShapes;
  tableParams;
  #tableTypes = {};
  #path;

  //#methods = TBL_ct;

  constructor(path) {
    this.#path = path;
  }

  // after properties.


  // define methods.
  #row = (type, method = 'a', value = [1], param = ['a'], style = 0, css = []) => {
    return {type: type, method: method, value: value.join(','), param: param, style: style, css: css};
  }
  #customers_sales = (tag) => {
    const myRoot = pb.rpt.customers.sales;

    switch (tag) {
      case myRoot.p.direct:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'c', [4, 5], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.group:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'c', [4, 5], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.vehicle:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], ['a'], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], ['a'], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], ['a'], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], ['a'], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], ['a'], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], ['a'], 0, [true]),
          '8': this.#row(TBL_ct.txt, 'a', [9], ['a'], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #customers_transactions = (tag) => {
    const myRoot = pb.rpt.customers.transactions;

    switch (tag) {
      case myRoot.p.simple:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.detailed:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.statement:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #customers_bills = (tag) => {
    const myRoot = pb.rpt.customers.bills;

    switch (tag) {
      case myRoot.p.view:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.statement:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [5], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),
          '10': this.#row(TBL_ct.txt, 'a', [11], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.customer:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #customers_indents = (tag) => {
    const myRoot = pb.rpt.customers.indents;

    switch (tag) {
      case myRoot.p.bucket:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.period:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [5], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),
          '10': this.#row(TBL_ct.txt, 'a', [11], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.book:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.customer:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #customers_summary = (tag) => {
    const myRoot = pb.rpt.customers.summary;

    switch (tag) {
      case myRoot.p.accounts:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.trade:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.group:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #employees_activity = (tag) => {
    const myRoot = pb.rpt.employees.activity;

    switch (tag) {
      case myRoot.p.absents:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.overtime:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.expenses:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.shortage:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.commission:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #employees_salary = (tag) => {
    const myRoot = pb.rpt.employees.salary;

    switch (tag) {
      case myRoot.p.payroll:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.ledger:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.slip:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #products_purchases = (tag) => {
    const myRoot = pb.rpt.products.purchases;

    switch (tag) {
      case myRoot.p.category:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.item:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.supplier:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [2], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.invoice:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #products_sales = (tag) => {
    const myRoot = pb.rpt.products.purchases;

    switch (tag) {
      case myRoot.p.category:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.item:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.customer:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.advance:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '9': this.#row(TBL_ct.txt, 'a', [10], [], 0, []),


        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }


  #products_stocks = (tag) => {
    const myRoot = pb.rpt.products.stocks;

    switch (tag) {
      case myRoot.p.item:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.location:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [8], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '8': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;


    }
  }

  #accounts_interest = (tag) => {
    const myRoot = pb.rpt.accounts.interest;

    switch (tag) {
      case myRoot.p.report:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [0], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;


    }
  }

  #accounts_register = (tag) => {
    const myRoot = pb.rpt.accounts.interest;

    switch (tag) {
      case myRoot.p.report:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [0], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;


    }
  }


  #accounts_statement = (tag) => {
    const myRoot = pb.rpt.accounts.statement.p;

    switch (tag) {
      case myRoot.report:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [0], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'c', [5], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [7], [], 0, [true]),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #accounts_wave = (tag) => {
    const myRoot = pb.rpt.accounts.interest;

    switch (tag) {
      case myRoot.p.report:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [0], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
          '7': this.#row(TBL_ct.txt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;


    }
  }

  #petroleum_rates = (tag) => {
    const myRoot = pb.rpt.petroleum.rates;

    switch (tag) {
      case myRoot.p.rates:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.variation:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1],  ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [7], [], 0, []),
          '7': this.#row(TBL_ct.amt, 'a', [8], [], 0, [])
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.stock:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2],  [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.txt, 'a', [7], [], 0, [])
        };
        this.tableMethods = {
          0: 'minimal', 1: 'minimal', 2: 'basic', 3: 'minimal', 4: 'minimal', 5: 'minimal'
        }
        this.tableOptions = {
          0: true, 1: true, 2: true, 3: true, 4: true, 5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #petroleum_pistol = (tag) => {
    const myRoot = pb.rpt.petroleum.pistol;

    switch (tag) {
      case myRoot.p.item:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal'
        }
        this.tableOptions = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.combined:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [6], [], 0, []),
          '6': this.#row(TBL_ct.amt, 'a', [7], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal'
        }
        this.tableOptions = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  #petroleum_summary = (tag) => {
    const myRoot = pb.rpt.petroleum.summary;

    switch (tag) {
      case myRoot.p.quick:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal'
        }
        this.tableOptions = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.standard:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal'
        }
        this.tableOptions = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;

      case myRoot.p.advance:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),

        };
        this.tableMethods = {
          0: 'minimal',
          1: 'minimal',
          2: 'basic',
          3: 'minimal',
          4: 'minimal',
          5: 'minimal'
        }
        this.tableOptions = {
          0: true,
          1: true,
          2: true,
          3: true,
          4: true,
          5: true
        }
        this.tableParams = {
          0: [],
          1: [],
          2: []
        }
        break;
    }
  }

  matchingCalled = (tag) => {
    const propName = this.#path[1] + '_' + this.#path[2];

    switch (propName) {
      case 'customers_sales':
        this.#customers_sales(tag);
        break;
      case 'accounts_statement':
        this.#accounts_statement(tag);
        break;
      case 'customers_transactions':
        this.#customers_transactions(tag);
        break;
      case 'customers_bills':
        this.#customers_bills(tag);
        break;
      case 'customers_indents':
        this.#customers_indents(tag);
        break;
      case 'customers_summary':
        this.#customers_summary(tag);
        break;
      case 'employees_activity':
        this.#employees_activity(tag);
        break;
      case 'employees_salary':
        this.#employees_salary(tag);
        break;
      case 'products_purchases':
        this.#products_purchases(tag);
        break;
      case 'products_sales':
        this.#products_sales(tag);
        break;
      case 'products_stocks':
        this.#products_stocks(tag);
        break;
      case 'accounts_interest':
        this.#accounts_interest(tag);
        break;
      case 'accounts_register':
        this.#accounts_register(tag);
        break;
      case 'accounts_statement':
        this.#accounts_statement(tag);
        break;
      case 'accounts_wave':
        this.#accounts_wave(tag);
        break;
      case 'petroleum_rates':
        this.#petroleum_rates(tag);
        break;
      case 'petroleum_pistol':
        this.#petroleum_pistol(tag);
        break;
      case 'petroleum_summary':
        this.#petroleum_summary(tag);
        break;

    }
  }
}