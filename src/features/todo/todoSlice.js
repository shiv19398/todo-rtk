import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      { name: "tasks 1", stage: 0, cid: uuidv4() },
      { name: "tasks 2", stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: "Todo",
    cards: [{ name: "task 3", stage: 1, cid: uuidv4() }],
  },
  {
    id: 3,
    title: "InProgress",
    cards: [{ name: "task 4", stage: 2, cid: uuidv4() }],
  },
  {
    id: 4,
    title: "Done",
    cards: [{ name: "task 5", stage: 3, cid: uuidv4() }],
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTodo = { name: action.payload, stage: 0, cid: uuidv4() };
      state[0].cards = [...state[0].cards, newTodo];
    },

    moveRight: (state, action) => {
      const { task, id } = action.payload;

      let i = state.findIndex((item) => item.id === id);

      //filtering out the element from cards array and returning the new array
      state[i].cards = state[i].cards.filter((item) => item.cid !== task.cid);

      //adding the task to its subsequent stage
      state[i + 1].cards.push({ ...task, stage: task.stage + 1 });
    },

    moveLeft: (state, action) => {
      const { task, id } = action.payload;
      let i = state.findIndex((item) => item.id === id);

      state[i].cards = state[i].cards.filter((item) => item.cid !== task.cid);

      //adding to the backlog stage
      state[0].cards.push({ ...task, stage: 0 });
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, moveRight, moveLeft } = todoSlice.actions;
