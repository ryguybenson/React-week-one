import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Edit from "./Edit";

function App(){
  return (
    <div>
      <Header/>
      <ToDoList/>
      <Edit/>
    </div>
  );
}

export default App;