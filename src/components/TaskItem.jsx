function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-text" onClick={() => onToggle(task.id)}>
        {task.text}
      </span>
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        &times;
      </button>
    </li>
  );
}
export default TaskItem;