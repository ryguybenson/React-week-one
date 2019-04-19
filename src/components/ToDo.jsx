import React from "react";
import PropTypes from "prop-types";

function ToDo(props){
  return (
      <div>
        <h3>{props.tasks} - {props.check} - {props.edit}</h3>
        <hr/>
      </div>
  );
}

ToDo.propTypes = {
  tasks: PropTypes.string.isRequired,
  check: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired
};

export default ToDo;