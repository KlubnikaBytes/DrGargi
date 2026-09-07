import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-desc">
              Schedule your consultation today. We are committed to helping you achieve a pain-free life with personalized care.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Clinic Location</h4>
                  <p>Newtown, Kolkata, West Bengal, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+91 74787 09238</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>drgarginandi@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3>Request an Appointment</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Briefly describe your concern..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
