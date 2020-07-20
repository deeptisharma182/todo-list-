$(function(){
   
    let newTodoBox=$('#newtodo')
    let addtodoBtn=$("#addtodo")
    let todolist=$('#todolist')

    addtodoBtn.click(function(){
      //  console.log("Button was clicked")
      let newTodo = newTodoBox.val()
      
      $.post(
          '/todos',
          {task: newTodo},
          function(data){
              todolist.empty();
              for( todo of data){
                  //adding a new list item
                  todolist.append("<li>"+todo.task+"</li")
                //todo.task is the val of todo.task
                }
          }
      )
    })
})

