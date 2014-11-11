'use strict';
describe('Lists Controller', function() {

  beforeEach(function() {
    setFixture('<body><div id="wrapper"><h1>my task list</h1><form id="add_list" action="#" methos="post"><label for="list_title">Add a new list:</label><input type="text" id="list_title" name="list_title" placeholder="title"><input type="submit" value="(+) add"></form><form id="add_task" action="#" method="post"><label for="select_list">Select List:</label><select id="select_list" name="select_list"></select><label for="task_description">Task description:</label><input type="text" id="task_description" name="task_description" placeholder="description"><label for="task_priority">Priority level:</label><input type="text" id="task_priority" name="task_priority" placeholder="priority"><input type="submit" value="(+) add"></form><section id="lists"></section></div></body>');
    var listController = new ListController();
  });

  describe('creating a new List Controller', function() {
    it('should have $addListForm property holds selected \'#add_list\'', function() {
      expect(listController.$addListForm).toBe($'#add_list');
    });
  });
});