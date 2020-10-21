import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-cont'>
      <div className='contact'>
        <h1>
          <strong>Let's chat</strong>
        </h1>
        <form
          id='contact-form'
          // onSubmit={this.handleSubmit.bind(this)}
          method='POST'
        >
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              aria-describedby='emailHelp'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea className='form-control' rows='5'></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
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
    </div>
  );
}

export default Contact;
