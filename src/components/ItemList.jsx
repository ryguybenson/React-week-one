import React from 'react';
import Item from './Item.jsx';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function ItemList(props) {
  console.log(props.itemList);
  var itemListStyles = {
    padding: '0 20px',
    marginTop: '10vh',
    color: 'white',
    textAlign: 'center'
  };
  var available = {
    border: '2px solid red',
    width: '400px',
    margin: 'auto',
    borderRadius: '10px',
    backgroundColor: 'silver',
    color: 'black'
  };
  var menu = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: 'auto'
  };


  return (
    <div style={itemListStyles}>
      <h2 style={available}>Available Drinks</h2>
      <div style={menu}>
        {Object.keys(props.itemList).map(function(itemId) {
          let item = props.itemList[itemId];
          return <Item name={item.name}
            price={item.price}
            content={item.content}
            key={itemId}
            itemId={itemId}
            onItemSelection={props.onItemSelection}
            onDelete={props.onDelete}/>;
        })}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.object,
  onItemSelection: PropTypes.func,
  onDelete: PropTypes.func,
  selectedItem: PropTypes.string
};

export default ItemList;
