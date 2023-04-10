class tablesProfile_dashboards {

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
  #statistics_customers = (tag) => {
    const myRoot = pb.dsb.statistics.customers;
    let OPTION;
    switch (tag) {
      case myRoot.c.tableone:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, [true]),
          '1': this.#row(TBL_ct.amt, 'c', [2], [0, 1], 0, [true, 'end', 125]),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, [true]),
        };
        this.tableMethods = {}
        this.tableOptions = {}
        this.tableParams = {}
        break;
    }
  }



  matchingCalled = (tag) => {
    const propName = this.#path[1] + '_' + this.#path[2];

    switch (propName) {
      case 'statistics_customers':
        this.#statistics_customers(tag);
        break;
    }
  }
}