import React from 'react';
import PropTypes from 'prop-types';

function ToDo(props){

  var blueText = {
    color: "#228DFF",
    paddingLeft: "10px"
  }
  var form = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "275px"
  }
  var hr = {
    width: "92vw"
  }
  return (
    <div>
      <h3 style={blueText}>{props.tasks}</h3>
      <form style={form}>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            Check When Completed
          </label>
        </div>

        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Edit
          </button>
        </div>

      </form>
      <hr style={hr}></hr>
    </div>
  );
}

ToDo.propTypes = {
  tasks: PropTypes.string.isRequired,
};

export default ToDo;
