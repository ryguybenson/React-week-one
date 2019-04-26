import React from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function ItemList(props) {
  console.log(props.itemList);
  var itemListStyles = {
    padding: '0 20px',
    marginTop: '10vh'
  };

  return (
    <div style={itemListStyles}>
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
