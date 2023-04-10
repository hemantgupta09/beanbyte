const atr = {
  core: {
    // control
    domcontrol: 'data-control',
    control   : 'data-pb-control',

    // manage the element
    layout: 'data-pb-layout',
    method: 'data-pb-method',
    source: 'data-pb-source',
    target: 'data-pb-target',
    child : 'data-pb-child',
    space : 'data-pb-space',

    // preform any runnable action.
    append: 'data-pb-append',
    catch : 'data-pb-catch',
    origin: 'data-pb-origin',
    leave : 'data-pb-leave',
    action: 'data-pb-action',
    update: 'data-pb-update',

    // inner html griding, used into different layouts.
    group   : 'data-pb-group',
    list    : 'data-pb-list',
    chart   : 'data-pb-chart',
    form    : 'data-pb-form',
    template: 'data-pb-template',

    // status of div element
    initiated: 'data-pb-initialized',
    updated  : 'data-pb-updated',
    formatted: 'data-pb-formatted',
    rendered : 'data-pb-rendered',
    loaded   : 'data-pb-loaded',

    // status for a valuable element
    loadOf: {
      button: 'data-pb-button-loaded',
      tab   : 'data-pb-tab-loaded',
      chart : 'data-pb-chart-loaded',
      card  : 'data-pb-card-loaded',
      select: 'data-pb-select-loaded',
      table : 'data-pb-table-loaded',
      form  : 'data-pb-form-loaded',
    },

    // event handling.
    on: {
      change  : 'data-on-change',
      complete: 'data-on-complete',
      select  : 'data-on-select',
    },

    // value holding for element
    param  : 'data-pb-param',
    name   : 'data-pb-name',
    put    : 'data-pb-put',
    reverse: 'data-pb-reverse',
    id     : 'data-pb-id',
    value  : 'data-pb-value',
    key    : 'data-pb-key',
    welcome: 'data-pb-welcome',
    size   : 'data-pb-size'
  },

  custom: {
    // not used yet.
    reinit: 'data-pb-reinit',
    // to enable event listener for newly created buttons.
    recall: 'data-pb-recall',
  },

  inbuild: {
    // to manage loading icon.
    indicator: 'data-kt-indicator',
  },

  form: {
    // form serializing for the current page.
    sno: 'data-form-sno',
    // add this attribute to the button to make it a submit button.
    submit: 'data-form-submit'
  },

  // ----------------------------------------------------------------
  // [tagify] - used for specification of tagify
  // ----------------------------------------------------------------
  tagify: {
    verify: {
      source : 'data-tagify-source',
      suggest: 'data-tagify-suggest',
    },
    // it takes anything. including whitelist.
    force: 'data-pb-force', // ['0', '1']

    // how may option can be selected.
    max: 'data-pb-max', // ['1', '2', '5', ...]

    // suggestions box looks like list of bundle.
    list: 'data-pb-list', // ['0', '1']

    // used for outin, to target the suggestions
    suggest: 'data-pb-suggest', // ['id of target element']
    items  : 'data-pb-items' // int , number of [-1, infinity, 0, and int number]
  },

  // ----------------------------------------------------------------
  // select - used for specification of select
  // ----------------------------------------------------------------
  select: {
    tack       : 'data-pb-tack',
    placeholder: 'data-pb-placeholder',
    search     : 'data-pb-search', // 0 or 1
    clear      : 'data-pb-allow-clear',
    // options -> hold any type of detail into the option.
    options: {
      whoiam : 'data-sel-tackle',
      amount : 'data-sel-amount',
      text   : 'data-sel-text',
      subtext: 'data-sel-subtext',
      alias  : 'data-sel-alias',
      // account => amount, group
      suffix: 'data-sel-suffix',
      prefix: 'data-sel-prefix',
      // account => ledgers
      key3: 'data-sel-key3',
      val3: 'data-sel-val3',
      key4: 'data-sel-key4',
      val4: 'data-sel-val4',
      key5: 'data-sel-key5',
      val5: 'data-sel-val5',
      // image
      color: 'data-sel-color',
      icon : 'data-sel-icon',
      // custom
      info  : 'data-sel-info',
      date  : 'data-sel-date',
      debit : 'data-sel-debit',
      credit: 'data-sel-credit',
      note  : 'data-sel-note',
      swap  : 'data-sel-swap',
      // text
      badge: 'data-sel-badge',
      desc : 'data-sel-desc',
    }
  },

  // ----------------------------------------------------------------
  // input mask - used for specification of input mask
  // ----------------------------------------------------------------
  mask: {
    extend : 'data-im-extend',
    options: {
      prefix: 'data-im-prefix',
      min   : 'data-im-min',
    }
  },

  // ----------------------------------------------------------------
  // repeater - used for specification of repeater
  // ----------------------------------------------------------------
  repeater: {
    // to enable the repeater.
    create : 'data-repeater-create',
    delete : 'data-repeater-delete',
    slideup: 'data-pb-slideup'
  },

  // ----------------------------------------------------------------
  // validator - used for specification of validator
  // ----------------------------------------------------------------
  validator: {
    // to enable the validator for the form.
    form: 'data-form-valid'
  },

  // ----------------------------------------------------------------
  // date - flatpicker - used for specification of date
  // ----------------------------------------------------------------
  date: {
    instance: 'data-pb-instance',
  },

  // ----------------------------------------------------------------
  // common custom functions.
  // ----------------------------------------------------------------
  common: {
    // number value update class: in_inr, in_num
    round   : 'data-cs-round',
    postfix : 'data-cs-postfix',
    currency: 'data-cs-currency',
    // date value update class: dF
    refdate: 'data-cs-refdate',
    format : 'data-cs-format',
    // date value update class: gF
    method: 'data-cs-method',
  }
};
// ----------------------------------------------------------------
// used key words in the project.
// ----------------------------------------------------------------
const kws = {
  flow  : {
    forward : 'forward',
    backward: 'backward',
    stable  : 'stable',
  },
  status: {
    hide: 'hide',
    show: 'show',
  },
  plugin: {
    tag   : 'tagify',
    sel   : 'select',
    date  : 'date',
    range : 'range',
    mask  : 'mask',
    repeat: 'repeater',
  },
  value : {
    filters: 'filters',
    single : 'single',
    header : 'header',
  },
  extend: {
    combine   : 'single',
    individual: 'double'
  },
  labels: {
    auto      : 'auto', // on dom.
    manual    : 'manual', // on any action.
    combine   : 'combine',
    individual: 'individual',
  },
  states: {
    read: 'read',
    edit: 'edit',
  },
  inputs: {
    radio   : 'radio',
    checkbox: 'checkbox',
    select  : 'select-one',
    input   : 'text',
  }
}

/**
 *
 * @param control
 * @param label string [call => on required, load => DOM load]
 * @returns {string}
 */
const querySA = (control, label) => {
  switch (label) {
    // for dom load.
    case kws.labels.auto:
      return "[" + atr.core.domcontrol + '="' + control + '"' + "]";
    // for manual call.
    case kws.labels.manual:
      return "[" + atr.core.control + '="' + control + '"' + "]";

  }
}