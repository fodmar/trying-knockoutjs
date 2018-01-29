requirejs.config({
    paths: {
        ko: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min'
    }
});

define(["ko", "appViewModel"], function (ko, AppViewModel) {
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

    // this would come from server
    var questionnaire = {
        questions: ["C#", "Java", "SQL"],
        answers: ["Don't like", "Don't know", "Like"]
    };

    ko.applyBindings(new AppViewModel(exchangeRates, questionnaire));
});