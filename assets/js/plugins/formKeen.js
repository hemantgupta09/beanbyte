"use strict";

// Class definition
var Plug_formKeen = function () {

  // common properties
  let blockUIElement = false;

  var radioButton = function (form) {
    var buttonsGroup = [].slice.call(form.querySelectorAll('[data-pb-buttons="true"]'));

    buttonsGroup.map(function (group) {
      if (group.getAttribute("data-kt-initialized") === "1") {
        return;
      }

      var selector = group.hasAttribute('data-kt-buttons-target') ? group.getAttribute('data-kt-buttons-target') : 'label';
      var activeButtons = [].slice.call(group.querySelectorAll(selector));

      // Toggle Handler
      KTUtil.on(group, selector, 'click', function (e) {
        activeButtons.map(function (button) {
          button.classList.remove('active');
        });

        this.classList.add('active');
      });

      group.setAttribute("data-kt-initialized", "1");
    });
  }

  var rangeSlider = function (form) {
    var sliders = form.querySelectorAll('[data-pb-control="slider"]');
    sliders.forEach(function (slider) {
      var prefix = slider.getAttribute("data-pb-value");
      if (!slider.hasAttribute('data-kt-initialized')) {
        slider.setAttribute('data-kt-initialized', '1');
        var sInput = slider.querySelector('input');
        var sSpan = slider.querySelector('[data-pb-call]')
        noUiSlider.create(slider, {
          start: 100, step: 25, padding: [25], tooltips: [true], format: {
            from: Number, to: function (value) {
              return sliderTT(value, prefix);
            }
          }, range: {
            min: 0, max: 200
          }, pips: false
        });
        slider.noUiSlider.on("update", function (value) {
          sSpan.innerHTML = value;
          sInput.value = sSpan.innerText.replace(/\D/g, "");
        });
      }
    })
  }

  const sliderTT = function (value, prefix) {
    return '<span class="fs-5">' + prefix + ': <span class="fw-bold">' + value + '</span> %</span>';
  }

  var blockUI = function (target, params) {
    let text = params[0] ?? 'loading';
    let color = params[1] ?? 'primary';
    let opacity = params[2] ?? '5';
    let nature = params[3] ?? true;
    let attribute = params[4] ?? 'data-pb-loaded';
    let options = {
      message: '<div class="blockui-message"><span class="spinner-border text-' + color + '"></span>' + text + '</div>', overlayClass: "bg-" + color + " bg-opacity-" + opacity,
    };
    if (!blockUIElement) {
      blockUIElement = new KTBlockUI(target, options);
    }
    // doing block and release
    if (!nature || (blockUIElement.isBlocked() && target.getAttribute(attribute))) {
      blockUIElement.release();
    }
    else {
      if (!blockUIElement.isBlocked()) blockUIElement.block();
    }
  }


  var selectSplitter = function (attribute, method, params = [true, 3, true]) {
    $(attribute).multiselectsplitter({
      groupCounter: params[0], maximumSelected: params[1], onlySameGroup: params[2]
    });
  }

  var clipBoard = function (attribute, method, params = [true]) {
    // Select elements
    const target = document.querySelector(['data-pb-clipboard="' + attribute + '"']);
    const button = target.nextElementSibling;

    // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
    var clipboard = new ClipboardJS(button, {
      target: target, text: function () {
        return target.value;
      }
    });

    // Success action handler
    clipboard.on('success', function (e) {
      const currentLabel = button.innerHTML;

      // Exit label update when already in progress
      if (button.innerHTML === 'Copied!') {
        return;
      }

      // Update button label
      button.innerHTML = 'Copied!';

      // Revert button label after 3 seconds
      setTimeout(function () {
        button.innerHTML = currentLabel;
      }, 3000)
    });
  }

  return {
    onDOMLoad: function () {
      return false;
    },
    loadIndeed: function (target, components, params = []) {
      components.forEach((component) => {
        switch (component) {
          case KT_cps.none:
            // none
            break;

          case KT_cps.radio:
            radioButton(target);
            break;

          case KT_cps.range:
            rangeSlider(target);
            break;

          case KT_cps.block:
            // blockUI(target, params);
            break;
        }
      });
    }
  };
}();

// run on DOM Loaded
KTUtil.onDOMContentLoaded(function () {
  Plug_formKeen.onDOMLoad();
});