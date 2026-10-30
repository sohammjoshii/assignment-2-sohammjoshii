import { useState } from 'react';
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    // Reject empty or whitespace-only inputs
    if (!trimmedText) {
      return;
    }
    onAddTask(trimmedText);
    setText('');
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;