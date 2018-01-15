define(["ko", "js/exchangeRatesViewModel", "js/probabilityCalculator"], function (ko, ExchangeRatesViewModel, ProbabilityCalculator) {
    
    function AppViewModel(exchangeRates) {
        this.exchangeRatesViewModel = ko.observable(new ExchangeRatesViewModel(exchangeRates));
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