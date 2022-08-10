import Header from "./componens/Header";
import Tasks from "./componens/Tasks";
import {useState} from 'react'
import AddTask from "./componens/AddTask";
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTask] = useState([
    {
        id: 1,
        text: 'Learn React',
        day: 'Monday',
        reminder: true,
    },
    {id: 2,
        text: 'Learn Node',
        day: 'Tuesday',
        reminder: true,},

        {id: 3,
        text: 'Learn MongoDB',  
        day: 'Wednesday',
        reminder: false,}
])

// Add Task
const addTask = (task) => {
  const id=Math.floor(Math.random()*10000+1)
  const newTask = {...task, id}
  setTask([...tasks, newTask])
    
}

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id))
  }
// toggle reminder for the task
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => 
     task.id===id?{...task, reminder: !task.reminder}:task))
  }

  return (
    <div className="container">
   <Header  onAdd={()=>setShowAddTask(!showAddTask) }showAdd={showAddTask} />
   {showAddTask&& <AddTask onAdd={addTask} />}
   {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No tasks"}
   </div>
  );
}

export default App;
