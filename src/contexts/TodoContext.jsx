import React, { createContext, useContext, useState, useEffect } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    //todos state
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, {
            id: Date.now(),
            ...todo
        }])
    }
    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
        )
        // setTodos(
        //     todos.map((prevTodo) => {
        //         if (prevTodo.id === id) {
        //             return todo;
        //         }
        //         return prevTodo;
        //     })
        // )
    }
    const deleteTodo = (id) => {
        setTodos((prev) =>
            prev.filter((todo) => todo.id !== id)
        )
    }
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
        )
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;

