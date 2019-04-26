import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function Post(props) {
  let _post =null;

  function handleNewPost(event) {
    event.preventDefault();
    props.onNewPostCreation({post: _post.value, id: v4()});
    _post.value = '';
    console.log(props.onNewPostCreation);
  }

  const postStyle = {
    backgroundImage: 'linear-gradient(to bottom,#282828,#484848,#282828)',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    width: '100%'
  };

  const formWidth = {
    width: '75%',
    display: 'flex',
    alignItems: 'center'
  };

  const formStyle = {
    height: '30px',
    width: '100%',
    backgroundColor: '#fff',
  };
  const inputStyle = {
    paddingLeft: '20px',
    backgroundColor: '#fff',
    height: '100%',
    width: 'calc(100% - 22px)',
  };

  const buttonStyle ={
    marginLeft: '10px'
  };

  return (
    <div style={postStyle}>
      <form onSubmit={handleNewPost} style={formWidth}>
        <div style={formStyle}>
          <input style={inputStyle} placeholder='Add Task' type='text'
            ref={(input) => {_post = input;}}/>
        </div>
        <button style={buttonStyle} type='submit'>ADD</button>
      </form>
    </div>
  );
}

Post.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default Post;
