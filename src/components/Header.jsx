import React from 'react';

function Header(){

  var header = {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(to bottom,#282828,#484848,#282828)',
    position: 'fixed',
    top: '0',
    height: '10vh',
    width: '100vw',
    color: '#f0f0f0'
  };

  return (
    <div>
      <div style={header}>
        <h1>Your To-Do List</h1>
      </div>
    </div>
  );
}

export default Header;
