"use strict";

// Class definition
var PB_extend_append = function () {
  const _template_single = (element, data) => {

    // split the element by $$ and loop through the array
    let arr = element.split('$$');
    arr.forEach((str, index) => {
      // if the string starts with @ and ends with @, then it is a template key
      if (str.length >= 2 && str[0] === '@' && str[str.length - 1] === '@') {
        // replace the string with the data value
        arr[index] = data[str.substring(1, str.length - 1)];
      }
    })
    // join the array back into a string
    let returnEle = arr.join("");
    // any actions to be performed on the element.

    // return the element
    return returnEle;
  }

  const _template_loop = (element, data) => {
    data.forEach((obj, index) => {
      // split the element by $$ and loop through the array
      let arr = element.split('$$');
      arr.forEach((str, index) => {
        // if the string starts with @ and ends with @, then it is a template key
        if (str.length >= 2 && str[0] === '@' && str[str.length - 1] === '@') {
          // replace the string with the data value
          arr[index] = obj[str.substring(1, str.length - 1)];
        }
      });
      // join the array back into a string
      let returnEle = arr.join("");
      // any actions to be performed on the element.

      // collect the element for return
      data[index] = returnEle;
    });
    return data;
  }


  // accessible functions by other target page files.
  return {
    // single render as data object
    $_single: function (element, data) {
      return _template_single(element, data);
    },

    // loop render as data object
    $_loop: function (element, data) {
      return _template_loop(element, data);
    }
  };
}();