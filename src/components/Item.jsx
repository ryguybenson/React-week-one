import React from 'react';
import PropTypes from 'prop-types';


function Item(props) {
  const itemStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 5px 0px 5px',
    alignItems: 'flex-start'
  };
  const contentStyle = {
    marginTop: '0px',
    backgroundColor: 'silver',
    color: 'black',
    width: '45vw',
    maxWidth: '400px',
    border: '2px solid red',
    borderRadius: '10px'
  };

  return (
    <div style={itemStyles}>
      <div style={contentStyle}>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}
Item.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ticketId: PropTypes.string
};

export default Item;
