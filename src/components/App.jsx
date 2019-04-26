import React from 'react';
import Feed from './Feed';
import Header from './Header';
import background from '../assets/images/background.jpg';

function App() {
  var container = {
    margin: '-8px',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'silver',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  };
  return (
    <div style={container}>
      <Header/>
      <Feed/>
      <p> sdfjhlldskskl
      dfgdfsgfd

      fd
      dfgdfsgfdfdg
      dfg
      fd
      d</p>
      <h3>hfdklsjghkdfghdfkghsdhfkdhfg</h3>
      <h1>dfhdhgdhsdf dfgdfsgfdfdgfg
       dfgdfsgfd dfgh</h1>
    </div>
  );
}

export default App;
