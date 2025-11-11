import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-details">
          <p>Contact Us</p>
          <h1>Get In Touch With SRSIK</h1>
          <p>
            Hubungi kami kapan saja – kami siap membantu memaksimalkan pengalaman Anda bersama SRSIK.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <img
                src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320369/email_azrxn5.svg"
                alt="Email"
                className="contact-icon"
              />
              <div className="contact-text">
                <span>Email</span>
                <p>mbaihaqiarrisalah79@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img
                src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320371/whatsapp_i3w0e5.svg"
                alt="WhatsApp"
                className="contact-icon"
              />
              <div className="contact-text">
                <span>WhatsApp</span>
                <p>+6285850757071</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-box">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <label htmlFor="name">Nama Lengkap</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Pesan</label>
            <textarea id="message" rows="6" required></textarea>

            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
