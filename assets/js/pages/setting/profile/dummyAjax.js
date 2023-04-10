"use strict";

// Class definition
var dummy_ajax_profile_sett = function () {
  // Shared variables


  // Private functions

  const account = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.set.profile.account.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':

            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {},
              },
              'status': true
            }
            break;
          case 'state':
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {
                  state    :
                    {
                      // [cid, name];
                      1: [1, 'Rajasthan'],
                      2: [2, 'Goa'],
                      3: [3, 'kashmir'],
                      4: [4, 'Himachal Pradesh'],
                    },
                  district :
                    {
                      // [cid, name];
                      1: [1, 'Rajasthan'],
                      2: [2, 'Goa'],
                      3: [3, 'kashmir'],
                      4: [4, 'Himachal Pradesh'],
                    },
                  language :
                    {
                      // [cid, name];
                      1: [1, 'Hindi'],
                      2: [2, 'English'],
                      3: [3, 'Gujarati'],
                      4: [4, 'tamil'],
                    },
                  time_zone:
                    {
                      // [cid, name];
                      1: [1, 'North'],
                      2: [2, 'South'],
                      3: [3, 'West'],
                      4: [4, 'East'],
                    },
                  currency :
                    {
                      // [cid, name];
                      1: [1, 'rupees'],
                      2: [2, 'dollar'],
                      3: [3, 'Euro'],
                      4: [4, 'pound'],
                    },
                },
              },
              'status': true
            }
            break;
        }
        break;

      case pb.set.profile.account.p.details:
        response = {
          "body": {
            "status" : true,
            "message": "message",
            "title"  : "title",
            "data"   : {
              profile: {
                'dealer_name'  : 'Lokesh Kumar',
                'person_name'  : 'Naveen Kumar',
                'company'      : 'PetroByte Filling Station',
                'gstin'        : '08AACIB3281H1ZM',
                'tin'          : 'GS5235453',
                'phone'        : '8473294212',
                'mobile'       : '3412656222',
                'address'      : 'lalsot',
                'state'        : '1',
                'district'     : '2',
                'language'     : '1',
                'time_zone'    : '3',
                'currency'     : '4',
                'communication': '1',
                'allow'        : '1'
              },
            },
          },
          status: true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.body;
  }

  const billing = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.set.profile.billing.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {},
              },
              'status': true
            }
            break;
          case 'state':
            response = {
              "body"  : {
                "status" : true,
                "message": "message",
                "title"  : "title",
                "data"   : {},
              },
              'status': true
            }
            break;
        }
        break;
      case pb.set.profile.billing.p.details:
        response = {
          "body": {
            "status" : true,
            "message": "message",
            "title"  : "title",
            "data"   : {
              validity    : {
                'notice1'   : '1',
                'notice2'   : '0',
                'activation': '2022-04-02',
                'plan'      : '300',
                'expire'    : '2021-03-02'
              },
              payment     : {
                'billing_id' : '2dewrwe324',
                'upi_id'     : 'dineshkumar@ybl',
                'upi_date'   : '2022-02-03',
                'last_digits': '2432',
                'credit_date': '2022-04-03'
              },
              subscription: {
                11: {
                  'id'           : '11',
                  'card_number'  : 'H343',
                  'days'         : '365',
                  'starting_date': '2022-02-03',
                  'ending_date'  : '2023-02-02'
                },
                12: {
                  'id'           : '12',
                  'card_number'  : 'H343',
                  'days'         : '365',
                  'starting_date': '2022-02-03',
                  'ending_date'  : '2023-02-02'
                },
                13: {
                  'id'           : '13',
                  'card_number'  : 'H343',
                  'days'         : '365',
                  'starting_date': '2022-02-03',
                  'ending_date'  : '2023-02-02'
                }
              },
              billing     : {
                billing_success: {
                  //['id':int, 'date':date, , 'description':string, 'amount':int, 'status':string,]
                  11: ['11', '21', 'this is 1 year', '23432', '1'],
                  12: ['12', '22', 'this is 1 year', '23432', '2'],
                  13: ['13', '23', 'this is 2 year', '43432', '3'],
                },
                billing_failed : {
                  //['id':int, 'date':date, , 'description':string, 'amount':int, 'status':string,]
                  11: ['11', '21', 'this is 1 year', '23432', '1'],
                  12: ['12', '22', 'this is 1 year', '23432', '2'],
                  13: ['13', '23', 'this is 2 year', '43432', '3'],
                },
                dates          : {
                  21: ['2022-02-03'],
                  22: ['2022-02-03'],
                  23: ['2022-04-03'],
                  24: ['2022-02-04'],
                },
                status         : {
                  1: ['USED'],
                  2: ['OPEN'],
                  3: ['READY']
                }
              },
            },
          },
          status: true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.body;
  }

  const logs = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnValue = event[0];
    const btnType = event[1];

    switch (btnValue) {
      case pb.set.profile.logs.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'rows'  : {},
              'status': true
            }
            break;
          case 'state':
            response = {
              'data'  : {},
              'status': true
            }
            break;
        }
        break;

      case pb.set.profile.logs.p.sessions:
        response = {
          'rows'  : {
            sessions : {
              //['id':int, 'user_name':string, 'user_type':string, 'device':string, 'date_time':date, 'location':string, 'ip_address':string]
              11: ['11', 'Lokesh Kumar', '11', 'Chrome-Windows', '21', 'india', '236.125.56.78'],
              12: ['12', 'Lokesh Kumar', '12', 'Chrome-Windows', '23', 'india', '236.125.56.78'],
              13: ['13', 'Dinesh Kumar', '13', 'Chrome-Windows', '22', 'india', '236.125.56.78'],
            },
            user_type: {
              11: ['ADMIN'],
              12: ['MANAGER'],
              13: ['STAFF']
            },
            dates    : {
              21: ['12 Oct, 22 - 15:22:43'],
              22: ['12 Oct, 22 - 15:22:43'],
              23: ['12 Oct, 22 - 15:22:43'],
              24: ['12 Oct, 22 - 15:22:43'],
            }
          },
          'status': true
        }
        break;
    }


    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }
  // Public methods
  return {
    account: function (event, params = []) {
      return account(event, params);
    },
    billing: function (event, params = []) {
      return billing(event, params);
    },
  };
}();
