import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import Edit from "./Edit";
import NewTask from "./NewTask";

function App(){
  return (
    <div>
      <div className="gray">
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
      <style jsx>{`
        .gray {
          background-color: lightgray;  
          padding-bottom: 20px;
          padding-top: 20px;
        }
        `}</style>
    </div>
  );
}

export default App;