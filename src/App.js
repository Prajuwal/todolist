
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [currentTask,setCurrentTask] = useState("")
const [todoList,setTodoList] = useState([])
const inputTask = useRef(null)
const addTask = ()=>{
  setTodoList([...todoList,{task:currentTask,completed:false}])
  inputTask.current.value = ""
  setCurrentTask=""
}
const taskToDelete =(taskvalue)=>{
setTodoList(
  todoList.filter((taskfordeletion)=>{
    return taskfordeletion.task!=taskvalue
  })
)
}
const taskComplete =(taskToComplete)=>{
setTodoList(
  todoList.map((task)=>{
    return taskToComplete ==task.task?{task:taskToComplete,completed:true}:{task:task.task,completed:task.completed?true:false}
  })
)
}
  return (
    <div className="App">
     <h1>To Do List</h1>
     <div>
     <input ref={inputTask} type='text' placeholder='Task...' 
     onKeyDown={(event)=>{
      if(event.keyCode==13) addTask()
     }}
     onChange={(event)=>{
      setCurrentTask(event.target.value)
     }}></input>
     <button onClick={addTask}> Add Task </button>
    </div>
    <hr/>
    <ul>
    {todoList.map((val,key)=>{
      return (
        <div id="delandcompTask">
        <li key={key}>{val.task}</li>
        <button onClick={()=> taskComplete(val.task)}>Completed</button>
        <button onClick={()=> taskToDelete(val.task)}>X</button>
        {val.completed?<h1>task completed</h1>:<h1>task not completed</h1>}
        </div>
      )
    })}
    </ul>
    </div>
  );
}

export default App;
