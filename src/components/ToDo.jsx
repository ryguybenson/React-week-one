import React from "react";
import PropTypes from "prop-types";

function ToDo(props){
  return (
      <div>
        <h3 className="blue-text">{props.tasks}</h3>
        <style jsx>{`
          .blue-text {
            color: blue;
          }
          `}</style>
        <form className="form">
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
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width:275px
        }
        `}</style>
        <hr/>
      </div>
  );
}

ToDo.propTypes = {
  tasks: PropTypes.string.isRequired,
};

export default ToDo;