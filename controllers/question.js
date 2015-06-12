MessageBoard.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);

      var question = this.get('model')
      question.set('question', this.get('question'));
      question.set('description', this.get('description'));
      question.set('author', this.get('author'));

      question.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
