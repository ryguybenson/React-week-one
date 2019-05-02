import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function Post(props) {
  let _name =null;
  let _price =null;
  let _content =null;

  function handleNewPost(event) {
    event.preventDefault();
    props.onNewPostCreation({name: _name.value, price: _price.value, content: _content.value, id: v4()});
    _name.value = '';
    _price.value = '';
    _content.value = '';
    console.log(props.onNewPostCreation);
  }

  const postStyle = {
    backgroundImage: 'linear-gradient(to bottom,#282828,#484848,#282828)',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    width: '100vw',
    margin: 'auto'
  };

  const formWidth = {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const formStyle = {
    height: '30px',
    width: '30%',
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
          <input style={inputStyle} placeholder='Name/Brand' type='text'
            ref={(input) => {_name = input;}}/>
        </div>
        <div style={formStyle}>
          <input style={inputStyle} placeholder='Alcohol Content' type='text'
            ref={(input) => {_content = input;}}/>
        </div>
        <div style={formStyle}>
          <input style={inputStyle} placeholder='Price' type='text'
            ref={(input) => {_price = input;}}/>
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
