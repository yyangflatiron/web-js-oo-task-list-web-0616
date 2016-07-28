'use strict';
function listsController(){
  var list_title = $("input[type='text']")[0].value
  var newList = new List(list_title)
  let newOption = document.createElement("option")
  newOption.innerHTML = list_title
  document.getElementById('select_list').appendChild(newOption)
  $("input[type='text']").val('')
  let newDelete = `<div class="list"><h2><button class="destroy-list">x</button>${list_title} </h2><ul id="list-0" data-id="0"></ul></div>`
  let currentDeletes = document.getElementById('lists').innerHTML
  currentDeletes = currentDeletes + newDelete
}
