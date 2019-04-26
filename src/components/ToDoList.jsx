import React from 'react';
import ToDo from './ToDo';


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
