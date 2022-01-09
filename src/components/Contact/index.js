import { bottom } from '@popperjs/core';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="contact-background" idName="contact">
    <div>
      <h1 className="pg-title mb-1 magenta"><em>CONTACT</em></h1>

      <div className="form-center">
    <form id="contact-form" onSubmit={handleSubmit}>
        <div className=".form-floating mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" placeholder='Email' required className="form-control p-3" id="exampleInputEmail1" defaultValue={email} onChange={handleChange} />
        </div>
        <div className=".form-floating mb-3">
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" defaultValue={name} placeholder='Name'  onChange={handleChange} class="form-control p-3" id="exampleInputName"/>
        </div>
        <div className=".form-floating  mb-3">
          <label for="exampleInputMessage" class="form-label">Message</label>
          <input type="text" placeholder='Message' required className="form-control message-control p-4" name="message" id="exampleInputMessage" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" style={{color:"red",fontWeight:"bold"}}>*{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn my-btn">Submit</button>
      </form>
      </div>
</div>
</section>
  );
}

export default ContactForm;
