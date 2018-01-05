define(["ko", "js/exchangeRatesViewModel"], function (ko, ExchageRatesViewModel) {
    return {
        init: function () {
            ko.applyBindings(new ExchageRatesViewModel());
        }
    };
});