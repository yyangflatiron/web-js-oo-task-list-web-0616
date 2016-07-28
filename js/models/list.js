'use strict';
const store = {
  lists : [],
  tasks : []
}


$(document).on('ready',function(){
  hide();
  $('form#add_list').on('submit', function(event){
    event.preventDefault();
    listsController();
    show();
  })
})

function show(){document.getElementById("add_task").style.display='block'}
function hide(){document.getElementById("add_task").style.display='none'}


const List = (function(){
  var counter = 1
    return class {
      constructor(title){
        this.title = title
        this.tasks = []
        this.id = counter++
        store.lists.push(this)
      }
  }

  //blah

}())
// List Model
