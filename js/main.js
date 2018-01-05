define(["ko", "js/exchangeRate", "js/exchangeRatesViewModel"], function (ko, ExchangeRate, ExchageRatesViewModel) {
    return {
        init: function () {
            // this would come from server
            var exchangeRates = [
                new ExchangeRate("EURO", "PLN", 3.13)
            ];
            
            ko.applyBindings(new ExchageRatesViewModel(exchangeRates));
        }
    };
});