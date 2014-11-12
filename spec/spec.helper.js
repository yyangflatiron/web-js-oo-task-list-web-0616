'use strict';
// for deleting instances between tests
function emptyArr(arr){
  while( arr.length ){
    arr.pop();
  }
}

// prevents forms from submitting during tests
function preventDefaultOnForms(){
  $('#add_list, #add_task').submit(function(e){
    e.preventDefault();
  });
};

// deletes any lists and their tasks
function deleteLists(){
  $('#lists .list').remove();
}
