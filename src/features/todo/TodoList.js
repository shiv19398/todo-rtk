import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "../../components/List";
import { moveRight, moveLeft } from "./todoSlice";

const TodoList = () => {
  //take out the array of tasks from state
  const taskList = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  //move tasks to their right
  const moveToRight = (task, id) => {
    //if task is at stage 3, then it is already done
    if (task.stage === 3) return;

    dispatch(moveRight({ task, id }));
  };

  const moveToLeft = (task, id) => {
    //if task is at stage 0, the it is already in backlog
    if (task.stage === 0) return;

    dispatch(moveLeft({ task, id }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {taskList.map((list) => (
        <List
          key={list.id}
          list={list}
          moveToLeft={moveToLeft}
          moveToRight={moveToRight}
        />
      ))}
    </div>
  );
};

export default TodoList;
