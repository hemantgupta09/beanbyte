"use strict";

// Class definition
var PB_extend_reset = function () {
  // Shared variables


  // Private functions
  const _empty = (type, id) => {
    switch (type) {
      case 'select':
        $(id).empty().trigger('change');
        break;
    }
  }

  const _form = (formElement, label = kws.labels.auto) => {

    // reset select.
    formElement.querySelectorAll(querySA(kws.plugin.sel, label)).forEach((select) => {
      $(select).val('').trigger('change');
    });

    // reset tagify
    formElement.querySelectorAll(querySA(kws.plugin.tag, label)).forEach((tag) => {
      console.log('reset input tag');
    });

    // reset date
    formElement.querySelectorAll(querySA(kws.plugin.date, label)).forEach((date) => {
      console.log('reset input date');
    });

    // reset range
    formElement.querySelectorAll(querySA(kws.plugin.range, label)).forEach((range) => {
      console.log('reset input range');
    });

    // reset inputmask format
    formElement.querySelectorAll(querySA(kws.plugin.mask, label)).forEach((mask) => {
      console.log('reset input mask');
    });

    // plain input reset.
    formElement.reset();
    // $(formElement).trigger("reset");

  }

  // Public methods
  return {
    // to reset form and its elements.
    $_form: function (form, label) {
      _form(form, label);
    },

    // to empty select list
    $_empty: function (select) {
      _empty();
    }
  };
}();