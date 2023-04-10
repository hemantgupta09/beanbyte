"use strict";

/**
 * this function used for render transactions section related data
 * @type {{banking: ((function(*, *): (HTMLTableSectionElement))|*)}}
 */
var PB_render_table = function () {
  // mostly used variables in the function.
  var table, rows, th, tr, tbody, thead, td;

  function cellDate(method, value, params) {
    const date_a = (date, format) => {
      return `<span class="dF" data-cs-format="${format}">${date}</span>`;
    }
    const date_b = (date, format, width, size) => {
      return `<span class="fw-${width} fs-${size} dF" data-cs-format="${format}">${date}</span>`;
    }
    const date_c = (date, format) => {
      return `<span class="dF" data-cs-format="${format}">${date[0]}</span>` + ' ' + `<span class="dF" data-cs-format="${format}">${date[1]}</span>`;
    }

    const date_d = (date, format) => {
      return `<span class="mF" data-cs-format="${format}">${date}</span>`;
    }
    const [format, fw, fs] =
            [
              params[0] ?? 'a',
              params[1] ?? 'normal',
              params[2] ?? '5',
            ];
    switch (method) {
      case 'a':
        return date_a(value, format);
      case 'b':
        return date_b(value, format, fw, fs);
      case 'c':
        return date_c(value, format, fw, fs);
      case 'd':
        return date_d(value, format, fw, fs);
    }
  }


  function cellAmount(method, value, params) {
    // inside arrow functions
    const amount_a = (amount, round) => {
      return `<span class="in_inr" ${atr.common.round}="${round}">${amount}</span>`;
    }
    const amount_b = (amount, round, currency) => {
      return `<span class="in_inr" ${atr.common.round}="${round}" ${atr.common.currency}="${currency}">${amount}</span>`;
    }
    const amount_c = (amount, round, currency, postfix) => {
      return `<span class="in_inr" ${atr.common.round}="${round}" ${atr.common.currency}="${currency}" ${atr.common.currency}="${postfix}">${amount}</span>`;
    }
    // parameters
    const [round, currency, postfix] =
            [
              params[0] ?? '2',
              params[1] ?? '0',
              params[2] ?? '/-',
            ];
    // picking method as per requirements
    switch (method) {
      case 'a': // only round.
        return amount_a(value, round, currency);
      case 'b': // round and currency
        return amount_b(value, round, currency);
      case 'c': // round, currency and postfix
        return amount_c(value, round, currency, postfix);
    }
  }

  function cellBadge(method, value, params) {
    // inside arrow functions
    const badge_a = (value) => {
      return '';
    };
    const badge_b = (value, color, fs, fw) => {
      return '';
    };
    // parameters
    const [color, fs, fw] =
            [
              params[0] ?? '',
              params[1] ?? '',
              params[2] ?? '',
            ];
    // picking method as per requirements
    switch (method) {
      case 'a':
        return badge_a(value);
      case 'b':
        return badge_b(value, color, fs, fw);
    }
  }

  function cellAccount(method, value, params) {
    // inside arrow functions
    const account_a = (account) => {
      return `<span>${account}</span>`;
    };
    const account_b = (account, color, fs, fw) => {
      return `<span class="text-${color} fs-${fs} fw-${fw}">${account}</span>`
    };
    // parameters
    const [color, fs, fw] =
            [
              params[0] ?? '',
              params[1] ?? '',
              params[2] ?? '',
            ];
    // picking method as per requirements
    switch (method) {
      case 'a':
        return account_a(value);
      case 'b':
        return account_b(value, color, fs, fw);
    }
  }

  function cellText(method, value, params) {
    let color = ['danger', 'primary'];
    // inner functions
    const text_a = (text) => {
      return '<span>' + text + '</span>';
    }
    const text_b = (text, color, fs, fw) => {
      return `<span class="text-${color} fs-${fs} fw-${fw}">${text}</span>`;
    }
    const text_ca = (text) => {
      return `<div class="d-flex flex-column"><span class="fw-bold fs-5">${text[0]}</span><p class="text-gray-600 fs-7 m-0 text-end">${text[1]}</p></div>`
    }
    const text_c = (text) => {
      return `<div class="d-flex flex-row"><span class="fs-5">${text[0]}</span><span class="text-gray-600 align-self-center fs-7 ms-1 text-end">${text[1]}</span></div>`
    }
    const text_d = (text) => {
      return `<div class="d-flex flex-row">
      <div class="d-flex flex-column">
      <span class="text-gray-900">${text[0] ?? ''}</span>
      <span class="fs-7 fw-semibold text-gray-500">${text[1] ?? ''}</span>
      </div>
      <span class="align-self-center ms-2">${text[3] ?? ''}</span>
      </div>`
    }
    const text_e = (text) => {
      return `<div class="d-flex flex-row">
      <div class="d-flex flex-column">
      <span class="text-gray-900">${text[0]}</span>
      <span class="fs-7 text-gray-500">${text[1]}</span>
      </div>
      <span class="align-self-center ms-2">
      <i class="bi bi-${[text[2]]} text-gray-500 fs-2"></i>
      </span>
      </div>`
    }
    const text_f = (text) => {
      let data = PB_render_common.returnOnCall(text[0], 'percent', [text[1]]);
      let status = PB_render_common.returnOnCall(data[1], 'string', [5]);

      return `<div class="d-flex flex-column">
         <span class="text-gray-600 fw-bold in_num" data-cs-round="0" data-cs-postfix=" Ltr">${text[0]}</span>
         <div class="d-flex flex-row">
          <span class="badge badge-light-${color[data[1]]} fs-6">${status}</span>
          <span class="text-dark fw-bold ms-1" data-pb-postfix="%">${data[0]}</span>
         </div>
      </div>`
    }
    const text_g = (text) => {
      return `
      <div class="d-flex align-items-center">
        <div class="symbol symbol-50px symbol-2by3">
          <div class="symbol-label fs-2 fw-bold bg-light-primary text-primary">${text[0]}</div>
        </div>
        <div class="ms-5">
          <a href="#"
             class="text-gray-800 text-hover-primary fs-4 fw-bold mb-1"
             data-pb-product-fuel-filter="diesel">${text[1]}</a>
          <div class="text-muted fs-7 fw-bold">
            <span>${text[2]}</span>:
            <span class="in_num" data-cs-round="0">${text[3]}</span>
          </div>
        </div>
      </div>`
    }

    switch (method) {
      case 'a': // simple text
        return text_a(value);
      case 'b': // modify text
        return text_b(value);
      case 'c': //
        return text_c(value);
      case 'd':
        return text_d(value);
      case 'e': // with icon at center right
        return text_e(value);
      case 'f':
        return text_f(value);
      case 'g':
        return text_g(value);
    }
  }

  function cellNote(method, value, params) {
    const note_a = (note) => {
      return `<span>${note}</span>`;
    }
    const note_b = (note) => {
      return `<span class="fs-7">${note}</span>`;
    }
    switch (method) {
      case 'a':
        return note_a(value);
      case 'b':
        return note_b(value);
    }
  }

  function callCheckbox(method, value, params) {
    const checkbox_a = (value) => {
      return `<div class="form-check form-check-sm form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="${value}"/></div>`;
    }
    switch (method) {
      case 'a':
        return checkbox_a(value);
    }
  }

  function callImage(method, value, params) {
    const image_a = (value, path, width) => {
      return `<img  src="${path}${value}" alt="Profile Picture" class="rounded-circle" style="width: ${width}">`;
    }
    const [dPath, iWidth] =
            [
              params[0] ?? '../../assets/media/',
              params[1] ?? '50px'
            ];
    switch (method) {
      case 'a':
        return image_a(value, dPath, iWidth)
    }
  }

  function callIcon(method, value, params) {
    const constant = params[0] ?? '';
    const fs = params[1] ?? '4';
    const color = params[2] ?? 'gray-700';
    let icon;

    switch (constant) {
      case 1:
        // icon = ABCD[value];
        break;
      case 2:
        // icon = XYZ[value];
        break;
      case 3:
        icon = CLS.icons[value];
        break;
    }
    const icon_bi = (value, color, fs) => {
      return `<span class="align-self-center"><i class="bi bi-${value} text-${color} fs-${fs}"></i></span>`;
    }
    switch (method) {
      case 'bi':
        return icon_bi(icon, color, fs)
    }
  }

  function callRich(method, values, params) {
    const rich_a = (value, path, width) => {
      return `<img  src="${path}${value}" alt="Profile Picture" class="rounded-circle" style="width: ${width}">`;
    }

    const rich_b = (value, path, width) => {
      return `<div class="d-flex flex-row">
      <img src="${path}${value[0]}" alt="Profile Picture" class="rounded-circle me-3" style="width: ${width}">
      <div class="d-flex flex-column">
      <span class="text-gray-900">${value[1]}</span>
      <span class="fs-7 text-gray-500">${value[2]}</span>
      </div>
      </div>`
    }
    // const
    const [dPath, iWidth] =
            [
              params[0] ?? '../../assets/media/',
              params[1] ?? '40px'
            ];

    switch (method) {
      case 'a':
        return rich_a(values, dPath, iWidth);
      case 'b':
        return rich_b(values, dPath, iWidth);
    }
  }

  function callStatus(method, values, params) {
    let str = PB_render_common.returnOnCall(values, 'string', [3]);
    const status_a = (value) => {
      return `<span>${value}</span>`;
    }

    switch (method) {
      case 'a':
        return status_a(str);
    }
  }

  function callButton(method, value = 'value', params = ['action', 'button-action', 'goto-target', 'button']) {
    const callButton_a = (value, params) => {
      return `<button type="button" name="${params[0]}" value="${params[1]}"  ${atr.core.value}="${value}" data-pb-target="${params[2]}" class="btn btn-link hover-scale">${params[3]}</button>`
    }
    const callButton_b = (value, params) => {
      return `<button type="button" name="${params[0]}" value="${params[1]}"  class="btn btn-sm btn-color-gray-800 btn-light-secondary btn-active-light-primary px-3 text-capitalize">${params[3]}</button>`
    }

    const callButton_c = (value, params) => {
      return `<button type="button" name="${params[0]}" value="${params[1]}" ${atr.core.value}="${value}" class="btn btn-sm btn-color-gray-800 btn-light-secondary btn-active-light-primary px-3 text-capitalize">${params[1]}</button>`
    }
    switch (method) {
      case 'a':
        return callButton_a(value, params);
      case 'b':
        return callButton_b(value, params);
      case 'c':
        return callButton_c(value, params);
    }
  }

  function callDropButtons(method, value, params) {
    // inner const
    const bIcon = {
      'view'   : ['la-eye', 'dark'],
      'edit'   : ['la-edit', 'info'],
      'delete' : ['la-trash', 'danger'],
      'ledger' : ['la-book-open', 'primary'],
      'report' : ['la-folder-open', 'success'],
      'summary': ['la-file-alt', 'warning'],
    }
    // inner functions

    const dropButton_a = (value) => {
      return '<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Options <i class="ms-1 bi bi-chevron-down"></i></a>' +
        '<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 py-4 w-125px" data-kt-menu="true">' +
        '<div class="menu-item px-3"><a class="btn btn-sm btn-light-primary btn-active-light-primary px-3" data-pb-edit="' + value + '">View</a></div>' +
        '</div>';
    }

    const dropButton_b = (val, btns, name, value) => {
      let dropButton = `<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Options <i class="ms-1 bi bi-chevron-down"></i></a>`;
      dropButton += `<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 py-4 w-125px" data-kt-menu="true">`;
      for (let i = 0; i < btns; i++) {
        dropButton += menuBTN_action([name[i], value[i]], val);
      }
      dropButton += '</div>';

      return dropButton;
    }
    const menuA_action = (button, value) => {
      return '<div class="menu-item px-3">\n' +
        '<a href="' + 4 + '" class="btn btn-sm btn-color-gray-800 btn-light-secondary btn-active-light-primary w-100 px-3 text-capitalize"><i class="fs-4 me-1 bi bi-"></i>' + button[1].split('-')[0].toLowerCase() + '</a>\n' +
        '</div>';
    }
    const menuBTN_action = (button, value) => {
      // <button type="button" name="${button[0]}" value="${button[1]}" data-pb-${button[1].split('-')[0]}="${value}" class="btn btn-sm btn-color-gray-800 btn-light-secondary btn-active-light-primary w-100 px-3 text-capitalize"><i class="fs-4 me-1 bi bi-"></i>${button[1].split('-')[0].toLowerCase()}</button>
      return `<div class="menu-item px-3">
      <button type="button" name="${button[0]}" value="${button[1]}" ${atr.core.value}="${value}" class="${CLS.custom.dropdownBtn} btn-active-light-${bIcon[button[1]][1]}"><i class="fs-4 me-1 las ${bIcon[button[1]][0]}"></i>${button[1]}</button>
      </div>`;
    }
    // const
    const [btn, names, values] =
            [
              params[0] ?? '3', // how many buttons your want to show
              params[1] ?? ['card', 'card', 'action'], // what is the button name for index
              params[2] ?? ['view-contact', 'edit-contact', 'delete-contact'], // what is the button value for index
            ]

    // method
    switch (method) {
      case 'a':
        return dropButton_a(value);
      case 'b':
        return dropButton_b(value, btn, names, values);
    }
  }


  function callOptions(method, value, params) {
    const options_a = (value) => {
      return '<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">' +
        '<div class="menu-item px-3"><a href="#" class="menu-link px-3">Edit</a></div>' +
        '<div class="menu-item px-3"><a href="#" class="menu-link px-3" id="kt_contact_delete" data-kt-redirect="">Delete</a></div>' +
        '</div>';
    }

    switch (method) {
      case 'a':
        return options_a(value)
    }
  }

  function callInput(method, value, params) {
    let type = params[0] ?? 'text';
    let name = params[1] ?? 'text';
    let cls = params[2] ?? 'w-125px inr_mask_62 py-1';
    let req = params[3] ? 'required' : '';
    let holder = params[4] ?? '';
    let title = params[5] ?? '';
    let mask = params[6] ?? 'inputmask';
    let target = params[7] ?? 'amount';
    switch (method) {
      case 'a':
        return input_a(value, type, name, cls, req, holder, title);
      case 'b':
        return input_b(value, type, name, cls);
      case 'c':
        return input_a(value, type, name, cls, req, holder, title, mask, target);
    }
  }

  const input_a = (value, type, name, cls, req, holder, title) => {
    return `<input type="${type}" name="${name}" class="form-control form-control-transparent ${cls}" placeholder="${holder}" title="${title}" value="${value}"/>`;
  }
  const input_b = (value, type, name, cls) => {
    return `<input type="${type}" name="${name}" class="form-control form-control-transparent${cls}" value="${value}"/>`;
  }
  const input_c = (value, type, name, cls, req, holder, title, mask, target) => {
    return `<input type="${type}" name="${name}" class="form-control form-control-transparent ${cls}" placeholder="${holder}" title="${title}" value="${value}" data-control="${mask}" data-pb-method="${target}"/>`;
  }

  /**
   * ----------------------------------------------------------------
   * Value render function fo the cell.
   * ----------------------------------------------------------------
   * this function return the cell value as per its type.
   * @param type
   * @param method
   * @param value
   * @param params
   * @returns {string}
   */
  function cellValue(type, method, value, params) {
    switch (type) {
      case TBL_ct.dt:
        return cellDate(method, value, params);

      case TBL_ct.amt:
        return cellAmount(method, value, params);

      case TBL_ct.ac:
        return cellAccount(method, value, params);

      case TBL_ct.txt:
        return cellText(method, value, params);

      case TBL_ct.note:
        return cellNote(method, value, params);

      case TBL_ct.cb:
        return callCheckbox(method, value, params);

      case TBL_ct.act:
        return callDropButtons(method, value, params);

      case TBL_ct.in:
        return callInput(method, value, params);

      case TBL_ct.img:
        return callImage(method, value, params);

      case TBL_ct.opt:
        return callOptions(method, value, params);

      case TBL_ct.icon:
        return callIcon(method, value, params);

      case TBL_ct.rich:
        return callRich(method, value, params);

      case TBL_ct.sts:
        return callStatus(method, value, params);

      case TBL_ct.btn:
        return callButton(method, value, params);

      default:
        return value;
    }
  }

  /**
   * this function return the cell value with <td>.
   * @param type select from const, TCT_xxxxxxxx
   * @param method value present method
   * @param value value
   * @param params value rendering params
   * @param style int, css style method
   * @param css array, css array style
   * @returns {string}
   */
  function tbCell(type, method, value, params = [], style = 0, css = [false, 'end', 100]) {
    // <td class="min-w-100px"></td>
    // <td class="text-end"></td>
    var cell_val = cellValue(type, method, value, params);

    // css = [nowrap]
    switch (style) {
      case 0:
        return css[0] ? `<td nowrap="">${cell_val}</td>` : `<td>${cell_val}</td>`;
      case 1:
        return `<td class="text-` + (css[1] ?? `end`) + `">${cell_val}</td>`;
      case 2:
        return `<td class="min-w-` + (css[2] ?? `100`) + `px">${cell_val}</td>`;
      case 3:
        return `<td><span class="${css[3]}">${cell_val}</span></td>`;
      case 4:
        return `<td><span class="fw-bold fs-5">${cell_val}</span></td>`;
      case 100:
        const nw = css[0] ? `nowrap=""` : ``;
        const align = css[1] ?? 'end';
        const width = css[2] ?? 100;
        return `<td ${nw} class="text-${align} min-w-${width}px"><span class="` + (css[3] ?? '') + `">${cell_val}</span></td>`;

    }
  }

  /*
   ----------------------------------------------------------------
   Standard rending functions
   ----------------------------------------------------------------
   */
  /**
   * it returns tbody with simple rows.
   * @param data
   * @param profile
   * @param type
   * @returns {HTMLTableSectionElement}
   */
  const simpleRendering = function (data, profile, type) {
    // inside functions.
    const arrays_in_object = (data, profile) => {
      tbody = document.createElement('tbody');
      Object.keys(data).forEach(index => {
        tr = document.createElement('tr');
        rows = '';

        // console.log(Object.keys(profile));
        console.log(profile)
        Object.keys(profile).forEach((key) => {
          let value = [];
          // console.log(profile[key].value);
          if (profile[key].value.includes(',')) {
            profile[key].value.split(',').forEach(val => {
              value.push(data[index][val]);
            });
          }
          else {
            value = data[index][profile[key].value];
          }
          // todo: @lokesh, insert row id into table '<tr>' tag as data-pb-rowid="342"
          rows += tbCell(profile[key].type, profile[key].method, value, profile[key].param, profile[key].style, profile[key].css);
        });
        tr.innerHTML = rows;
        tbody.appendChild(tr);
      });
      return tbody;
    }
    const objects_in_array = (data, profile) => {

      tbody = document.createElement('tbody');
      let keys = Object.keys(data[0]);

      data.forEach((row) => {
        tr = document.createElement('tr');
        rows = '';

        // console.log(Object.keys(profile));
        // console.log(row);

        Object.keys(profile).forEach((key) => {
          let value = [];
          // console.log(profile[key].value);
          if (profile[key].value.includes(',')) {
            profile[key].value.split(',').forEach(val => {
              value.push(row[keys[val]]);
            });
          }
          else {
            value = row[keys[profile[key].value]];
          }
          rows += tbCell(profile[key].type, profile[key].method, value, profile[key].param, profile[key].style, profile[key].css);
        });
        tr.innerHTML = rows;
        tbody.appendChild(tr);
      });
      return tbody;
    }

    switch (type) {
      case 'object':
        return objects_in_array(data, profile);
      case 'array':
        return arrays_in_object(data, profile);
    }
  }

  /**
   * it returns tbody with inside sub-table connected with an id of main table.
   * @param master this is core table object
   * @param children this is sub table object
   * @param profile
   */
  const nestedRendering = (data, profile, header, type) => {
    // inside functions.
    const arrays_in_object = (data, profile, header) => {
      tbody = document.createElement('tbody');

      Object.keys(data.parent).forEach(index => {
        tr = document.createElement('tr');
        rows = '';

        // console.log(Object.keys(profile));
        //console.log(profile.parent)
        Object.keys(profile.parent).forEach((key) => {
          let value = [];
          // console.log(profile[key].value);
          if (profile.parent[key].value.includes(',')) {
            profile.parent[key].value.split(',').forEach(val => {
              value.push(data.parent[index][val]);
            });
          }
          else {
            value = data.parent[index][profile[key].value];
          }
          // todo: @lokesh, insert row id into table '<tr>' tag as data-pb-rowid="342"
          rows += tbCell(profile.parent[key].type, profile.parent[key].method, value, profile.parent[key].param, profile.parent[key].style, profile.parent[key].css);
        });

        tr.innerHTML = rows;
        tbody.appendChild(tr);

        //make the child table of parent table
        table = document.createElement('table');
        thead = document.createElement('thead');

        // now make the headers for the child table
        header.forEach((item) => {
          th = document.createElement('th');
          th.innerText = item;
          thead.appendChild(th);
        });
        table.appendChild(thead);

        tr = document.createElement('tr');
        td = document.createElement('td');
        td.colSpan = data.parent[index].length;

        table.appendChild(simpleRendering(data.child[index], profile.child, 'array'));

        td.appendChild(table);
        tr.appendChild(td);

        tbody.appendChild(tr);
      });
      return tbody;
    }

    switch (type) {
      case 'object':
        return true;
      case 'array':
        return arrays_in_object(data, profile, header);
    }
  }
  /**
   * used to add data-* attributes to the table <td>
   * @param data
   * @param profile
   * -------------------------------
   * dateRow[5].setAttribute('data-order', realDate);
   *
   *
   */
  const advanceRendering = (data, profile) => {

  }
  /**
   * need to think the usage and returns
   * @param data
   * @param profile
   */
  const complexRendering = (data, profile) => {

  }
  /**
   * used for datatables enabled sub-table system
   * @param data
   * @param profile
   */
  const childrenRendering = (data, profile) => {

  }

  /**
   * @param {string} colspan is no of columns in that table.
   * @param text
   */
  const noDataFound = (colspan, text = 'No Record has Found') => {
    let tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="' + colspan + '" class="text-center">' + text + '</td>';
    return document.createElement('tbody').appendChild(tr);
  }

  // public methods
  return {
    zeroRow       : function (colspan, text) {
      return noDataFound(colspan, text);
    },
    simpleRender  : function (data, profile, type = 'array') {
      return simpleRendering(data, profile, type)
    },
    nestedRender  : function (data, profile, header = [], type = 'array') {
      return nestedRendering(data, profile, header, type);
    },
    advanceRender : function (data, profile, type) {
      return advanceRendering(data, profile, type)
    },
    complexRender : function (data, profile, type) {
      return complexRendering(data, profile, type)
    },
    childrenRender: function (data, profile, type) {
      return childrenRendering(data, profile, type)
    },

  };
}();
