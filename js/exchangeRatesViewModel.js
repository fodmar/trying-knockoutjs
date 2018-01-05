define(["ko", "js/ExchangeRate"], function (ko, ExchangeRate) {
    
    function ExchageRatesViewModel() {
        this.exchangeRates = ko.observableArray([
            new ExchangeRate("EURO", "PLN", 3.13)
        ]);
    }
    
    return ExchageRatesViewModel;
});