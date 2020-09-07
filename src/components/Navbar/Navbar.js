import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' className='navBar'>
      <Navbar.Brand style={{ gridColumnStart: '2' }}>C C</Navbar.Brand>
      <Nav style={{ gridColumnStart: '6' }}>
        <Link
          className='link'
          // activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href='#home'
        >
          Home
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          About
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          href='#features'
        >
          Projects
        </Link>
        <Link
          className='link'
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href='#features'
        >
          Contact
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
