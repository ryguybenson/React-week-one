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
      <div className="EditAdd">
        <Edit/>
        <NewTask/>
      </div>
      <style jsx>{`
        .EditAdd{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        `}</style>
    </div>
  );
}

export default App;