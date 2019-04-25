import React from 'react';

function Edit(){
  return (
    <div>
      <h1>Edit Task</h1>
      <form>
        <label>
          Edit Task Description:
          <input type="text" name="taskDescription" />
        </label>
      </form>
      <p>Enter Task Priority (1-3):</p>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option1"
            checked={true}
            className="form-check-input"
          />
            Low Priority
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option2"
            className="form-check-input"
          />
            Medium Priority
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option3"
            className="form-check-input"
          />
            High Priority
        </label>
      </div>
    </div>
  );
}

export default Edit;