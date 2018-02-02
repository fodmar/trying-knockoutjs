define(["ko", "exchangeRatesViewModel", "probabilityCalculator", "discountFormViewModel"], function (ko, ExchangeRatesViewModel, ProbabilityCalculator, DiscountFormViewModel) {
    
    function AppViewModel(exchangeRates, questionnaire, discountRules) {
        this.exchangeRatesViewModel = ko.observable(new ExchangeRatesViewModel(exchangeRates));
        this.probabilityCalculator = ko.observable(new ProbabilityCalculator(questionnaire));
        this.discountFormViewModel = ko.observable(new DiscountFormViewModel(discountRules));
        
        this.currentTab = ko.observable("Exchange rates");
        
        this.openTab = function (viewModel, event) {
            var button = event.target;
            var tabs = document.getElementsByClassName("tab");
            
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none";
            }
            
            var openTabId = button.getAttribute("data-open");
            document.getElementById(openTabId).style.display = "block";
            this.currentTab(button.innerText);
        };
    };
    
    return AppViewModel;
});