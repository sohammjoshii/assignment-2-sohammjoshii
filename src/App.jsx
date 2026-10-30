import { useState } from 'react';
import './App.css'


// imported the components we created
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


import menuIcon from './assets/menu_icon.png';
import searchIcon from './assets/search_icon.png';
import checkIcon from './assets/check_icon.png';
import inboxIcon from './assets/inbox_icon.png';
import calendarIcon from './assets/calendar_icon.png';
import upcomingIcon from './assets/upcoming_icon.png';

// Task from Assignment 1
const initialTasks = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
];

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.
function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });


  return (
    <div className="app">
      {/*<h1>Sohamms Task Manager</h1>*/}
      <header className="sohamm_header">
        <div className="header-left">
          <img src={menuIcon} alt="Menu" className="menu-icon" />
          <div className="search-bar">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Quick find" />
          </div>
        </div>
        <div className="header-right">
          <img src={checkIcon} alt="Completed" className="check-icon" />
          <TaskCounter total={totalCount} completed={completedCount} />
        </div>
      </header>
      {/* Main Container */}
      <div className="container">
        {/* Sidebar from Assignment 1 */}
        <nav className="sidebar">
          <ul className="nav-links">
            <li>
              <img src={inboxIcon} alt="Inbox" />
              <span>Inbox</span>
              <span className="count">{tasks.length}</span>
            </li>
            <li>
              <img src={calendarIcon} alt="Today" />
              <span>Today</span>
              <span className="count">{tasks.length}</span>
            </li>
            <li>
              <img src={upcomingIcon} alt="Upcoming" />
              <span>Upcoming</span>
            </li>
          </ul>
        </nav>
        {/* Main Content Area */}
        <main className="main-content">
          <section className="task-section">
            <h1>Inbox</h1>
            {/* Filter buttons: All | Active | Completed */}
            <div className="filter-bar">
              <button
                type="button"
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <span className="filter-separator">|</span>
              <button
                type="button"
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
              >
                Active
              </button>
              <span className="filter-separator">|</span>
              <button
                type="button"
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
            {/* Form for adding a task */}
            <TaskForm onAddTask={handleAddTask} />
            {/* List of tasks */}
            <TaskList
              tasks={filteredTasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
