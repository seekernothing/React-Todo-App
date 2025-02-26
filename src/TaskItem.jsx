import { useState, useEffect } from "react";

const TaskItem = ({
  taskText,
  ondeleteTask,
  onUpdateTask,
  isEditing,
  onEditClick,
}) => {
  const [editText, setEditText] = useState(taskText);

  useEffect(() => {
    setEditText(taskText);
  }, [taskText]);

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdateTask(editText);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {taskText}
          <button onClick={onEditClick}>Edit</button>
          <button onClick={ondeleteTask}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
