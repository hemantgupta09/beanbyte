"use strict";

/**
 * it renders the passed data and place values into targeted menubar.
 * @type {{transactions: ((function(*): (void))|*)}}
 */
var PB_render_menu = function () {

  /**
   * it takes value and append into target element.
   * @param data
   * @param param
   */
  function simpleMenu(data, param) {
    // target HTML element
    let places = PBapp.querySelector('#menulist');
    // loop for each place inside targeted element.
    places.querySelectorAll('.flex-stack > div').forEach((place, index) => {
      place.innerText = PB_render_common.returnOnCall(data[index].value, 'number', param);
      place.classList.add('badge-light-' + CLS.colors.array[data[index].type]);
    })
  }

  /**
   * it takes a element and repeat as per data parameter.
   * @param data
   * @param param
   * @returns {boolean}
   */
  function stackMenu(data, param) {
    // holding target HTML element
    const place = PBapp.querySelector('#menulist');
    // getting template for repeater.
    const template = place.querySelector('[data-pb-template="menuitem"]');
    let rows;
    // loop as per keys in data param
    $.each(data, (index, datum) => {
      rows = template.cloneNode(true);
      rows.classList.remove(CLS.display.none);
      rows.children[0].innerText = datum.cate_id;
      rows.children[1].innerText = PB_render_common.returnOnCall(datum.value, 'number', param);
      rows.children[1].classList.add('badge-light-' + CLS.colors.array[datum.type]);
      rows.children[0].classList.add('text-hover-' + CLS.colors.array[datum.type]);
      place.appendChild(rows);
    })
    return true;
  }

  function barMenu(data, element = PBapp, param) {
    console.log('i am here to used for loading bar menu in details pages.');
    // bar in left side of customers, employees and users details pages.

    // get value and keys from 'leftBar' > ol
    // get template for repeat => 'leftBar' > div
    // create span div as per index inside array of that keys object.
    // append and innerHTMl.

  }


  return {
    menuRender: function (data, type, param = ['amount', 0, 1]) {
      switch (type) {
        case 'value':
          return simpleMenu(data, param);
        case 'stack':
          return stackMenu(data, param);
        case 'bar':
          return barMenu(data, param);
      }
    },
  };
}();

