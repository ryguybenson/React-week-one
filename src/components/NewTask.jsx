import React from "react";

function NewTask(){
  return (
    <div>
      <h1>Add A New Task</h1>
      <label>
        Enter Task Description:
        <input type="text" name="taskDescription" />
      </label>
    </div>
  );
}

export default NewTask;