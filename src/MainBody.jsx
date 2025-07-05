function MainBody({
  name,
  task,
  onTyping,
  onKeyDown,
  tasks,
  toggleTask,
  greetings,
  deleteTask,
  OnAddTask,
  time,
  setTime,
  date,
  setDate,
  textDropdown,
  displayText,
  changeText,
  changeColor,
  displayColor,
  toggleColorOptions,
  editIndex,
  editText,
  setEditText,
  startEdit,
  saveEdit,
}) {
  return (
    <div className="main-body">
      <h2>
        {greetings} {name}!
      </h2>

      <button className="text-options" onClick={textDropdown}>
        Aa
      </button>
      {displayText && (
        <ul className="text-list">
          <button
            className="Default-text"
            onClick={() => {
              changeText("Plus Jakarta Sans");
            }}
          >
            Default
          </button>
          <button
            className="Poppins-text"
            onClick={() => {
              changeText("Poppins");
            }}
          >
            Poppins
          </button>
          <button
            className="Consolas-text"
            onClick={() => {
              changeText("Consolas");
            }}
          >
            Consolas
          </button>
          <button
            className="Montserrat-text"
            onClick={() => {
              changeText("Montserrat");
            }}
          >
            Montserrat
          </button>
          <button
            className="Fredoka-text"
            onClick={() => {
              changeText("Fredoka One");
            }}
          >
            Fredoka
          </button>
          <button
            className="Caveat-text"
            onClick={() => {
              changeText("Caveat");
            }}
          >
            Caveat
          </button>
        </ul>
      )}

      <div className="profile-picture"></div>

      <div className="main-body-input">
        <textarea
          placeholder="Enter your Task"
          value={task}
          onChange={onTyping}
          onKeyDown={onKeyDown}
        />
        <button className="color-options" onClick={toggleColorOptions}>
          <u>A</u>
        </button>
        {displayColor && (
          <ul className="color-palette">
            <button
              className="green-color"
              onClick={() => {
                changeColor("#98bf71");
              }}
            ></button>
            <button
              className="yellow-color"
              onClick={() => {
                changeColor("#ffbb00");
              }}
            ></button>
            <button
              className="default-color"
              onClick={() => {
                changeColor("#b3b3b3");
              }}
            ></button>
          </ul>
        )}
        <input
          type="time"
          className="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <div className="custom-clock"></div>
        <input
          type="date"
          className="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="custom-date-icon"></div>
        <button className="add-task" onClick={OnAddTask}></button>
      </div>

      <div className="task-list-scrollable">
        {tasks.length === 0 ? (
          <p className="no-task-message">No tasks yet. Add something!</p>
        ) : (
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

                  {editIndex === i ? (
                    <input
                      className="edit-task-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onBlur={() => saveEdit(i)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit(i);
                      }}
                      autoFocus
                      style={{
                        color: t.completed
                          ? "hsl(0 0% 60%)"
                          : "inherit",
                        textDecoration: t.completed
                          ? "line-through"
                          : "none",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        color: t.completed
                          ? "hsl(0 0% 60%)"
                          : "inherit",
                        textDecoration: t.completed
                          ? "line-through"
                          : "none",
                      }}
                      onDoubleClick={() => startEdit(i, t.text)}
                    >
                      {t.text}{" "}
                      {t.time && <span className="time-text-mb"> {t.time}</span>}
                      {t.date && <span className="date-text-mb"> {t.date}</span>}
                      <button
                        className="delete-task"
                        onClick={() => deleteTask(i)}
                      ></button>
                    </span>
                  )}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MainBody;
