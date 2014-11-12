'use strict';
// List Model

function List(title) {
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.title = title;
  this.tasks = [];
}

List.prototype.listEl = function() {
  return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>';
};

List.prototype.optionEl = function() {
  return '<option value="'+this.id+'">'+this.title+'</option>';
};

List.prototype.build = function() {
   $('#lists').append(this.listEl());
   $('#select_list').append(this.optionEl());
};

List.all = [];