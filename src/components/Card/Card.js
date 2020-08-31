import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';

function ProjectCard(props) {
  return (
    <div>
      <Card className='card'>
        <Card.Img className='card-img' variant='top' src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant='primary' href={props.code} target='_blank'>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
