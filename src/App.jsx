import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList"

import "./App.css";

function App() {
  let [currentTask, setCurrentTask] = useState("");
  let [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
  setCurrentTask(event.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() !== "") {
      setTaskList([...taskList,currentTask]);
      setCurrentTask("")
    }
  };

  const handleDeleteTask =(index)=>{
    const dlt = taskList.filter((_,i)=>
        i!==index)
    setTaskList(dlt)
  }

  return (
    <>
      <h3>Todo App</h3>
      <TaskInput
        onInputChange={handleInputChange}
        inputValue={currentTask}
        onAddTask={handleAddTask}
      />
      <TaskList
        task ={taskList}
        ondeleteTask ={handleDeleteTask}
      />
    </>
  );
}

export default App;
