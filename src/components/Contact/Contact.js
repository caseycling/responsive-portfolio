import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import './Contact.css';

function Contact() {
  return (
    <div className='contact-cont'>
      <div className='contact'>
        <h1>Let's chat</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder='Enter email' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder='Subject' />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Comment</Form.Label>
            <Form.Control as='textarea' rows='13' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
