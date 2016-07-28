'use strict';
function tasksController(){
  var task_title = $("input#task_description").val()
  var task_priority = $("input#task_priority").val()

  var list_title = $("#select_list :selected").text()
  var list_id = store.lists.find((list)=>{return list.title == list_title}).id
  var newTask = new Task(task_title,task_priority, list_id)

}
// Tasks Controller
