import React from 'react';
import Feed from './Feed';
import Header from './Header';
import background from '../assets/images/background.jpg';

function App() {
  var container = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };
  return (
    <div style={container}>
      <Header/>
      <div>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
