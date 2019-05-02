import React from 'react';
import ItemList from './ItemList';
import Post from './Post';
import { v4 } from 'uuid';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterFeed: [],
      selectedItem: null
    };

    this.handleAddingNewPostsToFeed = this.handleAddingNewPostsToFeed.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddingNewPostsToFeed(newPost){
    let newItemId = v4()
    let newMasterFeed = Object.assign({},this.state.masterFeed, {
      [newItemId]: newPost
    })
    this.setState({masterFeed: newMasterFeed})
  };

  handleDelete() {
    alert('What should I splice?!?!?!?!?');
    var newMasterItemList = Object.assign({}, this.state.masterFeed);
    console.log(Object.assign({}, this.state.masterFeed))
  }

  handleSelectedItem(){
    alert('hi')
  }

  render(){
    var footer = {
      position: 'fixed',
      bottom: '0',
      width: '100vw'
    };

    return (
      <div>
        <div>
          <ItemList itemList={this.state.masterFeed}
          onItemSelection={this.state.handleSelectedItem}
            selectedItem={this.state.selectedItem}
          onDelete={this.handleDelete} />
        </div>
        <div style={footer}>
          <Post  onNewPostCreation={this.handleAddingNewPostsToFeed} />
        </div>
      </div>
    );
  }
}

export default Feed;
