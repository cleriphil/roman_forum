MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var question = this.store.createRecord('question', {
        question: this.get('question'),
        description: this.get('description'),
        author: this.get('author'),
      });

      question.save();

      this.set('question', '');
      this.set('description', '');
      this.set('author', '');


      this.transitionToRoute('questions');

      }
  }


})
