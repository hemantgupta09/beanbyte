/*
 Event types management.
 */

const eTypes = {
  // most used
  goto  : 'goto',
  back  : 'back',
  form  : 'form',
  table : 'table',
  card  : 'card',
  load  : 'load',
  action: 'action',

  // specified
  navtab  : 'navtab',
  tab     : 'tab',
  modal   : 'modal',
  report  : 'report',
  result  : 'result',
  wizard  : 'wizard',
  group   : 'group',
  redirect: 'redirect',
  chart   : 'chart',

  ignore: 'ignore',
  // unknown
  aside  : 'aside', // used into dashboard -> charts -> table
  mode   : 'mode',  // used into dashboard -> charts -> table
  refresh: 'refresh',
  paging : 'paging',
  element: 'element',
}

// white listed events holding used events in a dedicated layout
const wlEvent = {
  dashboard: [eTypes.chart],
  buttons  : [eTypes.form, eTypes.table, eTypes.card, eTypes.load, eTypes.back, eTypes.action, eTypes.navtab, eTypes.element],
  panels   : [eTypes.goto, eTypes.load, eTypes.back, eTypes.navtab],
  reports  : [eTypes.load, eTypes.navtab, eTypes.action, eTypes.back],
  wizards  : [eTypes.back, eTypes.redirect, eTypes.load, eTypes.card, eTypes.action],
  sheets   : [eTypes.load, eTypes.action, eTypes.back, eTypes.modal, eTypes.table],
  tabs     : [eTypes.tab, eTypes.report, eTypes.back],
  cards    : [eTypes.card, eTypes.action, eTypes.navtab, eTypes.back, eTypes.redirect],
  direct   : [eTypes.navtab, eTypes.back],
  tables   : [eTypes.back],
  listing  : [eTypes.action, eTypes.navtab, eTypes.redirect, eTypes.paging, eTypes.back, eTypes.ignore]

}

/**
 * events that should show any loading indicator to the event button when user click.
 * @type {{}}
 */
const influenceEvents = {
  dashboard: [],
  buttons  : [eTypes.form, eTypes.table, eTypes.card, eTypes.load, eTypes.action, eTypes.navtab, eTypes.element],
  panels   : [eTypes.goto, eTypes.navtab],
  reports  : [eTypes.load, eTypes.navtab, eTypes.action],
  sheets   : [eTypes.load, eTypes.action, eTypes.table],
  tabs     : [eTypes.report],
  cards    : [eTypes.card, eTypes.action, eTypes.navtab],
  direct   : [eTypes.navtab],
  tables   : [],
  listing  : [eTypes.action, eTypes.navtab, eTypes.paging],
  wizards  : [eTypes.action, eTypes.load, eTypes.card]
}


const blankEvents = {
  dashboard: {
    select: [],
    input : [],
    button: [eTypes.back]
  },
  buttons  : {
    select: [],
    input : [],
    button: [eTypes.back]
  },
  panels   : {
    select: [],
    input : [],
    button: [eTypes.back, eTypes.redirect]
  },
  reports  : {
    select: [],
    input : [],
    button: [eTypes.back]
  },
  sheets   : {
    select: [],
    input : [],
    button: [eTypes.back]
  },
  tabs     : {
    select: [],
    input : [],
    button: []
  },
  cards    : {
    select: [],
    input : [],
    button: [eTypes.redirect, eTypes.back]
  },
  direct   : {
    select: [],
    input : [],
    button: [eTypes.action]
  },
  tables   : {
    select: [],
    input : [],
    button: [eTypes.goto, eTypes.back]
  },
  listing  : {
    select: [],
    input : [],
    button: [eTypes.back, eTypes.redirect]
  },
  wizards  : {
    select: [],
    input : [],
    button: [eTypes.redirect, eTypes.back]
  },
}
/**
 *
 */
const eV = {
  action: {
    save : 'save',
    reset: 'reset'
  }
}