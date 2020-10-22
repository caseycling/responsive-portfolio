import React, { useState } from 'react';
import { useForm } from '@formcarry/react';

import './Contact.css';

function Contact() {
  const [subMsg, setSubMsg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // Call the `useForm` hook in your function component
  const { state, submit } = useForm({
    id: '4kCmNqIcz-'
  })

  function showMsg() {
    setSubMsg(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubMsg(false), 4000);
  }

  return (
    <div className='contact-cont'>
      <div className='contact'>
        <h1>
          <strong>Let's chat</strong>
        </h1>
        <form
          id='contact-form'
          onSubmit={submit}
          method='POST'
        >
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              name='name'
              value={name}
              onChange={event => setName(event.target.value)}
              className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              value={message}
              onChange={event => setMessage(event.target.value)}
              className='form-control'
              rows='5'>
            </textarea>
          </div>
          <button type='submit' className='btn btn-primary' onClick={showMsg}>
            Submit
          </button>
        </form>
        {subMsg ?
          <div className='sub-msg'>Thank you! We received your submission</div>
          : null}
      </div>

      <div className='email'>
        <i className='material-icons ' style={{ fontSize: '80px' }}>
          email
        </i>
        <h2>
          <strong>Or you can email me directly at:</strong>
        </h2>
        <h3>caseyclinga@gmail.com</h3>
      </div>
    </div >
  );
}

export default Contact;
