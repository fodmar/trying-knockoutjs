define(["ko", "js/exchangeRatesViewModel"], function (ko, ExchageRatesViewModel) {
    return {
        init: function () {
            // this would come from server
            var exchangeRates = [
                { from: "EURO", to: "PLN", rate: 3.13 }
            ];
            
            ko.applyBindings(new ExchageRatesViewModel(exchangeRates));
        }
    };
});