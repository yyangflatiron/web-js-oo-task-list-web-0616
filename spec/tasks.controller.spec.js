'use strict';
describe('Tasks Controller', function(){
  var tasksController, listsController;
  beforeEach(function() {
    setFixtures('<body><div id="wrapper"><h1>my task list</h1><form id="add_list" action="#" methos="post"><label for="list_title">Add a new list:</label><input type="text" id="list_title" name="list_title" placeholder="title"><input type="submit" value="(+) add"></form><form id="add_task" action="#" method="post"><label for="select_list">Select List:</label><select id="select_list" name="select_list"></select><label for="task_description">Task description:</label><input type="text" id="task_description" name="task_description" placeholder="description"><label for="task_priority">Priority level:</label><input type="text" id="task_priority" name="task_priority" placeholder="priority"><input type="submit" value="(+) add"></form><section id="lists"></section></div></body>');
    preventDefaultOnForms(); // prevents forms from submitting during tests
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
      deleteLists(); // deletes any lists and their tasks
      tasksController.init();
      // creates new list
      $('#add_list input:first').val('grocerries');
      submitListForm();
      // creates a second list
      $('#add_list input:first').val('more grocerries');
      submitListForm();
    });

    describe('creating a new task via a listener on the new tasks form', function() {
      beforeEach(function() {
        // creates a new task for the first list
        $('select').val('0')
        $('#task_description').val('do this thing');
        $('#task_priority').val('high');
        submitTaskForm();
      });

      it('should create a new task', function() {
        expect($('#list-0 li').length).toEqual(1);
      });

      it('should create a new on the correct list', function() {
        $('select').val('1')
        $('#task_description').val('do this thing');
        $('#task_priority').val('high');
        submitTaskForm();
        expect($('#list-0 li').length).toEqual(1);
        expect($('#list-1 li').length).toEqual(1);
      });

      it('should created an li within a ul with a data-id', function() {
        expect($('#list-0 li').first().data().id).toEqual(0);
      });

      it('should add a task to the correct list', function() {
        $('select').val('1')
        $('#task_description').val('do this thing');
        $('#task_priority').val('high');
        submitTaskForm();
        expect($('#list-0 li').length).toEqual(0);
        expect($('#list-1 li').length).toEqual(1);
      });

      describe('live event listener for deleting tasks', function() {
        it('deleting a task only deletes itself', function() {
          $('select').val('1')
          $('#task_description').val('do this thing');
          $('#task_priority').val('high');
          submitTaskForm();
          $('#task_description').val('do this thing');
          $('#task_priority').val('high');
          submitTaskForm();
          expect($('#list-1 li').length).toEqual(2);
          $('#list-1 li').first().find('button').click();
          expect($('#list-1 li').length).toEqual(1);
          expect($('#list-1 li').first().data().id).toEqual(1);
          $('#list-1 li').first().find('button').click();
          expect($('#list-1 li').length).toEqual(0);
        });
      });

      // $('#add_list input:first').val('grocerries');
      // submitListForm();
      // $('#add_task select').val('1')
      // expect($('#lists .list').length).toEqual(1);
      // expect($('#lists .list').find('h2').text()).toEqual('x grocerries');
    });

  });
});