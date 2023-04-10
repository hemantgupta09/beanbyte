"use strict";

// Class definition
var PB_formRepeater = function () {

  /*
   official documentation
   + https://github.com/DubFriend/jquery.repeater
   +
   */

  // Shared variables

  let id;

  // form repeater functions
  const remove_invalidMessage = (form) => {
    form.querySelectorAll('.fv-plugins-message-container').forEach((textEle) => {
      textEle.remove();
    });
  }

  /**
   *
   * @param form form element
   * @param sno
   */
  const fr_simple = (form, sno) => {
    $(form).repeater({

      initEmpty: false,
      defaultValues: {'foo': 'boo'},
      isFirstItemUndeletable: true,

      // calling the connected plugins in the form at new state
      show: function () {
        $(this).slideDown();
        remove_invalidMessage(form);
        Plug_formValid.onChanges(form, sno);
      },

      // calling the connected plugins in the form at remove state
      hide: function (deleteElement) {
        remove_invalidMessage(form);
        $(this).slideUp(deleteElement);
      },

      // calling the connected plugins in the form at ready state
      ready: function () {
        Plug_formValid.onChanges(form, sno);
      }
    });
  }

  /**
   *
   * @param form form element
   * @param sno
   */
  const fr_nested = (form, sno) => {
    $('#' + form.getAttribute('id')).repeater({

      initEmpty: false,
      isFirstItemUndeletable: true,

      // this repeater works as nested repeater.
      repeaters: [
        {
          initEmpty: false,
          selector: '.inner-repeater',
          isFirstItemUndeletable: true,

          // it triggers when user click on add row button
          show: function () {
            $(this).slideDown();
            remove_invalidMessage(form);
            // custom Plugin functions
            Plug_datePicker.onCalling(form);
            Plug_inputMask.onCalling(form);
            Plug_tagifyInput.onCalling(form);
            Plug_formValid.onChanges(form, sno);
          },

          // it triggers when user click on delete row button
          hide: function (deleteElement) {
            if ((form.getAttribute(atr.repeater.slideup) ?? '0') === '1') {
              Swal.fire({
                text: "Want ot Remove Row ?",
                icon: "info",
                buttonsStyling: false,
                showCancelButton: true,
                confirmButtonText: "Yes !! Delete",
                cancelButtonText: "No,",
                customClass: {
                  confirmButton: "btn btn-danger",
                  cancelButton: "btn btn-active-light"
                }
              }).then(function (result) {
                if (result.isConfirmed) {
                  remove_invalidMessage(form);
                  $(this).slideUp(deleteElement);
                  console.log('Success');
                }
              });
            }
          },

          // it triggers when user load page and form is ready to fill.
          ready: function () {
            Plug_datePicker.onCalling(form);
            Plug_inputMask.onCalling(form);
            Plug_tagifyInput.onCalling(form);
            Plug_formValid.onChanges(form, sno);
          }
        }
      ],

      // ## core repeater [outer]
      // it triggers when user click on add block button
      show: function () {
        $(this).slideDown();
        remove_invalidMessage(form);
        Plug_selectPicker.onCalling(form);
        Plug_formValid.onCalling(form);
        Plug_formValid.onChanges(form, sno);
      },

      // it triggers when user click on delete block button
      hide: function (deleteElement) {
        remove_invalidMessage(form);
        $(this).slideUp(deleteElement);
      },

      // it triggers when user load page and form is ready to fill.
      ready: function () {
        Plug_selectPicker.onCalling(form);
        Plug_formValid.onCalling(form);
        Plug_formValid.onChanges(form, sno);
      }
    });
  }

  /**
   *
   * @param form form element
   * @param sno
   */
  const fr_advance = (form, sno) => {
    $('#' + form.getAttribute('id')).repeater({
      initEmpty: false,
      isFirstItemUndeletable: true,
      // defaultValues: {'text-input-name': 'foo'},

      // it triggers when user click on add block button
      show: function () {
        $(this).slideDown();
        Plug_datePicker.onCalling(form);
        Plug_selectPicker.onCalling(form);
        Plug_formKeen.loadIndeed(form, [KT_cps.range]);
        Plug_formValid.onChanges(form, sno);
        Plug_tagifyInput.onCalling(form);
      },

      // it triggers when user click on delete block button
      hide: function (deleteElement) {
        $(this).slideUp(deleteElement);
      },

      // it triggers when user load page and form is ready to fill.
      ready: function () {
        Plug_datePicker.onCalling(form);
        Plug_selectPicker.onCalling(form);
        Plug_formKeen.loadIndeed(form, [KT_cps.range]);
        Plug_formValid.onChanges(form, sno);
        Plug_tagifyInput.onCalling(form);
      }
    });
  }


  const handlingForms = (forms) => {
    forms.forEach((form) => {
      initRepeater(form)
    });
    return true;
  }
  const initRepeater = (formEle) => {

    id = formEle.getAttribute('id');
    if (id === null || id === '') {
      alert('Please add id into form element!');
      return false;
    }
    if (PBapp.querySelector('[form="' + id + '"]') === null) {
      alert('submit button mission, kindly add attribute form="form_id" in submit button.')
      return false;
    }

    // form repeater initiation
    Plug_formValid.onCalling(formEle);

    // setting up event listeners.
    formEle.querySelectorAll('[' + atr.repeater.create + ']').forEach((button) => {
      button.addEventListener('click', function (e) {
        /*
         // remove invalid input message container
         formEle.querySelectorAll('.fv-plugins-message-container').forEach((textEle) => {
         textEle.remove();
         });
         */
        // create separate line
        if (button.getAttribute(atr.repeater.create) === 'outer') {
          formEle.querySelectorAll('[' + atr.core.append + '="separate"]').forEach((div) => {
            div.innerHTML = '<div class="border-gray-500 border-top-dashed opacity-25 border-4 mt-5 mb-10"></div>';
          })
        }
      });
    });

    // collect form sno.
    const form_sno = formEle.getAttribute(atr.form.sno);

    switch (formEle.getAttribute(atr.core.method)) {

      case FR_mds.simple:
        fr_simple(formEle, form_sno);
        break;

      case FR_mds.nested:
        fr_nested(formEle, form_sno);
        break;

      case FR_mds.advance:
        fr_advance(formEle, form_sno);
        break;
    }
    return true;
  }

  // Public methods
  return {

    onDOMLoad: function () {
      handlingForms(PBapp.querySelectorAll(querySA(kws.plugin.repeat, kws.labels.auto)));
    },

    onCalling: function (element) {
      initRepeater(element);
    }
  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  PB_formRepeater.onDOMLoad();
});