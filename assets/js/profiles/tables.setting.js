class tablesProfile_setting {

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
    return {
      type  : type,
      method: method,
      value : value.join(','),
      param : param,
      style : style,
      css   : css
    };
  }
  #profile_billing = (tag) => {
    const myRoot = pb.set.profile.billing;

    switch (tag) {
      case myRoot.c.success:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.btn, 'b', [0], ['action', 'email', 'target', 'Get Email'], 0, []),
          '5': this.#row(TBL_ct.btn, 'b', [0], ['action', 'invoice', 'target', 'View Invoice'], 0, []),
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
      case myRoot.c.failed:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [2, 1], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.btn, 'b', [0], ['action', 'email', 'target', 'Get Email'], 0, []),
          '5': this.#row(TBL_ct.btn, 'b', [0], ['action', 'invoice', 'target', 'View Invoice'], 0, []),
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

  #profile_logs = (tag) => {
    const myRoot = pb.set.profile.logs;
    switch (tag) {
      case myRoot.p.sessions:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
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

  #profile_referral = (tag) => {
    const myRoot = pb.set.profile.referral;
    switch (tag) {
      case myRoot.c.year:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [0], [], 0, []),
          '1': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [5], [0, 1], 0, [true, 'end', 125]),
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
      case myRoot.c.time:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [0], [], 0, []),
          '1': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '2': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '5': this.#row(TBL_ct.amt, 'a', [5], [0, 1], 0, [true, 'end', 125]),
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

  #profile_security = (tag) => {
    const myRoot = pb.set.profile.security;
    switch (tag) {
      case myRoot.c.admin_enable:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
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
      case myRoot.c.admin_disable:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
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
      case myRoot.c.user_enable:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
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
      case myRoot.c.user_disable:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.amt, 'a', [3], [0, 1], 0, [true, 'end', 125]),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
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
      case myRoot.c.use:
        this.tableShapes = {
          '0': this.#row(TBL_ct.txt, 'a', [1], [], 0, []),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.txt, 'a', [4], [], 0, []),
          '4': this.#row(TBL_ct.txt, 'a', [5], [], 0, []),
          '5': this.#row(TBL_ct.icon, 'bi', [6], [3], 0, []),
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

  #profile_wallet = (tag) => {
    const myRoot = pb.set.profile.wallet;
    switch (tag) {
      case myRoot.c.one:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
          '4': this.#row(TBL_ct.btn, 'b', [5], ['action', 'action-button', 'goto-target', 'View Details'], 0, []),
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
      case myRoot.c.two:
        this.tableShapes = {
          '0': this.#row(TBL_ct.dt, 'a', [1], ['a'], 0, [true]),
          '1': this.#row(TBL_ct.txt, 'a', [2], [], 0, []),
          '2': this.#row(TBL_ct.txt, 'a', [3], [], 0, []),
          '3': this.#row(TBL_ct.amt, 'a', [4], [0, 1], 0, [true, 'end', 125]),
          '4': this.#row(TBL_ct.btn, 'b', [5], ['action', 'action-button', 'goto-target', 'View Details'], 0, []),
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
      case 'profile_billing':
        this.#profile_billing(tag);
        break;
      case 'profile_logs':
        this.#profile_logs(tag);
        break;
      case 'profile_referral':
        this.#profile_referral(tag);
        break;
      case 'profile_security':
        this.#profile_security(tag);
        break;
      case 'profile_wallet':
        this.#profile_wallet(tag);
        break;
    }
  }
}