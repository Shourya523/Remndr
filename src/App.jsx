import { useEffect, useState } from 'react'
import './index.css'
import Sidebar from './Sidebar'
import MainBody from './MainBody'
import PopUp from './PopUp'

function App() {
  const [name, setName] = useState("");
  const [popup, setPopup] = useState(true);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleTyping = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(""); // clear input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent new line
      handleAddTask();
    }
  };
  const toggleTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      {popup && (
        <PopUp
          onClose={() => setPopup(false)}
          onTypingName={(e) => setName(e.target.value)}
        />
      )}
      <div className="sidebar-bg">
        <Sidebar name={name} tasks={tasks} />
      </div>
      <MainBody name={name}
        task={task}
        onTyping={handleTyping}
        onKeyDown={handleKeyDown}
        tasks={tasks}
        toggleTask={toggleTask} />
    </>

  )
}

export default App
