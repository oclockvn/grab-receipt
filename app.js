// import * as ko from './knockout-3.4.2';

(function(){    
    const validDate = dateString => moment(dateString, ['DD/MM/YYYY'], true).isValid();  
    const validTime = dateString => moment(dateString, ['HH:mm'], true).isValid();  

    let receipt = {
        total: ko.observable(''),
        driver: ko.observable(''),
        code: ko.observable('ADR-'),
        pickup: ko.observable(''),
        destination: ko.observable(''),
        date: ko.observable(''),
        time: ko.observable(''),       
    };

    // 08 Nov 18 15:03 +0700
    receipt.dateFormatted = ko.computed(() => {
        const dateInput = receipt.date();
        const date = validDate(dateInput) ? moment(dateInput, 'DD/MM/YYYY').format('DD MMM YY') : dateInput;
        
        const timeInput = receipt.time();
        const time = validTime(timeInput) ? moment(timeInput, 'HH:mm').format('HH:mm') : timeInput;

        return `${date} ${time} +0700`;
    }, receipt);

    ko.applyBindings(receipt);
})();