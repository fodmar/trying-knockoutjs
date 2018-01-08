define(["ko"], function (ko) {
    
    function ExchangeRateViewModel(from, to, rate, editCallback, destoyCallback) {
        this.from = ko.observable(from);
        this.to = ko.observable(to);
        this.rate = ko.observable(rate);
        
        this.editMode = ko.observable(false);
        this.editCopy = ko.observable({
            from: ko.observable(from),
            to: ko.observable(to),
            rate: ko.observable(rate)
        });

        this.edit = function() {
            this.editMode(true);
        };
        
        this.save = function () {
            this.from(this.editCopy().from());
            this.to(this.editCopy().to());
            this.rate(this.editCopy().rate());
            this.editMode(false);
            editCallback(this);
        };
        
        this.cancel = function () {
            this.editMode(false);
            this.editCopy().from(this.from());
            this.editCopy().to(this.to());
            this.editCopy().rate(this.rate());
        };

        this.destroy = function () {
            destoyCallback(this);
        };
    }
    
    return ExchangeRateViewModel;
});
