MessageBoard.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function {
      var answer = this.store.createRecord('answer', {
        answer: this.get('answer'),
        author: this.get('author')
      });

      answer.save();

      var question = this.get('controllers.lot.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.set('answer', '');
      this.set('author', '');

     this.transitionToRoute('lot', lot.id);
    }
  }
});
