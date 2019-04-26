import React, { Component } from 'react';
import ItemList from './ItemList';
import Post from './Post';

class Feed extends React.Component {

  constructor() {
    super();
    this.state = {
      masterFeed: []
    };

    this.handleAddingNewPostsToFeed = this.handleAddingNewPostsToFeed.bind(this);
  }

  handleAddingNewPostsToFeed(newPost){
    console.log('function triggered', newPost);
    var newMasterFeed = this.state.masterFeed.slice();
    newMasterFeed.push(newPost);
    this.setState({masterFeed: newMasterFeed});
  }



  render(){
    var feedStyles = {
      border: '2px solid #ccc'
    };
    return (
      <div style={feedStyles}>
        <Post  onNewPostCreation={this.handleAddingNewPostsToFeed} />
        <ItemList itemList={this.state.masterFeed} />
      </div>
    );

  }
}

export default Feed;
