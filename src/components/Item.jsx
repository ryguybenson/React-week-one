import React from 'react';
import PropTypes from 'prop-types';


function Item(props) {
  const itemStyles = {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 5px 0px 5px',
    alignItems: 'flex-start'
  };
  const picStyle = {
    width: '40px',
    height: '40px',
    marginRight: '20px'
  };
  const contentStyle = {
    marginTop: '0px',
    color: '#606060',
    fontSize: '.9rem'
  };
  return (
    <div style={itemStyles}>
      <img style={picStyle} src='https://source.unsplash.com/random/75x75' alt="pic"/>
      <div style={contentStyle}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
Item.propTypes = {
  text: PropTypes.string.isRequired
};

export default Item;
