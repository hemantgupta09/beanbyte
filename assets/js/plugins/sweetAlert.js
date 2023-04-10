"use strict";

// Class definition

var Plug_sweetAlert = function () {
  // https://sweetalert2.github.io/

  // Shared variables
  const sw_constants = {
    position: ['top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end'],
    icons: ['info', 'warning', 'error', 'success', 'question']
  };
  let sAlert, Options;

  // Private functions
  const sa_all_configs = () => {

    // nested
    Swal.fire({
      position: 'top-end',
      text: "Are you sure you would like to delete this event?",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, return",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-active-light"
      }
    }).then(function (result) {
      if (result.value) {
        // call any function
      }
      else if (result.dismiss === 'cancel') {
        Swal.fire({
          text: "Your event was not deleted!.",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          }
        });
      }
    });
  }

  //--------------------
  const confirm = () => {
    console.log('confirm');
  }
  const cancel = () => {
    console.log('cancel');
  }
  const denied = () => {
    console.log('denied');
  }

  const configureTemplate = (type) => {

    // functions.
    const minimal = () => {
      return Swal.mixin({
        icon: undefined,
        position: 'center',
        showConfirmButton: false,
      });
    }
    const simple = () => {

    }
    const html = () => {

    }
    const strict = () => {
      return Swal.mixin({
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
      });
    }
    const toast = () => {
      return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
    }
    const callback = () => {

    }
    const advance = () => {

    }
    const custom = () => {

    }

    switch (type) {
      case SW_type.minimal:
        return minimal();

      case SW_type.simple:
        return simple();

      case SW_type.html:
        return html();

      case SW_type.strict:
        return strict();

      case SW_type.toast:
        return toast();

      case SW_type.callback:
        return callback();

      case SW_type.adv:
        return advance();

      case SW_type.custom:
        return custom();

    }
  }

  const createOptions = (method, params, btnSts, btnText, btnClass, callbacks) => {

    // methods function variables;
    let sa_info, sa_style, sa_timer, sa_confirm, sa_triple, sa_html, sa_ajax, sa_close, sa_anchor, sa_action;

    // validating the parameters
    const icon = sw_constants.icons[params.icon];
    const position = sw_constants.position[params.position];

    // only icon, text, and description.
    sa_info = (params) => {
      sAlert.fire({
        icon: icon,
        position: position,
        title: params.text[0] ?? 'title is missing',
        text: params.text[1],
        footer: params.text[2],
        buttonsStyling: false,
        confirmButtonText: params[3] ?? "Ok, got it!",
        customClass: {
          confirmButton: "btn btn-primary"
        }
      });
    }

    sa_style = (params) => {
      Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#f9ffb1',
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
      })
    }

    sa_timer = (params) => {
      let timerInterval;
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    }

    sa_confirm = (params) => {
      return {
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      };
    }

    sa_triple = (params) => {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        }
        else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }

    sa_html = (params) => {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

    sa_close = (params) => {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

    sa_anchor = (params) => {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

    sa_action = (params) => {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
    }

    sa_ajax = (params) => {
      Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
    }

    // switching the method.
    switch (method) {
      case SW_mds.info:
        return sa_info(params)

      case SW_mds.close:
        // icon, text, and description. with close button
        return sa_close(params)

      case SW_mds.timer:
        // icon, text, and description. with auto close function
        return sa_timer(params)

      case SW_mds.anchor:
        // text, and description. with anchor button for redirect somewhere into new page
        return sa_(params)

      case SW_mds.style:
        // text, and description. with anchor button for redirect somewhere into new page
        return sa_style(params)

      case SW_mds.confirm:
        // text, and description. with
        return sa_confirm(params)

      case SW_mds.action:
        // icon, text, and description. with action button.
        return sa_ac(params)
    }
  }
  const TriggerSwal = (SweetAlert, Options, method, callbacks) => {
    switch (method) {
      case SW_mds.info:
      case SW_mds.close:
      case SW_mds.timer:
      case SW_mds.confirm:
        SweetAlert.fire(
          Options
        ).then((result) => {
          if (result.isConfirmed) {
            callbacks[0]
          }
        })
        break;
      case SW_mds.html:
      case SW_mds.style:
      case SW_mds.anchor:
      case SW_mds.action:
      case SW_mds.nested:
      case SW_mds.triple:
        return SweetAlert.fire(Options);
      default:
        break;
    }
  }

  const init_sweetAlert =
    (
      method = SW_mds.info,
      type = SW_type.simple,
      params =
        {
          text: ['title', 'text', undefined], // title, text, footer
          icon: 1,
          keys: [true, true, false], // allowEnterKey, allowEscapeKey, allowOutsideClick
          timer: undefined, // 2000 => 2 seconds.
          position: 5, // 9 points grid [top: 1,2,3, center: 4,5,6, bottom: 7,8,9]
          backdrop: true,
        },
      btnSts = [true, false],
      btnText = ['Okay', 'Close'],
      btnClass = ['btn btn-primary', 'btn btn-secondary'],
      callbacks = [confirm, cancel, denied]
    ) => {

      // configure template
      sAlert = configureTemplate(type);

      // create option object
      Options = createOptions(method, params, btnSts, btnText, btnClass)

      // trigger the swal
      return TriggerSwal(sAlert, Options, method, callbacks);
    }

  // Public methods
  return {
    callMe: function (method, type, params, btnSts, btnText, btnClass, callbacks) {
      init_sweetAlert(method, type, params, btnSts, btnText, btnClass, callbacks);
    }
  };
}();