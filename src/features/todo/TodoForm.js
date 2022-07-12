import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./todoSlice";

const TodoForm = () => {
  const [task, setTask] = useState("");

  //to dispatch action in our components
  const dispatch = useDispatch();

  //handling the change in input field
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  //handle the input field
  const handleClick = (e) => {
    e.preventDefault();

    //if the input field is empty or not an alphanumeric string, then event will not fire
    if (task === "" || !task.match(/^[0-9a-zA-z ]+$/)) return;

    //if every condition met, then dispatch addToDo action
    dispatch(addToDo(task));

    //make task again to " " so that input appears blank
    setTask("");
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add Backlog</button>
    </div>
  );
};

export default TodoForm;
