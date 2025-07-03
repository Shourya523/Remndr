import { useState } from 'react'
import './index.css'
import Sidebar from './Sidebar'
import MainBody from './MainBody'
import PopUp from './PopUp'

function App() {
  const [name, setName] = useState("");
  const [popup, setPopup] = useState(true);
  const[task,setTask]=useState("");
  return (
    <>
      {popup && (
        <PopUp
          onClose={() => setPopup(false)}
          onTypingName={(e) => setName(e.target.value)}
        />
      )}

      <div className="sidebar-bg">
        <Sidebar name={name} />
      </div>
      <MainBody name={name} />
    </>

  )
}

export default App
