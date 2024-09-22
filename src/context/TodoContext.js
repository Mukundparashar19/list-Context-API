import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //Properties
    todos:[
        {
            id: 1,
            todo: 'Todo msg',
            completed: false,
        }
    ],
    //functionality we will decide what this fx will do in our app.jsx or some ware else
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider