define(["ko", "js/exchangeRateViewModel"], function (ko, ExchangeRateViewModel) {
    
    function AddExchangeRateHandler(saveCallback) {
        this.newExchangeRate = ko.observable(new ExchangeRateViewModel());
        this.addMode = ko.observable(false);
        
        this.add = function () {
            this.addMode(true);
        };
        
        this.save = function () {
            saveCallback({
                from: this.newExchangeRate().from(),
                to: this.newExchangeRate().to(),
                rate: this.newExchangeRate().rate(),
            });
            
            this.cancel();
        };
        
        this.cancel = function () {
            this.newExchangeRate(new ExchangeRateViewModel());
            this.addMode(false);
        };
    };
    
    return AddExchangeRateHandler;
});