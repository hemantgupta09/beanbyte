"use strict";

// Class definition
var PB_extend_foreign = function () {

  /**
   * combine data from the cloud database.
   * primary and secondary are into one dataset.
   * how to insert params = [['dataset_key_1', 'dataset_key_2', index_of_key_1, index_of_key_2], ['dataset_key_1', 'dataset_key_3', index_of_key_1, index_of_key_3]]
   * @param dataset
   * @param params array of keys to call.
   * @returns {*}
   */
  const combined = (dataset, params) => {
    // loop through the params and replace the value with the foreign key value.
    params.forEach(param => {
      $.each(dataset[param[0]], (index, value) => {
        // if the value is not empty then replace the value with the foreign key value.
        if (value[param[2]] !== '') {
          // replace the value with the foreign key value.
          dataset[param[0]][index][param[2]] = dataset[param[1]][value[param[2]]][param[3]];
        }
      })
    });
    // return the dataset.
    return dataset;
  }
  const individual = function (primary, secondary, params) {
    params.forEach(param => {
      // loop through the primary dataset and replace the value with the foreign key value.
      $.each(primary, (index, value) => {
        primary[index][param[0]] = secondary[value[param[0]]][param[1]] ?? 'Unknown';
      })
    })
    // return the primary dataset.
    return primary;
  }

  const _remote = (type, data, params) => {
    switch (type) {
      case kws.extend.combine:
        return combined(data, params);
      case kws.extend.individual:
        return individual(data[0], data[1], params);
    }
  }

  const _local = (data, localKey, params) => {
    // todo *may23
  }

  // Public methods
  return {
    /**
     * all data from the cloud database.
     * @param type string [single, double]
     * @param data array dataset
     * @param params array of keys to call.
     * @returns {*}
     */
    $_remote: function (type, data, params = []) {
      return _remote(type, data, params);
    },
    /**
     * it uses local data to match the key value in given object
     * @param data new data fetched from server and passed for key matching.
     * @param localKey this is local object that has saved at the time of project loading.
     * @param params array of keys
     */
    $_local: function (data, localKey, params = []) {
      return _local(data, localKey, params);
    },
  };
}();
