function TaskCounter({ total, completed }) {
  return (
    <span className="counter">
      {total} / {completed}
    </span>
  );
}
export default TaskCounter;