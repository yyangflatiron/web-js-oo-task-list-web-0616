'use strict';
function(){ describe('List Model', function() {

  describe('Instance Properties', function() {

    var list;
    beforeEach(function() {
      emptyArr(List.all); // for deleting instances between tests
      list = new List('Jon\'s List');
    });

    it('should be have a title when a new List is created', function() {
      expect(list.title).toBe('Jon\'s List');
    });

    it('should be assigned an autoincrementing id when a new List is created', function() {
      var secondList = new List('Tristan\'s List');
      expect(list.id).toBe(0);
      expect(secondList.id).toBe(1);
    });    

    it('should be assigned an empty array when a new List is created', function() {
      expect(list.tasks).toEqual([]);
    });      

  }); //Instance Properties

  describe('Constructor Properties', function() {

    it('should have an "all" property to hold instances of each list created', function() {
      expect(List.all).toEqual([]);
    });

    it('should keep track of all instances in an all property', function() {
      var list1 = new List('Jon\'s List'),
          list2 = new List('Tristans\'s List');
      expect(List.all[0]).toBe(list1);
      expect(List.all[1]).toBe(list2);
    });

  }); //end Constructor Properties

}); //end List Model tests