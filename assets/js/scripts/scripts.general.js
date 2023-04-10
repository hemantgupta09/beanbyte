var PBapp = document.getElementById('kt_app_main');

// calculator

// date session setup

/**
 * a manual button to toggle width of form and table, to see or hide menu bar of that page.
 * init the form extend button
 */
const doExtendPage = function (menu, working) {
  // defined class is [class="do_extend"] or '.do_extend'
  let doExtend = working.getElementsByClassName('do_extend');
  doExtend.forEach((item) => {
    item.addEventListener('click', function () {
      // hide menu bar
      menu.classList.toggle('d-none');
      // extend columns
      working.classList.toggle('col-xxl-12');
      working.classList.toggle('col-xl-12');
      working.classList.toggle('col-lg-12');
      working.classList.toggle('col-md-12');
      // icon
      if (item.getAttribute('name') === 'plus') {
        item.setAttribute('name', 'minus');
        item.innerHTML = '<i class="fs-3 me-1 text-dark bi bi-fullscreen-exit"></i>';
      }
      else {
        item.setAttribute('name', 'plus');
        item.innerHTML = '<i class="fs-3 me-1 text-dark bi bi-fullscreen"></i>';
      }
    })
  });
}


/**
 * this function will record the device into server using few user information.
 * @constructor
 */
function BookmarkDevices_onServer() {
  // TODO: save this id into local storage
  var uniqueId = KTUtil.getUniqueId('PetroByte');
  // todo: send this id to server using ajax request
  // calling ajax
  // todo: update status in local storage that it has saved in server using ajax response.
  console.log(uniqueId);
}

function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

function CreateImage_base64(image_ID) {
  return false;
  let base64 = document.getElementById(image_ID).innerText;
  let image64;
  toDataURL('/media/logos/' + base64 + '.png', function (dataUrl) {
    image64 = dataUrl;
  });
  return image64;
}


// Direct calling functions
/**
 * it takes simple number and returns a string representation as per the currency format of default country
 * @param number the raw number
 * @param decimal for x decimal values, limit upto 4 decimal values
 * @param currency for currency icon
 * @returns {*|string}
 * @constructor
 */
// this is about to delete.
function render_into_Currency(number, decimal = 0, currency = false) {
  const decimal_Array = [1, 10, 100, 1000, 10000]
  var the_val = Math.round(number * decimal_Array[decimal]) / decimal_Array[decimal];
  return currency ? '<span class="opacity-75 fw-normal pe-1">₹</span>' + numberLocales.format(the_val) : numberLocales.format(the_val);
}


function amt_mask_filter(amount) {
  return amount.replaceAll(',', '').replaceAll('_', '').replace('₹', '').trim();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const eleCheck = () => {
  if (_callEl === null || _callEl === undefined) {
    alert('call element is not defined defined');
    return false;
  }
  else {
    return true;
  }
}

const getDataType = (data,) => {

  const type = typeof data;
  switch (type) {
    case 'object':
      const a = Object.keys(data)[0];
      return typeof data[a];

    case 'array':
      return array;

  }
}

const justPass = () => {}

function isLetter(str) {
  return (str.toLowerCase() !== str.toUpperCase()) && str.match(/[a-zA-Z]/i);
}

function bootstrap_things() {
  // max length
  console.log('kindly remove this from calling element')
}

const eventNotFound = (event) => {
  alert(`event for ${event.type} not found ${event.value}`);
  return false;
}
