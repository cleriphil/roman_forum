MessageBoard.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('new-question');
  this.resource('question', {path: 'question/:question_id'}, function(){
    this.resource('new-answer');
  });
});
