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
          engineering and take pride in writting elegant, dry code. I am excited
          to apply the skills I've built as a developer in a challenging
          environment where I can grow as a professional and be a positive
          impact as a team member.
        </p>
        <p class='sm-hide'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

export default Bio;
