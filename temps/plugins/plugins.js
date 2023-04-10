// sweet alerts
swal.fire({
  titleText: 'Submitting...',
  text: 'Please wait until confirmation',
  timer: 10000,
  didOpen: () => {
    Swal.showLoading()
  },
  timerProgressBar: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  buttonsStyling: false,
  color: '#ff4040',
  background: '#ececec',
  confirmButtonText: "Ok, Got it!",
  customClass: {
    confirmButton: "btn btn-light"
  }
});