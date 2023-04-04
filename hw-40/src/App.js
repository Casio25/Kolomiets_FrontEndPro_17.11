import { TodoList } from "./TodoList.js";
import {useState} from "react"
import './App.css';

function App() {
const [todos, setTodos] = useState([
      { id: 1, title: 'First todo', completed: false },
      { id: 2, title: 'Second todo', completed: true },

])
  function addTodo(todoName) {
    const newTodo = {
      id: todos.length + 1,
      title: todoName,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }
    return (
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input type="text" />
          <label>Todo name</label>
          <button onClick={() => addTodo(document.querySelector("input[type='text']").value)}>Add</button>
        </div>

        <TodoList todos={todos} />
      </div>
    )
}

export default App;
