import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section className="contact-section">
      <div className="heading">
        <h1>Say Hi!</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>

      <div className="contact-container">
        {/* Left Side Form */}

        <div className="form-box">
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="eg. Jack" />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="eg. Sparrow" />
            </div>
          </div>

          <div className="input-group full-width">
            <label>Email</label>
            <input type="email" placeholder="eg. jack123@mail.com" />
          </div>

          <div className="input-group full-width">
            <label>Your Message</label>
            <textarea rows="5"></textarea>
          </div>

          <button className="send-btn">SEND MESSAGE</button>
        </div>

        {/* Right Side Contact Info */}

        <div className="info-box">
          <h2>Contact Information</h2>

          <p>
            Fill up the form and our team will get back to you within 24
            hours.
          </p>

          <div className="info-item">
            <span>📞</span>
            <p>+91 9363468371</p>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <p>mrjacksparrow003@mail.com</p>
          </div>

          <div className="info-item">
            <span>🎫</span>
            <p>Open Support Ticket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;