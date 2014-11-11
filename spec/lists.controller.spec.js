'use strict';
describe('Lists Controller', function() {

  var listsController;
  beforeEach(function() {
    setFixtures('<body><div id="wrapper"><h1>my task list</h1><form id="add_list" action="#" methos="post"><label for="list_title">Add a new list:</label><input type="text" id="list_title" name="list_title" placeholder="title"><input type="submit" value="(+) add"></form><form id="add_task" action="#" method="post"><label for="select_list">Select List:</label><select id="select_list" name="select_list"></select><label for="task_description">Task description:</label><input type="text" id="task_description" name="task_description" placeholder="description"><label for="task_priority">Priority level:</label><input type="text" id="task_priority" name="task_priority" placeholder="priority"><input type="submit" value="(+) add"></form><section id="lists"></section></div></body>');
    $('#add_list').submit(function(e){e.preventDefault();});
    listsController = new ListsController();
  });

  describe('creating a new List Controller', function() {
    it('should have $addListForm property holds selected \'#add_list\'', function() {
      expect(listsController.$addListForm).toEqual($('#add_list'));
    });
    it('should have $listTitleInput property holds selected \'#list_title\'', function() {
      expect(listsController.$listTitleInput).toEqual($('#list_title'));
    });
    it('should have $selectListMenu property holds selected \'#select_list\'', function() {
      expect(listsController.$selectListMenu).toEqual($('#select_list'));
    });
    it('should have $addTaskForm property holds selected \'#add_task\'', function() {
      expect(listsController.$addTaskForm).toEqual($('#add_task'));
    });
    it('should have $wrapper property holds selected \'#wrapper\'', function() {
      expect(listsController.$wrapper).toEqual($('#wrapper'));
    });
  });

  describe('#init (note you can always use #init as a delegator...)', function() {
    beforeEach(function(){
      listsController.init();
    });

    it('should hide the add task form', function() {
      expect(listsController.$addTaskForm.css('display')).toEqual('none');
    });

    it('should display the add task form when a list is created', function() {
      $('#add_list input:first').val('grocerries');
      $('#add_list').submit();
      expect(listsController.$addTaskForm.css('display')).toEqual('block');
    });

    it('should have added listener for creating new lists', function() {
      $('#add_list input:first').val('grocerries');
      $('#add_list').submit();
      expect($('#lists .list').length).toEqual(1);
      expect($('#lists .list').find('h2').text()).toEqual('x grocerries');
    });

    it('should have added a live event listener for deleting lists', function() {
      $('#add_list input:first').val('grocerries');
      $('#add_list').submit();
      $('#add_list input:first').val('more grocerries');
      $('#add_list').submit();
      expect($('#lists .list').length).toEqual(2);
      $('#lists .list').first().find('h2 button').click();
      expect($('#lists .list').length).toEqual(1);
      $('#lists .list').first().find('h2 button').click();
      expect($('#lists .list').length).toEqual(0);
    });
  });
});