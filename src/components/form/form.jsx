import React from "react";
import "./form.css";
import lets from "./lets.png";

const Form = () => {
  return (
    <section className="contact-section">
      <div className="heading">
      <img src={lets} alt="png"/>
        
        <h2>Let's Connect!</h2>
        <p>I'm always open to discussing new oportunities or intresting projects!</p>
      </div>

      <div className="contact-container">

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

        <div className="info-box">
          <h2>Contact Information</h2>

          <p>
            Fill up the form and our team will get back to you within 24
            hours.
          </p>

          <div className="info-item">
            <p>➣ +91 93XXXXXXXX</p>
          </div>

          <div className="info-item">
            <p>➣ mrjacksparrow003@mail.com</p>
          </div>

          <div className="info-item">
            <p>➣ @KeerthyOfficial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;