import React from 'react';
import Feed from './Feed';
import Header from './Header'

function App() {

  var textStyle = {
    fontFamily: 'Helvetica',
    color: '#a2a2a2'
  };
  return (
    <div style={textStyle}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
