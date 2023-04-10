"use strict";

// Class definition
var Plug_datePicker = function () {

  /*
   links for help (also bookmarked into dev@beanbyte.in account)
   1. https://flatpickr.js.org/options/
   2. https://flatpickr.js.org/examples/#disabling-all-dates-except-select-few
   3. https://flatpickr.js.org/examples/#disabling-specific-dates
   */

  // TODO: we will connect this date with server in FEB-23.
  // fetch from server.
  const aDates = ['2022-12-24', '2022-12-27', '2022-12-29'];
  // application dates.
  let appDates = {
    default:
      {
        date: '', month: '', year: '', format: ''
      },
    active:
      {
        // the max and min date user can select
        min: '', max: ''
      },
    session:
      {
        from: '', to: ''
      }
  };
  // standard date formats
  const dateFormats = {
    // https://flatpickr.js.org/formatting/
    system: 'Y-m-d',
    default: 'd M, Y',
    long: 'j F, Y',
    human: 'd M, Y',
    c: 'd M',
    m: "j-M-y",
  }

  let onChangeValue = [];
  let flatPicker = [];

  // Private functions
  const dp_allConfigs = (date) => {
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month);
      },
      altInput: true,
      altFormat: dateFormats.long,
      dateFormat: dateFormats.system,

      minDate: "today",
      maxDate: new Date().fp_incr(14),

      onChange: function (selectedDates, dateStr) {
        console.log('User has selected: ' + dateStr)
      },

      onOpen: [
        function (selectedDates, dateStr, instance) {
          console.log(selectedDates)
        },
      ],

      onClose: function (selectedDates, dateStr, instance) {
        console.log(dateStr);
      },

      onDayCreate: function (dObj, dStr, fp, dayElem) {
        // Utilize dayElem.dateObj, which is the corresponding Date
        // dummy logic
        if (Math.random() < 0.15)
          dayElem.innerHTML += "<span class='event'></span>";

        else if (Math.random() > 0.85)
          dayElem.innerHTML += "<span class='event busy'></span>";
      }
    })
  }

  const dp_simple = (date) => {
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month);
      },
      onChange: function (selectedDates, dateStr) {
        onChangeValue = [selectedDates, dateStr];
      },
      defaultDate: appDates.default.date,
      minDate: appDates.active.min,
      maxDate: appDates.active.max,
    });
  }

  const dp_human = (date) => {
    if (date.getAttribute(atr.core.initiated) === "1") {
      return;
    }
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month);
      },
      defaultDate: date.value,
      altInput: true,
      altFormat: dateFormats.long,
      dateFormat: dateFormats.system,
      minDate: appDates.active.min,
      maxDate: appDates.active.max,
    });
    date.setAttribute(atr.core.initiated, "1");
  }

  const dp_advance = (date) => {
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month);
      },
      defaultDate: date.value,
      altInput: true,
      altFormat: dateFormats.long,
      dateFormat: dateFormats.system,
      minDate: appDates.active.min,
      maxDate: appDates.active.max,

      onDayCreate: function (dObj, dStr, fp, dayElem) {
        if (aDates.includes(moment(dayElem.dateObj).format('YYYY-MM-DD'))) {
          dayElem.innerHTML += "<span class='cday dopen'></span>";
          // dayElem.innerHTML += "<span class='cday dclose'></span>";
        }
      }
    })
  }

  const dp_people = (date) => {
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month);
      },
      altInput: true,
      altFormat: dateFormats.long,
      dateFormat: dateFormats.system,
      minDate: appDates.active.min,
      maxDate: appDates.active.max,
    })
  }

  const dp_range = (date) => {
    let id = KTUtil.getRandomInt(111, 999);
    date.setAttribute(atr.date.instance, id);
    flatPicker[id] = date.flatpickr({
      altInput: true,
      altFormat: dateFormats.human,
      dateFormat: dateFormats.system,
      mode: "range",
      onChange: function (selectedDates, dateStr) {
        onChangeValue = [selectedDates, dateStr];
      },
    });
  }

  const dp_multiple = (date) => {
    date.flatpickr({
      onReady: function () {
        this.jumpToDate(appDates.default.month)
      },
      mode: "multiple",
      conjunction: " to ",
      altInput: true,
      altFormat: dateFormats.m,
      dateFormat: dateFormats.system,
      defaultDate: ["2023-01-05", "2023-01-10"] // preloading multiple dates.
    });
  }

  /**
   * this function blocks the dates in the calendar from user selection
   * todo: need to connect disable with ajax configurations.
   * @param date
   * @param method
   */
  const dp_disabled = (date, method = 1) => {
    switch (method) {
      case 1:
        // it bglocks dates from calendar usin array
        // use-case:
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          // todo: get the disable date from server at the conditions
          disable: ["2023-01-10", "2023-01-11", "2023-01-12", "2023-01-13", "2023-01-14", "2023-01-15", "2023-01-16", "2023-01-17"],
          dateFormat: dateFormats.system,
        });
        break;

      case 2:
        // it blocks dates from calendar using range
        // use-case: shift init, credit sales memo. salary payroll created.
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          dateFormat: dateFormats.system,
          disable: [{from: date.getAttribute('data-date-dis-fo'), to: date.getAttribute('data-date-dis-to')}]
        });
        break;

      case 3:
        // it blocks dates from calendar using function callback
        // use-case: user can not create entry of locked days.
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          dateFormat: dateFormats.system,
          disable: [
            function (date) {
              // return true to disable
              return (date.getDay() === 0 || date.getDay() === 1);

            }
          ]
        });
        break;
    }
  }

  /**
   * it can be used for subscription related date selection.
   * @param date
   * @param method
   */
  const dp_enable = (date, method = 1) => {
    switch (method) {
      case 1:
        // it opens dates from calendar using array
        // use-case:
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          // todo: get the disable date from server at the conditions
          enable: ["2023-01-10", "2023-01-11", "2023-01-12", "2023-01-13", "2023-01-14", "2023-01-15", "2023-01-16", "2023-01-17"],
          dateFormat: dateFormats.system,
        });
        break;

      case 2:
        // it opens dates from calendar using range
        // use-case: shift init, credit sales memo. salary payroll created.
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          dateFormat: dateFormats.system,
          enable: [{from: date.getAttribute('data-date-en-fo'), to: date.getAttribute('data-date-en-to')}]
        });
        break;
      case 3:
        // it opens dates from calendar using function callback
        // use-case: user can not create entry of locked days.
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month);
          },
          dateFormat: dateFormats.system,
          enable: [
            function (date) {
              // return true to disable
              return (date.getDay() === 0 || date.getDay() === 1);

            }
          ]
        });
        break;
      case 4:
        let enableJSON = [];
        let dds = {};
        // subscription range
        if (date) {
          dds["from"] = document.querySelector('#date_start').innerText;
          dds["to"] = document.querySelector('#date_end').innerText;
          enableJSON.push(dds);
        }
        else {
          dds["from"] = date.getAttribute('data-pb-en-fo');
          dds["to"] = date.getAttribute('data-pb-en-to');
          enableJSON.push(dds);
        }
        date.flatpickr({
          onReady: function () {
            this.jumpToDate(appDates.default.month)// take this to default month.
          },
          altInput: true,
          altFormat: dateFormats.long,
          dateFormat: dateFormats.system,
          // NOTE: enable and disabled will not work together
          enable: enableJSON,
        });
        break;
    }
  }

  var datePickerInit = function (dates) {
    let mType;
    dates.forEach((date) => {
      mType = date.getAttribute('data-pb-type');
      switch (date.getAttribute(atr.core.method)) {
        case DP_mds.simple:
          dp_simple(date);
          break;

        case DP_mds.human:
          dp_human(date);
          break;

        case DP_mds.advance:
          dp_advance(date);
          break;

        case DP_mds.people:
          dp_people(date);
          break;

        case DP_mds.multiple:
          dp_multiple(date);
          break;

        case DP_mds.range:
          dp_range(date);
          break;

        case DP_mds.disable:
          dp_disabled(date, DP_md_type[mType]);
          break;

        case DP_mds.enable:
          dp_enable(date, DP_md_type[mType]);
          break;
      }
    })
  }

  function configurationSetup() {
    const Ele = document.getElementById('appDates');
    if (Ele === null || Ele.length === 0) {
      // default
      appDates.default.date = '2023-02-24';
      appDates.default.month = '2023-01';
      appDates.default.year = '2023';
      appDates.default.format = 'd M, Y';
      // active
      appDates.active.min = '2022-04-01';
      appDates.active.max = '2023-03-31';
      // session
      appDates.session.from = '2023-02-01';
      appDates.session.to = '2023-03-20';

      return;
    }
    let group, list;

    Ele.querySelectorAll('ol').forEach((ele) => {
      group = ele.getAttribute('data-pb-group');
      ele.querySelectorAll('li').forEach((li) => {
        list = li.getAttribute('data-pb-list');
        appDates[group][list] = li.innerText;
      })
    })

    // setting the default date format.
    dateFormats.default = appDates.default.format;
  }

  return {
    initConfigs: async function () {
      await configurationSetup();
    },

    getValueOnChange: function () {
      return onChangeValue;
    },

    getInstanceOnChange: function (id) {
      return flatPicker[id];
    },

    onDOMLoad: function () {
      datePickerInit(PBapp.querySelectorAll('[data-control="date"]'));
    },

    onCalling: function (form) {
      datePickerInit(form.querySelectorAll('[data-pb-control="date"]'));
    }
  };
}();

KTUtil.onDOMContentLoaded(function () {
  Plug_datePicker.initConfigs().then(
    () => Plug_datePicker.onDOMLoad()
  );
});