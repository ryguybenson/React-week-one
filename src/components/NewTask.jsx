import React from 'react';

function NewTask(){
  let _task = null;
  function handleNewTaskFormSubmission(event) {
    event.preventDefault();
    props.onNewTaskCreation({task: _task.value, id: v4()})
    _task.value = '';
  }
  return (
    <div>
      <h1>Add A New Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type='text'
          placeholder='Enter Task'
          ref={(input) => {_task = input;}}/>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}
NewTask.proptypes = {
  onNewTaskCreation: Proptypes.func
};
export default NewTask;
