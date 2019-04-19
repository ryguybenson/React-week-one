import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Edit from "./Edit";
import NewTask from "./NewTask";

function App(){
  return (
    <div>
      <Header/>
      <ToDoList/>
      <Edit/>
      <NewTask/>
    </div>
  );
}

export default App;