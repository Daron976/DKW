import React, { useState } from 'react';
import Footer from './footer';

const Contact = () => {
  const [fillMsg, setFillMsg] = useState(false);

  const [name, setName] = useState(false);
  const [nameVal, setNameVal] = useState('');

  const [email, setEmail] = useState(false);
  const [emailVal, setEmailVal] = useState('');

  const [msg, setMsg] = useState(false);
  const [msgVal, setMsgVal] = useState('');

  const isFilled = (e) => {
    if (
      (name === false)
        || (email === false)
        || (msg === false)
    ) {
      e.preventDefault();
      setFillMsg(true);
    } else {
      setFillMsg(false);
    }
  };

  return (
    <section id="contact" className="flex">
      <div className="contact-submision">
        <h2>Get In Touch</h2>
        <form
          action="https://formspree.io/f/mwkzplvb"
          name="contact-form"
          id="form-submission"
          className="contact-form flex"
          method="post"
        >
          <div className="form-input flex">
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={nameVal}
                onChange={(e) => {
                  setNameVal(e.target.value);
                  setName(true);
                }}
              />
            </label>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={emailVal}
                onChange={(e) => {
                  setEmailVal(e.target.value);
                  setEmail(true);
                }}
              />
            </label>
          </div>
          <label htmlFor="message">
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              // value={msgVal}
              onChange={(e) => {
                setMsgVal(e.target.value);
                setMsg(true);
              }}
            >
              {msgVal}
            </textarea>
          </label>
          <div
            className="error-msg flex"
            style={{
              display: fillMsg ? 'flex' : 'none',
            }}
          >
            <p>Please ensure that all fields are filled</p>
          </div>
          <div className="form-submission flex">
            <button
              type="submit"
              id="submit"
              className="btn"
              name="submit"
              onClick={isFilled}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
