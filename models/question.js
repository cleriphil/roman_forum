MessageBoard.Question = DS.Model.extend({
  question: DS.attr(),
  description: DS.attr(),
  author: DS.attr()
  items: DS.hasMany('item', {async: true})
});
