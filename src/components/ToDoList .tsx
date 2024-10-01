import React, { useState } from 'react';
import './ToDoList.css';  



interface ToDo {
  id: number;
  text: string;
  completed: boolean;
  data: Date;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const handleAddToDo = () => {
    const newTask: ToDo = {
      id: todos.length + 1,
      text: newToDo,
      completed: false,
      data: new Date(),
    };
    setTodos([...todos, newTask]);
    setNewToDo("");
  };

  const handleToggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed, data: new Date() } : todo
    ));
  };

  const handleDeleteToDo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setNewToDo("");
    alert("Vazifa o'chirildi");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder="Yangi vazifa kiriting"
          className="todo-input"
        />
        <button
          onClick={handleAddToDo}
          className="todo-button"
        >
          Qo'shish
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            <span
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <span className="todo-date">
              {todo.data.toLocaleString()}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDeleteToDo(todo.id)}
            >
              O'chirish
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
