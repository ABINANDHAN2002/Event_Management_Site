import React, { useState } from "react";
import { GiZBrick } from "react-icons/gi";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const submsg = () => {
    if (!email.trim()) {
      alert("Please enter your email!");
      return;
    }
    setMessage("Thanks for subscribing!");
    setEmail(""); // optional: clear the input
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Event</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>Newsletter</label>
          <div>
            <input
            id='email'
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={submsg}>Subscribe</button>
          </div>
          <p>{message}</p>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
