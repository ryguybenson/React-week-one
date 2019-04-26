import React from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import Edit from './Edit';
import NewTask from './NewTask';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: []
    };
  }
  var editAdd = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
  return (
    <div>
      <div>
        <Header/>
        <Route exact path='/' component={TaskList} />
        <div style={editAdd}>
          <Edit/>
          <NewTask/>
        </div>
      </div>
    </div>
  );
}

export default App;
