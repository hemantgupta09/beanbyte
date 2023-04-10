"use strict";

// Class Definitions
var Plug_formValid = function () {
  // make this enable for direct forms also.
  let item;
  let validator = [];
  let status = [];
  let fno = 0;

  let formValidation_init = function (form, no) {

    const inputs_for_valid = form.querySelectorAll('[required]');
    let msg, nE, vld;

    item = {};
    inputs_for_valid.forEach((input) => {
      // console.log(input.getAttribute('title'));
      msg = {};
      msg.message = input.getAttribute('title');

      nE = {};
      nE.notEmpty = msg;

      vld = {};
      vld.validators = nE;

      item [input.name] = vld;
    })
    if (validator[no]) {
      delete validator[no];
    }
    validator[no] = FormValidation.formValidation(form, {
      fields: item,
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap5(
          {
            rowSelector: '.fv-row',
            eleInvalidClass: 'is-invalid', // border border-1 border-danger
            eleValidClass: '' // is-valid
          }
        )
      }
    });
  };

  let validatingForm = function (submitButton, no, form) {

    submitButton.addEventListener('click', function (e) {
      // Prevent default button action
      e.preventDefault();

      // Validate form before submit
      if (validator[no]) {
        validator[no].validate().then(function (sts) {
          if (sts === 'Valid') {
            status[no] = true;
            toastr.success('Form Validated Successfully');
          }
          else {
            status[no] = false;
            swal.fire({
              title: 'STOP!! Incomplete Form',
              text: 'Some inputs are missing',
              icon: 'error',
              confirmButtonText: "Ok, Let me fill it.",
            });
          }
        });
      }
      else {
        status[no] = false;
        swal.fire({
          title: 'Unable to Validate form',
          text: 'form validation has not initiated properly.'
        });
      }
    });
  }

  const validateForms = (form) => {
    const submitButtons = PBapp.querySelectorAll('[' + atr.form.submit + ']');
    submitButtons.forEach((button) => {
      if (button.getAttribute('form') === form.id) {
        // getting unique form id.
        if (form.hasAttribute(atr.form.sno)) {
          fno = form.getAttribute(atr.form.sno) ?? ((fno) + 1);
        }
        else {
          fno = button.getAttribute(atr.form.sno) ?? ((fno) + 1);
        }

        // collect and assign all validation
        formValidation_init(form, fno);

        // validation
        validatingForm(button, fno, form);
      }
    })
  }

  const handlingForms = () => {
    const forms = PBapp.querySelectorAll('[' + atr.validator.form + ']');

    if (forms.length === 0) {
      console.log('no form elements found for validation');
      return;
    }
    // validate one by one.
    forms.forEach(validateForms);
  }

  // Public methods
  return {
    onDOMLoad: function () {
      handlingForms();
    },

    // used in form repeater.
    onCalling: function (form) {
      validateForms(form);
    },

    // when user changes value of inputs and check the validator.
    onChanges: function (form, fno) {
      formValidation_init(form, fno);
    },

    // get status
    getStatus: function (fno) {
      return status[fno] ?? false;
    }
  };
}();

KTUtil.onDOMContentLoaded(function () {
  Plug_formValid.onDOMLoad();
});
