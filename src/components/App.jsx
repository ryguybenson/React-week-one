import React from 'react';
import Feed from './Feed';
import Header from './Header';

function App() {
  var container = {
    margin: '-8px'
  };
  return (
    <div style={container}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
