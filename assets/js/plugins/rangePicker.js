"use strict";

var Plug_rangePicker = function () {
  // Shared variables
  let appDates =
    {
      default: {date: '', month: '', year: '', format: ''},
      active: {min: '', max: ''},
      session: {from: '', to: ''}
    };
  let method;
  let RP_formats = {
    default: 'MM/DD/YYYY',
    india: 'DD-MM-YYYY',
    human: 'DD MMM, YYYY'
  };
  let Values = [];

  // Private functions
  const dr_allConfigs = (range) => {
    range.daterangepicker({
        opens: 'left',
        autoApply: true,
        linkedCalendars: false,
        showDropdowns: true,
        // session
        startDate: moment(appDates.session.from).format(RP_formats.india),
        endDate: moment(appDates.session.to).format(RP_formats.india),
        // active
        minDate: moment(appDates.active.min).format(RP_formats.india),
        maxDate: moment(appDates.active.max).format(RP_formats.india),
        // locale
        locale: {
          format: RP_formats.india,
          separator: ' - '
        }
      },
      function (start, end) {
        Values['start'] = start.format('YYYY-MM-DD');
        Values['end'] = end.format('YYYY-MM-DD');
        console.log(Values);
      }
    );
  }
  const dr_simple = (range) => {
    range.daterangepicker();
  }

  const dr_action = (range) => {
    range.daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"), 12)
      }, function (start, end, label) {
        var years = moment().diff(start, "years");
        alert("You are " + years + " years old!");
      }
    );
  }

  const dr_defined = (range) => {

    // advance
    var start = moment().subtract(29, "days");
    var end = moment();

    function cb(start, end) {
      range.html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
    }

    range.daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        "Today": [moment(), moment()],
        "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
      }
    }, cb);
    cb(start, end);
  }

  const dr_dropdown = (range) => {

    // advance
    let start = moment(appDates.session.from);
    let end = moment(appDates.session.to);

    function cb(start, end) {
      range.val(start.format("DD MMM") + " -> " + end.format("DD MMM, YYYY"));
    }

    range.daterangepicker({
      startDate: start.format(RP_formats.human),
      endDate: end.format(RP_formats.human),
      locale: {
        format: RP_formats.human,
        separator: ' -> '
      },
      ranges: {
        "Today": [moment(), moment()],
        "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "Month to Now": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Last 3 Month": [moment().subtract(3, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
        "Last 6 Month": [moment().subtract(6, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
        "This Year": [moment().startOf("year"), moment().endOf("year")]
      }
    }, cb);


    cb(start, end);
  }


  // rangePicker Init.
  function rangePickerInit(ranges) {
    ranges.forEach((range) => {
      method = range.getAttribute(atr.core.method);
      switch (method) {
        case RP_mds.all:
          dr_allConfigs($(range));
          break;

        case RP_mds.simple:
          // simple range selector.
          dr_simple($(range));
          break;

        case RP_mds.single:
          // for single date picker.
          //
          break;

        case RP_mds.advance:
          // date range with time
          break;

        case RP_mds.defined:
          // a predefined dropdown for quick selection
          dr_defined($(range));
          break;

        case RP_mds.dropdown:
          // a predefined advance dropdown for quick selection
          dr_dropdown($(range));
          break;
      }
    })
  }

  //
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
      group = ele.getAttribute(atr.core.group);
      ele.querySelectorAll('li').forEach((li) => {
        list = li.getAttribute(atr.core.list);
        appDates[group][list] = li.innerText;
      })
    })
  }

  // Public methods
  return {
    /**
     * it only Calls RangePicker when it required to initiate
     * @returns {Promise<void>}
     */
    initConfigs: async function () {
      await configurationSetup();
    },

    /**
     * It returns the stored selected value by user.
     * @returns {*[]}
     */
    getValueOnChange: function () {
      return Values;
    },

    /**
     * it Calls RangePicker ron DOM load ti init the pre-required initiates.
     */
    onDOMLoad: function () {
      rangePickerInit(PBapp.querySelectorAll(querySA(kws.plugin.range, kws.labels.auto)));
      //rangePickerInit($(PBapp).querySelectorAll('[data-control="range"]'));
    },

    /**
     *
     * @param form this is element where we will initiate the range picker.
     */
    onCalling: function (form) {
      rangePickerInit(form.querySelectorAll(querySA(kws.plugin.range, kws.labels.auto)))
    }
  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  Plug_rangePicker.initConfigs().then(
    () => Plug_rangePicker.onDOMLoad()
  );
});