"use strict";

// Class definition
var dummy_ajax_charts_dsb = function () {
  // Shared variables


  // Private functions
  const business = (event, params) => {
    // this has updated by lokesh into JSON file.
  }
  const customers = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnChart = event[0];
    const btnType = event[1];

    switch (btnChart) {
      case pb.dsb.charts.customer.n:
        switch (btnType) {
          case 'page':
            response = {
              rows  :
                {
                  'credit-volume' : '0',
                  'credit-balance': '0',
                },
              status:
                true
            }
            break;
          case 'state':
            response = {
              'rows'  :
                {
                  days     : [
                    {
                      'value' : '0',
                      'key'   : 'This Month',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Last Month',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Last 30 days',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Last 60 days',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Last 90 days',
                      'select': false
                    },
                    {
                      'value' : '365',
                      'key'   : 'All Year',
                      'select': false
                    },
                  ],
                  customers: [
                    {
                      'value' : '0',
                      'key'   : 'Customer - 1',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Customer - 2',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Customer - 3',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Customer - 4',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Customer - 5',
                      'select': false
                    },
                  ]
                },
              'status': true
            }
            break;
        }
        break;

      case pb.dsb.charts.customer.p.volume:
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows    :
                {
                  dataset: [
                    {
                      name: "Amount",
                      type: 'line',
                      data: [55, 24, 67, 90, 21, 55, 12, 100, 45, 37]
                    }
                  ],
                  labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan"],
                },
              'status': true
            }
            break;
          case '1':
          default:
            response = {
              rows    :
                {
                  dataset: [
                    {
                      name: "Amount",
                      type: 'line',
                      data: [55, 24, 67, 90, 21, 55, 12, 100, 45, 37]
                    }
                  ],
                  labels : ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan"],
                },
              'status': true
            }
            break;
        }
        break;
      case pb.dsb.charts.customer.p.balance:
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows    :
                {
                  dataset: [
                    {
                      name   : 'Balance Line',
                      data   : [60, 50, 80, 40, 100, 60, 50, 80, 30, 40, 50, 40],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Credit Line',
                      data   : [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Receipt Line',
                      data   : [10, 40, 35, 78, 56, 30, 60, 56, 30, 29, 68, 89],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Credit Sale',
                      data   : [65, 70, 45, 80, 100, 105, 79, 56, 45, 90, 98, 56],
                      type   : 'line',
                      stacked: false
                    }
                  ],
                  labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],

                },
              'status': true
            }
            break;
          case '1':
          default:
            response = {
              rows    :
                {
                  dataset: [
                    {
                      name   : 'Balance Line',
                      data   : [60, 50, 80, 40, 100, 60, 50, 80, 30, 40, 50, 40],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Credit Line',
                      data   : [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Receipt Line',
                      data   : [10, 40, 35, 78, 56, 30, 60, 56, 30, 29, 68, 89],
                      type   : 'line',
                      stacked: false
                    },
                    {
                      name   : 'Credit Sale',
                      data   : [65, 70, 45, 80, 100, 105, 79, 56, 45, 90, 98, 56],
                      type   : 'line',
                      stacked: false
                    }
                  ],
                  labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],

                },
              'status': true
            }
            break;
        }
        break;
    }
    console.log(response);

    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
  }
  const profit = (event, params) => {

    let response;

    // [button.value, button.getAttribute('name')]
    const btnChart = event[0];
    const btnType = event[1];

    switch (btnChart) {
      case pb.dsb.charts.profit.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              rows  :
                {
                  'items-trade' : '0',
                  'gross-profit': '0',
                  'profit-item' : '124'
                },
              status:
                true
            }
            break;
          case 'state':
            response = {
              'rows'  :
                {
                  days    : [
                    {
                      'value' : '0',
                      'key'   : 'This Month',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Last Month',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Last 30 days',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Last 60 days',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Last 90 days',
                      'select': false
                    },
                    {
                      'value' : '365',
                      'key'   : 'This Year',
                      'select': false
                    },
                    {
                      'value' : '100',
                      'key'   : 'Whole Time',
                      'select': false
                    },
                  ],
                  duration: [
                    {
                      'value' : '0',
                      'key'   : 'This Month',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Last Month',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Last 30 days',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Last 60 days',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Last 90 days',
                      'select': false
                    },
                  ],
                  masters : [
                    {
                      'value' : '124',
                      'name'  : 'Current Assets',
                      'select': true
                    },
                    {
                      'value' : '534',
                      'name'  : 'Current Liability',
                      'select': false
                    },
                    {
                      'value' : '224',
                      'name'  : 'Indirect Expenses',
                      'select': false
                    },
                  ]
                },
              'status': true
            }
            break;
        }
        break;

      case pb.dsb.charts.profit.p.trade:
        // call the ajax
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows  : {
                dataset:
                  [
                    {
                      name   : "Purchase",
                      type   : 'bar',
                      stacked: false,
                      data   : [44, 55, 57, 56, 61, 58, 56, 78, 78, 60, 90],
                    },
                    {
                      name   : "Sales",
                      type   : 'bar',
                      stacked: false,
                      data   : [76, 85, 101, 98, 87, 105, 67, 90, 67, 110, 230],
                    }
                  ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              },
              status: true
            }
            break;
          case '1':
          default:
            response = {
              rows  : {
                dataset:
                  [
                    {
                      name   : "Purchase",
                      type   : 'bar',
                      stacked: false,
                      data   : [4409, 5545, 5745, 56343, 6134, 5834, 5634, 7823, 7812, 6034, 9023],
                    },
                    {
                      name   : "Sales",
                      type   : 'bar',
                      stacked: false,
                      data   : [7634, 8343245, 10341, 934348, 834347, 105343, 67343, 90234, 6745, 1103, 2304],
                    }
                  ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              },
              status: true
            }
            break;
        }
        break;
      case pb.dsb.charts.profit.p.gross:
        // call the ajax
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows  :
                {
                  dataset:
                    [
                      {
                        name   : "Net Profit",
                        type   : 'bar',
                        stacked: false,
                        data   : [44, 55, 57, 56, 61, 58, 44, 55, 57, 56, 61, 58],
                      },
                      {
                        name   : "Revenue",
                        type   : 'bar',
                        stacked: false,
                        data   : [76, 85, 101, 98, 87, 105, 76, 85, 101, 98, 87, 105],
                      }
                    ],
                  labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                },
              status: true
            }
            break;
          case '1':
          default:
            response = {
              rows  :
                {
                  dataset:
                    [
                      {
                        name   : "Net Profit",
                        type   : 'bar',
                        stacked: false,
                        data   : [448347, 55343, 5734, 5622, 6134, 5898, 4467, 5521, 5723, 5643, 6134, 5834],
                      },
                      {
                        name   : "Revenue",
                        type   : 'bar',
                        stacked: false,
                        data   : [763433, 85343, 101343, 9834, 8734, 10534, 763434, 8534, 10134, 9834, 8756, 10512],
                      }
                    ],
                  labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                },
              status: true
            }
            break;
        }
        break;
      case pb.dsb.charts.profit.p.item:
        console.log(params)
        switch (params[0]) {
          case '124':
            response = {
              rows  :
                {
                  dataset: [40, 55, 5],
                  labels : ['Diesel', 'Petrol', 'Speed'],
                },
              status: true
            }
            break;
          case '1':
          default:
            response = {
              rows  :
                {
                  dataset: [40, 55, 5],
                  labels : ['Diesel', 'Petrol', 'Speed'],
                },
              status: true
            }
            break;
        }
        break;
    }
    console.log(response);

    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;
    //
  }
  const stock = (event, params) => {
    let response;

    // [button.value, button.getAttribute('name')]
    const btnChart = event[0];
    const btnType = event[1];

    switch (btnChart) {
      case pb.dsb.charts.stock.n:
        // base data calling
        // var fetchData = JSON.parse(responseData["key"])
        switch (btnType) {
          case 'page':
            response = {
              'rows'  :
                {
                  'business-trade': '0',
                  'stock-flow'    : '0',
                  'sales-break'   : '124'
                },
              'status':
                true
            }
            break;
          case 'state':
            response = {
              'rows'  :
                {
                  days    : [
                    {
                      'value' : '0',
                      'key'   : 'This Month',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Last Month',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Last 30 days',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Last 60 days',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Last 90 days',
                      'select': false
                    },
                    {
                      'value' : '365',
                      'key'   : 'This Year',
                      'select': false
                    },
                    {
                      'value' : '100',
                      'key'   : 'Whole Time',
                      'select': false
                    },
                  ],
                  duration: [
                    {
                      'value' : '0',
                      'key'   : 'This Month',
                      'select': true
                    },
                    {
                      'value' : '1',
                      'key'   : 'Last Month',
                      'select': false
                    },
                    {
                      'value' : '30',
                      'key'   : 'Last 30 days',
                      'select': false
                    },
                    {
                      'value' : '60',
                      'key'   : 'Last 60 days',
                      'select': false
                    },
                    {
                      'value' : '90',
                      'key'   : 'Last 90 days',
                      'select': false
                    },
                  ],
                  masters : [
                    {
                      'value' : '124',
                      'name'  : 'Current Assets',
                      'select': true
                    },
                    {
                      'value' : '534',
                      'name'  : 'Current Liability',
                      'select': false
                    },
                    {
                      'value' : '224',
                      'name'  : 'Indirect Expenses',
                      'select': false
                    },
                  ]
                },
              'status': true
            }
            break;
        }
        break;

      case pb.dsb.charts.stock.p.trade:
        // call the ajax
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows  : {
                dataset:
                  [
                    {
                      name: "Expense",
                      type: 'bar',
                      data: [44, 55, 57, 56, 61, 58, 78, 45, 34, 78, 90],
                    },
                    {
                      name: "Revenue",
                      type: 'bar',
                      data: [76, 85, 101, 98, 87, 105, 45, 90, 120, 56, 98]
                    }
                  ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              },
              status: true
            }
            break;
          case '1':
          default:
            response = {
              rows  : {
                dataset:
                  [
                    {
                      name: "Expense",
                      type: 'bar',
                      data: [447384, 5534, 5734, 562, 6134, 5834, 7834, 45, 34, 78, 90],
                    },
                    {
                      name: "Revenue",
                      type: 'bar',
                      data: [76, 85, 101, 98, 87, 105, 45, 90, 120, 56, 98]
                    }
                  ],
                labels : ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
              },
              status: true
            }
            break;
        }
        break;
      case pb.dsb.charts.stock.p.stock:
        // call the ajax
        console.log(params);
        switch (params[0]) {
          case '0':
            response = {
              rows  :
                {
                  dataset:
                    [
                      {
                        name: "Upper",
                        type: 'line',
                        data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
                      },
                      {
                        name: "Fuel Stock",
                        type: 'line',
                        data: [60, 50, 80, 40, 100, 60, 80, 70, 60, 65],
                      },
                      {
                        name: "Lower",
                        type: 'line',
                        data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
                      },
                      {
                        name: "Dry Reference",
                        type: 'line',
                        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                      }
                    ],
                  labels : ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
                },
              status: true
            }
            break;
          case '1':
          default:
            response = {
              rows  :
                {
                  dataset:
                    [
                      {
                        name: "Upper",
                        type: 'line',
                        data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
                      },
                      {
                        name: "Fuel Stock",
                        type: 'line',
                        data: [60, 50, 80, 40, 100, 60, 80, 70, 60, 65],
                      },
                      {
                        name: "Lower",
                        type: 'line',
                        data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
                      },
                      {
                        name: "Dry Reference",
                        type: 'line',
                        data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                      }
                    ],
                  labels : ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
                },
              status: true
            }
            break;
        }
        break;

      case pb.dsb.charts.stock.p.sales:
        // call the ajax
        switch (params[0]) {
          case '124':
            response = {
              'rows'  :
                {
                  dataset:
                    [
                      {
                        name: "Credit",
                        type: 'area',
                        data: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
                      },
                      {
                        name: "Cash",
                        type: 'area',
                        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                      },
                      {
                        name: "Digital",
                        type: 'area',
                        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                      },

                    ],
                  labels : ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
                },
              'status': true
            }
            break;
          case '1':
          default:
            response = {
              'rows'  :
                {
                  dataset:
                    [
                      {
                        name: "Credit",
                        type: 'area',
                        data: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
                      },
                      {
                        name: "Cash",
                        type: 'area',
                        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                      },
                      {
                        name: "Digital",
                        type: 'area',
                        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                      },

                    ],
                  labels : ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
                },
              'status': true
            }
            break;
        }
        break;
    }

    console.log(response);

    if (!response.status) {
      console.log(JSON.stringify(response.rows))
      return false
    }
    return response.rows;

    //
  }

  // Public methods
  return {
    business : function (event, params = []) {
      return business(event, params);
    },
    customers: function (event, params = []) {
      return customers(event, params);
    },
    profit   : function (event, params = []) {
      return profit(event, params);
    },
    stock    : function (event, params = []) {
      return stock(event, params);
    },
  };
}();
