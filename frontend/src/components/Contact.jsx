import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, subject, date, time, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);

      // Clear form after success
      setName("");
      setEmail("");
      setSubject("");
      setDate("");
      setTime("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="contact container">
      {/* Contact Info Section */}
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>GN Mills, Coimbatore, Tamil Nadu, 641029</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>+91-9342410548</p>
        </div>
        <div className="item">
          <h4>Email Us</h4>
          <p>kasaiabinandhan@gmail.com</p>
        </div>
      </div>

      {/* Map + Contact Form */}
      <div className="banner">
        {/* Google Map */}
        <div className="item">
          <iframe
            title="GN Mills Coimbatore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.123457!2d76.94476!3d11.06030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c244cbb7ff%3A0xabc12345def67890!2sGN%20Mills%2C%20Coimbatore%2C%20Tamil%20Nadu%20641029!5e0!3m2!1sen!2sin!4v1690000000000"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>

            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
