MessageBoard.Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('new-question');
});
