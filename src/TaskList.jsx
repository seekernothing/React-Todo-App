import TaskItem from "./TaskItem";
const TaskList = ({task,ondeleteTask})=>{

    return(
        <div className="task-list">

        <ol>
           { task.map((singleTask,index)=>(
                <TaskItem
                    key={index}
                    taskText ={singleTask}
                    ondeleteTask ={()=>ondeleteTask(index)}

                />
            ))}
        </ol>

        </div>
    )
}

export default TaskList;