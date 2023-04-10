const OptionsData = {

  simple: {
    direct:
      {
        // [cid, name];
        21: [21, 'Lokesh Kumar'],
        22: [22, 'Naveen Kumar'],
        23: [23, 'Suresh Kumar'],
        24: [24, 'Rakesh Kumar'],
      },

    withid:
      {
        // [id, name, alias];
        21: [21, 'Lokesh Kumar'],
        22: [22, 'Naveen Kumar'],
        23: [23, 'Suresh Kumar', 'suri bhai'],
        24: [24, 'Rakesh Kumar'],
      },

    subtext:
      {
        // [id, name, alias];
        21: [21, 'Lokesh Kumar', 'lucky'],
        22: [22, 'Naveen Kumar', 'vicky'],
        23: [23, 'Suresh Kumar', 'suri'],
        24: [24, 'Rakesh Kumar', 'rakhi'],
      },
  },

  account: {
    amount: {
      // [id, name, alias, string, amount, behave]
      21: [21, 'Lokesh Kumar', 'lucky', '1', '25200', '1'],
      22: [22, 'Naveen Kumar', 'vicky', '1', '28000', '1'],
      23: [23, 'Suresh Kumar', 'suri', '1', '22212', '0'],
      24: [24, 'Rakesh Kumar', 'rakhi', '1', '877777', '1'],
    },
    group: {
      // [id, name, alias, string, group]
      21: [21, 'Lokesh Kumar', 'lucky', '0', 'Local Customer'],
      22: [22, 'Naveen Kumar', 'vicky', '0', 'Govt Party'],
      23: [23, 'Suresh Kumar', 'suri', '0', 'Regular Customer'],
      24: [24, 'Rakesh Kumar', 'rakhi', '0', 'Random Party'],
    },
    ledger: {
      // [id, name, alias, string, row-1, row-2, row-3]
      21: [21, 'Lokesh Kumar', 'lucky', [1, 67000], [2, 80000]],
      22: [22, 'Naveen Kumar', 'vicky', [4, 19059]],
      23: [23, 'Suresh Kumar', 'suri', [1, 8000], [2, 8048], [3, 88034]],
      24: [24, 'Rakesh Kumar', 'rakhi', [4, 56777], [5, 90000]],
    },
  },

  image: {
    inline:
      {
        // [cid, name, image];
        21: [21, 'Lokesh Kumar', ''],
        22: [22, 'Naveen Kumar', '300-1.jpg'],
        23: [23, 'Suresh Kumar', ''],
        24: [24, 'Rakesh Kumar', ''],
      },

    rich:
      {
        // [id, name, iamge, post];
        21: [21, 'Lokesh Kumar', '', 'Manager'],
        22: [22, 'Naveen Kumar', '', 'SalesMan'],
        23: [23, 'Suresh Kumar', '300-2.jpg', 'Cashier'],
        24: [24, 'Rakesh Kumar', '300-5.jpg', ''],
      },
  },

  text: {
    col: {
      // [id, name, alias, [string]]
      21: [21, 'Lokesh Kumar', 'lucky', 'this is another text'],
      22: [22, 'Lokesh Kumar', 'lucky', 'this is another text'],
      23: [23, 'Lokesh Kumar', 'lucky', 'this is another text'],
      24: [24, 'Lokesh Kumar', 'lucky', 'this is another text'],
    },
    end: {
      // [id, name, alias, [string]]
      21: [21, 'Lokesh Kumar', 'lucky', 'this is another text'],
      22: [22, 'Lokesh Kumar', 'lucky', 'this is another text'],
      23: [23, 'Lokesh Kumar', 'lucky', 'this is another text'],
      24: [24, 'Lokesh Kumar', 'lucky', 'this is another text'],
    },
    row: {
      // [id, name, alias, [string]]
      21: [21, 'Lokesh Kumar', 'lucky', 'this is another text'],
      22: [22, 'Lokesh Kumar', 'lucky', 'this is another text'],
      23: [23, 'Lokesh Kumar', 'lucky', 'this is another text'],
      24: [24, 'Lokesh Kumar', 'lucky', 'this is another text'],
    },
    dual: {
      // [id, name, alias, [string, string]]
      21: [21, 'Lokesh Kumar', 'lucky', ['this is mono', 'this is dual']],
      22: [22, 'Lokesh Kumar', 'lucky', ['this is mono', 'this is dual']],
      23: [23, 'Lokesh Kumar', 'lucky', ['this is mono', 272394]],
      24: [24, 'Lokesh Kumar', 'lucky', ['this is mono', 'this is dual']],
    },
    menu: {
      // [id, name, alias, [string, string, string]]
      21: [21, 'Lokesh Kumar', 'lucky', ['this is text', 'any note', '10 %']],
      22: [22, 'Lokesh Kumar', 'lucky', ['this is text', 'any number', '45 %']],
      23: [23, 'Lokesh Kumar', 'lucky', ['this is text', '45000', '44 %']],
      24: [24, 'Lokesh Kumar', 'lucky', ['this is text', 'lokesh', '80 %']],
    },
    grid: {
      // [id, name, alias, [string, string, string, string]]
      21: [21, 'Lokesh Kumar', 'lucky', ['ONEEE', 'SUBTEXT', 'description of asdf', 'Qualified'], 1],
      22: [22, 'Lokesh Kumar', 'lucky', ['ONEEE', 'SUBTEXT', 'description of asdf', 'Failed'], 0],
      23: [23, 'Lokesh Kumar', 'lucky', ['ONEEE', 'SUBTEXT', 'description of asdf', 'On the Way'], 3],
      24: [24, 'Lokesh Kumar', 'lucky', ['ONEEE', 'SUBTEXT', 'description of asdf', 'Latak gya'], 2],
    },
  },

  custom: {
    table: {
      // [id, voucher, type, number, date, debit, credit, note, d]
      12: [12, 'Sales', 'Credit Sale', '571', '2022-12-19', 'cash Ledger', 'Local exp', 51235, 'this is note'],
    }
  }
}

let element;

// simple
element = document.getElementById('simple_sz');
PB_render_form.renderME(rendER.form.method.selectOnly, OptionsData.simple, element);

// account
element = document.getElementById('account_sz');
PB_render_form.renderME(rendER.form.method.selectOnly, OptionsData.account, element);

// image
element = document.getElementById('image_sz');
PB_render_form.renderME(rendER.form.method.selectOnly, OptionsData.image, element);

// custom
element = document.getElementById('custom_sz');
PB_render_form.renderME(rendER.form.method.selectOnly, OptionsData.custom, element);

// text
element = document.getElementById('text_sz');
PB_render_form.renderME(rendER.form.method.selectOnly, OptionsData.text, element);