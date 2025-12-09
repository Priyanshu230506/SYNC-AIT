import React, { useState } from "react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const save = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onEdit(trimmed);
    setEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        aria-label={`Mark ${todo.text} ${todo.completed ? "incomplete" : "complete"}`}
      />

      {!editing ? (
        <div className="todo-text" onDoubleClick={() => setEditing(true)}>
          {todo.text}
        </div>
      ) : (
        <div className="todo-edit">
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={save}>Save</button>
          <button onClick={() => { setEditing(false); setValue(todo.text); }}>Cancel</button>
        </div>
      )}

      <button className="todo-delete" onClick={onDelete} aria-label={`Delete ${todo.text}`}>
        ×
      </button>
    </div>
  );
};

export default TodoItem;
