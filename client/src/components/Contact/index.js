import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({});

  const form = document.querySelector(".contact-form");

  const handleSubmit = (event) => {
    event.preventDefault();

    let name = document.getElementById("name");
    let subject = document.getElementById("subject");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
  
    let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    fetch("http://localhost:3001", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    });
  };

  // let xhr = new XMLHttpRequest();
  // xhr.open('POST','/');
  // xhr.setRequestHeader('content-type','application/json');
  // xhr.onload = function(){
  //   console.log(xhr.responseText);
  //   if(xhr.responseText = 'success') {
  //     alert('Email sent');
  //     name.value = '';
  //     email.value = '';
  //     subject.value = '';
  //     message.value = '';
  //   }
  //   else {
  //     alert('Something went wrong!');
  //   }
  //   xhr.send(JSON.stringify(formData));
  // }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact-background" idName="contact">
      <div>
        <h1 className="pg-title mb-1 magenta">
          <em>CONTACT</em>
        </h1>

        <div className="form-container">
          <form class="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <br></br>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              onChange={handleChange}
            />
            <br></br>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <br></br>
            <textarea
              id="message"
              placeholder="Message"
              required
              cols="30"
              rows="10"
              idName="exampleInputMessage"
              onBlur={handleChange}
            ></textarea>
            <input type="submit" className="submit" value="Send Message" />
            {errorMessage && (
              <div>
                <p
                  className="error-text"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  *{errorMessage}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
