import { useEffect, useState } from 'react';
import './index.css';
import { setItems, getItems } from './utils/localStorage';
import Sidebar from './Sidebar';
import MainBody from './MainBody';
import PopUp from './PopUp';
import bg1 from './assets/to-do-body-background.jpg';
import bg2 from './assets/to-do-body-background-2.jpg';
import bg3 from './assets/to-do-body-background-3.jpg';
import bg4 from './assets/to-do-body-background-4.jpg';
import bg5 from './assets/to-do-body-background-5.jpg';
import bg6 from './assets/to-do-body-background-6.jpg';

function App() {
  //take name input and store it into localStorage
  const [name, setName] = useState(()=>
  {
    const item=getItems('name');
    return item||"";
  });
  useEffect(()=>{
    setItems('name',name);
  },[name])
  //check whether name is stored or not, then show popup
const [popup, setPopup] = useState(() => {
  const storedPopup = getItems('popup');
  const storedName = getItems('name');
  // Show popup if name is missing
  if (!storedName || storedName.trim() === '') return true;
  return storedPopup !== null ? storedPopup : true;
});
useEffect(() => {
  setItems('popup', popup);
}, [popup]);

  //store tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(()=>
  {
    const item=getItems('tasks');
    return item||[];
  });
  useEffect(()=>
  {
    setItems('tasks',tasks);
  },[tasks])
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [displayText, setDisplayText] = useState(false);
  const [displayColor, setDisplayColor] = useState(false);
  const [text, setText] = useState('Plus Jakarta Sans');
  const [color, setColor] = useState('#b3b3b3');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [subtaskInputs, setSubtaskInputs] = useState({});
  const[buttonEditSubtask,setbuttonEditSubtask]=useState(false);
  const[showSubtask,setShowSubtask]=useState(true);
  const showSubtaskList=()=>
  {
    setShowSubtask(!showSubtask);
  }
  const buttonaddtask=()=>
  {
    setbuttonEditSubtask(!buttonEditSubtask);
  }

  const startEdit = (i, text) => {
    setEditIndex(i);
    setEditText(text);
  };

  const saveEdit = (i) => {
    if (editText.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[i].text = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText("");
  };

  const toggleColorOptions = () => {
    setDisplayColor(!displayColor);
  };

  const changeColor = (colorCode) => {
    setColor(colorCode);
    document.querySelector('.todo-lists').style.color = colorCode;
  };

  const changeText = (fontname) => {
    setText(fontname);
    document.body.style.fontFamily = `"${fontname}"`;
  };

  const textDropdown = () => {
    setDisplayText(!displayText);
  };

  const OnAddTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
        time: time || null,
        date: date || null,
        subtasks: []
      }
    ]);

    setTask("");
    setTime("");
    setDate("");
  };

  const addSubtask = (taskIndex) => {
    const input = subtaskInputs[taskIndex];
    if (!input || input.trim() === "") return;

    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks.push({ text: input.trim(), completed: false });
    setTasks(updatedTasks);

    setSubtaskInputs({ ...subtaskInputs, [taskIndex]: "" });
  };

  const toggleSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...tasks];
    const subtask = updatedTasks[taskIndex].subtasks[subtaskIndex];
    subtask.completed = !subtask.completed;
    setTasks(updatedTasks);
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (task.trim() === "") return;
      setTasks([
        ...tasks,
        {
          text: task,
          completed: false,
          time: time || null,
          date: date || null,
          subtasks: []
        }
      ]);
      setTask("");
      setTime("");
      setDate("");
    }
  };

  const handleKeyDownPopUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setPopup(false);
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, i) => i !== indexToDelete);
    setTasks(updatedTasks);
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
        textDropdown={textDropdown}
        displayText={displayText}
        changeText={changeText}
        changeColor={changeColor}
        displayColor={displayColor}
        toggleColorOptions={toggleColorOptions}
        editIndex={editIndex}
        editText={editText}
        setEditText={setEditText}
        startEdit={startEdit}
        saveEdit={saveEdit}
        subtaskInputs={subtaskInputs}
        setSubtaskInputs={setSubtaskInputs}
        addSubtask={addSubtask}
        toggleSubtask={toggleSubtask}
        buttonEditSubtask={buttonEditSubtask}
        buttonaddtask={buttonaddtask}
        showSubtaskList={showSubtaskList}
        showSubtask={showSubtask}
      />
    </>
  );
}

export default App;
