MessageBoard.AnswersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('answer');
  }
});
