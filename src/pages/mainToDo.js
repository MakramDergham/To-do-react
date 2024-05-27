import React,{useState} from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoItem from '../components/ToDoItem'


function MainToDo() {
  const tasks =  JSON.parse(localStorage.getItem("todo"))? JSON.parse(localStorage.getItem("todo")):[];
  const [todos,setTodos] = useState(tasks);
  console.log(todos)
  return (
    <>
    <ToDoForm todos={todos} setTodos={setTodos}/>
    <div>
      {todos.map(todo=>{
        return (<ToDoItem todo={todo} setTodos={setTodos} todos={todos}/>)
      })}
    </div>
    </>
  )
}

export default MainToDo