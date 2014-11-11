'use strict';
describe('Tasks Controller', function(){
  var tasksController, listsController;
  beforeEach(function() {
    setFixtures('<body><div id="wrapper"><h1>my task list</h1><form id="add_list" action="#" methos="post"><label for="list_title">Add a new list:</label><input type="text" id="list_title" name="list_title" placeholder="title"><input type="submit" value="(+) add"></form><form id="add_task" action="#" method="post"><label for="select_list">Select List:</label><select id="select_list" name="select_list"></select><label for="task_description">Task description:</label><input type="text" id="task_description" name="task_description" placeholder="description"><label for="task_priority">Priority level:</label><input type="text" id="task_priority" name="task_priority" placeholder="priority"><input type="submit" value="(+) add"></form><section id="lists"></section></div></body>');
    $('#add_list').submit(function(e){e.preventDefault();});
    tasksController = new TasksController();
    listsController = new ListsController();
    listsController.init();
  });

  describe('creating a new TasksController', function() {
    it('should have $addTaskForm property holds selected \'#add_task\'', function() {
      expect(tasksController.$addTaskForm).toEqual($('#add_task'));
    });
    it('should have $taskDescriptionInput property holds selected \'#task_description\'', function() {
      expect(tasksController.$taskDescriptionInput).toEqual($('#task_description'));
    });
    it('should have $selectListMenu property holds selected \'#select_list\'', function() {
      expect(tasksController.$selectListMenu).toEqual($('#select_list'));
    });
    it('should have $taskPriorityInput property holds selected \'#task_priority\'', function() {
      expect(tasksController.$taskPriorityInput).toEqual($('#task_priority'));
    });
    it('should have $wrapper property holds selected \'#wrapper\'', function() {
      expect(tasksController.$wrapper).toEqual($('#wrapper'));
    });
  });

    describe('#init (note you can always use #init as a delegator...)', function() {
    beforeEach(function(){
      tasksController.init();
    });

    it('should have added listener for creating new tasks', function() {
      $('#add_list input:first').val('grocerries');
      $('#add_list').submit();
      $('#add_task select').val('1')
      expect($('#lists .list').length).toEqual(1);
      expect($('#lists .list').find('h2').text()).toEqual('x grocerries');
    });

    it('should have added a live event listener for deleting tasks', function() {
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