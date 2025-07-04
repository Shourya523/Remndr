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
  const [greeting, setGreeting] = useState('');

  const greetings = () => {
    const hour = new Date().getHours(); // 0–23
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 16) setGreeting('Good Afternoon');
    else if (hour < 20) setGreeting('Good Evening');
    else setGreeting('Good Night');
  };

  useEffect(() => {
    greetings(); // Call it when component loads
  }, []);
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
  }
  const handleSubmit = () => {
    handleAddTask();
  }
  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);
  setTasks(updatedTasks);
};

  const handleKeyDownPopUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent new line
      setPopup(false);
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
          onKeyDown={handleKeyDownPopUp}
        />
      )}
      <div className="sidebar-bg">
        <Sidebar name={name} tasks={tasks} />
      </div>
      <MainBody
        greetings={greeting}
        name={name}
        task={task}
        onTyping={handleTyping}
        onKeyDown={handleKeyDown}
        tasks={tasks}
        toggleTask={toggleTask}
        onClick={handleSubmit}
        deleteTask={deleteTask} />
    </>

  )
}

export default App
