/**
 * AJAX request management.
 * NOTE: this file is not for edit by tech team.
 *
 * how to call the ajax in a targeted page file.
 *
 *    const _process = (data) => {
 *       _process_a(data);
 *       _process_b(data);
 *     }
 *    const ajax = new AjaxPB();
 *    const urlID = ajax.buildingURL(thePathArr, {act: event.value, type: event.type, account: event.data }, host.local);
 *    ajax.callREQUEST({POST}, urlID, false, _process);
 */

class AjaxPB {
  #xHttp;
  #callbackReturn;

  constructor() {
    this.#xHttp = new XMLHttpRequest();
  }

  /*
   {
   "Content-Type" : "application/json"
   }
   */

  #D = {
    method      : {
      get   : "GET",
      post  : "POST",
      put   : "PUT",
      delete: "DELETE",

    },
    contentType : {
      all  : "*/*",
      www  : "application/x-www-form-urlencoded",
      json : "application/json",
      multi: "multipart/form-data",
      text : "text/plain",
    },
    responseType: {
      empty   : "",
      array   : "arraybuffer",
      blob    : "blob",
      document: "document",
      json    : "json",
      text    : "text"
    }
  }
  // private
  #URL_params = {};
  #hostIs = {
    hook     : 'https://webhook.site/a2edd638-1bad-4469-a43c-9fb09c448a6f',
    pipedream: 'https://eorj81jesmq56m8.m.pipedream.net',
    pb       : 'http://ajax.petrobyte.in/'
  };

  // methods
  #verifyURL(path) {
    return true;
  }

  #verifyQUERY(query) {
    return true;
  }

  #buildingQUERY = (params) => {
    let query = [];
    Object.keys(params).map(function (k) {
      query.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
    });
    return query.join('&');
  }

  buildingURL(path = [], params = {"act": "state"}, host = '') {
    let query;
    const hostURL = host === '' ? this.#hostIs.pipedream : host;
    const pathIs = path.join("/");
    //const pathIs = path[0] + '/' + path[1] + '/' + path[2];
    const urlID = KTUtil.getRandomInt(1111, 9999);
    /// query
    if (Object.keys(params).length !== 0) {
      // new URLSearchParams(params).toString();
      query = '?' + this.#buildingQUERY(params);
    }
    else {
      query = ''
    }

    if (!this.#verifyURL(hostURL, pathIs)) {
      return false;
    }

    if (!this.#verifyQUERY(query)) {
      return false;
    }


    this.#URL_params[urlID] = hostURL + '/' + pathIs + '/' + query;

    console.log('URL for call: ' + this.#URL_params[urlID]);

    return urlID;
  }

  #dataStringify(data) {
    return Object.keys(data).length !== 0 ? JSON.stringify(data) : null;
  }

  /**
   * this function call ajax directly using GET or POST method.
   * @param data in object format.
   * @param urlID int ID of the URL
   * @param isPOST boolean
   * @param callback
   */
  callREQUEST(data, urlID, isPOST = false, callback) {
    //    return false;
    // Methods
    this.#xHttp.open(
      isPOST ? this.#D.method.post : this.#D.method.get,
      this.#URL_params[urlID],
      true
    );

    // Setting Headers
    this.#xHttp.setRequestHeader(
      "Content-Type", this.#D.contentType.json
    );

    // Setting Variables
    this.#xHttp.responseType = this.#D.responseType.text;
    this.#xHttp.timeout = 10000; // 10 seconds
    this.#xHttp.withCredentials = false; // do true, if we want to create cookie from api domain.

    // due
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload

    // print data that we are going to send via XHR
    console.log('send data: ' + this.#dataStringify(data));
    this.#xHttp.send(
      this.#dataStringify(data)
    );

    // Events
    this.#xHttp.onloadstart = (event) => {
      console.log('request started.');
    }

    this.#xHttp.onreadystatechange = () => {

      switch (this.#xHttp.readyState) {
        case 0:
          // {key: UNSENT}
          break;

        case 1:
          // {key: OPENED, fun: this.#xHttp.open, status:, statusText:}
          console.log('opened');
          break;

        case 2:
          // {key: HEADERS_RECEIVED, status:, statusText:}
          const contentType = this.#xHttp.getResponseHeader("Content-Type");
          if (!contentType.match(this.#D.contentType.json)) {
            console.log('Request Aborted due to invalid response Content-Type');
            console.log('response type is: ' + contentType);
            this.#xHttp.abort();
          }
          break;

        case 3:
          // {key: LOADING, fun: this.#xHttp.onprogress, status: 200, statusText: OK}
          break;

        case 4:
          // {key: DONE, fun: this.#xHttp.onload, status: 200, statusText: OK}
          console.log('response status: ' + [this.#xHttp.status]);
          /*
           console.log(this.#xHttp.response);
           console.log(this.#xHttp.responseText);
           console.log(this.#xHttp.responseURL);
           */

          const _response = this.getRESPONSE();
          const data = this.validateRESPONSE(_response);
          this.#callbackReturn = data !== false ? callback(data) : false;
          break;

        default:
          break;

      }
    }

    this.#xHttp.ontimeout = (event) => {
      alert('terminated due to preset time expiring');
    }

    this.#xHttp.onloadend = () => {
      console.log('request ended');
    }

  }

  getRESPONSE() {
    // let _return;
    if (this.#xHttp.status === 200) {
      // console.log(this.#xHttp.responseText);
      const response = JSON.parse(this.#xHttp.responseText);
      return {
        body  : response,
        status: true
      }
    }
    else {
      return {
        body  : null,
        status: false
      };
    }
    // return _return;
  }

  validateRESPONSE(response) {
    console.log(response);

    if (response.status === false) {
      console.log('failed to fetched.');
      return false;
    }
    const xResponse = response.body;

    if (!xResponse.status) {
      toastr.error(xResponse.body.message, xResponse.body.title);
      return false;
    }
    return xResponse.data;
  }

  onStateChangeCalling(callback, status, param_A, param_B) {

    this.#xHttp.addEventListener('readystatechange', () => {
      if (this.#xHttp.readyState === 4) {
        sleep(50).then(() => {
          status = status === undefined ? this.#callbackReturn : status;
          status === true ? callback(param_A, param_B) : false;
        })
      }
    });

  }

  /**
   * -------------------------------
   * Using jQuery.
   * -------------------------------
   * @param data
   * @param urlID
   * @param isPOST
   */
  quickREQUEST(data, urlID, isPOST = false) {
    $.ajax({
      type: isPOST ? this.#D.method.post : this.#D.method.get,
      url : this.#URL_params[urlID],
      data: this.#dataStringify(data),
      //      dataType: 'json',
      encode     : true,
      processData: false,
      headers    : {
        "content-type": "application/json;charset=UTF-8"
      },

      // on process functions.
      beforeSend: function () {
        console.log("Waiting...");
      },
      error     : function () {
        console.log("Error");
      },
      success   : function (data) {
        console.log(data);
      }

    }).done(function (data) {
      console.log(data);
    });
  }

}