import React from 'react';

function Header(){

  var header = {
    textAlign: "center"
  }
  
  return (
    <div>
      <div style={header}>
        <h1>Your To-Do List</h1>
      </div>
    </div>
  );
}

export default Header;
