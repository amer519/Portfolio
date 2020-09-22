import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';

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
        
      <Navbar className='border-bottom' bg='tranparent' expand='lg'>
        <Navbar.Brand>Amer Fahmy</Navbar.Brand>
        <Navbar.Toggle className='border-0' aria-controls='navebar-toggle' />
        <Navbar.Collapse id='navebar-toggle'>
          <Nav className='ml-auto'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>

            <Route path='/' render={() => <HomePage title={this.state.home.title} />} />
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Footer />

      </Container>
    </Router>
  ); 
  }
  
}

export default App;
