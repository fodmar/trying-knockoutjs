define(["ko", "js/appViewModel"], function (ko, AppViewModel) {
    return {
        init: function () {
            // this would come from server
            var exchangeRates = [
                { from: "EURO", to: "PLN", rate: 3.13 }
            ];
            
            ko.applyBindings(new AppViewModel(exchangeRates));
        }
    };
});