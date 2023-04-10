"use strict";

var PB_extend_placement = function () {

  // Private functions

  /**
   * @param {{}} data
   * @param {*} form
   * @param key [name | data-pb-name]
   */
  const _form = (data, form, key = 'name') => {

    Object.keys(data).forEach((key) => {

      let currentEle = form.querySelectorAll('[' + key + '="' + key + '"]')

      // loop for same kind of input.
      currentEle.forEach((item) => {
        console.log(item.type);
        switch (item.type) {

          case kws.inputs.radio:
            if (item.value === data[key]) {
              item.checked = true;
              item.closest('label').classList.add('active');
            }
            else {
              item.checked = false;
              item.closest('label').classList.remove('active');
            }
            break;

          case kws.inputs.checkbox:
            item.checked = item.value === data[key];
            break;

          case kws.inputs.select:
            $(item).val(data[key]).trigger('change');
            break;

          case kws.inputs.input:
            item.value = data[key];
            // todo: date, range, tagify, mask.
            // create switch for data-control or data-pb-control.
            break;

          default:
            item.value = data[key];
            break;
        }
      })
    });
    // todo: enable the form and input, if disabled or readonly.
    PB_extend_collect.$_state(form, kws.states.edit);
    return true;
  }

  /**
   * place the data into the targeted block.
   * @param data
   * @param formEle
   * @param block
   * @private
   */
  const _block = (data, formEle, block) => {

    const accounts_block_in_mng = (data, form) => {
      // todo: enable the form and input
    }

    // todo: add more block.
    switch (block) {
      case 'management_accounts':
        accounts_block_in_mng(data, formEle);
        break;

      default:
        console.log(block + ' is not set up');
    }
  }
  // Public methods
  return {

    // to place data into form.
    $_form: function (data, form) {
      return _form(data, form);
    },

    // to place data into block.
    $_block: function (data, form, block) {
      return _block(data, form, block);
    }
  };
}();