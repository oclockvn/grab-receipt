// import * as ko from './knockout-3.4.2';

(function(){
    // class Receipt {
    //     constructor() {
    //         this.total = ko.observable('');
    //         this.driver = ko.observable('');
    //         this.code = ko.observable('');
    //         this.pickup = ko.observable('');
    //         this.destination = ko.observable('');
    //         this.day = ko.observable('');
    //         this.month = ko.observable('');
    //         this.year = ko.observable(18);
    //         this.time = ko.observable('00:00');
    //     }
    // }

    let receipt = {
        total: ko.observable(''),
        driver: ko.observable(''),
        code: ko.observable(''),
        pickup: ko.observable(''),
        destination: ko.observable(''),
        datetime: ko.observable('')
    };

    ko.applyBindings(receipt);
})();