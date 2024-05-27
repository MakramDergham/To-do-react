import React from 'react'
import {useState} from 'react'

function ToDoForm(props){
    const [task,setTask] = useState('')
    const [priority, setPriority] = useState('Low')
    const [date, setDate] = useState('')
    function handleSubmit(e){
      e.preventDefault()
      let todo = {
        id: Date.now(),
        task: task,
        priority: priority,
        date: date,
      }
      const newTodos = [...props.todos, todo];
      props.setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    return(
        <form onSubmit={handleSubmit}>
            <label for="text" >todo</label>
            <input type="text" name="text" className="textInput" onChange={(e)=>{
                setTask(e.target.value)
            }}/>
            <div>
            <label for="priorities">Priority</label>
            <select name="priorities" id="priorities" onChange={(e)=>{
                setPriority(e.target.value)
            }}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            </div>
            <div>
                <label for="date">Due Date</label>
                <input type="date" name="date" onChange={(e)=>{
                setDate(e.target.value)
            }}/>
            </div>
            <input type="submit" value="Submit" className="submitButton"/>
        </form>
    )
}
export default ToDoForm;