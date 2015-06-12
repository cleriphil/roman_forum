MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        title: this.get('title'),
        description: this.get('description'),
        date: this.get('date'),
      });

      question.save();

      this.set('title', '');
      this.set('description', '');
      this.set('date', '');


      this.transitionToRoute('questions');

      }
  }


})
