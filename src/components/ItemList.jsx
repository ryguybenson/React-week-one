import React from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function ItemList(props) {
  console.log(props.itemList);
  var itemListStyles = {
    padding: '0 20px',
    marginTop: '10vh',
    color: 'white'
  };

  return (
    <div style={itemListStyles}>
      <h2>Available Drinks</h2>
      {props.itemList.map((item, index) =>
        <Item text={item.post}
          key={item.id}/>
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
