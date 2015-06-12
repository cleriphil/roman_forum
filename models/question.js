MessageBoard.Question = DS.Model.extend({
  question: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
