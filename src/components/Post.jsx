import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function Post(props) {
  let _post =null;

  function handleNewPost(event) {
    event.preventDefault();
    console.log(_post.value);
    console.log(props);
    console.log('hello');
    props.onNewPostCreation({post: _post.value, id: v4()});
    _post.value = '';
    console.log(props.onNewPostCreation);
  }

  const postStyle = {
    backgroundColor: '#a6d8f1',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '60px',
    width: '100%'
  };
  const profStyle = {
    backgroundColor: '#740504',
    width: '30px',
    height: '30px',
    margin: '0 10px'
  };

  const formWidth = {
    width: '75%'
  };

  const formStyle = {
    height: '30px',
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'

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
      <div style={profStyle}></div>

      <form style={formWidth}>
        <div style={formStyle}>
          <input style={inputStyle} placeholder='Add Task' type='text'
            ref={(input) => {_post = input;}}/>
        </div>
      </form>
      <button style={buttonStyle} onClick={handleNewPost}>ADD</button>
    </div>
  );
}

Post.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default Post;
