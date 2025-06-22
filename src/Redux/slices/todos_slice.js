import { createSlice } from "@reduxjs/toolkit";
export const FILTRATION_TYPES = {
  ALL: "All",
  COMPLETED: "Completed",
  IN_PROGRESS: "In Progress",
};
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filter: FILTRATION_TYPES.ALL,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, markAsCompleted, updateFilter, setTodos } =
  todoSlice.actions;
export default todoSlice;
