define(["ko"], function (ko) {
    
    function DiscountFormViewModel(discountRules) {
        this.originalPrice = ko.observable();
        this.discountAmount = ko.observable();

        this.discountPercentage = ko.computed({
            read: function () {
                if (this.originalPrice() && this.discountAmount()) {
                    return 100 * this.discountAmount() / this.originalPrice();
                }
            },
            write: function (value) {
                var amount = this.originalPrice() ? this.originalPrice() * value / 100 : undefined;
                this.discountAmount(amount);
            },
            owner: this
        });
        
        this.salePrice = ko.computed({
            read: function () {
                if (this.originalPrice() && this.discountAmount()) {
                    return this.originalPrice() - this.discountAmount();
                }
            },
            write: function (value) {
                var amount = this.originalPrice() ? this.originalPrice() - value : undefined;
                this.discountAmount(amount);
            },
            owner: this
        });
    };
    
    return DiscountFormViewModel;
});