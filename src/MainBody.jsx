function MainBody({ name, task, onTyping, onKeyDown, tasks, toggleTask,greetings, onClick, deleteTask }) {

    return (
        <div className="main-body">
            <h2>{greetings}  {name} !</h2>
            <div className="main-body-input">
                <textarea
                    placeholder="Enter your Task"
                    value={task}
                    onChange={onTyping}
                    onKeyDown={onKeyDown}
                /> <button className="add-task"
                onClick={onClick}></button>
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
                                    {t.text} <button className="delete-task" onClick={()=>deleteTask(i)}></button>
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
