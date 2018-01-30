define(["ko", "questionViewModel"], function (ko, QuestionViewModel) {
   
    function ProbabilityCalculator(questionnaire) {
        this.answers = ko.observableArray(questionnaire.answers);
        this.questions = ko.observableArray(questionnaire.questions.map(q => new QuestionViewModel(q)));
        
        this.newAnswer = ko.observable();
        this.newQuestion = ko.observable();
        
        this.addAnswer = function () {
            this.answers.push({ id: this.answers.length + 1, content: this.newAnswer() });
            this.newAnswer("");
        };
        
        this.addQuestion = function () {
            this.questions.push({ id: this.questions.length + 1, answerId: 0, content: this.newQuestion() });
            this.newQuestion("");
        };
    };
   
    return ProbabilityCalculator;
});