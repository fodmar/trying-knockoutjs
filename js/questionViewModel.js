define(["ko"], function (ko) {
   
    function QuestionViewModel(question) {
        this.id = question.id;
        this.content = ko.observable(question.content);
        this.answerId = ko.observable(question.answerId);
    };
   
    return QuestionViewModel;
});