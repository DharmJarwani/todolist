import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();

    if (!toname) return;

    if (!todolist.includes(toname)) {
      setTodolist([...todolist, toname]);
      event.target.reset();
    } else {
      alert(`ToDo List already contains "${toname}"`);
    }
  };

  const deleteTodo = (index) => {
    const updatedList = todolist.filter((_, i) => i !== index);
    setTodolist(updatedList);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="Enter your todo..." />
        <button type="submit">Save</button>
      </form>

      <div className="todo-list">
        {todolist.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{index + 1} {todo}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
