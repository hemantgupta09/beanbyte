"use strict";

/**
 TODO: @forFinish
 [] 1. calling a onclick in select
 [] 2.
 [] 3.
 */
  // Class definition
var Plug_selectPicker = function () {
    /*
     // links for select2
     1. https://select2.org/configuration/options-api
     2.
     */

    // Shared variables
    let template, matcher;
    let span, temp;
    let SP_tackle;

    // Private functions
    const placeholder = (item) => {
      return item.element.getAttribute(atr.select.placeholder);
    }

    // -------------------- Common functions
    const createSpan = () => {
      return document.createElement('span');
    }

    /*
     ----------------------------------------------------------------
     TEMPLATES
     ----------------------------------------------------------------
     All Templates.
     ----
     */

    /*
     * ----------------------------------------------------------------
     * SIMPLE
     * ----------------------------------------------------------------
     */

    /**
     * a simple option creation.
     * three methods are available.
     * [direct, withid, subtext]
     * @param item
     * @returns HTMLElement
     */
    const simpleSelect = (item) => {
      if (!item.id) return item.text;
      template = `<span class="fs-6 text-gray-800 fw-semibold lh-sm">${item.text}</span>`;
      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }

    const simpleResult = (item) => {
      if (!item.id) return item.text;

      // template design
      template = ``;
      const TL_direct = () => {
        template += `<span class="fs-6 text-gray-800 fw-semibold lh-1">${item.text}</span>`;
      }
      const TL_withid = () => {
        const st = item.element.hasAttribute(atr.select.options.subtext) && item.element.getAttribute(atr.select.options.subtext) !== '' ? `<span class="fw-normal ps-2 text-gray-700">` + item.element.getAttribute(atr.select.options.subtext) + `</span>` : '';
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-6 text-gray-700 me-2">${item.id}</span>`;
        template += `<span class="fs-6 text-gray-800 fw-semibold lh-1">${item.text}</span>`;
        template += st;
        template += `</div>`;
      }
      const TL_subtext = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-6 text-gray-800 fw-semibold lh-1">${item.text}</span>`;
        template += `<span class="fw-normal ps-2 text-gray-700">${item.element.getAttribute(atr.select.options.subtext)}</span>`;
        template += `</div>`;
      }

      // data-pb-tack
      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.simple[SP_tackle]) {
        case SPO_mds.simple.direct:
          TL_direct();
          break;
        case SPO_mds.simple.withid:
          TL_withid()
          break;
        case SPO_mds.simple.subtext:
          TL_subtext();
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }


    /*
     * ----------------------------------------------------------------
     * ACCOUNT
     * ----------------------------------------------------------------
     */

    /**
     * a Select configuration for account
     * @param item
     * @returns HTMLElement
     */
    const accountSelect = (item) => {
      if (!item.id) return simpleSelect(item);

      // template design
      template = ``;
      const TP_amount = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-row">`;
        template += `<span class="fs-6 fw-semibold text-gray-800 lh-1">${item.text}</span>`;
        template += `<span class="fw-normal px-1">${item.element.getAttribute(atr.select.options.amount)}</span>`;
        template += `<span class="text-muted fw-normal">${item.element.getAttribute(atr.select.options.suffix)}</span>`;
        template += `</div>`;
      }
      const TP_group = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-row">`;
        template += `<span class="fs-6 fw-semibold text-gray-800 lh-1">${item.text}</span>`;
        template += `<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span>`;
        template += `</span></div>`;
      }
      const TP_ledger = () => {
        TP_group();
      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.account[SP_tackle]) {
        case SPO_mds.account.amount:
          TP_amount();
          break;
        case SPO_mds.account.group:
          TP_group();
          break;
        case SPO_mds.account.ledger:
          TP_ledger();
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }
    const accountResult = (item) => {
      if (!item.id) return simpleSelect(item);

      // template design
      template = ``;
      const TL_amount = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span></span>`;
        template += `<div class="flex-row fs-6">`;
        template += `<span class="fw-normal text-gray-500">${item.element.getAttribute(atr.select.options.prefix)}</span>`;
        template += `<span class="fw-normal text-gray-800 px-1">${item.element.getAttribute(atr.select.options.amount)}</span>`;
        template += `<span class="fs-6 fs-semibold text-${item.element.getAttribute(atr.select.options.color)}">${item.element.getAttribute(atr.select.options.suffix)}</span>`;
        template += `</div></span></div>`;
      }
      const TL_group = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span></span>`;
        template += `<div class="flex-row fs-6">`;
        template += `<span class="fw-light">${item.element.getAttribute(atr.select.options.prefix)}</span>`;
        template += `<span class="fw-normal px-1">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `</div></span></div>`;
      }
      const TL_ledger = () => {

        let row = {3: ``, 4: ``, 5: ``};

        for (let i = 3; i < 6; i++) {
          if (item.element.getAttribute(atr.select.options['val' + i]) !== null) {
            row[i] += `<div class="d-flex flex-stack fs-6">`;
            row[i] += `<span class="fw-normal">${item.element.getAttribute(atr.select.options['key' + i])}</span>`;
            row[i] += `<span class="fw-normal px-1 me-10">${item.element.getAttribute(atr.select.options['val' + i])}</span>`;
            row[i] += `</div>`;
          }
        }

        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span>`;
        template += `</span></div>`;
        template += `<div class="separator separator-dashed my-2"></div>`;

        template += `${row[3]}`
        template += `${row[4]}`
        template += `${row[5]}`

      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.account[SP_tackle]) {
        case SPO_mds.account.amount:
          TL_amount();
          break;
        case SPO_mds.account.group:
          TL_group();
          break;
        case SPO_mds.account.ledger:
          TL_ledger();
          break;
      }

      // combined into a single element
      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }

    /*
     * ----------------------------------------------------------------
     * CUSTOM
     * ----------------------------------------------------------------
     */

    /**
     *
     * @param item
     * @returns {*}
     */
    const customSelect = (item) => {
      return item.text;
    }
    const customResult = (item) => {
      if (!item.id) return item.text;

      // template design
      template = '';
      const TL_table = () => {
        template += `<div class="d-flex flex-stack">`
        template += `<span class="fs-5 lh-sm">`;
        template += `<span class="fw-semibold">${item.text}</span>`;
        template += `<span class="fw-normal text-gray-600 ps-2">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `</span>`;
        template += `<span class="text-dark fs-5 ps-2 pt-0 me-5 lh-sm text-end fw-bold">${item.element.getAttribute(atr.select.options.subtext)}</span>`;
        template += `</div>`;
        // table
        template += `<table class="table table-bordered border border-gray-500 p-3 table-rounded table-row-dashed table-row-gray-500 g-0 mb-0">`;
        template += `<tbody><tr>`;
        template += `<td>Date</td><td>:</td><td class="ps-4">${item.element.getAttribute(atr.select.options.date)}</td></tr>`;
        template += `<tr><td>Credited</td><td>:</td><td class="ps-4">${item.element.getAttribute(atr.select.options.debit)}</td></tr>`;
        template += `<tr><td>Debited</td><td>:</td><td class="ps-4">${item.element.getAttribute(atr.select.options.credit)}</td></tr>`;
        template += `<tr><td>Amount</td><td>:</td><td class="ps-4 fw-semibold">${item.element.getAttribute(atr.select.options.amount)}</td>`;
        template += `<tr><td colspan="3" class="text-center text-muted">${item.element.getAttribute(atr.select.options.note)}</td>`;
        template += `</tr></tbody></table>`;
      }
      const TL_custom_1 = () => {

      }
      const TL_custom_2 = () => {

      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.custom[SP_tackle]) {
        case SPO_mds.custom.table:
          TL_table();
          break;
        case SPO_mds.custom.key1:
          TL_custom_1()
          break;
        case SPO_mds.custom.key2:
          TL_custom_2();
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }


    /*
     * ----------------------------------------------------------------
     * PERSON
     * ----------------------------------------------------------------
     */
    /**
     *
     * @param item
     * @returns {*}
     */
    const imageSelect = (item) => {
      if (!item.id) return simpleSelect(item);
      const urlPath = hostUrl + 'media/avatars/';

      // template design
      template = ``;
      const TL_inline = () => {
        let path;
        if (item.element.getAttribute(atr.select.options.image) === '') {
          path = urlPath + 'blank.png';
        }
        else {
          path = urlPath + item.element.getAttribute(atr.select.options.image);
        }
        template += `<div class="d-flex flex-row">`
        template += `<img src="${path}" class="rounded-circle h-15px me-2" alt="image"/>`;
        template += `<span class="fs-6 fw-semibold lh-sm align-self-center">${item.text}</span>`;
        template += `<div>`;
      }
      const TL_rich = () => {
        TL_inline();
      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.image[SP_tackle]) {
        case SPO_mds.image.inline:
          TL_inline();
          break;
        case SPO_mds.image.rich:
          TL_rich()
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }
    const imageResult = (item) => {
      if (!item.id) return simpleSelect(item);

      const urlPath = hostUrl + 'media/avatars/';

      // template design
      template = ``;
      const TL_inline = () => {
        let path;
        if (item.element.getAttribute(atr.select.options.image) === '') {
          path = urlPath + 'blank.png';
        }
        else {
          path = urlPath + item.element.getAttribute(atr.select.options.image);
        }
        template += `<div class="d-flex flex-row">`
        template += `<img src="${path}" class="rounded-circle h-20px me-2" alt="image"/>`;
        template += `<span class="fs-6 fw-semibold lh-1 align-self-center">${item.text}</span>`;
        template += `<div>`;
      }
      const TL_rich = () => {
        template += '<div class="d-flex align-items-center">';
        if (item.element.getAttribute(atr.select.options.image) === '') {
          template += `<div class="symbol symbol-40px symbol-circle">`;
          template += `<div class="symbol-label border border-1 border-dark border-opacity-50 fs-2 fw-semibold bg-light-dark text-muted me-3">${item.text.substring(0, 2).toUpperCase()}</div></div>`;
        }
        else {
          const path = urlPath + item.element.getAttribute(atr.select.options.image);
          template += `<img src="${path}" class="rounded-circle h-40px me-3" alt="${item.text}"/>`;
        }
        template += `<div class="d-flex flex-column align-content-center">`
        template += `<span class="fs-5 fw-bold lh-sm">${item.text}</span>`;
        template += `<span class="text-muted fs-5 lh-1">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `</div>`;
        template += `</div>`;
      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.image[SP_tackle]) {
        case SPO_mds.image.inline:
          TL_inline();
          break;
        case SPO_mds.image.rich:
          TL_rich()
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }

    /*
     * ----------------------------------------------------------------
     * TEXT
     * ----------------------------------------------------------------
     */
    const textSelect = (item) => {
      if (!item.id) return simpleSelect(item);
      // template for options
      temp = ``;
      temp += `<div class="d-flex flex-row">`
      temp += `<span class="fs-6 fw-semibold">${item.text}</span>`;
      temp += `<span class="text-muted fw-normal fs-6 ps-2">${item.element.getAttribute(atr.select.options.alias).substring(0, 10)}</span>`;
      temp += `</div>`;
      // combined into a single span
      span = createSpan();
      span.innerHTML = temp;

      return $(span);
    }
    const textResult = (item) => {
      if (!item.id) return simpleSelect(item);

      // template design
      template = '';
      const TL_col = () => {
        template += `<div class="d-flex flex-column">`
        template += `<span class="fs-5 fw-bold lh-sm">${item.text}</span>`;
        template += `<span class="text-muted fs-5 ps-2 mt-1 lh-sm">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `</div>`;
      }
      const TL_end = () => {
        template += `<div class="d-flex flex-column">`
        template += `<span class="fs-5 fw-bold lh-sm">${item.text}</span>`;
        template += `<p class="text-muted fs-5 ps-2 mt-1 mb-0 me-5 lh-sm text-end">${item.element.getAttribute(atr.select.options.text)}</p>`;
        template += `</div>`;
      }
      const TL_row = () => {
        template += `<div class="d-flex flex-stack">`
        template += `<span class="fs-5 fw-semibold lh-sm">${item.text}</span>`;
        template += `<span class="text-muted fs-5 ps-2 pt-0 me-5 lh-sm text-end">${item.element.getAttribute(atr.select.options.text).substring(0, 15)}</span>`;
        template += `</div>`;
      }
      const TL_dual = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span>`;
        template += `</span>`;
        template += `</div>`;
        template += `<div class="d-flex flex-stack fs-6">`;
        template += `<span class="fw-normal text-gray-600">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `<span class="fs-6 fw-normal">${item.element.getAttribute(atr.select.options.subtext)}</span>`;
      }
      const TL_menu = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span>`;
        template += `</span>`;
        template += `</div>`;
        template += `<div class="separator separator-dashed my-2"></div>`;
        // menu row
        template += `<div class="d-flex flex-stack fs-6">`;
        template += `<span class="fw-normal text-gray-600">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `<div>`
        template += `<span class="fs-6 fw-normal">${item.element.getAttribute(atr.select.options.subtext)}</span>`;
        template += `<span class="ms-1 badge badge-light-${item.element.getAttribute(atr.select.options.color)}">${item.element.getAttribute(atr.select.options.badge)}</span></div>`
        template += `</div>`;
      }
      const TL_grid = () => {
        template += `<div class="d-flex">`;
        template += `<span class="flex-column">`;
        template += `<span class="fs-5 fw-semibold text-gray-800 lh-1">${item.text}<span class="fw-normal fs-7 text-gray-700 ms-2">${item.element.getAttribute(atr.select.options.alias)}</span>`;
        template += `</span>`;
        template += `</div>`;
        template += `<div class="separator separator-dashed my-2"></div>`;
        // 1st row
        template += `<div class="d-flex flex-stack fs-6">`;
        template += `<span class="fw-normal text-gray-700">${item.element.getAttribute(atr.select.options.text)}</span>`;
        template += `<span class="fw-normal px-1 me-5">${item.element.getAttribute(atr.select.options.subtext)}</span>`;
        template += `</div>`;
        // 2nd row
        template += `<div class="d-flex flex-stack fs-6">`;
        template += `<span class="fw-normal text-gray-600">${item.element.getAttribute(atr.select.options.desc)}</span>`;
        template += `<span class="badge badge-light-${item.element.getAttribute(atr.select.options.color)}">${item.element.getAttribute(atr.select.options.badge)}</span>`;
        template += `</div>`;
      }

      switch (item.element.getAttribute(atr.select.options.whoiam) ?? SPO_mds.text[SP_tackle]) {
        case SPO_mds.text.col:
          TL_col();
          break;
        case SPO_mds.text.end:
          TL_end();
          break;
        case SPO_mds.text.row:
          TL_row();
          break;
        case SPO_mds.text.dual:
          TL_dual()
          break;
        case SPO_mds.text.menu:
          TL_menu();
          break;
        case SPO_mds.text.grid:
          TL_grid();
          break;
      }

      span = createSpan();
      span.innerHTML = template;

      return $(span);
    }
    /**
     * used to select ledger account where balance is not require to display.
     * @param item
     * @returns {HTMLElement}
     */

    /*
     ----------------------------------------------------------------
     ** core functions **
     ----------------------------------------------------------------
     */

    function matchGroup(params, data) {
      if ($.trim(params.term) === '') {
        return data;
      }
      if (typeof data.children === 'undefined') {
        return null;
      }
      var filteredChildren = [];
      $.each(data.children, function (idx, child) {
        if (child.text.toUpperCase().indexOf(params.term.toUpperCase()) > -1) {
          filteredChildren.push(child);
        }
      });
      if (filteredChildren.length) {
        var modifiedData = $.extend({}, data, true);
        modifiedData.children = filteredChildren;
        return modifiedData;
      }
      return null;
    }

    function matchDefault(params, data) {

      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      const original = data.text.toLowerCase();
      const term = params.term.toLowerCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }
      // check if the attribute contains the term
      for (var attr = 0; attr < data.element.attributes.length; attr++) {

        for (const spoAttrKey in atr.select.options) {
          if (data.element.attributes[atr.select.options[spoAttrKey]]) {
            let duplicate = data.element.getAttribute(atr.select.options[spoAttrKey]).toLowerCase();
            if (duplicate.indexOf(term) > -1) {
              return data;
            }
          }
        }
        // data.element.attributes[attr];
      }
      // check if the id contains the term
      if (data.id.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    function OptTemplate(method, result) {
      switch (method) {

        case SP_mds.simple:
          return result ? simpleResult : simpleSelect;

        case SP_mds.account:
          return result ? accountResult : accountSelect;

        case SP_mds.custom:
          return result ? customResult : customSelect;

        case SP_mds.image:
          return result ? imageResult : imageSelect;

        case SP_mds.text:
          return result ? textResult : textSelect;

        default:
          return result ? simpleResult : simpleSelect;
      }
    }

    const selectPickerReturn = function (selects) {

      // get the template
      let SP_method;
      let selectEles;

      selectEles = [].slice.call(selects);
      if (selectEles.length === 0) return;


      selectEles.map(function (selectEle) {
        if (selectEle.getAttribute(atr.core.initiated) === "1") {
          return;
        }

        SP_method = selectEle.getAttribute(atr.core.method);
        SP_tackle = selectEle.getAttribute(atr.select.tack);

        const options = {
          placeholder: 'add placeholder',
          allowClear: true,
          selectOnClose: false,
          templateSelection: OptTemplate(SP_method, false), //simpleSelect,
          templateResult: OptTemplate(SP_method, true), //simpleResult,
        };

        // search option
        if (selectEle.getAttribute(atr.select.search) === '0') {
          options.minimumResultsForSearch = Infinity;
        }
        else {
          // search option
          options.minimumInputLength = 0;
          options.maximumInputLength = 20;
          // advance search bar
          options.matcher = matchDefault
          // if search for optgroup => matchGroup
        }

        // multiple
        // options.maximumSelectionLength = 0;

        // dropdownParent
        // options.dropdownParent = $('#myModal');

        $(selectEle).select2(options);

        selectEle.setAttribute(atr.core.initiated, "1");
      });
    }

    // Public methods
    return {
      onDOMLoad: function () {
        // selectPickerReturn($('[data-control="select"]'));
        selectPickerReturn(document.querySelectorAll(querySA(kws.plugin.sel, kws.labels.auto)));
      },

      onCalling: function (form, label = 'call') {
        //selectPickerReturn($('#' + form.getAttribute('id')).find('[data-pb-control="select"]'));
        const id = form.getAttribute('id');
        const Ele = document.querySelector('#' + id).querySelectorAll(querySA(kws.plugin.sel, label));
        selectPickerReturn(Ele);
      },

      onCalling_direct: function (form, label = 'call') {
        console.log('i am here - 44');
        // selectPickerReturn($(form.querySelectorAll('[data-pb-control="select"]')));
        selectPickerReturn(form.querySelectorAll(querySA(kws.plugin.sel, label)));
      },
    };
  }();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  Plug_selectPicker.onDOMLoad();
});