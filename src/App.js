import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Amer Fahmy',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'big font title',
        subTitile: 'small font title',
        text: 'dummy text'
      },
      about: {
        title: 'About Me',
        
      },
      contact: {
        title: 'Hey, feel free to contact me anytime',
        
      }
    }
  }

  render() {
   return (
    <div>
      Wasssupppppp!!!
    </div>
  ); 
  }
  
}

export default App;
