import React from 'react'

function ToDoItem(props) {
  function removeTodo(){
    props.setTodos(props.todos.filter(item=> item.id !== props.todo.id))
  }
  return (
    <div>
        <p className="todo-task">{props.todo.task}</p>
        <p>{props.todo.date}</p>
        <p>{props.todo.priority}</p>
        <button onClick={removeTodo}>X</button>
    </div>
  )
}

export default ToDoItem