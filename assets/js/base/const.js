/*
 ----------------------------------
 Constants for Layouts and Pages
 ----------------------------------
 */
const Lyt = {
  sample   : 'sample',
  dashboard: 'dashboard',
  buttons  : 'buttons',
  tabs     : 'tabs',
  cards    : 'cards',
  tables   : 'tables',
  panels   : 'panels',
  listing  : 'listing',
  reports  : 'reports',
  sheets   : 'sheets',
  directs  : 'direct',
  wizards  : 'wizards'
}
/*
 ----------------------------------
 Constants for Table Rendering
 TBL_ct: 'Table Cell Type'
 ----------------------------------
 */

const TBL_ct = {
  dt  : 'date',
  amt : 'amount',
  ac  : 'account',
  txt : 'text',
  note: 'note',
  cb  : 'checkbox',
  act : 'action',
  in  : 'input',
  img : 'image',
  opt : 'options',
  icon: 'icon',
  rich: 'rich',
  sts : 'status',
  btn : 'button'
}
/*
 ----------------------------------
 Constants for Plugins
 ----------------------------------
 */
/**
 * ----------------------
 * selectPicker Methods
 * @type
 * ----------------------
 */
const SP_mds = {
  simple : 'simple',
  account: 'account',
  image  : 'image',
  text   : 'text',
  custom : 'custom',
}
/**
 * ----------------------
 * Select Picker Options methods default
 * @type
 * ----------------------
 */
const SPO_mds = {
  simple : {
    default: '1',
    direct : '1',
    withid : '2',
    subtext: '3'
  },
  account: {
    default: '1',
    amount : '1',
    group  : '2',
    ledger : '3'
  },
  image  : {
    default: '1',
    inline : '1',
    rich   : '2'
  },
  text   : {
    default: '1',
    col    : '1',
    end    : '2',
    row    : '3',
    dual   : '4',
    menu   : '5',
    grid   : '6',
  },
  custom : {
    default: '1',
    table  : '1',
    key1   : '1',
    key2   : '2',
    key3   : '3',
    key4   : '4'
  },
}
/**
 * ----------------------
 * datePicker
 * @type
 * ----------------------
 */
const DP_mds = {
  simple  : 'simple',
  human   : 'human',
  advance : 'advance',
  people  : 'people',
  multiple: 'multiple',
  range   : 'range',
  disable : 'disable',
  enable  : 'enable'
}
const DP_md_type = {
  array: 1,
  range: 2,
  live : 3
}
/**
 * ----------------------
 * rangePicker
 * @type
 * ----------------------
 */
const RP_mds = {
  all     : 'all',
  simple  : 'simple',
  single  : 'single',
  advance : 'advance', // date with time.
  defined : 'defined',
  dropdown: 'dropdown'
}
/**
 * ----------------------
 * tagify
 * @type
 * ----------------------
 */

const TG_source = {
  local : 'local',
  remote: 'remote',
  const : 'constant'
}
const TG_mds = {
  tag    : 'tag',
  select : 'select',
  inout  : 'inout',
  outin  : 'outin',
  advance: 'advance'
}
/**
 * ----------------------
 * InputMask
 * @type
 * ----------------------
 */
const IM_mds = {
  theall: 'theall',

  amount  : 'amount',
  currency: 'currency',
  number  : 'number',
  define  : 'define',

  gstin: 'gstin',
  pan  : 'pan',

  phone: 'phone',
  email: 'email',

  meter     : 'meter',
  date      : 'date',
  collection: 'collection',
  other     : 'other',
}

/**
 * ----------------------
 * InputMask
 * @type
 * ----------------------
 */
const FR_mds = {
  simple : 'simple',
  nested : 'nested',
  advance: 'advance'
}

/**
 * ----------------------
 * sweetalert2
 * @type
 * ----------------------
 */
const SW_mds = {
  info   : 'inform',
  close  : 'close',
  timer  : 'timer',
  confirm: 'confirm',
  html   : 'html',
  style  : 'style',
  anchor : 'anchor',
  action : 'action',
  nested : 'nested',
  triple : 'triple',
}
const SW_type = {
  minimal : 'minimal',
  simple  : 'simple',
  html    : 'html',
  strict  : 'strict',
  toast   : 'toast',
  callback: 'callback',
  adv     : 'advance',
  custom  : 'custom'
}

/**
 * ----------------------
 * Keen components
 * @type
 * ----------------------
 */
const KT_cps = {
  none : 'none',
  radio: 'radio',
  range: 'range',
  block: 'block',
}


/**
 * --------------------------------------------------------------
 * render
 * @type {{}}
 * --------------------------------------------------------------
 */
rendER = {
  //  form
  form: {
    method: {
      simple    : 'simple',
      selectOnly: 'select',
      repeater  : 'repeater',
      advance   : 'advance',
    }
  },
  // common
  common: {
    num  : {
      number: 'number',
      amount: 'amount'
    },
    date : {
      from    : 'fo',
      to      : 'to',
      full_a  : 'a',
      full_b  : 'b',
      full_c  : 'd',
      short_a : 'c',
      short_b : 'e',
      short_c : '',
      standard: 'z'
    },
    month: {
      dayCount : 'dc',
      m        : 'a',
      mm       : 'b',
      name     : 'c',
      mmyy     : 'd',
      full     : 'e',
      monyear  : 'f',
      monyear_f: 'g',
      mmmyy    : 'h',
    },
    gap  : {
      days30month : 'x',
      days90month : 'y',
      days365month: 'z'
    }
  }
}

/**
 * ----------------------
 * charts [ApexChart_Methods]
 * @type
 * ----------------------
 */
const ACT_keys = {
  method: {
    min: 'minimal',
    sim: 'simple',
    adv: 'advance'
  },
  init  : {
    render: 'render',
    reload: 'reload',
  },
  update:
    {
      series : 'series',
      options: 'options',
      append : 'append',
      show   : 'show',
      hide   : 'hide',
      reset  : 'reset',
    }
}

/*
 ----------------------------------------------------------------
 Global Screen Adjust usages
 ----------------------------------------------------------------
 */

const CLS = {
  display: {
    dnme: 'd-none-me',
    none: 'd-none',
    flex: 'd-flex',
  },
  visible: {
    nav: {active: 'active'},
    tab: {
      active: ['active', 'show'],
    },
  },
  colors : {
    array: ['dark', 'primary', 'danger', 'info', 'warning', 'success', 'secondary', 'light'],
    p    : 'primary',
    b    : 'dark',
    d    : 'danger',
    i    : 'info',
    w    : 'warning',
    s    : 'success',
    m    : 'secondary',
    l    : 'light'
  },
  screen : {
    full: {
      all: ['col-xxl-12', 'col-xl-12', 'col-lg-12', 'col-md-12'],
    },
    cols: {
      charts: {
        wide: ['col-lg-12 col-md-12'],
        full: ['col-12', 'col-md-12', 'col-xxl-12'],
        half: ['col-12', 'col-md-6', 'col-xxl-6'],
      },
    }
  },
  custom : {
    dropdownBtn: 'btn btn-sm btn-color-gray-800 btn-light-secondary w-100 px-3 hover-scale text-capitalize'
  },
  css    : {
    color: {
      g6: 'text-gray-600',
    },
    align: {
      l: 'text-start',
      c: 'text-center',
      r: 'text-end'
    },
    fs   : {
      5: 'fs-5',
      4: 'fs-4',
      3: 'fs-3',
      2: 'fs-2',
      1: 'fs-1'
    },
    fw   : {
      400: 'fw-light',
      500: 'fw-normal',
      600: 'fw-semibold',
      700: 'fw-bold',
      800: 'fw-bolder'
    },
  },

  icons: {
    0: '',
    1: 'chat-left-dots',
    2: 'envelope',
    3: 'whatsapp',
    4: 'geo-alt-fill'
  }
}
