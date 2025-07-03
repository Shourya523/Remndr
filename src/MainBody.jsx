function MainBody({ name, task, onTyping, onKeyDown, tasks, toggleTask }) {
    return (
        <div className="main-body">
            <h2>Good Morning {name}</h2>
            <div className="main-body-input">
                <textarea
                    placeholder="Enter your Task"
                    value={task}
                    onChange={onTyping}
                    onKeyDown={onKeyDown}
                />
            </div>

            <div className="task-list-scrollable">
                <ul className="Main-body-task">
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
                                {t.text}
                            </span>

                        </label>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default MainBody;
