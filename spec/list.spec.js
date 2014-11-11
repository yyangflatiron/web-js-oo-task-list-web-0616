'use strict';
function(){ describe('List Model', function() {

  describe('Constructor Properties', function() {

    it('should have an "all" property to hold instances of each list created', function() {
      expect(List.all).toEqual([]);
    });

  }); //end Constructor Properties


  describe('Instance Properties', function() {

    var list;
    beforeEach(function() {
      emptyArr(List.all);
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

}); //end List Model tests