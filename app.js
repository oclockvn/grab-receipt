// import * as ko from './knockout-3.4.2';

(function(){
  const validDate = dateString => moment(dateString, ['DD/MM/YYYY'], true).isValid();
  const validTime = dateString => moment(dateString, ['HH:mm'], true).isValid();
  
  let receipt = {
    total: ko.observable(''),
    driver: ko.observable(''),
    code: ko.observable(''),
    pickup: ko.observable(''),
    destination: ko.observable(''),
    date: ko.observable(''),
    time: ko.observable(''),
    datetime: ko.observable(''),
  };
  
  // 08 Nov 18 15:03 +0700
  receipt.dateFormatted = ko.computed(() => {
    if (receipt.datetime()) {
      return receipt.datetime();
    }
    
    const dateInput = receipt.date();
    const date = validDate(dateInput) ? moment(dateInput, 'DD/MM/YYYY').format('DD MMM YY') : dateInput;
    
    const timeInput = receipt.time();
    const time = validTime(timeInput) ? moment(timeInput, 'HH:mm').format('HH:mm') : timeInput;
    
    return `${date} ${time} +0700`;
  }, receipt);

  receipt.clear = () => {
    receipt.total('');
    receipt.driver('');
    receipt.code('');
    receipt.pickup('');
    receipt.destination('');
    receipt.date('');
    receipt.time('');
    receipt.datetime('');
  }

  receipt.switchAddr = () => {
    // receipt.total('');
    // receipt.driver('');
    // receipt.code('');
    var pickup = receipt.pickup();
    receipt.pickup(receipt.destination());
    receipt.destination(pickup);
    // receipt.date('');
    // receipt.time('');
    // receipt.datetime('');
  }
  
  ko.applyBindings(receipt);
})();
