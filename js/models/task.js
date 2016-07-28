'use strict';



$(document).on('ready',function(){
  $('form#add_task').on('submit',function(event){
    event.preventDefault();
    tasksController();
  })
})



const Task = (function(){
  var counter = 1
  return class{
    constructor(description, priority, list_id){
      this.description = description
      this.priority = priority
      this.id = counter ++
      store.tasks.push(this)
      this.list_id = list_id.id
      store.lists[store.lists.length-1].tasks.push(this)
      // let list = store.lists.find(this.list_ids)
      // store.lists.list.tasks.push(this)
    }


    //blah

  }
}())


// Task Model
