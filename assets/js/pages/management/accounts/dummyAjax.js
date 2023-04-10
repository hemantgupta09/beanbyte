"use strict";

// Class definition
var dummy_ajax_accounts_mng = function () {
  // Shared variables


  // Private functions

  const contacts = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.contacts.n:
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 4233,
                      "type": '1'
                    },
                    6: {
                      "id": 6,
                      "cate_id": "-1",
                      "value": 50,
                      "type": '2'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  categories: {
                    // [0 => group_id, 1 => group_name, 2 => group_code, 3 => head of the group]
                    0: [0, "All Contacts"],
                    11: [11, 'Local Business', 'CODE', 'Short Term Loan Advance'],
                    12: [12, 'Related Business', 'CODE', 'Short Term Loan Advance'],
                    13: [13, 'Local Connection', 'CODE', 'Short Term Borrowing'],
                    15: [15, 'Family Circle', 'CODE', 'Short Term Loan Advance'],
                    "-1": [0, "Deactivated"],
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.contacts.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}

              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.contacts.p.new:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
        break;

      case pb.mng.accounts.contacts.p.edit:
        console.log(params);
        // a dummy database
        const db = {
          12: {
            "account_name": "Ramesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "11",
            "notify": "1",
            "account_balance": "349341.42",
            "behave": "1",
            "balance_date": "2023-01-03"
          },
          13: {
            "account_name": "Lokesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "13",
            "notify": "2",
            "account_balance": "349341.11",
            "behave": "1",
            "balance_date": "2023-01-07"
          },
          15: {
            "account_name": "Suresh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "15",
            "notify": "3",
            "account_balance": "349341.89",
            "behave": "0",
            "balance_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {

              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]],
              },

              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.contacts.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry_date, 7 => notify_id]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "12", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "13", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }
              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.contacts.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }
          },
          'status': true
        }
        break;

      case pb.mng.accounts.contacts.c.tab.general:
        response = {
          "body": {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                "month": 'March',
                "payment": '90200',
                "receipt": '23000',
                "net": '-67200'
              },
              "balance": {
                "amount": '534534',
                "tag": 'advance',
                "opening": '56000',
                "debited": '12000',
                "credited": '90000'
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            },
          },
          'status': true
        }
        break;
      case pb.mng.accounts.contacts.c.tab.receipts:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>credit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              date: {
                //[date_id:  date_id with date]
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid:  credit_lid with actual ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.contacts.c.tab.payments:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {

              data: {
                //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid:  debit_lid with actual ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.contacts.c.form.save:
      case pb.mng.accounts.contacts.c.form.disable:
      case pb.mng.accounts.contacts.c.form.delete:
      case pb.mng.accounts.contacts.c.form.update:
      case pb.mng.accounts.contacts.c.form.class:
        response = {
          'body': {
            status: true
          },
          'status': true
        }


    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.body.data;
  }

  const vendors = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.vendors.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 4233,
                      "type": '1'
                    },
                    6: {
                      "id": 6,
                      "cate_id": "-1",
                      "value": 5,
                      "type": '2'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Contacts"
                    },
                    '11': {
                      "id": 11,
                      "name": "Local Connections"
                    },
                    '12': {
                      "id": 12,
                      "name": "Family Member"
                    },
                    '13': {
                      "id": 13,
                      "name": "Related Business"
                    },
                    '14': {
                      "id": 14,
                      "name": "Local Business"
                    },
                    '15': {
                      "id": 15,
                      "name": "Local Connections"
                    },
                    '-1': {
                      "id": 0,
                      "name": "Deactivated"
                    },
                  },
                  categories: {
                    21: [21, 'Family Circle', 'CODE', 'Short Term Loan Advance'],
                    22: [22, 'Related Business', 'CODE', 'Short Term Loan Advance'],
                    23: [23, 'Local Connection', 'CODE', 'Short Term Borrowing'],
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.vendors.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.vendors.p.add:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
        break;

      case pb.mng.accounts.vendors.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            "account_name": "Ramesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "11",
            "notify": "1",
            "account_balance": "349341.42",
            "behave": "1",
            "balance_date": "2023-01-03"
          },
          13: {
            "account_name": "Lokesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "13",
            "notify": "2",
            "account_balance": "349341.11",
            "behave": "1",
            "balance_date": "2023-01-07"
          },
          15: {
            "account_name": "Suresh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "15",
            "notify": "3",
            "account_balance": "349341.89",
            "behave": "0",
            "balance_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]],
              },

              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.vendors.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry, 7 => alert]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "13", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "14", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.vendors.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.vendors.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                "month": 'March',
                "payment": '90200',
                "receipt": '23000',
                "net": '-67200'
              },
              "balance": {
                "amount": '534534',
                "tag": 'advance',
                "opening": '56000',
                "debited": '12000',
                "credited": '90000'
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.vendors.c.tab.bills:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>credit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid:  credit_lid with actual ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.vendors.c.tab.payments:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid:  debit_lid with actual ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }
          },
          'status': true
        }
        break;
      case pb.mng.accounts.vendors.c.tab.dues:
        response = {
          'body': {
               "status" : true ,
                   "message" : "message" ,
                   "title" : "title" ,
                   "data" : {
                     data: {
                       //[0=>row_id, 1=>invoice_date_id , 2=>due_date_id, 3=>against, 5=>amount, note]
                       534: [534, 124, 124, 234, 3453, 'this is note'],
                       535: [535, 125, 125, 204, 25000, 'this is note'],
                       536: [536, 126, 126, 234, 345345, 'this is note'],
                       537: [537, 127, 127, 224, 345345, 'this is note'],
                       538: [537, 127, 127, 214, 345345, 'this is note'],
                       539: [537, 127, 127, 234, 345345, 'this is note'],
                     },
                     //[date_id: date_id with date]
                     date: {
                       124: ['2022-12-31'],
                       125: ['2023-01-10'],
                       126: ['2023-02-11'],
                       127: ['2023-03-12'],
                     },
                   }

          },
          'status': true
        }

        break;

      case pb.mng.accounts.vendors.c.form.save:
      case pb.mng.accounts.vendors.c.form.disable:
      case pb.mng.accounts.vendors.c.form.delete:
      case pb.mng.accounts.vendors.c.form.update:
      case pb.mng.accounts.vendors.c.form.class:
        response = {
          'body': {
            status: true
          },
          'status': true
        }


    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.body.data;
  }

  const banks = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.banks.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 3847,
                      "type": '1'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Account"
                    },
                    '11': {
                      "id": 11,
                      "name": "Current Account"
                    },
                    '12': {
                      "id": 12,
                      "name": "Saving Account"
                    },
                    '13': {
                      "id": 13,
                      "name": "OD Account"
                    },
                    '14': {
                      "id": 14,
                      "name": "OCC Account"
                    },
                    '15': {
                      "id": 15,
                      "name": "Credit Card Account"
                    }
                  },
                  'auto_debit_ac': {
                    '0': {
                      "id": 0,
                      "name": "All Account"
                    },
                    '11': {
                      "id": 11,
                      "name": "Current Account"
                    },
                    '12': {
                      "id": 12,
                      "name": "Saving Account"
                    },
                    '13': {
                      "id": 13,
                      "name": "OD Account"
                    },
                    '14': {
                      "id": 14,
                      "name": "OCC Account"
                    },
                    '15': {
                      "id": 15,
                      "name": "Credit Card Account"
                    }
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.banks.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.banks.p.add:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        break;

      case pb.mng.accounts.banks.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          11: {
            "account_name": "sbi India",
            "account_number": "984237923498",
            "ifsc_code": "9876543211",
            "category": "11",
            "opening_balance": "987439",
            "opening_date": "2023-01-03"
          },
          12: {
            "account_name": "sbi India",
            "account_number": "984237923498",
            "ifsc_code": "9876543211",
            "category": "13",
            "opening_balance": "987439",
            "opening_date": "2023-01-03"
          },
          13: {
            "account_name": "sbi India",
            "account_number": "984237923498",
            "ifsc_code": "9876543211",
            "category": "15",
            "opening_balance": "987439",
            "opening_date": "2023-01-03"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]]

              },
              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.banks.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    //[0=>id, 1=>'icon', 2=>'name', 3=>'cate_id', 4=>'ifsc', 5=>'account_number', 6=>'balance', 7=>'last_reconciliation']
                    11: [11, "avatars/300-2.jpg", "SBI Bank", "11", "SIB341", "834792479324793", "352345", "2022-03-25"],
                    12: [12, "avatars/300-3.jpg", "PNB Bank", "12", "SIB341", "349873988937327", "52345", "2022-03-21"],
                    13: [13, "avatars/300-4.jpg", "BOB Bank", "13", "SIB341", "843848383783479", "2345", "2022-03-20"]
                  },
                }

              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.banks.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'name': "SBI Bank",
                "icon": "300-4.jpg",
                "cate_id": "Current Account"
              },
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.banks.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                'account_number': "874389274932",
                'ifsc_code': "BARO128",
                'current_balance': "20000",
                'reconciliation': "2023-01-14",
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120, 90, 100],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.banks.c.tab.receipts:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>transaction_type, 3=>amount, 4=>note]
                534: [534, 124, 101, 3453, 'note-1'],
                535: [535, 125, 102, 25000, 'note-asdfd'],
                536: [536, 126, 102, 345345, 'note-ewfds'],
                537: [537, 127, 101, 345345, 'note-afsd'],
                538: [537, 127, 101, 345345, 'note-fd'],
                539: [537, 127, 102, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[transaction_type map with transaction tyep
              transaction: {
                101: ['Debited'],
                102: ['Credited'],
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.banks.c.tab.payments:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>account_type, 3=>transaction_type, 4=>amount, 5=>description]
                534: [534, 124, 32, 101, 3453, 'note-1'],
                535: [535, 125, 33, 102, 25000, 'note-asdfd'],
                536: [536, 126, 34, 102, 345345, 'note-ewfds'],
                537: [537, 127, 32, 101, 345345, 'note-afsd'],
                538: [537, 127, 33, 101, 345345, 'note-fd'],
                539: [537, 127, 34, 102, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[account_type: map with Account Name]
              account: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              },
              //[transaction_type: map with transaction type]
              transaction: {
                101: ['Debited'],
                102: ['Credited']
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.banks.c.tab.expenses:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[edbit_lid: map with ledger Account(bank Account)]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.banks.c.tab.deposits:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>amount,  3=>deposit_by]
                534: [534, 124, 3453, '11'],
                535: [535, 124, 25000, '12'],
                536: [536, 124, 345345, '14'],
                537: [537, 126, 345345, '13'],
                538: [537, 127, 345345, '11'],
                539: [537, 125, 345345, '12'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[deposit_by : map with  Person name]
              deposit: {
                11: ['Lokesh Kumar'],
                12: ['Dinesh Kumar Meena'],
                13: ['Ram'],
                14: ['Lout']
              }
            }
          },
          'status': true
        }
        break;

      case pb.mng.accounts.banks.c.form.save:
      case pb.mng.accounts.banks.c.form.disable:
      case pb.mng.accounts.banks.c.form.delete:
      case pb.mng.accounts.banks.c.form.update:
      case pb.mng.accounts.banks.c.form.class:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body.data;
  }

  const suppliers = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.suppliers.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 4233,
                      "type": '1'
                    },
                    6: {
                      "id": 6,
                      "cate_id": "-1",
                      "value": 5,
                      "type": '2'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Contacts"
                    },
                    '11': {
                      "id": 11,
                      "name": "Local Connections"
                    },
                    '12': {
                      "id": 12,
                      "name": "Family Member"
                    },
                    '13': {
                      "id": 13,
                      "name": "Related Business"
                    },
                    '14': {
                      "id": 14,
                      "name": "Local Business"
                    },
                    '15': {
                      "id": 15,
                      "name": "Local Connections"
                    },
                    '-1': {
                      "id": 0,
                      "name": "Deactivated"
                    },
                  },
                  categories: {
                    21: [21, 'Family Circle', 'CODE', 'Short Term Loan Advance'],
                    22: [22, 'Related Business', 'CODE', 'Short Term Loan Advance'],
                    23: [23, 'Local Connection', 'CODE', 'Short Term Borrowing'],
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.suppliers.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.suppliers.p.add:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
        break;

      case pb.mng.accounts.suppliers.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            "account_name": "Ramesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "11",
            "notify": "1",
            "account_balance": "349341.42",
            "behave": "1",
            "balance_date": "2023-01-03"
          },
          13: {
            "account_name": "Lokesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "13",
            "notify": "2",
            "account_balance": "349341.11",
            "behave": "1",
            "balance_date": "2023-01-07"
          },
          15: {
            "account_name": "Suresh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "15",
            "notify": "3",
            "account_balance": "349341.89",
            "behave": "0",
            "balance_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]],
              },

              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.suppliers.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry, 7 => alert]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "13", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "14", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.suppliers.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.suppliers.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                "month": 'March',
                "payment": '90200',
                "receipt": '23000',
                "net": '-67200'
              },
              "balance": {
                "amount": '534534',
                "tag": 'advance',
                "opening": '56000',
                "debited": '12000',
                "credited": '90000'
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.suppliers.c.tab.purchases:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>item_category, 3=>amount, 4=>tax, 5=>status]
                534: [534, 124, 32, 345334, 345334, 11],
                535: [535, 125, 33, 250003, 250003, 12],
                536: [536, 126, 34, 345345, 345345, 13],
                537: [537, 127, 32, 345345, 345345, 11],
                538: [537, 127, 33, 345345, 345345, 14],
                539: [537, 127, 34, 345345, 345345, 12],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[item_category: map with product category]
              category: {
                32: ['Petrol'],
                33: ['Diesel'],
                34: ['Lube'],
              },
              //[status: map with status]
              status: {
                11: ['Paid'],
                12: ['Partial'],
                13: ['Due'],
                14: ['OverDue']
              }
            }
          },
          'status': true
        }
        break;
      case pb.mng.accounts.suppliers.c.tab.payments:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>transfer_by, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[transfer_by: map with different Person name]
              transfer_by: {
                32: ['Dinesh Kumar'],
                33: ['Lout'],
                34: ['mukul'],
              }
            }
          },
          'status': true
        }
        break;
      case pb.mng.accounts.suppliers.c.tab.deductions:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>account, 3=>transaction_type, 4=>amount, note]
                534: [534, 124, 32, 11, 3453, 'note-1'],
                535: [535, 125, 33, 11, 25000, 'note-asdfd'],
                536: [536, 126, 34, 12, 345345, 'note-ewfds'],
                537: [537, 127, 32, 11, 345345, 'note-afsd'],
                538: [537, 127, 33, 12, 345345, 'note-fd'],
                539: [537, 127, 34, 11, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[account: map with Account Name]
              account: {
                32: ['Dinesh Kumar'],
                33: ['Lout'],
                34: ['mukul'],
              },
              //[transaction_type: map with transaction ]
              transaction: {
                11: ['debited'],
                12: ['credited']
              }
            }
          },
          'status': true
        }
        break;
      case pb.mng.accounts.suppliers.c.tab.incentives:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>account, 3=>transaction_type, 4=>amount, note]
                534: [534, 124, 32, 11, 3453, 'note-1'],
                535: [535, 125, 33, 11, 25000, 'note-asdfd'],
                536: [536, 126, 34, 12, 345345, 'note-ewfds'],
                537: [537, 127, 32, 11, 345345, 'note-afsd'],
                538: [537, 127, 33, 12, 345345, 'note-fd'],
                539: [537, 127, 34, 11, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[account: map with account Name]
              account: {
                32: ['Dinesh Kumar'],
                33: ['Lout'],
                34: ['mukul'],
              },
              //[transaction_type: map with diff. transaction]
              transaction: {
                11: ['debited'],
                12: ['credited']
              }
            }
          },
          'status': true
        }
        break;

      case pb.mng.accounts.suppliers.c.form.save:
      case pb.mng.accounts.suppliers.c.form.disable:
      case pb.mng.accounts.suppliers.c.form.delete:
      case pb.mng.accounts.suppliers.c.form.update:
      case pb.mng.accounts.suppliers.c.form.class:
        response = {
          'body': {
            status: true
          },
          'status': true
        }


    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.body.data;
  }

  const expenses = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.expenses.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 4233,
                      "type": '1'
                    },
                    6: {
                      "id": 6,
                      "cate_id": "-1",
                      "value": 5,
                      "type": '2'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Contacts"
                    },
                    '11': {
                      "id": 11,
                      "name": "Local Connections"
                    },
                    '12': {
                      "id": 12,
                      "name": "Family Member"
                    },
                    '13': {
                      "id": 13,
                      "name": "Related Business"
                    },
                    '14': {
                      "id": 14,
                      "name": "Local Business"
                    },
                    '15': {
                      "id": 15,
                      "name": "Local Connections"
                    },
                    '-1': {
                      "id": 0,
                      "name": "Deactivated"
                    },
                  },
                  categories: {
                    21: [21, 'Family Circle', 'CODE', 'Short Term Loan Advance'],
                    22: [22, 'Related Business', 'CODE', 'Short Term Loan Advance'],
                    23: [23, 'Local Connection', 'CODE', 'Short Term Borrowing'],
                  },
                  expense_type: {
                    // [id, name, alias, string, group]
                    21: [21, 'Lokesh Kumar', 'lucky', '6', 'Local Customer'],
                    22: [22, 'Naveen Kumar', 'vicky', '6', 'Govt Party'],
                    23: [23, 'Suresh Kumar', 'suri', '6', 'Regular Customer'],
                    24: [24, 'Rakesh Kumar', 'rakhi', '6', 'Random Party'],
                  },
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.expenses.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.expenses.p.add:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
        break;

      case pb.mng.accounts.expenses.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            "expense_name": "Ramesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias_name": "lucky",
            "display_name": "lokesh_124",
            "expense_type": "21",
            "notify": "1",
            "opening_balance": "349341.42",
            "behave": "1",
            "opening_date": "2023-01-03"
          },
          13: {
            "expense_name": "Lokesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias_name": "lucky",
            "display_name": "lokesh_124",
            "expense_type": "22",
            "notify": "2",
            "opening_balance": "349341.11",
            "behave": "1",
            "opening_date": "2023-01-07"
          },
          15: {
            "expense_name": "Suresh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias_name": "lucky",
            "display_name": "lokesh_124",
            "expense_type": "23",
            "notify": "3",
            "opening_balance": "349341.89",
            "behave": "0",
            "opening_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]],
              },
              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.expenses.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry, 7 => alert]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "13", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "14", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.expenses.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }
          },
          'status': true
        }
        break;

      case pb.mng.accounts.expenses.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                "month": 'March',
                "payment": '90200',
                "receipt": '23000',
                "net": '-67200'
              },
              "balance": {
                "amount": '534534',
                "tag": 'advance',
                "opening": '56000',
                "debited": '12000',
                "credited": '90000'
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.expenses.c.tab.datewise:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>entries, 3=>amount]
                534: [534, 124, 32, 3453],
                535: [535, 125, 33, 25000],
                536: [536, 126, 34, 345345],
                537: [537, 127, 32, 345345],
                538: [537, 127, 33, 345345],
                539: [537, 127, 34, 345345],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              }
            }
          },
          'status': true
        }
        break;
      case pb.mng.accounts.expenses.c.tab.monthwise:
        response = {
          'body': {
               "status" : true ,
                   "message" : "message" ,
                   "title" : "title" ,
                   "data" : {
                     data: {
                       //[0=>row_id, 1=>month_id, 2=>entries, 3=>amount]
                       534: [534, 12, 32, 3453],
                       535: [535, 11, 33, 25000],
                       536: [536, 13, 34, 345345],
                       537: [537, 14, 32, 345345],
                       538: [537, 12, 33, 345345],
                       539: [537, 11, 31, 345345],
                     },
                     //[date_id: date_id with date]
                     date: {
                       11: ['2001-04'],
                       12: ['2011-09'],
                       13: ['2022-03'],
                       14: ['2019-10'],
                     }
                   }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.expenses.c.tab.details:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>account_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[account_lid: map with account type]
              account: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.expenses.c.form.save:
      case pb.mng.accounts.expenses.c.form.disable:
      case pb.mng.accounts.expenses.c.form.delete:
      case pb.mng.accounts.expenses.c.form.update:
      case pb.mng.accounts.expenses.c.form.class:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }


    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body.data;
  }

  const ledgers = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.ledgers.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                    5: {
                      "id": 5,
                      "cate_id": "15",
                      "value": 4233,
                      "type": '1'
                    },
                    6: {
                      "id": 6,
                      "cate_id": "-1",
                      "value": 5,
                      "type": '2'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Contacts"
                    },
                    '11': {
                      "id": 11,
                      "name": "Local Connections"
                    },
                    '12': {
                      "id": 12,
                      "name": "Family Member"
                    },
                    '13': {
                      "id": 13,
                      "name": "Related Business"
                    },
                    '14': {
                      "id": 14,
                      "name": "Local Business"
                    },
                    '15': {
                      "id": 15,
                      "name": "Local Connections"
                    },
                    '-1': {
                      "id": 0,
                      "name": "Deactivated"
                    },
                  },
                  categories: {
                    21: [21, 'Family Circle', 'CODE', 'Short Term Loan Advance'],
                    22: [22, 'Related Business', 'CODE', 'Short Term Loan Advance'],
                    23: [23, 'Local Connection', 'CODE', 'Short Term Borrowing'],
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.ledgers.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.ledgers.p.add:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
        break;

      case pb.mng.accounts.ledgers.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            "account_name": "Ramesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "11",
            "notify": "1",
            "account_balance": "349341.42",
            "behave": "1",
            "balance_date": "2023-01-03"
          },
          13: {
            "account_name": "Lokesh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "13",
            "notify": "2",
            "account_balance": "349341.11",
            "behave": "1",
            "balance_date": "2023-01-07"
          },
          15: {
            "account_name": "Suresh Kumar",
            "email": "lokesh@beanbyte.in",
            "mobile": "9876543211",
            "alias": "lucky",
            "display_name": "lokesh_124",
            "category": "15",
            "notify": "3",
            "account_balance": "349341.89",
            "behave": "0",
            "balance_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]]

              },
              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.ledgers.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry, 7 => alert]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "13", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "14", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.ledgers.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.ledgers.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'highlights': {
                "month": 'March',
                "payment": '90200',
                "receipt": '23000',
                "net": '-67200'
              },
              "balance": {
                "amount": '534534',
                "tag": 'advance',
                "opening": '56000',
                "debited": '12000',
                "credited": '90000'
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.ledgers.c.tab.receipts:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>credit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid: map with diff. ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.ledgers.c.tab.payments:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount, 4=>note]
                534: [534, 124, 32, 3453, 'note-1'],
                535: [535, 125, 33, 25000, 'note-asdfd'],
                536: [536, 126, 34, 345345, 'note-ewfds'],
                537: [537, 127, 32, 345345, 'note-afsd'],
                538: [537, 127, 33, 345345, 'note-fd'],
                539: [537, 127, 34, 345345, 'note-sdf'],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[debit_lid: map with diff. ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.ledgers.c.form.save:
      case pb.mng.accounts.ledgers.c.form.disable:
      case pb.mng.accounts.ledgers.c.form.delete:
      case pb.mng.accounts.ledgers.c.form.update:
      case pb.mng.accounts.ledgers.c.form.class:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }


    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body.data;
  }

  const gateways = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.gateways.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                    3: {
                      "id": 3,
                      "cate_id": "13",
                      "value": 33333,
                      "type": '1'
                    },
                    4: {
                      "id": 4,
                      "cate_id": "14",
                      "value": 44444,
                      "type": '1'
                    },
                  },
                }

              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'category': {
                    '0': {
                      "id": 0,
                      "name": "Point Of Sale"
                    },
                    '11': {
                      "id": 11,
                      "name": "Fleet Card swipe"
                    },
                    '12': {
                      "id": 12,
                      "name": "UPI OR Code"
                    },
                    '13': {
                      "id": 13,
                      "name": "Mobile Wallet"
                    },
                    '14': {
                      "id": 14,
                      "name": "All In One"
                    },
                  },
                  'connect_account': {
                    '11': {
                      "id": 11,
                      "name": "BoB India"
                    },
                    '12': {
                      "id": 12,
                      "name": "SBI India"
                    },
                    '13': {
                      "id": 13,
                      "name": "PNB India"
                    },
                    '14': {
                      "id": 14,
                      "name": "HDFC India"
                    },
                    '15': {
                      "id": 15,
                      "name": "ICICI India"
                    },
                  },
                  'cycle': {
                    '11': {
                      "id": 11,
                      "name": "Processing"
                    },
                    '12': {
                      "id": 12,
                      "name": "Completed"
                    },
                    '13': {
                      "id": 13,
                      "name": "Failed"
                    },
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;

      case pb.mng.accounts.gateways.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'add':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'delete':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
          case 'edit':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {}
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.gateways.p.add:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        break;

      case pb.mng.accounts.gateways.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            "gateway_name": "Ramesh Kumar",
            "terminal_id": "dk23",
            "category": "11",
            "connect_account": "11",
            "settlement_charges": "3124",
            "unsettled_amount": "234231",
            "cycle": "12",
            "charge_method": "1",
            "check": "1",
            "balance_date": "2023-01-03"
          },
          13: {
            "gateway_name": "Lokesh Kumar",
            "terminal_id": "34gr",
            "category": "12",
            "connect_account": "12",
            "settlement_charges": "2124",
            "unsettled_amount": "25656",
            "cycle": "11",
            "charge_method": "1",
            "check": "",
            "balance_date": "2023-01-07"
          },
          15: {
            "gateway_name": "Suresh Kumar",
            "terminal_id": "34dg",
            "category": "13",
            "connect_account": "13",
            "settlement_charges": "4124",
            "unsettled_amount": "34564",
            "cycle": "13",
            "charge_method": "2",
            "check": "1",
            "balance_date": "2023-01-08"
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": db[params[0]]

              },
              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;

      case pb.mng.accounts.gateways.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    //[0=>id, 1=>'avatar', 2=>'name', 3=>'unsettled_amount', 4=>'cate_id', 5=>'balance', 6=>'last_settlement', 7=>'cycle_id']
                    12: [12, "avatars/300-2.jpg", "Sean Bean", "83748", "13", "352345", "82374", "11"],
                    13: [13, "avatars/300-3.jpg", "Francis Mitch am", "984831", "11", "52345", "83473974", "12"],
                    15: [15, "avatars/300-4.jpg", "Dan Wilson", "89349", "12", "2345", "384738", "13"]
                  },
                  //[cycle_id: map with diff. cycle]
                  cycle: {
                    11: ['Completed'],
                    12: ['Processing'],
                    13: ['Failed']
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;
      case
      pb.mng.accounts.gateways.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                "name": "Sean Bean",
                "tcd": "837489",
                "cycle": "Processing",
                "avatar": "300-4.jpg"
              },
            }

          },
          'status': true
        }
        break;

      case
      pb.mng.accounts.gateways.c.tab.general:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'balance': {
                'unsettled_balance': "20000",
                'current_month': "38783",
                "last_month": "38437",
              },
              'charts': {
                'balance': {
                  dataset: [{
                    name: "Balance",
                    data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                  }],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                'transaction': {
                  dataset: [{
                    name: "Debits",
                    data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                  }, {
                    name: "Credits",
                    data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120, 90, 100],
                  },],
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
              },
              "other": {
                'notify_mode': 1,
                'category': 'Relative Business Group',
                'description': 'This is the account'
              }
            }

          },
          'status': true
        }
        break;
      case
      pb.mng.accounts.gateways.c.tab.settlements:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>amount, 3=>debit_lid, 4=>against]
                534: [534, 124, 345331, 32, 124],
                535: [535, 125, 250001, 33, 125],
                536: [536, 126, 345345, 34, 126],
                537: [537, 127, 345345, 32, 127],
                538: [537, 127, 345345, 33, 127],
                539: [537, 127, 345345, 34, 127],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[debit_lid:map with ledger ]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              },
              //[against: map with date]
              against: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
            }

          },
          'status': true
        }
        break;
      case
      pb.mng.accounts.gateways.c.tab.sales_receipts:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>credit_lid, 3=>amount]
                534: [534, 124, 32, 3453],
                535: [535, 125, 33, 25000],
                536: [536, 126, 34, 345345],
                537: [537, 127, 32, 345345],
                538: [537, 127, 33, 345345],
                539: [537, 127, 34, 345345],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[credit_lid: map with ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;
      case
      pb.mng.accounts.gateways.c.tab.customer_receipts:
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              data: {
                //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount]
                534: [534, 124, 32, 3453],
                535: [535, 125, 33, 25000],
                536: [536, 126, 34, 345345],
                537: [537, 127, 32, 345345],
                538: [537, 127, 33, 345345],
                539: [537, 127, 34, 345345],
              },
              //[date_id: date_id with date]
              date: {
                124: ['2022-12-31'],
                125: ['2023-01-10'],
                126: ['2023-02-11'],
                127: ['2023-03-12'],
              },
              //[debit_lid:  debit_lid with actual ledger]
              ledger: {
                32: ['SBI Bank'],
                33: ['ICICI Account'],
                34: ['CASH in Hand'],
              }
            }

          },
          'status': true
        }
        break;

      case
      pb.mng.accounts.gateways.c.form.save
      :
      case
      pb.mng.accounts.gateways.c.form.disable
      :
      case
      pb.mng.accounts.gateways.c.form.delete
      :
      case
      pb.mng.accounts.gateways.c.form.update
      :
      case
      pb.mng.accounts.gateways.c.form.class
      :
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {}
          },
          'status': true
        }
    }


    if (!response.status) {
      console.log(JSON.stringify(response.body))
      return false
    }
    return response.body.data;
  }

  const loans = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.mng.accounts.loans.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {

                  'menu': {
                    0: {
                      "id": 0,
                      "cate_id": "0",
                      "value": 10000,
                      "type": '0'
                    },
                    1: {
                      "id": 1,
                      "cate_id": "11",
                      "value": 12039,
                      "type": '1'
                    },
                    2: {
                      "id": 2,
                      "cate_id": "12",
                      "value": 22222,
                      "type": '1'
                    },
                  },
                }
              },
              'status': true
            }
            break;
          case 'state':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {

                  'category': {
                    '0': {
                      "id": 0,
                      "name": "All Loans"
                    },
                    '11': {
                      "id": 11,
                      "name": "Bank Loan"
                    },
                    '12': {
                      "id": 12,
                      "name": "Local Loan"
                    },
                  },
                  received_ac: {
                    // [cid, name];
                    21: [21, 'SBI Bank'],
                    22: [22, 'BOB Bank'],
                    23: [23, 'ICICI Bank'],
                    24: [24, 'PNB Bank'],
                  },
                  interest_type: {
                    // [cid, name];
                    21: [21, 'Simple Interest'],
                    22: [22, 'Compound Interest'],
                  },
                }
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.loans.p.start:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'save':
            console.log('i am here - saving');
            response = {
              'rows': {},
              'status': true
            }
            break;
          case 'add':
            response = {
              'rows': {},
              'status': true
            }
            break;
          case 'delete':
            response = {
              'rows': {},
              'status': true
            }
            break;
          case 'edit':
            response = {
              'rows': {
                status: true,
              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.loans.p.add:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        break;
      case pb.mng.accounts.loans.p.edit:
        console.log(params);
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        // a dummy database
        const db = {
          12: {
            bank: {
              "account_number": "498327493847",
              "sectioned_amount": "2423432",
              "received_amount": "12312",
              "received_ac": "21",
              "interest_rate": "12.5",
              "emi": "6",
              "issue_bank": "SBI BANK",
              "tenure_loan": "6"
            },
            local: {
              "loan_name": "Suresh Kumar",
              "loan_amount": "24323",
              "interest_rate": "11",
              "interest_type": "21",
              "notification": "1",
              "frequency": "6"
            },
          },
          13: {
            bank: {
              "account_number": "398327493847",
              "sectioned_amount": "9423432",
              "received_amount": "42312",
              "received_ac": "22",
              "interest_rate": "15.5",
              "emi": "24",
              "issue_bank": "SBI BANK",
              "tenure_loan": "12"
            },
            local: {
              "loan_name": "Lokesh Kumar",
              "loan_amount": "234324",
              "interest_rate": "12.3",
              "interest_type": "22",
              "notification": "1",
              "frequency": "6"
            },
          },
          15: {
            bank: {
              "account_number": "298327493847",
              "sectioned_amount": "1423432",
              "received_amount": "52312",
              "received_ac": "24",
              "interest_rate": "11.5",
              "emi": "12",
              "issue_bank": "SBI BANK",
              "tenure_loan": "6"
            },
            local: {
              "loan_name": "Suresh Kumar",
              "loan_amount": "24323",
              "interest_rate": "11",
              "interest_type": "21",
              "notification": "0",
              "frequency": "6"
            },
          }
        }

        switch (btnType) {
          case 'card':
            response = {
              'rows': db[params[0]],
              'status': true
            }
            break;
          case 'submit':
            // submit.
            break;
        }
        break;
      case pb.mng.accounts.loans.p.list:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'card':
            response = {
              'body': {
                "status": true,
                "message": "message",
                "title": "title",
                "data": {
                  'list': {
                    // [0 => id, 1 => avatar, 2 => name, 3 => alias, 4 => cate_id, 5 => balance, 6 => last_entry, 7 => alert]
                    12: [12, "avatars/300-2.jpg", "Ramesh Kumar", 'ramu', "13", "352345", "2022-03-25", "3"],
                    13: [13, "avatars/300-3.jpg", "Lokesh Kumar", 'lucky', "14", "52345", "2022-03-21", "1"],
                    15: [15, "avatars/300-4.jpg", "Suresh Kumar", 'suri', "15", "2345", "2022-03-20", "2"]
                  }
                }

              },
              'status': true
            }
            break;
        }
        break;
      case pb.mng.accounts.loans.p.view:
        // call the ajax
        // var fetchData = JSON.parse(responseData["key"])
        response = {
          'body': {
            "status": true,
            "message": "message",
            "title": "title",
            "data": {
              'account': {
                'id': 12,
                'ledger_id': 311,
                'name': "Lokesh Kumar",
                'email': "lokesh@beanbyte.in",
                'mobile': "9876543211",
                'avatar': "300-4.jpg",
                'alias': "lucky",
                'display_name': "lokesh_124",
                'category': "Local Connections",
                'notify': "2",
                'account_balance': "349341",
                'behave': "1",
                'balance_date': "2023-01-20",
              },
            }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.loans.c.tab.general:
        response = {
          'body': {
               "status" : true ,
                   "message" : "message" ,
                   "title" : "title" ,
                   "data" : {
                     'highlights': {
                       "month": 'March',
                       "payment": '90200',
                       "receipt": '23000',
                       "net": '-67200'
                     },
                     "balance": {
                       "amount": '534534',
                       "tag": 'advance',
                       "opening": '56000',
                       "debited": '12000',
                       "credited": '90000'
                     },
                     'charts': {
                       'balance': {
                         dataset: [{
                           name: "Balance",
                           data: [13000, 15000, 14500, 20800, 30900, 24000, 19000, 20800, 30900, 24000, 21000, 23300],
                         }],
                         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                       },
                       'transaction': {
                         dataset: [{
                           name: "Debits",
                           data: [130, 150, 145, 208, 309, 240, 110, 208, 309, 240, 110, 233],
                         }, {
                           name: "Credits",
                           data: [150, 123, 90, 170, 120, 90, 100, 50, 55, 90, 70, 120],
                         },],
                         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                       }
                     },
                     "other": {
                       'notify_mode': 1,
                       'category': 'Relative Business Group',
                       'description': 'This is the account'
                     }
                   }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.loans.c.tab.receipts:
        response = {
          'body':
            {
                 "status" : true ,
                     "message" : "message" ,
                     "title" : "title" ,
                     "data" : {
                       data: {
                         //[0=>row_id, 1=>date_id, 2=>credit_lid, 3=>amount, 4=>note]
                         534: [534, 124, 32, 3453, 'note-1'],
                         535: [535, 125, 33, 25000, 'note-asdfd'],
                         536: [536, 126, 34, 345345, 'note-ewfds'],
                         537: [537, 127, 32, 345345, 'note-afsd'],
                         538: [537, 127, 33, 345345, 'note-fd'],
                         539: [537, 127, 34, 345345, 'note-sdf'],
                       },
                       //[date_id: date_id with date]
                       date: {
                         124: ['2022-12-31'],
                         125: ['2023-01-10'],
                         126: ['2023-02-11'],
                         127: ['2023-03-12'],
                       },
                       //[credit_lid:  credit_lid with actual ledger]
                       ledger: {
                         32: ['SBI Bank'],
                         33: ['ICICI Account'],
                         34: ['CASH in Hand'],
                       }
                     }

          },
          'status': true
        }
        break;
      case pb.mng.accounts.loans.c.tab.payments:
        response = {
          'body': {
               "status" : true ,
                   "message" : "message" ,
                   "title" : "title" ,
                   "data" : {
                     data: {
                       //[0=>row_id, 1=>date_id, 2=>debit_lid, 3=>amount, 4=>note]
                       534: [534, 124, 32, 3453, 'note-1'],
                       535: [535, 125, 33, 25000, 'note-asdfd'],
                       536: [536, 126, 34, 345345, 'note-ewfds'],
                       537: [537, 127, 32, 345345, 'note-afsd'],
                       538: [537, 127, 33, 345345, 'note-fd'],
                       539: [537, 127, 34, 345345, 'note-sdf'],
                     },
                     //[date_id: date_id with date]
                     date: {
                       124: ['2022-12-31'],
                       125: ['2023-01-10'],
                       126: ['2023-02-11'],
                       127: ['2023-03-12'],
                     },
                     //[debit_lid:  debit_lid with actual ledger]
                     ledger: {
                       32: ['SBI Bank'],
                       33: ['ICICI Account'],
                       34: ['CASH in Hand'],
                     }
                   }

          },
          'status': true
        }
        break;

      case pb.mng.accounts.loans.c.form.save:
      case pb.mng.accounts.loans.c.form.disable:
      case pb.mng.accounts.loans.c.form.delete:
      case pb.mng.accounts.loans.c.form.update:
      case pb.mng.accounts.loans.c.form.class:
        response = {
          'rows': {
            status: true
          },
          'status': true
        }
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }

  // Public methods
  return {
    contacts: function (event, params = []) {
      return contacts(event, params);
    },
    vendors: function (event, params = []) {
      return vendors(event, params);
    },
    banks: function (event, params = []) {
      return banks(event, params);
    },
    suppliers: function (event, params = []) {
      return suppliers(event, params);
    },
    expenses: function (event, params = []) {
      return expenses(event, params);
    },
    ledgers: function (event, params = []) {
      return ledgers(event, params);
    },
    gateways: function (event, params = []) {
      return gateways(event, params);
    },
    loans: function (event, params = []) {
      return loans(event, params);
    }
  };
}();
