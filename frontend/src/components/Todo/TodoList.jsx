import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./todo.css";

const STORAGE_KEY = "syncait_todos_v1";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTodos(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to load todos", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.warn("Failed to save todos", e);
    }
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((t) => t.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const deleteTodo = (id) => {
    setTodos((t) => t.filter((item) => item.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((t) => t.map((item) => (item.id === id ? { ...item, text: newText } : item)));
  };

  return (
    <div className="todo-root">
      <h3 className="todo-title">My To‑Do</h3>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="todo-input"
          placeholder="Add a new task and press Enter"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="todo-add-btn">Add</button>
      </form>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="todo-empty">No tasks yet — add one above.</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
              onEdit={(newText) => editTodo(todo.id, newText)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
