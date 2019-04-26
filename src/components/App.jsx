import React from 'react';
import Feed from './Feed';
import Header from './Header';

function App() {
  var container = {
    margin: '-8px',
    backgroundImage: 'url(`../.././assets/images/background.jpg`)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundColor: 'blue'
  };
  return (
    <div style={container}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
