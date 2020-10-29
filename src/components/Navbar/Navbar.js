import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class NavBar extends React.Component {
  state = {
    isMobile: false
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 700
      });
    }, false);
  }

  render() {
    const brandClass = this.state.isMobile ? 'mx-auto' : 'mr-auto';
    return (
      <Navbar className='navBar'>
        <Navbar.Brand className={brandClass} style={{ color: 'white' }} >
          C C
      </Navbar.Brand>

        <Nav >
          <Link
            className='link'
            to='home'
            smooth={true}
            offset={-70}
            duration={500}
            href='#home'
          >
            Home
        </Link>
          <Link
            className='link'
            to='about'
            smooth={true}
            offset={-90}
            duration={500}
            href='#features'
          >
            About
        </Link>
          <Link
            className='link'
            to='projects'
            smooth={true}
            offset={-95}
            duration={500}
            href='#features'
          >
            Projects
        </Link>
          <Link
            className='link'
            to='contact'
            smooth={true}
            offset={0}
            duration={500}
            href='#features'
          >
            Contact
        </Link>
        </Nav>
      </Navbar>
    )
  }
};

export default NavBar;
