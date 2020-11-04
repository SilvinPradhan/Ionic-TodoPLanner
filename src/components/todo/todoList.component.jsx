import { useState } from "react"
import React from 'react'
import TodoForm from "../Page/TodoForm.component";
import Todo from "./todo.component";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodo = [todo, ...todos];

        setTodos(newTodo);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updateTodos)
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr)
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
