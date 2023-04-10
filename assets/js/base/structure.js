const pb =
        {
          dsb: {
            n         : 'dashboards',
            charts    : {
              n       : 'charts',
              business: {
                n: 'business',
                p: {
                  sales  : 'daily-sales',
                  working: 'working-capital',
                  heads  : 'heads-breakup'
                }
              },
              stock   : {
                n: 'stock',
                p: {
                  trade: 'business-trade',
                  stock: 'stock-flow',
                  sales: 'sales-break'
                }
              },
              profit  : {
                n: 'profit',
                p: {
                  trade: 'items-trade',
                  gross: 'gross-profit',
                  item : 'profit-item'
                }
              },
              customer: {
                n: 'customers',
                p: {
                  volume : 'credit-volume',
                  balance: 'customer-balance'
                }
              }
            },
            statistics: {
              n        : 'statistics',
              customers: {
                n: 'customers',
                p: {},
                c: {
                  chart   : {
                    month  : 'month',
                    quarter: 'quarter',
                    year   : 'year'
                  },
                  month   : 'month',
                  quarter : 'quarter',
                  year    : 'year',
                  tableone: 'tableone'
                }
              },
              business : {
                n: 'business',
                p: {
                  summary: 'summary',
                }
              }
            }
          },
          opr: {
            n           : 'operations',
            transactions: {
              n            : 'transactions',
              sales        : {
                n: 'sales',
                p: {
                  credit  : 'credit',
                  cash    : 'cash',
                  separate: 'separate',
                  regular : 'regular'
                },
              },
              purchases    : {
                n: 'purchases',
                p: {
                  fuel   : 'fuel',
                  oil    : 'oil',
                  goods  : 'goods',
                  expense: 'expense'
                }
              },
              banking      : {
                n: 'banking',
                p: {
                  deposit   : 'deposit',
                  withdrawal: 'withdrawal',
                  transfer  : 'transfer',
                  clearance : 'clearance',
                  delete    : 'delete'
                },
                c: {
                  sub : {
                    unsettled: 'fc_unsettled_txns'
                  },
                  card: {
                    search: 'search',
                    delete: 'delete',
                    view  : 'view',
                    modal : 'modal',
                  }
                }
              },
              receipts     : {
                n: 'receipts',
                p: {
                  customer: 'customer',
                  contact : 'contact',
                  income  : 'income',
                  transact: 'transact'
                },
                c: {
                  customer: {
                    entry   : 'rc_unpaid_entries',
                    bills   : 'rc_unpaid_bills',
                    interest: 'rc_int_table'
                  }
                }
              },
              payments     : {
                n: 'payments',
                p: {
                  supplier  : 'supplier',
                  operating : 'operating',
                  salary    : 'salary',
                  vendor    : 'vendor',
                  loans     : 'loans',
                  withdrawal: 'ownerdraw'
                },
                c: {
                  somea: 'fc_load_entries',
                  someb: 'e_a_load_entries'
                }
              },
              journals     : {
                n: 'journals',
                p: {
                  entry: 'journal-entry'
                }
              },
              miscellaneous: {
                n: '',
                p: {}
              },
            },
            shifts      : {
              n: 'shifts',
              b: {
                n: '',
                p: {}
              }
            },
            stock       : {
              n         : 'stock',
              incoming  : {
                n: 'incoming',
                p: {
                  simple : 'simple',
                  advance: 'advance'
                },
              },
              inspection: {
                n: 'inspection',
                p: {}
              },
              movement  : {
                n: 'movement',
                p: {
                  fuel: 'fuel',
                  lube: 'lube'
                }
              },
              transfer  : {
                n: 'transfer',
                p: {
                  tank    : 'tank',
                  air     : 'air',
                  location: 'location',
                  person  : 'person'

                }
              },
            },
            employees   : {
              n         : 'employees',
              activities: {
                n: 'activities',
                p: {
                  absent  : 'absent',
                  overtime: 'overtime',
                  expense : 'expense',
                },
              },
              salary    : {
                n: 'salary',
                p: {},
                c: {}
              },
            },

            loyalty: {
              n: 'loyalty',
              b: {
                n: '',
                p: {}
              }
            },
            indents: {
              n: 'indents',
              b: {
                n: '',
                p: {}
              }
            }
          },
          mng: {
            n        : 'management',
            products : {
              n  : 'products',
              add: {
                n: 'add',
                p: {
                  fuels   : 'fuels',
                  lubes   : 'lubes',
                  goods   : 'goods',
                  services: 'services'
                }
              }
            },
            accounts : {
              n        : 'accounts',
              ledgers  : {
                n: 'ledgers',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general : 'general',
                    receipts: 'receipts',
                    payments: 'payments'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              banks    : {
                n: 'banks',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general : 'general',
                    receipts: 'receipts',
                    payments: 'payments',
                    expenses: 'expenses',
                    deposits: 'deposits'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              gateways : {
                n: 'gateways',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general          : 'general',
                    settlements      : 'settlements',
                    sales_receipts   : 'sales_receipts',
                    customer_receipts: 'customer_receipts'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              loans    : {
                n: 'loans',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general : 'general',
                    receipts: 'receipts',
                    payments: 'payments'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              contacts : {
                n: 'contacts',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general : 'general',
                    receipts: 'receipts',
                    payments: 'payments'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              suppliers: {
                n: 'suppliers',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'add'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general   : 'general',
                    purchases : 'purchases',
                    payments  : 'payments',
                    deductions: 'deductions',
                    incentives: 'incentives'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              vendors  : {
                n: 'vendors',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general : 'general',
                    bills   : 'bills',
                    payments: 'payments',
                    dues    : 'dues'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              expenses : {
                n: 'expenses',
                p: {
                  start: 'start',
                  new  : 'new',
                  edit : 'edit',
                  list : 'list',
                  view : 'view',
                  cate : 'cate'
                },
                c: {
                  chart: {
                    balance    : 'balance',
                    transaction: 'transaction'
                  },
                  tab  : {
                    general  : 'general',
                    datewise : 'datewise',
                    monthwise: 'monthwise',
                    details  : 'details'
                  },
                  form : {
                    save   : 'save',
                    delete : 'delete',
                    disable: 'disable',
                    update : 'update',
                    class  : 'class'
                  }
                }
              },
              setting  : {
                n: 'setting',
                p: {
                  one  : 'one',
                  group: 'group',
                  all  : 'required'
                }
              }
            },
            customers: {
              n      : 'customers',
              add    : {
                n: 'add',
                p: {
                  add    : 'add',
                  bulk   : 'bulk',
                  upload : 'upload',
                  vehicle: 'vehicle'
                },
                c: {
                  table: 'table'
                }
              },
              listing: {
                n: 'listing',
                p: {
                  card : 'cards',
                  table: 'table',
                }
              },
              detail : {
                n: 'detail',
                p: {
                  overview: 'overview',
                  charts  : 'charts',
                  profits : 'profits',
                  vehicles: 'vehicles',
                  interest: 'interest'
                }
              }
            },
            employees: {
              n      : 'employees',
              add    : {
                n: 'add',
                p: {
                  step: 'step'
                }
              },
              listing: {
                n: 'listing',
                p: {
                  cards: 'cards',
                  table: 'table',
                }
              },
              detail : {
                n: 'detail',
                p: {
                  overview  : 'overview',
                  activities: 'activities',
                  payroll   : 'payroll',
                  account   : 'account',
                  edit      : 'edit'
                },
                c: {
                  table: {
                    transaction_history: 'transaction_history',
                    activities         : 'activities',
                    payroll            : 'payroll',
                  }
                }
              }
            },
            billing  : {
              n       : 'billing',
              bucket  : {
                n: 'bucket',
                p: {
                  customer: 'customer',
                  month   : 'month'
                },
                c: {
                  card : 'card',
                  table: 'table',
                  bill : 'bill'
                }
              },
              display : {
                n: 'display',
                p: {},
                c: {}
              },
              create  : {
                n: 'create',
                p: {}
              },
              generate: {
                n: 'generate',
                p: {
                  recurring: 'recurring',
                  frequency: 'frequency',
                  direct   : 'direct'
                },
                c: {
                  table: 'customer_table'
                }
              },
              view    : {
                n: 'view',
                p: {}
              }
            },
            tokens   : {
              b: {
                n: '',
                p: {}
              }
            },
            loyalty  : {
              b: {
                n: '',
                p: {}
              }
            },
            users    : {
              n      : 'users',
              add    : {
                n: 'add',
                p: {}
              },
              listing: {
                n: 'listing',
                p: {}
              },
              detail : {
                n: 'detail',
                p: {
                  overview: 'overview',
                  security: 'security',
                  events  : 'events'
                },
                c: {
                  sessions: 'login_session',
                  logs    : 'logs'
                }
              },
              setting: {
                n: 'setting',
                p: {}
              }
            },
            drive    : {
              folders: {
                n: '',
                p: {}
              },
              files  : {
                n: '',
                p: {}
              }
            }
          },
          rpt: {
            n        : 'reports',
            general  : {
              n        : 'general',
              shift    : {
                n: 'shift',
                p: {}
              },
              balance  : {
                n: 'balance',
                p: {}
              },
              board    : {
                n: 'board',
                p: {}
              },
              dsr      : {
                n: 'dsr',
                p: {}
              },
              onepage  : {
                n: 'onepage',
                p: {}
              },
              rocket   : {
                n: 'rocket',
                p: {}
              },
              transacts: {
                n: 'transacts',
                p: {}
              }
            },
            petroleum: {
              n        : 'petroleum',
              flowsheet: {
                n: 'flowsheet',
                p: {}
              },
              overview : {
                n: 'overview',
                p: {}
              },
              rates    : {
                n: 'rates',
                p: {
                  rates    : 'rates',
                  variation: 'variation',
                  stock    : 'stock'
                }
              },
              pistol   : {
                n: 'pistol',
                p: {
                  item    : 'item',
                  combined: 'combined'
                }
              },
              summary  : {
                n: 'summary',
                p: {
                  quick   : 'quick',
                  standard: 'standard',
                  advance : 'advance'
                }
              },
              report   : {
                n: 'report',
                p: {}
              },
              stock    : {
                n: 'stock',
                p: {}
              },
            },
            products : {
              n        : 'products',
              sales    : {
                n: 'sales',
                p: {
                  category: 'category',
                  item    : 'item',
                  customer: 'customer',
                  advance : 'advance'
                },
              },
              purchases: {
                n: 'purchases',
                p: {
                  category: 'category',
                  item    : 'item',
                  supplier: 'supplier',
                  invoice : 'invoice'
                },
              },
              stocks   : {
                n: 'stocks',
                p: {
                  item    : 'item',
                  location: 'location'
                }
              }
            },
            accounts : {
              n        : 'accounts',
              lists    : {
                n: 'lists',
                p: {}
              },
              summary  : {
                n: 'summary',
                p: {}
              },
              register : {
                n: 'register',
                p: {
                  search : 'search',
                  report : 'report',
                  summary: 'summary',
                  charts : 'charts'
                }
              },
              statement: {
                n: 'statement',
                p: {
                  search : 'search',
                  report : 'report',
                  summary: 'summary',
                  charts : 'charts'
                },
                c: {
                  chart: {
                    debited_account : 'debited-accounts',
                    credited_account: 'credited-accounts',
                    balance         : 'balance-flow',
                    transaction     : 'transaction'
                  }
                }
              },
              wave     : {
                n: 'wave',
                p: {
                  search : 'search',
                  report : 'report',
                  summary: 'summary',
                  charts : 'charts'
                }
              },
              group    : {
                n: 'group',
                p: {}
              },
              interest : {
                n: 'interest',
                p: {
                  search : 'search',
                  report : 'report',
                  summary: 'summary',
                  charts : 'charts'
                }
              },
            },
            customers: {
              n           : 'customers',
              sales       : {
                n: 'sales',
                p: {
                  direct : 'direct',
                  group  : 'group',
                  vehicle: 'vehicle'
                }
              },
              transactions: {
                n: 'transactions',
                p: {
                  simple   : 'simple',
                  detailed : 'detailed',
                  statement: 'statement'
                }
              },
              bills       : {
                n: 'bills',
                p: {
                  view     : 'view',
                  statement: 'statement',
                  customer : 'customer'
                }
              },
              indents     : {
                n: 'indents',
                p: {
                  bucket  : 'bucket',
                  period  : 'period',
                  book    : 'book',
                  customer: 'customer'
                }
              },
              summary     : {
                n: 'summary',
                p: {
                  accounts: 'accounts',
                  trade   : 'trade',
                  group   : 'group'
                }
              },
            },
            employees: {
              n       : 'employees',
              salary  : {
                n: 'salary',
                p: {
                  payroll: 'payroll',
                  ledger : 'ledger',
                  slip   : 'slip'
                }
              },
              activity: {
                n: 'activity',
                p: {
                  absents   : 'absents',
                  overtime  : 'overtime',
                  expenses  : 'expenses',
                  shortage  : 'shortage',
                  commission: 'commission'
                }
              },
              combined: {
                n: 'combined',
                p: {}
              }
            }
          },
          tax: {
            n        : 'taxation',
            standard : {
              n        : 'standard',
              gst      : {
                n: 'gst',
                p: {}
              },
              incometax: {
                n: 'incometax',
                p: {}
              },
              tcs      : {
                n: 'tcs',
                p: {}
              },
              tds      : {
                n: 'tds',
                p: {}
              },
              vat      : {
                n: 'vat',
                p: {}
              }
            },
            gstreport: {
              n        : 'gstreport',
              sales    : {
                n: 'sales',
                p: {
                  detailed: 'detailed',
                  invoice : 'invoice',
                  item    : 'item',
                  party   : 'party'
                }
              },
              purchases: {
                n: 'purchases',
                p: {
                  detailed: 'detailed',
                  invoice : 'invoice',
                  item    : 'item',
                  party   : 'party'
                }
              }
            },
            vatreport: {
              n        : 'vatreport',
              combined : {
                n: 'combined',
                p: {}
              },
              overview : {
                n: 'overview',
                p: {}
              },
              purchases: {
                n: 'purchases',
                p: {}
              },
              sales    : {
                n: 'sales',
                p: {}
              }
            },
            gstreturn: {
              n         : 'gstreturn',
              fetch2b   : {
                n: 'fetch2b',
                p: {}
              },
              gstrone   : {
                n: 'gstrone',
                p: {}
              },
              gstrthreeb: {
                n: 'gstrthreeb',
                p: {}
              }
            },
            vatreturn: {
              n: 'vatreturn',
              b: {
                n: '',
                p: {}
              }
            },
          },
          fin: {
            n        : 'financials',
            balance  : {
              n         : 'balance',
              standard  : {
                n: 'standard',
                p: {
                  sheet: 'sheet',
                  trans: 'transact',
                  modal: 'modals'
                }
              },
              tformat   : {
                n: 'tformat',
                p: {
                  sheet: 'sheet',
                  trans: 'transact',
                  modal: 'modals'
                }
              },
              summary   : {
                n: 'summary',
                p: {
                  sheet: 'sheet',
                  trans: 'transact',
                  modal: 'modals'
                }
              },
              detailed  : {
                n: 'detailed',
                p: {}
              },
              comparison: {
                n: 'comparison',
                p: {
                  sheet: 'sheet',
                  trans: 'transact',
                  modal: 'modals'
                }
              },
              schedule  : {
                n: 'schedule',
                p: {}
              },
            },
            profit   : {
              n         : 'profit',
              comparison: {
                n: 'comparison',
                p: {}
              },
              clients   : {
                n: 'clients',
                p: {}
              },
              days      : {
                n: 'days',
                p: {}
              },
              detailed  : {
                n: 'detailed',
                p: {}
              },
              months    : {
                n: 'months',
                p: {}
              },
              rates     : {
                n: 'rates',
                p: {}
              },
              schedule  : {
                n: 'schedule',
                p: {}
              },
              standard  : {
                n: 'standard',
                p: {}
              }
            },
            statement: {
              n          : 'statement',
              cashflow   : {
                n: 'cashflow',
                p: {}
              },
              negative   : {
                n: 'negative',
                p: {}
              },
              receipts   : {
                n: 'receipts',
                p: {}
              },
              transaction: {
                n: 'transaction',
                p: {}
              },
              trial      : {
                n: 'trial',
                p: {}
              }
            },
            reconcile: {
              n       : 'reconciliation',
              summary : {
                n: 'summary',
                p: {}
              },
              initiate: {
                n: 'initiate',
                p: {}
              }
            },
            general  : {
              n: 'general',
              b: {
                n: '',
                p: {}
              },
            }
          },
          com: {
            n       : 'communication',
            chats   : {
              n: 'chats',
              b: {
                n: '',
                p: {}
              }
            },
            messages: {
              n: 'messages',
              b: {
                n: '',
                p: {}
              }
            },
            whatsapp: {
              n: 'whatsapp',
              b: {
                n: '',
                p: {}
              }
            },
            emails  : {
              n: 'emails',
              b: {
                n: '',
                p: {}
              }
            },
            diary   : {
              n       : 'diary',
              calendar: {
                n: 'calendar',
                p: {}
              },
              tasks   : {
                n: 'tasks',
                p: {}
              }
            },
          },
          set: {
            n      : 'setting',
            profile: {
              n       : 'profile',
              account : {
                n: 'account',
                p: {
                  details: 'details'
                },
              },
              billing : {
                n: 'billing',
                p: {
                  details     : 'details',
                  validity    : 'validity-card',
                  payment     : 'payment-method',
                  subscription: 'subscription-card',
                  billing     : 'billing-history'
                },
                c: {
                  failed : 'billing_failed',
                  success: 'billing_success'
                }
              },
              invoice : {
                n: 'invoice',
                p: {
                  page: 'page'
                }
              },
              logs    : {
                n: 'logs',
                p: {
                  sessions: 'login_sessions'
                }
              },
              overview: {
                n: 'overview',
                p: {
                  details: 'details'
                },
              },
              referral: {
                n: 'referral',
                p: {
                  details: 'details'
                },
                c: {
                  year: 'referral_year',
                  time: 'referral_time'
                }
              },
              security: {
                n: 'security',
                p: {
                  details: 'details'
                },
                c: {
                  admin_enable : 'admin_enable',
                  admin_disable: 'admin_disable',
                  user_enable  : 'user_enable',
                  user_disable : 'user_disable',
                  use          : 'device_use'
                }
              },
              wallet  : {
                n: 'wallet',
                p: {
                  details: 'details'
                },
                c: {
                  one: 'referrals_one',
                  two: 'referrals_two'
                }
              }
            },
          },
          sup: {
            n       : 'support',
            standard: {
              b: {
                n: '',
                p: {}
              }
            }
          }
        }