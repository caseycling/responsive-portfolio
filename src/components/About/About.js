import React from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';

import github from '../../images/githubLogo.png';
import linkedin from '../../images/linkeInLogo.png';

import './About.css';

const About = () => {
  return (
    <div className='about-cont'>
      <Jumbotron className='jumbotron'>
        <div className='content'>
          <h1>Casey Clingaman</h1>
          <h5>Full-Stack Developer</h5>
          <a href='https://github.com/caseycling/'>
            <Image src={github} alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/casey-clingaman-b670b5177/'>
            <Image src={linkedin} alt='linkedin' />
          </a>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant='primary'>Learn more</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;
