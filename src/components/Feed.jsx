import React from 'react';
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
    var footer = {
      position: 'fixed',
      bottom: '0',
      width: '100vw'
    };
    var background = {
      backgroundImage: 'url(`../../assets/images/background.jpg`)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    }
    return (
      <div>
        <div style={background}>
          <ItemList itemList={this.state.masterFeed} />
        </div>
        <div style={footer}>
          <Post  onNewPostCreation={this.handleAddingNewPostsToFeed} />
        </div>
      </div>
    );
  }
}

export default Feed;
