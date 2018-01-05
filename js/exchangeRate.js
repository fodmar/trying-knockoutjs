define(["ko"], function (ko) {
    
    function ExchangeRate(from, to, rate) {
        this.from = ko.observable(from);
        this.to = ko.observable(to);
        this.rate = ko.observable(rate);
    }
    
    return ExchangeRate;
});