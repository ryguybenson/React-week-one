import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
      <div>
        <h3>{props.tasks} - {props.check} - {props.edit}</h3>
        <hr/>
      </div>
  );
}

Ticket.propTypes = {
  tasks: PropTypes.string.isRequired,
  check: PropTypes.string.isRequired,
  edit: PropTypes.string.isRequired
};

export default Ticket;