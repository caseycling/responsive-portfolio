import React from 'react';
import { Image } from 'react-bootstrap';
import profile from '../../images/profilePic.jpg';

import './Bio.css';

const Bio = () => {
  return (
    <div className='wrapper'>
      <div className='container' id='about'>
        <Image className='bio-pic' src={profile} alt='casey' />
        <h2>
          <strong>About Me</strong>
        </h2>
        <p>
          I am a full-stack web developer, passionate about turning ideas into
          reality. I enjoy the logical puzzles that come with software
          engineering and the process of building things from scratch, taking pride in writting elegant, dry code. I am excited
          to apply the skills I've built as a developer in an
          environment where I can grow as a professional and make a positive
          impact as a team member.
        </p>
        <p className='sm-hide'>
          Outside of coding, I enjoy spending my time working on cooking projects, reading some dystopian sci-fi novel or grinding away in the woodshop.
        </p>
      </div>
    </div>
  );
};

export default Bio;
