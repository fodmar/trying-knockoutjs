define(["ko", "js/appViewModel"], function (ko, AppViewModel) {
    return {
        init: function () {
            ko.bindingHandlers.togglePaddingLeft = {
                update: function (element, valueAccessor) {
                    if (valueAccessor()) {
                        element.style.paddingLeft = "5px";
                    } else {
                        element.style.paddingLeft = "0px";
                    }
                }
            };
            
            // this would come from server
            var exchangeRates = [
                { from: "EURO", to: "PLN", rate: 3.13 }
            ];
            
            ko.applyBindings(new AppViewModel(exchangeRates));
        }
    };
});