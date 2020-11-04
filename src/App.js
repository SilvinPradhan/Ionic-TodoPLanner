import "./App.css";
// import {BrowserRouter} from 'react-router-dom'
import TodoForm from "./components/Page/TodoForm.component";

function App() {
  return (
    <div className="todo-app">
      <h1 className="todo-title"> Todo Planner</h1>
      <TodoForm />
    </div>
  );
}

export default App;
