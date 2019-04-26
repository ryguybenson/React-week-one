import React from 'react';

function Header(){

  var header = {
    textAlign: 'center',
    width: '100vw',
    color: '#f0f0f0',
    marginTop: '4vh'
  };
  var bottomHeader = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };
  var selected = {
    textDecoration: 'underline'
  }
  return (
    <div style={header}>
      <div>
        <h1>Tap Room</h1>
      </div>
      <div style={bottomHeader}>
        <h3 style={selected}>Menu</h3>
        <h3>Events</h3>
        <h3>About</h3>
        <h3>contacts</h3>
      </div>
    </div>
  );
}

export default Header;
