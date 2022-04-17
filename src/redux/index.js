import { createStore } from 'redux'

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (payload)=>{
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = (id)=>{
    return {
        type: DELETE_TODO,
        id
    }
}

const initialState = {
    todos: [],
    counter: 0
}

const todoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] }
        case DELETE_TODO:
            return { todos: [...state.todos.filter((item, id) => id !== action.id)] }
        default:
            return state;
    }
}

export const store = createStore(todoReducer)