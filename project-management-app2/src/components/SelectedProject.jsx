import { useState, useRef } from "react";
import Tasks from "./Tasks";

export default function SelectedProject ({
    project, 
    onDelete, 
    onAddTask, 
    onDeleteTask,
    tasks
   }) {
   const [tasksState, setTasks] = useState({
    id: undefined,
    tasks: []
   });
 
   const taskName = useRef();

   function createTask (taskN) {
    setTasks(prevState => {
        const taskId = Math.random();
        const newTask = {
           name: taskN,
           id:  taskId
        }
        return {
            ...prevState,
            tasks: [...prevState.tasks, newTask],
            id: undefined

        };
    })
   }
   
   function handleSaveTask(){
    const enteredTaskName = taskName.current.value;
    createTask(enteredTaskName);
   }

    const formarmattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
   });
       const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                    <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                 <p className="mb-4 text-stone-400 ">{formarmattedDate}</p>
                 <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            TASKS
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
            
        </div>

    )
}