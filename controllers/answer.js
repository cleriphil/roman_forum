MessageBoard.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);

       var item = this.get('model')
      item.set('answer', this.get('answer'));
      item.set('author', this.get('author'));

      item.save()

    },
    delete: function() {
      if(confirm('Are you sure?')) {
        var answer = this.get('model');
        var question = this.get('controllers.question.model');
        question.get('answers').removeObject(answer);
        question.save();
        answer.destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
