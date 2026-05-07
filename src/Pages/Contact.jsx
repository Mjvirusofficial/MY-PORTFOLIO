import React from 'react';
import { FaPaperPlane, FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page-root pb-5">
      {/* Header Section */}
      <section className="contact-hero-section text-center py-5">
        <div className="container">
          <div className="contact-badge mb-3">SAY HELLO</div>
          <h1 className="display-4 fw-bold">Let's <span className="text-indigo">Connect</span></h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Have a project in mind or just want to chat? I'm always open to new 
            opportunities and interesting conversations.
          </p>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row g-5">
          {/* Left Side: Contact Info & Socials */}
          <div className="col-lg-5">
            <div className="contact-info-card p-5 h-100 shadow-sm">
              <h3 className="fw-bold mb-4">Contact Information</h3>
              
              <div className="contact-details mt-4">
                <div className="detail-item d-flex align-items-center mb-4">
                  <div className="detail-icon"><FaEnvelope /></div>
                  <div className="ms-3">
                    <p className="detail-label mb-0">Email Me</p>
                    <a href="mailto:deepak.ravidas7061@gmail.com" className="detail-value">deepak.ravidas7061@gmail.com</a>
                  </div>
                </div>

                <div className="detail-item d-flex align-items-center mb-4">
                  <div className="detail-icon"><FaWhatsapp /></div>
                  <div className="ms-3">
                    <p className="detail-label mb-0">WhatsApp</p>
                    <a href="https://wa.me/7061335711" className="detail-value">+91 7061335711</a>
                  </div>
                </div>

                <div className="detail-item d-flex align-items-center mb-4">
                  <div className="detail-icon"><FaMapMarkerAlt /></div>
                  <div className="ms-3">
                    <p className="detail-label mb-0">Location</p>
                    <p className="detail-value mb-0">Ranchi, Jharkhand, India</p>
                  </div>
                </div>
              </div>

              <div className="social-connect-box mt-5">
                <h5 className="fw-bold mb-3">Follow My Journey</h5>
                <div className="social-links-row d-flex gap-3">
                  <a href="https://www.linkedin.com/in/deepak-ravidas-65956a388/" className="s-icon-btn"><FaLinkedin /></a>
                  <a href="https://www.instagram.com/0ye_its_deepak/" className="s-icon-btn"><FaInstagram /></a>
                  <a href="https://wa.me/7061335711" className="s-icon-btn"><FaWhatsapp /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="col-lg-7">
            <div className="contact-form-wrapper p-5 shadow-sm">
              <h3 className="fw-bold mb-4">Send a Message</h3>
              <form action="https://formspree.io/f/mnqryjzv" method='POST'>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" name='username' className="form-control custom-input" id="nameInput" placeholder="Name" required />
                      <label htmlFor="nameInput">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" name='Email' className="form-control custom-input" id="emailInput" placeholder="Email" required />
                      <label htmlFor="emailInput">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="number" name='phone' className="form-control custom-input" id="phoneInput" placeholder="Phone" />
                      <label htmlFor="phoneInput">Phone Number (Optional)</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea name='message' className="form-control custom-input" id="msgInput" placeholder="Message" style={{ height: '150px' }} required></textarea>
                      <label htmlFor="msgInput">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="submit-btn-v4 w-100 py-3" type="submit">
                      Send Message <FaPaperPlane className="ms-2" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;