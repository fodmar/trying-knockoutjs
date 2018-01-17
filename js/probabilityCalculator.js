define(["ko"], function (ko) {
   
    function ProbabilityCalculator(questionnaire) {
        this.answers = ko.observableArray(questionnaire.answers);
        this.questions = ko.observableArray(questionnaire.questions);
        
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