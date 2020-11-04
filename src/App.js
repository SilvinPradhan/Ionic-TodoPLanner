import "./App.css";
// import {BrowserRouter} from 'react-router-dom'
import TodoList from "./components/todo/todoList.component";

function App() {
  return (
    <div className="todo-app">
      <h1 className="todo-title"> Todo Planner</h1>
      <TodoList />
    </div>
  );
}

export default App;
