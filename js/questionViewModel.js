define(["ko"], function (ko) {
   
    function QuestionViewModel(question) {
        this.id = question.id;
        this.content = ko.observable(question.content);
        this.answerId = ko.observable(question.answerId);
        
        this.selectedAnswers = ko.observableArray([this.answerId()]);
        
        this.setAnswerId = function (answer, event) {
            if (event.target.checked) {
                this.answerId(answer.id);
                this.selectedAnswers([answer.id]);
            } else {
                this.answerId(0);
                this.selectedAnswers.removeAll();
            }
            
            return true;
        };
    };
   
    return QuestionViewModel;
});