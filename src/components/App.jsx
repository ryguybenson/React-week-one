import React from 'react';
import Feed from './Feed';
import Header from './Header';
import background from '../assets/images/background.jpg';

function App() {
  var container = {
    margin: '-8px',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  };
  return (
    <div style={container}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
