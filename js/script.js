function ToDoList() {
  this.list = [];
}

function ToDoItem(description) {
  this.description = description;
  this.order = 0;
}

ToDoList.prototype.add = function(description) {
  let newItem = new ToDoItem(description);
  this.list.push(newItem);
}

ToDoList.prototype.remove = function(description) {
  return null;
}

$(document).ready(function(){

  $("#form").submit(function(e) {
    let description = $("#description").val();
    $("#result").append(`<div><label><input type="checkbox"/>${description} ⬆ ⬇ ⭐ ✘</label></div>`);
    e.preventDefault();
  });

});

