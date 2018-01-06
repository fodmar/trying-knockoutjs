define(["ko", "js/addExchangeRateHandler"], function (ko, AddExchangeRateHandler) {
    
    function ExchageRatesViewModel(exchangeRates) {
        this.exchangeRates = ko.observableArray(exchangeRates);
        
        var saveCallback = this.exchangeRates.push.bind(this.exchangeRates);
        this.addHandler = ko.observable(new AddExchangeRateHandler(saveCallback));
    }
    
    return ExchageRatesViewModel;
});