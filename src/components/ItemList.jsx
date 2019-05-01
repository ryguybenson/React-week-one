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
  }
  var menu = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: 'auto'
  }


  return (
    <div style={itemListStyles}>
      <h2 style={available}>Available Drinks</h2>
      <div style={menu}>
          {props.itemList.map((item, index) =>
            <Item name={item.name}
              price={item.price}
              content={item.content}
              key={item.id}/>
          )}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
