/**
 * HTML elements management for the layout.
 * format to create a variable: _{name of layout}LE
 * inside the object add all
 *
 * all are globally accessible.
 * all are zone child elements.
 */

let thePathArr;
/**
 * any extra data that is required for further changes as per the event
 * this is generated on the basis of user action.
 */
let _actionData;

let _callEl, _tableEl, _chartEl, _whichLayout,
    _Lkey = '#layout_zone';

// sheet layout
let _sheetLE = {
  zones    : {
    layout   : '#layout',
    starter  : '#starter',
    sheet    : '#sheet',
    templates: '#template',
    transact : '#transact',
    modals   : '#modals'
  },
  recollect: {},
  layout   : 'whole layout',
  starter  : 'description to be added.',
  sheet    : 'description to be added.',
  templates: 'description to be added.',
  transact : 'description to be added.',
  modals   : 'description to be added.',
};

// report layout
let _reportLE = {
  zones    : {
    layout : '#layout',
    nav    : '#nav',
    navbar : '#navbar',
    navtab : '#navtab',
    search : '#search',
    report : '#report',
    summary: '#summary',
    charts : '#charts'
  },
  recollect: {},
  layout   : 'whole layout',
  nav      : 'contains collection of zones',
  navlink  : 'navlink zone',
  navtab   : 'contains all target buttons',
  search   : 'contains search function',
  report   : 'contains report',
  summary  : 'contains summary',
  charts   : 'contains charts'
};

// listing layout
let _listingLE = {
  zones    : {
    layout: '#layout',
    form  : '#form',
    action: '#action',
    tabs  : '#tabs',
    intro : '#intro'
  },
  recollect: {},
  layout   : 'whole layout',
  form     : 'contains the form Element',
  action   : 'tab button to open targeted card and table',
  tabs     : 'contains cards and tables',
  intro    : 'contains into video'
};

// panels layout
let _panelLE = {
  zones    : {
    layout : '#layout',
    search : '#search',
    outcome: '#outcome',
    modal  : '#modal',
    // in outcome
    aside: '#aside',
    nav  : '#nav',
    // in nav
    navbar: '#navbar',
    navtab: '#navtab',
  },
  recollect: {
    search: '#search',
  },
  layout   : 'whole layout',
  search   : 'contains the search functionality for select accounts',
  outcome  : 'contains details',
  aside    : 'contains all actions',
  navtab   : 'contains  the  nav buttons and target Elements',
  nav      : 'contains the all nav buttons which hold the id of element',
  tab      : 'contains the target Elements ',
  modal    : 'store modals that required in the page.'
}

// tables layout
let _tableLE = {
  zones    : {
    layout: '#layout',
    nav   : '#nav',
    navbar: '#navbar',
    navtab: '#navtab',
    tables: '#tables'
  },
  recollect: {},
  layout   : 'whole layout',
  nav      : 'contains all zones',
  navbar   : 'contains links',
  navtab   : 'tab button to open targeted card in tab pane',
  tables   : 'contains the all tables'
};

// cards layout
let _cardLE = {
  zones    : {
    layout: '#layout',
    menu  : '#menu',
    cards : '#cards',
    start : '#start',
    new   : '#new',
    edit  : '#edit',
    list  : '#list',
    view  : '#view',
    cate  : '#cate',
  },
  recollect: {},
  layout   : 'whole layout',
  menu     : 'highlight the important information inside the menu',
  cards    : 'contains collection of zones which are dynamic',
  start    : 'contains staring page of the card layout',
  new      : 'contains the add form',
  edit     : 'contains the edit form',
  list     : 'load the table',
  view     : 'load the target id details in graphical form and table form',
  cate     : 'load the category form',
  // append used for hold repeating button elements
  append: ''
}

// tabs layout
let _tabLE = {
  zones    : {
    layout : '#layout',
    tabs   : '#tabs',
    result : '#result',
    control: '#control',
    action : '#action',
  },
  recollect: {},
  layout   : 'whole layout',
  // core
  tabs  : 'form to fill detail/s and get result as table',
  result: 'table that contains data as per form submitted from :tabs',
  // tabs
  control: 'tab button to open targeted card in tab pane',
  action : 'tab panel to add details and submit form',
}

// button layout
let _buttonLE = {
  zones    : {
    layout  : '#layout',
    menu    : '#menu',
    working : '#working',
    buttons : '#buttons',
    forms   : '#forms',
    tables  : '#tables',
    cards   : '#cards',
    elements: '#elements',
    tabs    : '#tabs_zone',
  },
  recollect: {},
  layout   : 'whole layout',
  menu     : 'highlight the important information inside the menu',
  working  : 'contains collection of zones which are dynamic',
  buttons  : 'button to open form and table for a target card',
  forms    : 'contains all forms of the page',
  tables   : 'contains all tables of the page',
  cards    : 'contains all cards of the page',
  elements : 'contains the collection of elements',
  tabs     : 'tab button to open targeted card in tab pane',
  append   : []
}

// dashboard layout
let _dashboardLE = {
  zones    : {
    layout : '#layout',
    wizard : '#wizard',
    chart  : '#chart',
    neutral: '#neutral'
  },
  recollect: {},
  layout   : 'whole layout',
  wizards  : 'wizard zone',
  charts   : 'contains all chart',
  neutrals : 'neutral zone',
}

// direct layout
let _directLE = {
  zones    : {
    layout: '#layout',
    direct: '#direct',
    visits: '#visits',
  },
  recollect: {},
  layout   : 'whole layout',
  direct   : 'description',
  visits   : 'contains all core functions',
}

let _wizardLE = {
  zones    : {
    layout : '#layout',
    search : '#search',
    result : '#result',
    present: '#present'
  },
  recollect: {
    present: '#present',
  },
  layout   : 'whole layout',
  search   : 'contains search elements',
  result   : 'contains the results of the search',
  present  : 'contains the final data of the print or download'
}