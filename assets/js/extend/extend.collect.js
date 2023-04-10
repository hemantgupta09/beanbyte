"use strict";

// Class definition
var PB_extend_collect = function () {

  const run_stepForm = (form, methods = ['select', 'input']) => {
    let required = [];
    let titles = [];
    const input = (elements) => {
      let collect = [];
      elements.forEach((element, index) => {
        // required response is not found.
        if (element.hasAttribute('required') && element.value === '') {
          required[index] = element.getAttribute('name');
          titles[index] = element.getAttribute('title');
        }
        if (element.getAttribute('name') !== null) {
          collect[element.getAttribute('name')] = element.value;
        }
      });
      return collect;
    }

    let collects = input(form.querySelectorAll(['select', 'input']));

    for (const requiredKey in required) {
      if (collects[required[requiredKey]] === '') {
        // Plug_sweetAlert.callMe(SW_type.simple, [3, 'Request is Incomplete', 'Please select: ' + titles[requiredKey]])
        alert('Request is Incomplete - please select' + titles[requiredKey]);
        return false;
      }
    }
    if (collects[required[0]] === '') return false;
    return collects;
  }


  const collection_wholeForm = (form) => {
    // console.log(form);
    // TODO: remove input mask from form
    // Plug_formKeen.loadIndeed(form, [3], ['remove']);

    const formData = $(form).serializeArray();

    // merge key and value together
    let returnObj = [];
    formData.forEach((obj) => {
      let tempObj = {};
      tempObj[obj.name] = obj.value;
      returnObj.push(tempObj);
    });


    return returnObj;
  }
  const run_stateChange = (form, state) => {
    // changes into the form inputs
    switch (state) {
      case 'read':
        form.querySelectorAll('select, input').forEach((selector) => {
          if (selector.readOnly === false) {
            selector.readOnly = true;
            selector.setAttribute('aria-readonly', 'true');
          }
        });
        break;

      case 'edit':
        form.querySelectorAll('select input').forEach((selector) => {
          if (selector.hasAttribute('aria-readonly') && selector.getAttribute('aria-readonly') === 'true') {
            selector.readOnly = false;
            selector.setAttribute('aria-readonly', 'false');
          }
        });
        break;
    }
  }

  const run_collect = (element, type) => {

    const collect_all = (param) => {
      // this.collection_stepForm
    }
    /**
     * It collects all required inputs from the form.
     * @param param
     */
    const collect_required = (param) => {
      console.log('i am here - form collection required');
    }

    switch (type) {
      case 'a':
        return collect_all(element);
      case 'b':
        return collect_required(element);
    }

  }

  // Public methods
  return {
    /**
     * it collects all input and select of the form in serialize format.
     * used to send form data to the server.
     * @param form
     * @returns {*|jQuery}
     */
    $_form: function (form) {
      return collection_wholeForm(form);
    },

    /**
     * it makes the form editable or read only as per request.
     * @param form element
     * @param state string ['read', 'edit']
     */
    $_state: function (form, state) {
      return run_stateChange(form, state);
    },

    /**
     * it collects all inputs in given form element.
     * with self validator for required inputs.
     * usecase: in reports => ['tab layout']
     * @param form
     * @returns {boolean|*[]}
     */
    $_step: function (form) {
      return run_stepForm(form);
    },

    $_collect: function (elements, type) {
      return run_collect(elements);
    },
  };
}();