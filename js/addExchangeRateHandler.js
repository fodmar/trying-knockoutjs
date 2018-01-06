define(["ko", "js/exchangeRate"], function (ko, ExchangeRate) {
    
    function AddExchangeRateHandler(saveCallback) {
        this.newExchangeRate = ko.observable(new ExchangeRate());
        this.addMode = ko.observable(false);
        
        this.add = function () {
            this.addMode(true);
        };
        
        this.save = function () {
            saveCallback(this.newExchangeRate());
            this.cancel();
        };
        
        this.cancel = function () {
            this.newExchangeRate(new ExchangeRate());
            this.addMode(false);
        };
    };
    
    return AddExchangeRateHandler;
});