const TaskInput = ({ onInputChange, inputValue, onAddTask }) => {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter your task.."
        value={inputValue}
        onChange={onInputChange}
      />
  <br></br>  <br></br>
      <span>
        <button onClick={onAddTask}>Add task</button>
      </span>
    </div>
  );
};

export default TaskInput;
