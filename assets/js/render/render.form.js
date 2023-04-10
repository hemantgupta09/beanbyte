// data render functions
"use strict";

/*
 TODO: @forFinish.
 [] 1. dates
 [] 2. <optgroup> in selects.

 */

/**
 * this function used to fill data into forms of the page.
 * @type {{}}
 */
const PB_render_form = function () {

  function tagSelect(method, values, params = [], style = 'default') {
    // <option value="$value$">$text$</option>
    switch (method[0]) {
      case SP_mds.simple:
        return select_simple(values, params, method[1]);

      case SP_mds.account:
        return select_account(values, params, method[1]);

      case SP_mds.image:
        return select_image(values, params, method[1]);

      case SP_mds.text:
        return select_text(values, params, method[1]);

      case SP_mds.custom:
        return select_custom(values, params, method[1]);
    }
  }

  const select_simple = (values, params, tack = SPO_mds.simple.default) => {
    let option = `<option></option>`;
    const createOption_direct = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}">${val[param[1]]}</option>`
    }

    const createOption_withid = (val, param) => {
      option += `<option value="` + val[param[0]] + `"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.subtext}="${val[parseInt(param[1]) + 1] ?? ''}">${val[param[1]]}</option>`
    }
    const createOption_subtext = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.subtext}="${val[param[2]]}">${val[param[1]]}</option>`
    }

    switch (tack) {
      case SPO_mds.simple.direct:
        // values = [key, text];
        for (const valuesKey in values) {
          createOption_direct(values[valuesKey], params);
        }
        break;
      case SPO_mds.simple.withid:
        // values = [key, text, ~subtext];
        for (const valuesKey in values) {
          createOption_withid(values[valuesKey], params);
        }
        break;
      case SPO_mds.simple.subtext:
        // values = [key, text, subtext];
        for (const valuesKey in values) {
          createOption_subtext(values[valuesKey], params);
        }
        break;
    }
    return PB_render_common.returnOnCall(option, 'trim', [0, 1]);
  }

  const select_account = function (values, params, tack = SPO_mds.account.default) {
    let option = `<option></option>`;
    /**
     * options for account with amount
     * @param val [0 => key, 1 => value, 2 => alias, 3 => suffix, 4 => amount, 5 => prefix]
     * @param params
     */
    const createOption_amount = (val, params) => {
      option += `<option value="` + val[params[0]] + `" 
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.amount}="${PB_render_common.returnOnCall(val[params[4]], 'number', [rendER.common.num.amount, 2, true])}"
      ${atr.select.options.alias}="${val[params[2]]}"
      ${atr.select.options.prefix}="${PB_render_common.returnOnCall(val[params[3]], 'string', [1])}"
      ${atr.select.options.suffix}="${PB_render_common.returnOnCall(val[params[5]], 'string', [2])}"
      ${atr.select.options.color}="` + 'gray-600' + `">${val[params[1]]}</option>`
    }
    /**
     * options for account with  group
     * @param val [0 => key,  1 => value,  2 => alias, 3 => prefix,  4 => group]
     * @param params
     */
    const createOption_group = (val, params) => {
      option += `<option value="` + val[params[0]] + `" 
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[params[2]]}" 
      ${atr.select.options.prefix}="${PB_render_common.returnOnCall(val[params[3]], 'string', [1])}" 
      ${atr.select.options.text}="${val[params[4]]}"
      ${atr.select.options.color}="` + 'gray-600' + `">${val[params[1]]}</option>`
    }
    /**
     * options for account with  group
     * @param val [0 => key,  1 => value,  2 => alias, 3 => prefix,  4 => group]
     * @param params
     */
    const createOption_ledger = (val, params) => {

      let row = {
        3: ``,
        4: ``,
        5: ``
      };

      for (let i = 3; i < 6; i++) {
        if (val[i] !== undefined) {
          row[i] += atr.select.options['key' + i] + `="${PB_render_common.returnOnCall(val[i][0], 'string', [4])}" `;
          row[i] += atr.select.options['val' + i] + `="${PB_render_common.returnOnCall(val[i][1], 'number', [rendER.common.num.amount, 0, true])}"`;
        }
      }

      option += `<option value="` + val[params[0]] + `" 
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[params[2]]}"
      ${row[3]}
      ${row[4]}
      ${row[5]}
      ${atr.select.options.color}="gray-600">${val[params[1]]}</option>`
    }

    switch (tack) {
      case SPO_mds.account.amount:
        // [id, name, alias, string, amount, behave]
        for (const valuesKey in values) {
          createOption_amount(values[valuesKey], params)
        }
        break;
      case SPO_mds.account.group:
        // [id, name, alias, string, group]
        for (const valuesKey in values) {
          createOption_group(values[valuesKey], params)
        }
        break;
      case SPO_mds.account.ledger:
        // [id, name, alias, string, array, array, array = [key, value]]
        for (const valuesKey in values) {
          createOption_ledger(values[valuesKey], params)
        }
        break;
    }
    return PB_render_common.returnOnCall(option, 'trim', [0, 1]);
  }

  const select_image = function (values, params, tack = SPO_mds.image.default) {

    let option = `<option></option>`;
    /**
     * options for account with amount
     * @param val [0 => key, 1 => value, 2 => alias, 3 => suffix, 4 => amount, 5 => prefix]
     * @param params
     */
    const createOption_inline = (val, params) => {
      option += `<option value="` + val[params[0]] + `" 
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.image}="${val[params[2]]}">${val[params[1]]}</option>`
    }
    /**
     * options for account with  group
     * @param val [0 => key,  1 => value,  2 => alias, 3 => prefix,  4 => group]
     * @param params
     */
    const createOption_rich = (val, params) => {
      option += `<option value="` + val[params[0]] + `" 
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.image}="${val[params[2]]}"
      ${atr.select.options.text}="${val[params[3]]}">${val[params[1]]}</option>`
    }


    switch (tack) {
      case SPO_mds.image.inline:
        // [id, name, alias, string, amount, behave]
        for (const valuesKey in values) {
          createOption_inline(values[valuesKey], params)
        }
        break;
      case SPO_mds.image.rich:
        // [id, name, alias, string, group]
        for (const valuesKey in values) {
          createOption_rich(values[valuesKey], params)
        }
        break;
    }
    return PB_render_common.returnOnCall(option, 'trim', [0, 1]);
  }

  const select_text = function (values, params, tack = SPO_mds.text.default) {
    let option = `<option></option>`;
    const createOption_col = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[param[2]] ?? ''}"
      ${atr.select.options.text}="${val[param[3]]}">${val[param[1]]}</option>`
    }

    const createOption_dual = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[param[2]] ?? ''}"
      ${atr.select.options.text}="${val[param[3]][0]}"
      ${atr.select.options.subtext}="${PB_render_common.returnOnCall(val[param[3]][1], 'number', [rendER.common.num.amount, 0, false])}">${val[param[1]]}</option>`
    }
    const createOption_menu = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[param[2]] ?? ''}"
      ${atr.select.options.text}="${val[param[3]][0]}"
      ${atr.select.options.subtext}="${PB_render_common.returnOnCall(val[param[3]][1], 'number', [rendER.common.num.amount, 0, false])}"
      ${atr.select.options.badge}="${val[param[3]][2]}"
      ${atr.select.options.color}="${CLS.colors.array[val[param[4]]] ?? 'primary'}">${val[param[1]]}</option>`
    }
    const createOption_grid = (val, param) => {
      option += `<option value="${val[param[0]]}"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.alias}="${val[param[2]] ?? ''}"
      ${atr.select.options.text}="${val[param[3]][0]}"
      ${atr.select.options.subtext}="${val[param[3]][1]}"
      ${atr.select.options.desc}="${val[param[3]][2]}"
      ${atr.select.options.badge}="${val[param[3]][3]}"
      ${atr.select.options.color}="${CLS.colors.array[val[param[4]]]}">${val[param[1]]}</option>`
    }

    switch (tack) {
      case SPO_mds.text.col:
      case SPO_mds.text.end:
      case SPO_mds.text.row:
        // values = [key, text, alias, [strings]];
        for (const valuesKey in values) {
          createOption_col(values[valuesKey], params);
        }
        break;

      case SPO_mds.text.dual:
        // values = [key, text, alias, [strings]];
        for (const valuesKey in values) {
          createOption_dual(values[valuesKey], params);
        }
        break;
      case SPO_mds.text.menu:
        // values = [key, text, alias, [strings]];
        for (const valuesKey in values) {
          createOption_menu(values[valuesKey], params);
        }
        break;
      case SPO_mds.text.grid:
        // values = [key, text, alias, [strings]];
        for (const valuesKey in values) {
          createOption_grid(values[valuesKey], params);
        }
        break;
    }
    return PB_render_common.returnOnCall(option, 'trim', [0, 1]);
  }

  const select_custom = function (values, params, tack = SPO_mds.custom.default) {

    let option = `<option></option>`;

    const createOption_table = (val, param) => {
      option += `<option value="` + val[param[0]] + `"
      ${atr.select.options.whoiam}="${tack}"
      ${atr.select.options.text}="${val[param[2]]}" ${atr.select.options.subtext}="${val[param[3]]}"
      ${atr.select.options.date}="${PB_render_common.returnOnCall(val[param[4]], 'date', ['a'])}" 
      ${atr.select.options.amount}="${PB_render_common.returnOnCall(val[param[7]], 'number', [rendER.common.num.amount, 2, true])}"
      ${atr.select.options.debit}="${val[param[5]]}" ${atr.select.options.credit}="${val[param[6]]}"
      ${atr.select.options.note}="${val[param[8]] ?? ''}">${val[param[1]]}</option>`
    }

    switch (tack) {
      case SPO_mds.custom.table:
        // values = [key, text, ~subtext];
        for (const valuesKey in values) {
          createOption_table(values[valuesKey], params);
        }
        break;
    }
    // console.log(option);
    return PB_render_common.returnOnCall(option, 'trim', [0, 1]);
  }

  function createOptions_multiple(dataset, names, methods, type) {

    let keys;
    let _return = [];
    console.log(methods);

    names.forEach((value, index) => {

      switch (type) {
        case 'array':
          keys = dataset[value].keys();
          break;
        case 'object':
          keys = Object.keys(dataset[value]);
          break;
      }

      _return[value] = tagSelect(methods[index], dataset[value], keys);
    });
    return _return;
  }

  function createOptions_single(data, name, method, key) {
    let _return = [];
    _return[name] = tagSelect(method, data, key);
    return _return;
  }

  // -------------
  function append_selectOptions(data, element, nameAtr = 'name') {
    let redData, method, tack;
    element.querySelectorAll('select').forEach((select => {
      let name = select.hasAttribute(atr.core.source) ? select.getAttribute(atr.core.source) : select.getAttribute(nameAtr);

      if (data[name] !== undefined) {
        // render data into options
        method = select.getAttribute(atr.core.method) ?? 'simple';
        tack = select.getAttribute(atr.select.tack) ?? 'default';
        redData = PB_render_form.selectRender_single(
          data[name],
          name,
          [method, SPO_mds[method][tack]],
          typeof data[name]
        );
        // append options into selects.
        select.innerHTML = redData[name];
      }
      else {
        // skipping options those don't require any data from backend.
        if (name !== '') {
          console.log(name + ' have error in name or data-pb-source.');
        }
      }
    }));
  }

  function renderForm(data, element) {

    // selects
    append_selectOptions(data, element);

    // tagify
    /*
     todo: it can be done from here.
     process::
     1. get source element of the tagify input
     2. create string using separator
     3. append into that HTML element. (.innerText)

     appendTags(data, element);
     */

    // switch and radio buttons

    // checkbox

    return true;
  }


  function renderForm_simple(data, form) {
    let redData;
    form.querySelectorAll('select').forEach((select) => {
      // data-pb-source="customers"
      let name = select.hasAttribute(atr.core.source) ? select.getAttribute(atr.core.source) : select.name;
      redData = PB_render_form.selectRender_single(
        data[name],
        name,
        [select.getAttribute(atr.core.method), select.getAttribute(atr.select.tack), true],
        'object'
      );
      // append options into selects.
      select.innerHTML = redData[name];
    });
    return true;
  }

  const $renderME = (method, dataset, element, param) => {
    switch (method) {
      case rendER.form.method.simple:
        break;

      case rendER.form.method.repeater:
        // general render.
        renderForm(dataset, element);
        // Plugins initiate to loaded data
        PB_formRepeater.onCalling(element);
        break;

      case rendER.form.method.advance:
        // general render.
        renderForm(dataset, element);

        // Plugins initiate to loaded data
        // select
        Plug_selectPicker.onCalling_direct(element, 'call');
        // date
        Plug_datePicker.onCalling(element);
        // range
        Plug_rangePicker.onCalling(element);
        // tagify
        Plug_tagifyInput.onCalling(element);
        // inputmask
        Plug_inputMask.onCalling(element);
        break;

      case rendER.form.method.selectOnly:
        append_selectOptions(dataset, element, param)
        break;
    }
    return true;
  }

  // public methods
  return {
    /**
     * used for get return of a select options to append into the HTML.
     * @param dataset
     * @param names
     * @param methods
     * @param all
     * @param type
     * @returns a HTML string of options [<option></option>] to append into the HTML <select> element
     */
    selectRender: function (dataset, names = [], methods = [], all = false, type = 'array') {
      let key;
      switch (type) {
        case 'array':
          key = dataset[dataset.keys()[0]].keys();
          break;
        case 'object':
          key = Object.keys(dataset[Object.keys(dataset)[0]]);
          break;
      }
      return all ? createOptions_multiple(dataset, names, methods, key) : createOptions_single(dataset, names, methods, key);
    },

    /**
     * used for get return of a single select options to append into the HTML.
     * @param dataset
     * @param name this is the name attribute of select.
     * @param _method
     * @param type
     * @returns a HTML string of options [<option></option>] to append into the HTML <select> element
     */
    selectRender_single: function (dataset, name, _method, type = 'array') {
      // to get the key id. secondary method.
      const filterObj = (data) => {
        // cash.
        let k;
        let newData = {};
        Object.assign(newData, data)
        // changes in the data
        Object.entries(newData).forEach(([key, val]) => {
          if (key === '-1' || key === '0') {
            delete newData[key];
          }
          else {
            k = key;
          }
        });
        return [newData, k];
      }

      // to get key id, primary method.
      let key;
      switch (type) {
        case 'array':
          key = dataset[dataset.keys()[0]].keys();
          break;
        case 'object':
          key = Object.keys(dataset[Object.keys(dataset)[0]]);
          break;
      }
      // method management
      let method;
      if ((_method[2] ?? false) === true) {
        method = [
          _method[0],
          SPO_mds[_method[0]][_method[1]]
        ];
      }
      else {
        method = _method;
      }
      return createOptions_single(dataset, name, method, key);
    },

    /**
     * single form render.
     * mostly used in transactions.
     * @param dataset
     * @param element
     * @returns {boolean}
     */
    formRender_single: function (dataset, element) {
      return renderForm(dataset, element);
    },

    /**
     * SIMPLE form render.
     *
     * @param dataset
     * @param element
     * @returns {boolean}
     */
    formRender_simple: function (dataset, element) {
      return renderForm_simple(dataset, element);
    },


    /**
     *
     * @param method string
     * @param dataset object
     * @param element form element
     */
    renderME: function (method, dataset, element) {
      return $renderME(method, dataset, element);
    }
  };
}();