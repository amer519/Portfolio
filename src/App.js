import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav'

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
    <Router>
      <Container className='p-0' fluid={true}>
        
      <Navbar className='border-bottom'>
        <Navbar.Brand>Amer Fahmy</Navbar.Brand>
        <Navbar.Toggle aria-controls='navebar-toggle' />
        <Navbar.Collapse id='navebar-toggle'>
          <Nav>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      </Container>
    </Router>
  ); 
  }
  
}

export default App;
