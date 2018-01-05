define(["ko"], function (ko) {
    
    function ExchageRatesViewModel(exchangeRates) {
        this.exchangeRates = ko.observableArray(exchangeRates);
    }
    
    return ExchageRatesViewModel;
});