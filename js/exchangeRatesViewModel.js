define(["ko", "js/exchangeRateViewModel", "js/addExchangeRateHandler"], function (ko, ExchangeRateViewModel, AddExchangeRateHandler) {
    
    function ExchageRatesViewModel(exchangeRates) {
        this.create = function (e) {
            return new ExchangeRateViewModel(e.from, e.to, e.rate, this.edit.bind(this), this.destroy.bind(this));
        };
        
        this.save = function (e) {
            // this would call server
            this.exchangeRates.push(this.create(e));
        };
        
        this.edit = function () {
             // this would call server
        };
        
        this.destroy = function (e) {
            // this would call server
            this.exchangeRates.remove(e);
        };
        
        this.exchangeRates = ko.observableArray(exchangeRates.map(this.create.bind(this)));
        this.addHandler = ko.observable(new AddExchangeRateHandler(this.save.bind(this)));
    }
    
    return ExchageRatesViewModel;
});