"use strict"
var PB_render_common = function () {

  // shared variables
  const decimal_Arr = [1, 10, 100, 1000, 10000];
  const currentTime = new Date().getTime();
  const locales = 'en-IN';
  const locales_base = 'en-US';
  // it shows days upto 30 and then covert into months
  const ago = {
    x: 30,
    y: 90,
    z: 365,
  }

  let numberLocales = Intl.NumberFormat(locales);
  let pbDate;
  let precalled = false;

  // constant Objects
  // @todo @@balram urgent
  const valString = {
    // notification method
    // old s_notify: ['None', 'SMS', 'WhatsApp', 'Email'],
    s_notify: {
      0: 'None',
      1: 'SMS',
      2: 'WhatsApp',
      4: 'Email'
    },
    // account dropdown prefix
    s_ac_prefix: {
      0: 'Group:',
      1: 'Balance:',
      2: 'Members:',
      3: 'Due:',
      4: 'Bill No:',
      5: 'Total Bills:',
      6: 'Head:'
    },
    // account dropdown suffix
    s_ac_suffix: {
      0: 'Debit',
      1: 'Credit',
      2: 'Available',
      3: 'Outstanding',
      4: 'Due',
      5: 'Remaining',
      6: 'Advance',
      7: 'Unsettled'
    },
    // credit bills status
    s_crb_status: {
      0: 'Received',
      1: 'Received Late',
      2: 'With Interest'
    },
    // ledger dropdown
    s_lgr_drops: {
      0: '',
      1: 'Sales:',
      2: 'Payments:',
      3: 'Balance:',
      4: 'Total Due:',
      5: 'Last Bill Due:'
    },
    // fuel status
    s_fuel_status: {
      0: 'Low',
      1: 'Enough'
    },
    // amount_status
    s_amount_status: {
      0: 'Due',
      1: 'Paid'
    }
  }

  const basicThings_update = function () {
    // max length
    $('[data-pb-control="length"]').maxlength({
      warningClass: "badge badge-danger",
      limitReachedClass: "badge badge-success"
    });

    //
  }
  /*
   ----------------------------------------------------------------
   ------- renderString
   ----------------------------------------------------------------
   [update, return]
   */
  /*
   * =======================================
   * String Rendering
   * =======================================
   * this function returns a string representation of a number
   * data input : 2
   * data output : Received
   */
  /**
   * it takes status as number and return the string as per array.
   * @param item it can be an HTMl element or a value.
   * @param key key for const object of string.
   * @param _return should you want tot return the value or not?
   * @constructor
   */
  const getStringFromValue = function (item, key, _return = false) {
    if (!_return) {
      if (!isNaN(item.innerText * 1)) {
        item.innerText = valString[key][item.innerText];
      }
    }
    else {
      return valString[key][item];
    }
  }
  /**
   * it updates the element inner text
   * @param Ele this is the target element
   */
  const renderString_update = (Ele) => {
    Object.keys(valString).forEach((key, id) => {
      Ele.getElementsByClassName(key).forEach((item) => {
        getStringFromValue(item, key, false);
      });
    });
  }
  /**
   * it returns the matched string
   * @param value
   * @param target
   */
  const renderString_return = (value, target) => {
    let temp;
    Object.keys(valString).forEach((key, id) => {
      if (target === id) {
        temp = getStringFromValue(value, key, true)
      }
    });
    if (!temp) console.log('string id not found');
    return temp
  }


  /*
   * =======================================
   * renderTrim Rendering
   * =======================================
   * this function remove whitespace or other useless part
   * data input :
   */
  const renderTrim_return = (data = '  ', param) => {
    let _trim = data;
    param.forEach((key) => {
      switch (key) {
        case 0:
          // only white space trim.
          _trim = splitTrim(_trim);
          break;
        case 1:
          // only new line.
          _trim = newlineFilter(_trim)
          break;
        case 2:
          // ending trim.
          _trim = _trim.trim();
          break;
        case 3:
          // dual space trim
          _trim = dualSpaceFilter(_trim);
      }
    });
    // return
    return _trim;
  }

  const renderTrim_update = () => {
    //
  }

  const splitTrim = function (data) {
    let _r = "";
    data.split(' ').forEach((item) => {
      if (item.length !== 0) {
        _r += ' ' + item;
      }
    });
    return _r.trim();
  }
  const dualSpaceFilter = function (data) {
    return data.replace(/ {2}/g, "").replace(/(\r\n|\n|\r)/gm, '');
  }

  const newlineFilter = function (data) {
    return data.replace(/(\r\n|\n|\r)/gm, '');
  }

  /*
   * =======================================
   * Number Rendering
   * =======================================
   * this function convert numbers into local formats
   * data input : 45234345 (a row number)
   */
  const renderNumber_update = function (element) {

    // Number Updating
    var in_num = element.getElementsByClassName('in_num');
    in_num.forEach(numberFormat);

    // Currency Updating
    var in_inr = element.getElementsByClassName('in_inr');
    in_inr.forEach((inrEle) => {
      if (inrEle.getAttribute(atr.core.formatted) !== '1') {
        indianFormat(inrEle);
        inrEle.setAttribute(atr.core.formatted, '1');
      }
    });

  }
  // initiate the working const functions
  /**
   * attribute for rendering: 'data-cs-round', 'data-cs-postfix'
   * @param item
   */
  const numberFormat = item => {
    var suffix, postfix, dec_val;
    dec_val = item.getAttribute(atr.common.round);
    if (dec_val === false || dec_val === null || dec_val === undefined) {
      dec_val = 2;
    }
    postfix = item.getAttribute(atr.common.postfix) ?? '';
    if (postfix === false || postfix === null || postfix === undefined) {
      suffix = '';
    }
    else {
      suffix = '<small class="opacity-75">' + postfix + '</small>';
    }
    item.innerHTML = (Number(item.innerText)).toLocaleString(locales_base, {minimumFractionDigits: dec_val}) + suffix;
  };
  /**
   * attribute for rendering:
   * ['data-cs-round', 'data-cs-postfix', 'data-cs-currency',]
   * @param item
   */
  const indianFormat = (item) => {
    var suffix, postfix, dec_val;
    dec_val = item.getAttribute(atr.common.round);
    if (dec_val === false || dec_val === null || dec_val === undefined) {
      dec_val = 2;
    }
    // postfix
    postfix = item.getAttribute(atr.common.postfix) ?? '';
    if (postfix === false || postfix === null || postfix === undefined) {
      suffix = '';
    }
    else {
      suffix = '<small class="opacity-75 fw-normal ps-1">' + postfix + '</small>';
    }
    var the_val = Math.round(item.innerText * decimal_Arr[dec_val]) / decimal_Arr[dec_val];
    // final value return
    item.innerHTML = Number(item.getAttribute(atr.common.currency)) === 1
      ? '<span class="opacity-75 fw-normal pe-1">₹</span>' + numberLocales.format(the_val) + suffix
      : numberLocales.format(the_val) + suffix;
  };

  const renderNumber_return = function (number, params) {
    let the_val = [];
    const [method, decimal, prefix, suffix] =
            [
              params[0] ?? 'number', // amount
              params[1] ?? 0,
              params[2] ?? false,
              params[3] ?? false
            ]
    switch (method) {
      case rendER.common.num.number:
        the_val[1] = (Number(number)).toLocaleString(locales_base, {minimumFractionDigits: decimal});
        the_val[2] = prefix ? prefix + the_val[1] : the_val[1];
        the_val[3] = suffix ? the_val[2] + suffix : the_val[2];
        return the_val[3];

      case rendER.common.num.amount:
        if (isNaN(number)) return number;
        the_val[0] = Math.round(number * decimal_Arr[decimal]) / decimal_Arr[decimal];
        the_val[1] = numberLocales.format(the_val[0]);
        the_val[2] = prefix ? '₹ ' + the_val[1] : the_val[1];
        the_val[3] = suffix ? the_val[2] + ' /-' : the_val[2];
        return the_val[3];
    }
  }

  /**
   * here we get the percent of the number and status as well for fuel
   * @param number
   * @param params
   * @returns {[*,(number)]}
   */
  const renderPercent_return = function (number, params = []) {
    let the_val = [];

    const [num1, num2, round] = [
      number ?? '0',
      params[0] ?? '100',
      params[1] ?? 0
    ]

    the_val[0] = Number(num1);
    the_val[1] = Number(num2);
    the_val[2] = (the_val[0] / the_val[1]) * 100;
    the_val[3] = Math.round(the_val[2] * decimal_Arr[round]) / decimal_Arr[round];
    the_val[4] = the_val[3] + '%';

    return [the_val[4], the_val[3] >= 50 ? 1 : 0]

  }

  const renderAverage_return = function (number, params = []) {
    let the_val = [];

    const [num1, num2, round] = [
      number ?? '0',
      params[0] ?? '0',
      params[1] ?? 0
    ]

    the_val[0] = Number(num1);
    the_val[1] = Number(num2);
    the_val[2] = the_val[0] / the_val[1];
    console.log(the_val[2])
    the_val[3] = Math.round(the_val[2] * decimal_Arr[round]) / decimal_Arr[round];

    return the_val[3];

  }


  /**
   * =================================================================
   * @param Element
   */
  var renderGap_update = (Element) => {
    // Duration gap calculator
    let dateGap, method, value, refDate;
    //
    Element.getElementsByClassName('gF').forEach((item) => {
        if (item.getAttribute(atr.core.formatted) !== '1') {
          method = item.getAttribute(atr.common.method) ?? rendER.common.gap.days30month;
          value = item.innerText;
          if (item.hasAttribute(atr.common.refdate) && item.getAttribute(atr.common.refdate) !== 'current') {
            refDate = new Date(item.getAttribute(atr.common.refdate)).getTime();
          }
          else {
            refDate = currentTime;
          }
          dateGap = getDateGap(value, refDate, [method, ago[method]]);
          item.innerText = dateGap;
        }
        else {
          console.log('date render exit, already formatted.');
        }
      }
    );

  }

  var renderGap_return = (date, param = [0, 'x', false]) => {
    let refDate, method;
    // param = [referenceDate, method]
    if (param[0] !== 0) {
      refDate = new Date(param[0]).getTime();
    }
    else {
      refDate = currentTime;
    }
    method = param[1] ?? rendER.common.gap.days30month;

    return getDateGap(date, refDate, [method, ago[method], param[2]]);
  }


  /**
   * it takes a date and return the string with date difference from current time.
   * this function help humans to understand date difference from one date to another date.
   * @param value
   * @param refDate
   * @param params
   */
  const getDateGap = (value, refDate, params = []) => {
    const classes = {
      x: [''],
      y: [''],
      z: ['text-info', 'text-danger']
    }
    // get date from the element
    const countDownDate = new Date(value).getTime();

    const distance = refDate - countDownDate;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let month, day, suffix, _class, _day;


    if (days > 0) {
      suffix = 'ago';
      _class = classes[params[0]][0];
    }
    else {
      suffix = 'after';
      days = days * -1;
      _class = classes[params[0]][1];
    }
    /*
     item.classList.remove('text-gray-600');
     item.classList.add('text-danger');
     */


    if (days >= params[1]) {
      month = Math.floor(days / 30);
      day = days % 30;

      if (params[2]) return [month + '-' + day, _class];
      // final string
      _day = month + ' Mo & ' + day + ' Days ' + suffix;
    }
    else {
      day = days;

      if (params[2]) return [day, _class];
      // final string
      _day = day + ' Days ' + suffix;
    }

    return [_day, _class];
  };

  /*
   * =======================================
   * Date Rendering
   * =======================================
   * this function change date format string
   * data input : [YYYY-MM-DD]
   */
  const renderDate_update = (Ele) => {
    Ele.getElementsByClassName('dF').forEach((item) => {
      if (item.getAttribute(atr.core.formatted) !== '1') {
        item.innerText.split('-').map(function (x, y) {
          switch (y) {
            case 0:
              pbDate.setFullYear(x);
              break;
            case 1:
              pbDate.setMonth(x - 1);
              break;
            case 2:
              pbDate.setDate(x);
              break;
          }
        });
        // console.log(item);
        item.setAttribute(atr.core.formatted, '1');
        item.innerText = dateFormats(moment(pbDate), (item.getAttribute(atr.common.format) ?? 'a'))
      }
      else {
        console.log('date render exit, already formatted.');
      }
    });
  }

  const renderMonth_update = (Ele) => {
    Ele.getElementsByClassName('mF').forEach((item) => {
      if (item.getAttribute(atr.core.formatted) !== '1') {
        item.innerText.split('-').map(function (x, y) {
          switch (y) {
            case 0:
              pbDate.setFullYear(x);
              break;
            case 1:
              pbDate.setMonth(x - 1);
              break;
          }
        });
        // console.log(item);
        item.setAttribute(atr.core.formatted, '1');
        item.innerText = monthFormats(moment(pbDate), (item.getAttribute(atr.common.format) ?? 'a'))
      }
      else {
        console.log('i am here - exit the date format update function');
      }
    });
  }
  const renderDate_return = (data, param) => {
    if (pbDate === undefined) {
      pbDate = new Date();
    }
    data.split('-').map(function (x, y) {
      switch (y) {
        case 0:
          pbDate.setFullYear(x);
          break;
        case 1:
          pbDate.setMonth(x - 1);
          break;
        case 2:
          pbDate.setDate(x);
          break;
      }
    });
    const format = param[0] ?? 'a';
    return dateFormats(moment(pbDate), format);
  }

  const renderMonth_return = (data, param) => {
    if (pbDate === undefined) {
      pbDate = new Date();
    }
    data.split('-').map(function (x, y) {
      switch (y) {
        case 0:
          pbDate.setFullYear(x);
          break;
        case 1:
          pbDate.setMonth(x - 1);
          break;
        case 2:
          pbDate.setDate(x);
          break;
      }
    });
    const format = param[0] ?? 'a';
    return monthFormats(moment(pbDate), format);
  }
  const dateFormats = (moment, format) => {
    switch (format) {
      case rendER.common.date.from:
        return moment.format('DD-MMM');

      case rendER.common.date.to:
        return moment.format('DD MMM, YY');

      case rendER.common.date.full_a:
        return moment.format('DD-MMM-YYYY');

      case rendER.common.date.full_b:
        return moment.format('DD MMM, YYYY');

      case rendER.common.date.full_c:
        return moment.format('MMM DD, YYYY');

      case rendER.common.date.short_a:
        return moment.format('D MMM, YY');

      case rendER.common.date.short_b:
        return moment.format('DD MMMM');

      case rendER.common.date.standard:
        return moment.format('DD-MM-YYYY');
    }
  }

  const monthFormats = (moment, format) => {
    switch (format) {
      case rendER.common.month.dayCount:
        return moment.daysInMonth();

      case rendER.common.month.m:
        return moment.format('M');

      case rendER.common.month.mm:
        return moment.format('MM');

      case rendER.common.month.name:
        return moment.format('MMM');

      case rendER.common.month.full:
        return moment.format('MMMM');

      case rendER.common.month.mmyy:
        return moment.format('MM YY');

      case rendER.common.month.monyear:
        return moment.format('MMMM YY');

      case rendER.common.month.monyear_f:
        return moment.format('MMMM YYYY');

      case rendER.common.month.mmmyy:
        return moment.format('MMM"YY');
    }
  }


  const preCalled = () => {
    pbDate = new Date()

    // making calls at once.
    precalled = true;
  }

  function makeThemEasy(Ele) {

    // Number format
    renderNumber_update(Ele);

    // basic format changes
    basicThings_update();

    // Notification update
    renderString_update(Ele);

    // gap in date from today
    renderGap_update(Ele);

    // date formatter
    renderDate_update(Ele);

    // month formatter
    renderMonth_update(Ele);
  }

  function startingInit() {

    const catchedEles = document.querySelectorAll('[' + atr.core.catch + '="DOM"]');

    catchedEles.forEach((catchedEle) => {
      // Number format
      renderNumber_update(catchedEle);

      // basic format changes
      basicThings_update();

      // Notification update
      renderString_update(catchedEle);

      // gap in date from today
      renderGap_update(catchedEle);

      // date formatter
      renderDate_update(catchedEle);

      // month formatter
      renderMonth_update(catchedEle);
    });

  }

  return {
    initOnCall: function (theElement) {
      // main function calling
      makeThemEasy(theElement)
    },

    initOnDOM: function () {
      // pre call functions.
      precalled ? console.log('preCalled Already') : preCalled();

      // main function calling
      startingInit();
    },

    updateOnCall: function (theElement, calling) {
      switch (calling) {
        case 'number':
          renderNumber_update(theElement);
          break;

        case 'date':
          renderDate_update(theElement);
          break;

        case 'gap':
          renderGap_update(theElement);
          break;

        case 'string':
          renderString_update(theElement);
          break

        case 'trim':
          renderTrim_update(theElement);
          break;

        case 'month':
          renderMonth_update(theElement);
          break;

      }
    },


    // @todo @@balram urgent - update return calling.
    returnOnCall: function (data, calling, param) {
      let temp;
      switch (calling) {
        case 'number':
          return renderNumber_return(data, param);

        case 'date':
          return renderDate_return(data, param);

        case 'gap':
          return renderGap_return(data, param);

        case 'string':
          return renderString_return(data, param[0]);

        case 'trim':
          return renderTrim_return(data, param);

        case 'percent':
          return renderPercent_return(data, param);

        case 'average':
          return renderAverage_return(data, param);

        case 'month':
          return renderMonth_return(data, param);
      }
    }
  };
}();

KTUtil.onDOMContentLoaded(function () {
  PB_render_common.initOnDOM();
});