import React from 'react';
import github from '../../images/githubLogo.png';
import facebook from '../../images/facebookLogo.png';
import linkedin from '../../images/linkeInLogo.png';

import './Social.css';

function Social() {
  return (
    <div className='social-cont'>
      <h2>Casey Clingaman's Social Stuff</h2>
      <h6>Links to my Github, Facebook and LinkedIn.</h6>
      <a href='https://github.com/caseycling/'>
        <img
          src={github}
          alt='github'
          style={{ height: '80px', marginLeft: '.5rem' }}
        />
      </a>

      <a href='facebook.com'>
        <img
          src={facebook}
          alt='facebook'
          style={{ height: '80px', marginLeft: '.5rem' }}
        />
      </a>
      <a href='https://www.linkedin.com/in/casey-clingaman-b670b5177/'>
        <img
          src={linkedin}
          alt='linkedin'
          style={{ height: '80px', marginLeft: '.5rem' }}
        />
      </a>
    </div>
  );
}

export default Social;
