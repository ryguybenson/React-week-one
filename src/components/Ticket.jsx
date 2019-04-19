import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
      <div>
        <h3>{props.pictures}</h3>
        <h3>{props.names}</h3>
        <p><em>{props.prices}</em></p>
        <hr/>
      </div>
  );
}

Ticket.propTypes = {
  pictures: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Ticket;