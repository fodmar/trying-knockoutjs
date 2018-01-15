define(["ko"], function (ko) {
    
    function ExchangeCalculator(exchangeRates) {
        this.exchangeRates = exchangeRates;
        
        this.selectedExchangeRate = ko.observable();
        
        this.enabled = ko.computed(function () {
            return this.selectedExchangeRate() ? true : false;
        }, this);
        
        this.fromValue = ko.observable();
        
        this.toValue = ko.computed({
            read: function () {
                if (this.selectedExchangeRate() && this.fromValue()) {
                    return this.selectedExchangeRate().rate() * this.fromValue();;
                }

                return undefined;
            },
            write: function (value) {
                var from = this.selectedExchangeRate() ? 1.0 / this.selectedExchangeRate().rate() * value : undefined;
                this.fromValue(from);
            },
            owner: this
        });
        
        this.fromText = ko.computed(function () {
            return this.selectedExchangeRate() ? this.selectedExchangeRate().from() : "";
        }, this);
        
        this.toText = ko.computed(function () {
            return this.selectedExchangeRate() ? this.selectedExchangeRate().to() : "";
        }, this);
    };
    
    return ExchangeCalculator;
});