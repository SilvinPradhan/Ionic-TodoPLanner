import { useState } from "react"
import React from 'react'
import TodoForm from "../Page/TodoForm.component";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodo = [todo, ...todos];

        setTodos(newTodo);
        console.log(todo, ...todos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
