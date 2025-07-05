function MainBody({ name, task, onTyping, onKeyDown, tasks, toggleTask, greetings, deleteTask, OnAddTask, time, setTime, date, setDate, textDropdown,displayText,changeText }) {

    return (
        <div className="main-body">
            <h2>{greetings}  {name}!</h2>
            <button className="text-options" onClick={textDropdown}>Aa</button>
            {displayText && (<ul className="text-list">
                <button className="Default-text" onClick={()=>{changeText('Plus Jakarta Sans')}}>Default</button>
                <button className="Poppins-text" onClick={()=>{changeText('Poppins')}}>Poppins</button>
                <button className="Consolas-text" onClick={()=>{changeText('Consolas')}}>Consolas</button>
                <button className="Montserrat-text" onClick={()=>{changeText('Montserrat')}}>Monsterrat</button>
                <button className="Fredoka-text" onClick={()=>{changeText('Fredoka One')}}>Fredoka</button>
                <button className="Gloria-text" onClick={()=>{changeText('Gloria Hallelujah')}}>Gloria</button>
            </ul>)}
            <div className="profile-picture"></div>
            <div className="main-body-input">
                <textarea
                    placeholder="Enter your Task"
                    value={task}
                    onChange={onTyping}
                    onKeyDown={onKeyDown}
                />
                <input
                    type="time"
                    className="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                /><div className="custom-clock"></div>
                <input
                    type="date"
                    className="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                /> <div class="custom-date-icon"> </div>
                <button className="add-task"
                    onClick={OnAddTask}></button>
            </div>

            <div className="task-list-scrollable">
                {tasks.length === 0 ? (
                    <p className="no-task-message">No tasks yet. Add something!</p>
                ) : (<ul className="Main-body-task">
                    {tasks.map((t, i) => (
                        <li key={i} className="todo-lists">
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={t.completed}
                                    onChange={() => toggleTask(i)}
                                    className="Todo-checkbox"
                                />
                                <span className="checkmark"></span>
                                <span style={{ color: t.completed ? 'hsl(0 0% 60%)' : 'inherit', textDecoration: t.completed ? "line-through" : "none" }}>
                                    {t.text} {t.time && <span className="time-text-mb"> {t.time}</span>}
                                    {t.date && <span className="date-text-mb"> {t.date}</span>}
                                    <button className="delete-task" onClick={() => deleteTask(i)}></button>
                                </span>

                            </label>
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    );
}

export default MainBody;
