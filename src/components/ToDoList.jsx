import React from 'react';
import ToDo from './ToDo';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function ToDoList(props){

  return (
    <div>
      <hr/>
      {props.ToDoList.map((toDo, index) =>
        <ToDo task={toDo.task}
          key={item.id}/>
      )}
    </div>
  );
}
ToDoList.proptypes = {
  toDoList: Proptypes.array
};
export default ToDoList;
