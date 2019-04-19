import React from "react";
import ToDo from "./ToDo";

var masterToDoList = [
  {
  tasks: 'Take out the garbage',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Mow the lawn',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Run 2 miles',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Go grocery shopping',
  check: 'checkbox',
    edit: 'edit'
  }
];

function ToDoList(){
  return (
      <div>
        <hr/>
        {masterToDoList.map((toDo, index) =>
          <ToDo tasks={toDo.tasks}
            check={toDo.check}
            edit={toDo.edit}
            key={index}/>
        )}
      </div>
    );
}

export default ToDoList;