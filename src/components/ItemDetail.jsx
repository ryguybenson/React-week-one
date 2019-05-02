import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedItem.name} - {props.selectedItem.price}</h1>
      <h4><em>{props.selectedItem.content}</em></h4>
      <hr/>
    </div>
  );
}
ItemDetail.propTypes = {
  selectedItem: PropTypes.object
};

export default ItemDetail;
