"use strict";

// Class definition
var PB_extend_filter = function () {

  const _identicalCheck = (data_1, data_2) => {
    alert('not set yet.');

    // length check
    if (data_1.length === data_2.length) {

    }
    // detailed checkup.
    // todo: use SET to finish this.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    const set_1 = new Set(data_1).size;
    const set_2 = new Set(data_2).size;

    return false;
  }

  const _lengthCheck = (data_1, data_2) => {
    return data_1.length === data_2.length;
  }

  // Public methods
  return {
    // to check if length of two objects are same or not.
    $_length: function (dataset_1, dataset_2) {
      return _lengthCheck(dataset_1, dataset_2);
    },
    // to check if two objects are identical or not.
    $_identical: function (dataset_1, dataset_2) {
      return _identicalCheck(dataset_1, dataset_2);
    }
  };
}();
