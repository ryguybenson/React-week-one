import React from "react";
import ToDo from "./ToDo";

var masterToDoList = [
  {
  tasks: 'Take out the garbage',
  },
  {
  tasks: 'Mow the lawn',
  },
  {
  tasks: 'Run 2 miles',
  },
  {
  tasks: 'Go grocery shopping',
  }
];

function ToDoList(){
  return (
      <div>
        <hr/>
        {masterToDoList.map((toDo, index) =>
          <ToDo tasks={toDo.tasks}
            key={index}/>
        )}
      </div>
    );
}

export default ToDoList;