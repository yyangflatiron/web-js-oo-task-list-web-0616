'use strict';
describe('Task Model', function() {

  describe('Instance Properties', function() {

    var list, task;
    beforeEach(function() {
      list = new List('Jon\'s List');
      task = new Task('Walk the dog', 'high', list);
      emptyArr(List.all); // for deleting instances between tests
    });

    it('should take a description when the task is created', function() {
      expect(task.description).toBe('Walk the dog');
    });

    it('should be assigned a priority when a new Task is created', function() {
      expect(task.priority).toBe('high');
    });


    it('should be assigned an autoincremented id when a new Task is created', function() {
      expect(task.id).toBe(0);
    });


    it('should be assigned to a list when a new Task is created', function() {
      expect(task.list.title).toBe('Jon\'s List');
    });

  }); //end Instance Properties

  describe('Constructor Properties', function() {

    it('should have an all property set to an empty array', function() {
      expect(Task.all).toEqual([]);
    });

    it('should keep track of all instances in an all property', function() {
      list = new List('Jon\'s List');
      task1 = new Task('Walk the dog', 'high', list);
      task2 = new Task('Find the dog...', 'very high', list);
      expect(Task.all[0]).toBe(task1);
      expect(Task.all[1]).toBe(task2);
    });

  }); // end Constructor Properties

}); //end Task model tests