import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function Admin(props){

  let optionalSelectedItemContent = null;
  if (props.selectedItem != null){
    optionalSelectedItemContent =  <ItemDetail selectedTicket={props.itemList[props.selectedItem]}/>;
  }

  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedItemContent}
      <ItemList
        itemList={props.itemList}
        currentRouterPath={props.currentRouterPath} onItemSelection={props.onItemSelection}/>
    </div>
  );
}

Admin.propTypes = {
  itemList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func,
  selectedItem: PropTypes.string
};
export default Admin;
