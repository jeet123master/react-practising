import React, {useState} from 'react';


function Todo() {
  const [todo, setTodo] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }
  const addTask = () => {
    setTodo([...todo, newTask]);
    
  }

  const deleteTask = (taskName) => {
    setTodo(todo.filter((task) => task !== taskName));
  }
  
  return (
    <div className="Todo">
        <div className='addTask'>
            <input 
              type="text"
              onChange={handleChange} 
            />
            <button
              onClick={addTask}
            >
              Add Task
            </button>
        </div>
        <div className='listTask'>
          {todo.map((task) => {
            return (
              <div>
                <h1>{task}</h1>
                <button
                  onClick={() => deleteTask(task)}
                >X</button>
              </div>
            )
              
          })}
        </div>
    </div>
  );
}

export default Todo;
