import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';


import './About.css';

const About = () => {
  return (
    <div className='about-cont'>
      <Jumbotron className='jumbotron' id='home'>
        <div className='content'>
          <h1>CASEY CLINGAMAN</h1>
          <h5>FULL-STACK DEVELOPER </h5>
          <h5>BASED OUT OF SEATTLE, WA</h5>
          <Button variant='primary'>
            <Link to='about'
              smooth={true}
              offset={-90}
              duration={500}>
              Learn more
            </Link>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;
