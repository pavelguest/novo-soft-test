import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducers from "./slice/todos";

const rootReducer = combineReducers({
  todos: todosReducers,
});
export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
