import React from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import Edit from './Edit';
import NewTask from './NewTask';

function App(){
  return (
    <div>
      <div>
        <Header/>
        <ToDoList/>
        <div>
          <Edit/>
          <NewTask/>
        </div>
      </div>
    </div>
  );
}

export default App;
