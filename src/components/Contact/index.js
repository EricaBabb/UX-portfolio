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

      <div className="form-container">
    <form class="contact-form" onSubmit={handleSubmit}>
          <input type="text" defaultValue={name} placeholder='Full Name'  onChange={handleChange} /><br></br>
          <input type="email" defaultValue={email} placeholder='Email'  onChange={handleChange} /><br></br>
          <textarea id="message" placeholder="Message" required cols="30" rows="10" id="exampleInputMessage" defaultValue={message} onBlur={handleChange}></textarea>
          <input type="submit" className="submit" value="Send Message" />
        {errorMessage && (
          <div>
            <p className="error-text" style={{color:"red",fontWeight:"bold"}}>*{errorMessage}</p>
          </div>
        )}
      </form>
      </div>
</div>
</section>
  );
}

export default ContactForm;
