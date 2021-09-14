import React,{useState,useCallback} from 'react';
import './App.css';
import TaskCard from './components/TaskCard'

export type TaskType = {
  id: number
  taskName: string
}

const App: React.FC = () => {

  const [tasks , setTasks] = useState<Array<TaskType>>([])
  const [input , setInput] = useState<string>('')
  const handleOnSubmit =(e: React.FormEvent<HTMLFormElement>)=> {
    if(!!input){
      setTasks([...tasks, {id: Math.floor(Math.random() * 1000000000) + 1,taskName: input }])
      e.preventDefault();
      setInput('')
      return
    }
    e.preventDefault();
    return 
  }

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleTasksOnChange = (e:React.ChangeEvent<HTMLInputElement>, id: number) => {
    const chantasksAfterChange = tasks.map((task,index)=> {
      if(task.id === id){
        return {...task, taskName: e.target.value}
      }
      return task
    })
    setTasks(chantasksAfterChange)
  }

  const handleOnClick = useCallback((id: number) => {
    const tasksAfterDelete: TaskType[] = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(tasksAfterDelete)
  },[tasks])

  const handleOnBlur = useCallback(() => {
    const tasksDeleteInputNull: TaskType[] = tasks.filter(task => {
      return task.taskName.length !== 0
    })
    setTasks(tasksDeleteInputNull)
  },[tasks])

  return (
    <form onSubmit={handleOnSubmit}>
      <label>Task Name</label>
        <input type="text" value={input} onChange={handleOnChange} style={{margin: '0 0 10px 0'}}/>
        <input type="submit" value="Register Task!!"/>
          {tasks && tasks.map((task,index)=> (
            <TaskCard task={task}  onChange={(e)=>handleTasksOnChange(e, task.id)} onClick={() => handleOnClick(task.id)} onBlur={() => handleOnBlur()} />
          ))}
    </form>
  )
}

export default App;