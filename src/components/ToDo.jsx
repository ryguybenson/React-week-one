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
      <p>{props.task}</p>
      <hr style={hr}></hr>
    </div>
  );
}

ToDo.propTypes = {
  tasks: PropTypes.string.isRequired,
};

export default ToDo;
