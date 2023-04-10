class tablesProfile_management {

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
  #row = (type, method = 'a', value = [1], param = [], style = 0, css = []) => {
    return {
      type  : type,
      method: method,
      value : value.join(','),
      param : param,
      style : style,
      css   : css
    };
  }
  #accounts_contacts = (tag) => {
    const myRoot = pb.mng.accounts.contacts;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_vendors = (tag) => {
    const myRoot = pb.mng.accounts.vendors;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.bills:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 100, [true, 'end', 125]),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.dues:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.dt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 100, [true, 'end', 125]),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_suppliers = (tag) => {
    const myRoot = pb.mng.accounts.suppliers;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.purchases:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.amt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.deductions:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 100, [true, 'end', 125]),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.incentives:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 100, [true, 'end', 125]),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_banks = (tag) => {
    const myRoot = pb.mng.accounts.banks;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [5], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [6], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [7], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 100, [true, 'end', 125]),
          '5': this.#row(TBL_ct.txt, 'a', [5], [2, 1], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.expenses:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
      case myRoot.c.tab.deposits:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'c', [2], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_expenses = (tag) => {
    const myRoot = pb.mng.accounts.expenses;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.datewise:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '2': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 0, [true, 'end', 125]),
          '4': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.monthwise:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'd', [1], ['e'], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '2': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'c', [4], [0, 1], 0, [true, 'end', 125]),
          '4': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 0, [true, 'end', 125]),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.details:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '2': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '4': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_ledgers = (tag) => {
    const myRoot = pb.mng.accounts.ledgers;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_gateways = (tag) => {
    const myRoot = pb.mng.accounts.gateways;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 0], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '2': this.#row(TBL_ct.txt, 'a', [7], [2, 1], 0, [true]),
          '3': this.#row(TBL_ct.amt, 'c', [6], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.settlements:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'c', [2], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.txt, 'a', [3], [2, 1], 0, []),
          '4': this.#row(TBL_ct.dt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.sales_receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.customer_receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'c', [3], [0, 1], 100, [true, 'end', 125]),
          '4': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #accounts_loans = (tag) => {
    const myRoot = pb.mng.accounts.loans;
    let OPTION;
    switch (tag) {
      case myRoot.p.list:
        OPTION = ['card', 'view'];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [4], [], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [0, 1], 100, [true, 'end', 125]),
          '3': this.#row(TBL_ct.dt, 'a', [6], ['b'], 0, [true]),
          '4': this.#row(TBL_ct.icon, 'bi', [7], [3, 2, 'primary'], 1, ['', 'center']),
          '5': this.#row(TBL_ct.btn, 'c', [0], OPTION, 100, [true, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.receipts:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.tab.payments:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [2], [2, 1], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [2, 1], 0, []),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #customers_add = (tag) => {
    const myRoot = pb.mng.customers.add;

    let OPTION;
    switch (tag) {
      case myRoot.c.table:
        const OPTION = [4, ['view', 'edit', 'delete'], ['view-add', 'edit-add', 'delete-add']];
        this.tableShapes = {
          '0': this.#row(TBL_ct.cb, 'a', [0], [], 0, []),
          '1': this.#row(TBL_ct.dt, 'a', [1], [], 0, []),
          '2': this.#row(TBL_ct.ac, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.ac, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.amt, 'a', [4], [2, 1], 0, [true, 'end', 125]),
          '5': this.#row(TBL_ct.note, 'a', [5], [], 0, []),
          '6': this.#row(TBL_ct.act, 'b', [0], [], 100, ['pe-0 text-end', 100]),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #billing_bucket = (tag) => {
    const myRoot = pb.mng.billing.bucket;

    let OPTION;
    switch (tag) {
      case myRoot.c.table:
        OPTION = ['card', 'customer', 'customer-section', 'View'];
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.amt, 'c', [3], [2, 1], 0, [true, 'end', 125]),
            '3': this.#row(TBL_ct.amt, 'c', [4], [2, 0], 0, [true, 'end', 125]),
            '4': this.#row(TBL_ct.amt, 'c', [5], [2, 1], 0, [true, 'end', 125]),
            '5': this.#row(TBL_ct.btn, 'a', [0], OPTION, 1, ['', 'end', 150]),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
      case myRoot.p.customer:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.dt, 'a', [3], ['b'], 0, [true]),
            '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
            '4': this.#row(TBL_ct.amt, 'c', [5], [2, 0], 0, [true, 'end', 125]),
            '5': this.#row(TBL_ct.amt, 'c', [6], [2, 0], 0, [true, 'end', 125]),
            '6': this.#row(TBL_ct.amt, 'c', [7], [2, 0], 0, [true, 'end', 125]),
            '7': this.#row(TBL_ct.amt, 'c', [8], [2, 0], 0, [true, 'end', 125]),
            '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
            '9': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
      case myRoot.p.month:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.dt, 'a', [3], ['b'], 0, [true]),
            '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
            '4': this.#row(TBL_ct.amt, 'c', [5], [2, 0], 0, [true, 'end', 125]),
            '5': this.#row(TBL_ct.amt, 'c', [6], [2, 0], 0, [true, 'end', 125]),
            '6': this.#row(TBL_ct.amt, 'c', [7], [2, 0], 0, [true, 'end', 125]),
            '7': this.#row(TBL_ct.amt, 'c', [8], [2, 0], 0, [true, 'end', 125]),
            '8': this.#row(TBL_ct.txt, 'a', [9], [], 0, []),
            '9': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #billing_generate = (tag) => {
    const myRoot = pb.mng.billing.generate;

    let OPTION;

    switch (tag) {
      case myRoot.c.table:
        OPTION = [3, ['redirect', 'redirect', 'redirect'], ['view', 'edit', 'delete']];
        this.tableShapes = {
          '0': this.#row(TBL_ct.rich, 'b', [1, 2, 3], ['../../assets/media/'], 0, [true]),
          '1': this.#row(TBL_ct.dt, 'a', [4], ['b'], 0, [true]),
          '2': this.#row(TBL_ct.amt, 'c', [5], [2, 0], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'c', [6], [2, 1], 0, [true, 'end', 125]),
          '4': this.#row(TBL_ct.txt, 'a', [7], [], 0, [true]),
          '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #users_detail = (tag) => {
    const myRoot = pb.mng.users.detail;

    let OPTION;
    switch (tag) {
      case myRoot.c.sessions:
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
            '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
            '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
      case myRoot.c.logs:
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.dt, 'a', [3], ['b'], 0, [true]),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  #employees_detail = (tag) => {
    const myRoot = pb.mng.employees.detail;

    let OPTION;

    switch (tag) {
      case myRoot.c.table.transaction_history:
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.txt, 'a', [0], [], 0, []),
            '1': this.#row(TBL_ct.dt, 'a', [1], ['b'], 0, [true]),
            '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
            '4': this.#row(TBL_ct.amt, 'c', [4], [2, 0], 0, [true, 'end', 125]),
            '5': this.#row(TBL_ct.amt, 'c', [5], [2, 0], 0, [true, 'end', 125]),
            '6': this.#row(TBL_ct.amt, 'c', [6], [2, 1], 0, [true, 'end', 125]),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.table.activities:
        OPTION = [3, ['card', 'card', 'action'], ['view', 'edit', 'delete']];
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.dt, 'a', [1], ['b'], 0, [true]),
            '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
            '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
            '3': this.#row(TBL_ct.amt, 'c', [4], [2, 1], 0, [true, 'end', 125]),
            '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
            '5': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;

      case myRoot.c.table.payroll:
        OPTION = [3, ['card', 'card', 'action'], ['view', 'edit', 'delete']];
        this.tableShapes =
          {
            '0': this.#row(TBL_ct.dt, 'a', [1], ['e'], 0, []),
            '1': this.#row(TBL_ct.amt, 'c', [2], [2, 1], 0, [true, 'end', 125]),
            '2': this.#row(TBL_ct.amt, 'c', [3], [2, 1], 0, [true, 'end', 125]),
            '3': this.#row(TBL_ct.amt, 'c', [4], [2, 1], 0, [true, 'end', 125]),
            '4': this.#row(TBL_ct.amt, 'c', [5], [2, 1], 0, [true, 'end', 125]),
            '5': this.#row(TBL_ct.txt, 'a', [6], [], 0, []),
            '6': this.#row(TBL_ct.act, 'b', [0], OPTION, 1, [false, 'end']),
          }
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }

  matchingCalled = (tag) => {
    const propName = this.#path[1] + '_' + this.#path[2];

    switch (propName) {
      case 'accounts_contacts':
        this.#accounts_contacts(tag);
        break;
      case 'accounts_banks':
        this.#accounts_banks(tag);
        break;
      case 'accounts_vendors':
        this.#accounts_vendors(tag);
        break;
      case 'accounts_suppliers':
        this.#accounts_suppliers(tag);
        break;
      case 'accounts_expenses':
        this.#accounts_expenses(tag);
        break;
      case 'accounts_ledgers':
        this.#accounts_ledgers(tag);
        break;
      case 'accounts_gateways':
        this.#accounts_gateways(tag);
        break;
      case 'accounts_loans':
        this.#accounts_loans(tag);
        break;
      case 'customers_add':
        this.#customers_add(tag);
        break;
      case 'billing_bucket':
        this.#billing_bucket(tag);
        break;
      case 'billing_generate':
        this.#billing_generate(tag);
        break;
      case 'users_detail':
        this.#users_detail(tag);
        break;

      case 'employees_detail':
        this.#employees_detail(tag);
        break;
    }
  }
}