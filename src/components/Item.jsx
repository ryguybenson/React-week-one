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
    color: '#606060',
    fontSize: '1rem'
  };


  return (
    <div style={itemStyles}>
      <div style={contentStyle}>
        <p>- {props.text}</p>
      </div>
    </div>
  );
}
Item.propTypes = {
  text: PropTypes.string.isRequired
};

export default Item
asdfsafsd
