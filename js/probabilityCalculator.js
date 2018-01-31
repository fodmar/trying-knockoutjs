define(["ko", "questionViewModel"], function (ko, QuestionViewModel) {
   
    function ProbabilityCalculator(questionnaire) {
        this.newAnswer = ko.observable();
        this.newQuestion = ko.observable();
        this.probability = ko.observable(0);
        this.probabilityText = ko.computed(function () {
            return this.probability().toFixed(2) + "%";
        }, this);
        
        this.answers = ko.observableArray(questionnaire.answers);
        this.questions = ko.observableArray();
        
        this.handleQuestionnaireChange = function() {
            var answersLength = this.answers().length;
            var questionsLength = this.questions().length;
            
            var max = answersLength * questionsLength;
            var sum = 0;
            
            for (var i = 0; i < questionsLength; i++) {
                sum += this.questions()[i].answerId();
            }
            
            this.probability(sum * 100.0 / max);
        };
        
        for (var i = 0; i < questionnaire.questions.length; i++) {
            var questionViewModel = new QuestionViewModel(questionnaire.questions[i]);
            questionViewModel.answerId.subscribe(this.handleQuestionnaireChange, this);
            
            this.questions.push(questionViewModel);
        }
        
        this.handleQuestionnaireChange();
        this.answers.subscribe(this.handleQuestionnaireChange, this, "arrayChange");
        this.questions.subscribe(this.handleQuestionnaireChange, this, "arrayChange");
        
        this.addAnswer = function () {
            this.answers.push({ id: this.answers().length + 1, content: this.newAnswer() });
            this.newAnswer("");
        };
        
        this.addQuestion = function () {
            var questionViewModel = new QuestionViewModel({ id: this.questions().length + 1, answerId: 0, content: this.newQuestion() });
            questionViewModel.answerId.subscribe(this.handleQuestionnaireChange, this);
            
            this.questions.push(questionViewModel);
            this.newQuestion("");
        };
    };
   
    return ProbabilityCalculator;
});