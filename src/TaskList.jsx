import TaskItem from "./TaskItem";

const TaskList = ({
  task,
  ondeleteTask,
  onUpdateTask,
  editingIndex,
  setEditingIndex,
}) => {
  return (
    <div className="task-list">
      <ol>
        {task.map((singleTask, index) => (
          <TaskItem
            key={index}
            taskText={singleTask}
            ondeleteTask={() => ondeleteTask(index)}
            onUpdateTask={(newText) => onUpdateTask(index, newText)}
            isEditing={editingIndex === index}
            onEditClick={() => setEditingIndex(index)}
          />
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
