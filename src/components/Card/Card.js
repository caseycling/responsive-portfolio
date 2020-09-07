import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';

function ProjectCard(props) {
  return (
    <div className='card-cont'>
      <Card className='card'>
        <Card.Img className='card-img' variant='top' src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button
            className='code-btn'
            variant='primary'
            href={props.code}
            target='_blank'
          >
            Code
          </Button>
          <Button
            className='app-btn'
            variant='primary'
            href={props.code}
            target='_blank'
          >
            App
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
