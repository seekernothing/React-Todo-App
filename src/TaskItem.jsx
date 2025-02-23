const TaskItem = ({ taskText, ondeleteTask }) => {
  return (
    <>
      <li>
        {taskText}
        <button onClick={ondeleteTask}>Delete</button>
      </li>
    </>
  );
};

export default TaskItem;
