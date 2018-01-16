define(["ko"], function (ko) {
   
    function ProbabilityCalculator() {
        this.answers = ko.observableArray();
        this.questions = ko.observableArray();
        
        this.newAnswer = ko.observable();
        this.newQuestion = ko.observable();
        
        this.addAnswer = function () {
            this.answers.push(this.newAnswer());
            this.newAnswer("");
        };
        
        this.addQuestion = function () {
            this.questions.push(this.newQuestion());
            this.newQuestion("");
        };
    };
   
    return ProbabilityCalculator;
});