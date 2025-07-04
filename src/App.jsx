import { useEffect, useState } from 'react'
import './index.css'
import Sidebar from './Sidebar'
import MainBody from './MainBody'
import PopUp from './PopUp'
import bg1 from './assets/to-do-body-background.jpg';
import bg2 from './assets/to-do-body-background-2.jpg';
import bg3 from './assets/to-do-body-background-3.jpg';
import bg4 from './assets/to-do-body-background-4.jpg';
import bg5 from './assets/to-do-body-background-5.jpg';
import bg6 from './assets/to-do-body-background-6.jpg';



function App() {
  const [name, setName] = useState("");
  const [popup, setPopup] = useState(true);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const addTime = (e) => {
    if (time === "") return;
    else { setTime(e.target.value) };
  };
  const OnAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, {
      text: task,
      completed: false,
      time: time || null,
      date: date || null
    }]);

    setTask("");
    setTime("");
    setDate("");
  };

useEffect(() => {
  const photos = [bg1, bg2, bg3, bg4, bg5, bg6];
  const randomIndex = Math.floor(Math.random() * photos.length);
  const randomPhoto = photos[randomIndex];
  document.body.style.backgroundImage = `url(${randomPhoto})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  return () => {
    document.body.style.backgroundImage = null;
  };
}, []);

const greetings = () => {
  const hour = new Date().getHours();
 if (hour >= 5 && hour < 12) {
  setGreeting('Good Morning');
} else if (hour >= 12 && hour < 16) {
  setGreeting('Good Afternoon');
} else if (hour >= 16 && hour < 20) {
  setGreeting('Good Evening');
} else {
  setGreeting('Hello');
}

};

useEffect(() => {
  greetings();
}, []);
const handleTyping = (e) => {
  setTask(e.target.value);
};

const handleAddTask = () => {
  if (task.trim() === "") return;
  setTasks([...tasks, { text: task, completed: false }]);
  setTask("");
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, {
      text: task,
      completed: false,
      time: time || null,
      date: date || null,
    }]);
    setTask("");
    setTime("");
    setDate("");
  }
};
const handleSubmit = () => {
  handleAddTask();
}
const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);
  setTasks(updatedTasks);
};

const handleKeyDownPopUp = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
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
      OnAddTask={OnAddTask}
      deleteTask={deleteTask}
      time={time}
      setTime={setTime}
      date={date}
      setDate={setDate}
    />

  </>

)
}

export default App
