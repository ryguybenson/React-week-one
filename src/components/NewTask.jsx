import React from 'react';

function NewTask(){
  let _task = null;
  _task.value = '';
  function handleNewTaskFormSubmission(event) {
    event.preventDefault();
  }
  return (
    <div>
      <h1>Add A New Task</h1>
      <form onSubmit={handleNewTaskFormSubmission}>
        <input
          type='text'
          id='task'
          placeholder='Enter Task'
          ref={(input) => {_task = input;}}/>
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}

export default NewTask;
