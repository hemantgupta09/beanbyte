"use strict";

var Plug_inputMask = function () {
  // Shared variables


  // Private functions
  function init_Inputmask(targets) {
    let method, maskOptions;
    targets.forEach((target) => {

      if (target.getAttribute(atr.core.initiated) === '1') {
        return;
      }
      // get options
      method = target.getAttribute(atr.core.method);

      maskOptions = createMasks(method);
      if (target.getAttribute(atr.mask.extend) === '1') {
        Object.keys(atr.mask.options).forEach((value) => {
          maskOptions[value] = target.getAttribute(atr.mask.options[value]);
        });
      }
      // initialize the mask
      Inputmask(maskOptions).mask(target);
      // default extend
      Inputmask.extendDefaults({
        onKeyValidation: function (key, result) {
          if (!result) {
            console.log('invalid input')
          }
        }
      });

      // update status as initialize
      target.setAttribute(atr.core.initiated, '1');
    });

  }


  const createMasks = (method) => {

    const gstVerify = (gstin) => {
      console.log('GSTIN verified.: ' + gstin.target.value);
    }

    // looks into https://github.com/RobinHerbots/Inputmask#via-inputmask-class
    switch (method) {
      case IM_mds.theall:
        return {
          mask: ["99,99,999.99", "X"],
          prefix: '₹ ',
          jitMasking: true,
          numericInput: true,
          rightAlignNumerics: false,
          clearMaskOnLostFocus: true,
          showMaskOnFocus: true,
          showMaskOnHover: true,
          definitions: {
            "X": {
              validator: "[xX]",
              casing: "upper"
            }
          }
        }
      case IM_mds.amount:
        return {
          alias: "numeric",
          groupSeparator: ",",
          autoGroup: false,
          digits: 2,
          digitsOptional: false,
          radixPoint: '.',
          prefix: "₹ ",
          suffix: '',
          min: '0',
          clearMaskOnLostFocus: true,
          placeholder: "0"
        }
      case IM_mds.currency:
        return {
          mask: "₹ (,99){+|1},999.00",
          positionCaretOnClick: "radixFocus", // [none, lvp, select, ignore, radixFocus]
          // groupSeparator: ",",
          radixPoint: ".",
          _radixDance: true,
          numericInput: true,
          greedy: false,
          placeholder: "0",
          rightAlignNumerics: true,
          clearMaskOnLostFocus: true,
          rightAlign: true,
          autoUnmask: true,
          definitions: {"0": {validator: "[0-9\uFF11-\uFF19]"},}
        }
      case IM_mds.number:
        return {
          alias: "numeric",
          groupSeparator: ",",
          digits: 3,
          digitsOptional: true,
          clearMaskOnLostFocus: true,
          prefix: "",
          placeholder: "0"
        }
      case IM_mds.define:
        return {
          mask: ["₹ 99,99,99,999.99", "X"],
          numericInput: true,
          rightAlignNumerics: false,
          rightAlign: true,
          clearMaskOnLostFocus: true,
          jitMasking: true,
          greedy: false,
          autoUnmask: true,
          definitions: {
            "X": {
              validator: "[xX]",
              casing: "upper"
            }
          }
        }

      case IM_mds.gstin:
        return {
          mask: "9{2}-A{5}9{4}A{1}-X{3}",
          greedy: true,
          // placeholder: "08-AAICB3281H-1ZM",
          clearMaskOnLostFocus: true,
          oncomplete: function (e) {
            gstVerify(e)
          },
          onincomplete: function (e) {
            alert('inputmask incomplete');
          },
          definitions: {
            'X': {
              validator: "[0-9A-Za-z]",
              casing: "upper"
            }
          }
        }
      case IM_mds.pan:
        return {
          mask: "A{5}9{4}A{1}",
          greedy: false,
          // placeholder: "AAICB3281H",
          clearMaskOnLostFocus: true,
        }

      case IM_mds.phone:
        return {
          mask: "9{5}-9{5}",
          prefix: "+91",
          greedy: false,
        }
      case IM_mds.email:
        return {
          // mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
          alias: "email",
          greedy: false,
          onBeforePaste: function (pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
          },
        }

      case IM_mds.collection:
        return {}
      case IM_mds.meter:
        return {
          // todo: update this as per shift requirement. get more from https://robinherbots.github.io/Inputmask/#/documentation
          alias: "decimal",
          groupSeparator: "_",
          digits: 3,
          digitsOptional: false,
          placeholder: "0",
          autoUnmask: true,
          inputType: 'number',
          // oncomplete: function () { alert('sale calculated.'); },
        }
      case IM_mds.date:
        return {
          alias: "datetime",
          inputFormat: "dd/mm/yyyy",
          greedy: true,
        }
      case IM_mds.other:
        return {
          "mask": "9",
          "repeat": 10,
          "greedy": false
        }
    }
  }


  const discardIM = (element) => {
    // todo: @lokesh, remove the mask before submitting form using $(selector).inputmask('remove');
    // Inputmask({}).mask(target);
    // Inputmask.remove(target);


    element.querySelectorAll('[' + atr.core.control + '="mask", ' + atr.core.domcontrol + '="mask"]').forEach((input) => {
      $(input).inputmask({
        onUnMask: function (maskedValue, unmaskedValue) {
          //do something with the value
          return unmaskedValue;
        }
      });
    })
    return true;
  }

  // Public methods
  return {

    /**
     * It destory the inputmask inside passed element
     * @returns
     */
    discardOnCall: function (element) {
      return discardIM(element);
    },

    /**
     * it Calls Inputmask on DOM load and run the pre-required initiates.
     */
    onDOMLoad: function () {
      init_Inputmask(PBapp.querySelectorAll(querySA(kws.plugin.mask, kws.labels.auto)));
    },

    /**
     *
     * @param form this is element where we will initiate the inputmask.
     */
    onCalling: function (form) {
      init_Inputmask(form.querySelectorAll(querySA(kws.plugin.mask, kws.labels.manual)));
    }


  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  Plug_inputMask.onDOMLoad();
});