import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
    <div>
      <div className="form-center">
    <form id="contact-form" onSubmit={handleSubmit}>
        <div className=".form-floating mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="exampleInputEmail1" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className=".form-floating mb-3">
          <label for="exampleInputName" className="form-label">Name</label>
          <input type="text" defaultValue={name} onBlur={handleChange} class="form-control" id="exampleInputName"/>
        </div>
        <div className=".form-floating  mb-3">
          <label for="exampleInputMessage" class="form-label">Message</label>
          <input type="text" className="form-control message-control" name="message" id="exampleInputMessage" defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" class="btn my-btn">Submit</button>
      </form>
      </div>
</div>
  );
}

export default ContactForm;
