import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../types/reposTypes";

const initialState: IInitialState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
  currentTodo: undefined,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
    updateTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1, action.payload);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    getTodoById: (state, action) => {
      const currentTodo = state.todos.find(
        (item) => item.id === action.payload
      );
      state.currentTodo = currentTodo;
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { actions } = todosSlice;

export default todosSlice.reducer;
