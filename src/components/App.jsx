import React from 'react';
import ToDoList from './ToDoList';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: []
    };
    this.handleAddingNewTaskToMasterTaskList = this.handleAddingNewTaskToMasterTaskList.bind(this);
  }

  handleAddingNewTaskToMasterTaskList(newTask){
  console.log('function triggered', newTask);
  var newMasterTaskList = this.state.masterTaskList.slice();
  newMasterTaskList.push(newTask);
  this.setState({masterTaskList: newMasterTaskList});
}

render(){

  var editAdd = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }

    return (
      <div>
        <NewTask onNewTaskCreation={this.handleAddingNewTaskToMasterTaskList} />
        <ToDoList toDoList={this.state.masterTaskList} />
      </div>
    );
  }
}

export default App;
