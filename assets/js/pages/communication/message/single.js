"use strict";

var KTAppChat = function () {

  const noDataFound = (text) => {
    var outerDiv;
    outerDiv = document.querySelector('#kt_details_wrapper');
    var div = document.createElement('div');
    div.classList.add('d-flex', 'py-4', 'flex-stack', 'align-item-center');
    div.innerHTML = '<span  class="text-center">' + text + '</span>';
    return outerDiv.appendChild(div);
  }

  var initChatApp = function () {

    const userData = {
      'rows': [
        {'id': "1", 'avtar': "../../assets/media/avatars/300-23.jpg", 'name': "Max Smith", 'email': "max@kt.com", 'lastSeen': "1week"},
        {'id': "2", 'avtar': "../../assets/media/avatars/300-9.jpg", 'name': "Sean Bean", 'email': "sean@dellito.com", 'lastSeen': "20min"},
        {'id': "3", 'avtar': "../../assets/media/avatars/300-4.jpg", 'name': "Melody Macy", 'email': "melody@altbox.com", 'lastSeen': "1min"},
        {'id': "4", 'avtar': "../../assets/media/avatars/300-3.jpg", 'name': "Brian Cox", 'email': "brian@exchange.com", 'lastSeen': "1day"},
        {'id': "5", 'avtar': "../../assets/media/avatars/300-6.jpg", 'name': "Olivia Wild", 'email': "olivia@corpmail.com", 'lastSeen': "1week"}
      ],
      'status': true,
    };

    if (userData.status) {
      // render the received data from server.
      var renderedData = KTAppChat.renderData(userData.rows);
    }
    else {
      renderedData = noDataFound('No Record has Found');
    }

    return renderedData;
  }

  var renderCustomerData = function (data) {
    var templates = document.querySelector('[data-kt-element="kt_details_wrapper"]');
    var customer = templates.querySelector('[data-kt-element="kt_details"]');
    data.forEach((row) => {
      if (customer.querySelector('[data-kt-element="customer-name"]').innerText === "") {
        customer.querySelector('[data-kt-element="customer-imag"]').src = row.avtar;
        customer.querySelector('[data-kt-element="customer-name"]').innerText = row.name;
        customer.querySelector('[data-kt-element="customer-mail"]').innerText = row.email;
        customer.querySelector('[data-kt-element="customerId"]').value = row.id;
        customer.querySelector('[data-kt-element="customer-lastseen"]').innerText = row.lastSeen;
      }
      else {
        var custom_details = customer.cloneNode(true);
        custom_details.querySelector('[data-kt-element="customer-imag"]').src = row.avtar;
        custom_details.querySelector('[data-kt-element="customer-name"]').innerText = row.name;
        custom_details.querySelector('[data-kt-element="customer-mail"]').innerText = row.email;
        custom_details.querySelector('[data-kt-element="customerId"]').value = row.id;
        custom_details.querySelector('[data-kt-element="customer-lastseen"]').innerText = row.lastSeen;
        templates.appendChild(custom_details);
      }

    });
    return templates;

  }

  var onClickCustomer = function () {
    var templates = document.querySelector('[data-kt-element="kt_details_wrapper"]');
    var customers = templates.querySelectorAll('[data-kt-element="kt_details"]');
    var chatHeader = document.querySelector('#kt_chat_messenger_header');
    var chatBody = document.querySelector('#kt_chat_messenger_body');
    customers.forEach((customer) => {
      customer.addEventListener('click', e => {
        customersId = customer.querySelector('[data-kt-element="customerId"]').value;
        chatHeader.querySelector('#kt_active_userName').innerText = customer.querySelector('[data-kt-element="customer-name"]').innerText;
        chatBody.querySelector('#user_profile').src = customer.querySelector('[data-kt-element="customer-imag"]').src;
        chatBody.querySelector('#user_name').innerText = customer.querySelector('[data-kt-element="customer-name"]').innerText;
        //matchMessageId(customersId);
      });
    });
  }


  return {
    init: function () {
      initChatApp();
      onClickCustomer();
    },

    renderData: function (data) {
      return renderCustomerData(data);
    }
  };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  // Init inline chat messenger
  // KTAppChat.init(document.querySelector('#kt_chat_messenger'));

  // Init drawer chat messenger
  KTAppChat.init();
  KTModalEvent.init();

  // KTAppBody();

});

var customersId;
var templateId;
var template;


function PB_chat_filter() {
  let filter, a, txtValue;
  filter = document.getElementById('user_search').value.toUpperCase();
  document.getElementById('kt_details_wrapper').querySelectorAll('.level-1').forEach((div) => {
    a = div.getElementsByClassName('getName')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div.classList.remove('d-none');
      div.classList.add('d-flex');
    }
    else {
      div.classList.add('d-none');
    }
  })
}

var getCustomerId = function () {
  return customersId;
}
var getTemplateId = function () {
  return templateId;
}
var check = function (i, j) {
  var custId = getCustomerId();
  var tempId = getTemplateId();
  //alert(custId)
  // alert(tempId);
}

var KTModalEvent = function () {
  var copyTemplateText = function () {
    const element = document.getElementById('kt_modal_view_event');
    var templates = element.querySelector('[data-kt-element="kt_message_template"]');
    var messageInTemplate = templates.querySelectorAll('[data-kt-element="template-show"]');
    messageInTemplate.forEach((temp) => {
      temp.addEventListener('click', e => {
        temp.setAttribute('data-bs-dismiss', 'modal');
        matchTempId(templateId);
        templateId = temp.querySelector('[data-kt-element="message-id"]').value;
      });
    });
  }

  /*var templateVariable= function () {
   const tempVar = {
   'rows': [
   {'id': "1", 'name': "Max Smith", 'date': "11-12-22", 'inr': "52000",'percentage':"72%"},
   {'id': "2", 'name': "Sean Bean", 'date': "11-12-22", 'inr': "34000",'percentage':"72%"},
   {'id': "3", 'name': "Melody Macy", 'date': "11-12-22", 'inr': "15000",'percentage':"72%"},
   {'id': "4", 'name': "Brian Cox", 'date': "11-12-22", 'inr': "9800",'percentage':"72%"},
   {'id': "5", 'name': "Olivia Wild", 'date': "11-12-22", 'inr': "25000",'percentage':"72%"},
   ],
   'status': true,
   };
   if (tempVar.status) {
   // render the received data from server.
   var renderedData =KTModalEvent.templateFormat(tempVar.rows);
   } else {
   renderedData = KTAppChat.noDataFound( 'No Record has Found');
   }

   return renderedData;
   }
   */
  var getTemplate = function () {
    const templates = {
      'rows': [{'id': "1", 'title': "Outstanding Notification", 'description': "Hi Customer Name,Your PetroByte Account Balance is Rs 65,800 on 20 Oct 2021.72% Credit Limit Used.Kindly Make Payment of DUE Balance PetroByte Filling Center"}, {
        'id': "2",
        'title': "Sales Summery",
        'description': "Sales Summary Hi Customer Name,PetroByte Account Sales Summary 12 Oct to 31 Oct 2021 Diesel 3412 L Petrol 213 L Amount = 4,23,542 Bal on 15 Nov is Rs 45,432 Due PetroByte Filling Center"
      }, {'id': "3", 'title': "Account Summery", 'description': "Account SummaryHi Customer Name, PetroByte Account Summary from 1 May to 31 May 2021 Opening : 54,200 Sale : 54,200 Paid : 32,500 Other : 38 Closing : 68,920 Cur Bal : Rs 68,920 Due PetroByte Filling Center."},], 'status': true,
    };
    template = templates.rows;

    if (templates.status) {
      var renderedData = KTModalEvent.renderTemplate(templates.rows);
    }
    else {
      renderedData = KTAppChat.noDataFound('No Record has Found');
    }

    return renderedData;

  }

  var matchTempId = function (id) {
    var txtArea = document.querySelector('[data-kt-element="input"]');
    template.forEach((row) => {
      if (row.id === id) {
        txtArea.innerText = row.description;
      }
    })
    txtArea.setAttribute('readonly', 'true');
  }

  var renderTemplatesData = function (variables) {
    var templates = document.querySelector('[data-kt-element="kt_message_template"]');
    var messageInTemplate = templates.querySelector('[data-kt-element="template-show"]');
    variables.forEach((row) => {
      if (messageInTemplate.querySelector('[data-kt-element="message-title"]').innerText === "") {
        messageInTemplate.querySelector('[data-kt-element="message-id"]').value = row.id;
        messageInTemplate.querySelector('[data-kt-element="message-title"]').innerText = row.title;
        messageInTemplate.querySelector('[data-kt-element="message-desc"]').innerText = row.description;
      }
      else {
        var message = messageInTemplate.cloneNode(true);
        message.querySelector('[data-kt-element="message-id"]').value = row.id;
        message.querySelector('[data-kt-element="message-title"]').innerText = row.title;
        message.querySelector('[data-kt-element="message-desc"]').innerText = row.description;
        templates.appendChild(message);
      }

    });
    return templates;

  }

  return {
    init: function () {
      getTemplate();
      copyTemplateText();
    }, templateFormat: function (variables) {
      return fillData(variables)
    }, renderTemplate: function (data) {
      return renderTemplatesData(data);
    }

  };
}();