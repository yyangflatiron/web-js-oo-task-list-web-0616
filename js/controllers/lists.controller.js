'use strict';
// Lists Controller
function ListsController() {
  this.$addListForm = $('#add_list'),
  this.$listTitleInput = $('#list_title'),
  this.$selectListMenu = $('#select_list'),
  this.$addTaskForm = $('#add_task'),
  this.$wrapper = $('#wrapper');
}

ListsController.prototype.hideTaskForm = function(){
  this.$addTaskForm.hide(); // initially hide add task form
};

ListsController.prototype.addListFormListener = function() {
  var self = this;
  this.$addListForm.submit(function(event) {
    event.preventDefault();
    var listTitle = self.$listTitleInput.val(),
        list = new List(listTitle);
    list.build();
    self.$addTaskForm.one().show();
    self.$listTitleInput.val('');
  });
};

ListsController.prototype.destroyListLiveEventListener = function(){
  var self = this;
  this.$wrapper.on('click', '.destroy-list', function(){ //live event listener
    var listId = parseInt($(this).parents('h2').next('ul').data('id'));
    List.all.splice(listId, 1, null);
    self.$selectListMenu.find('option[value="'+listId+'"]').remove();
    $(this).parents('.list').remove();
  });
};

ListsController.prototype.init = function() {
  this.hideTaskForm();
  this.addListFormListener();
  this.destroyListLiveEventListener();
};
