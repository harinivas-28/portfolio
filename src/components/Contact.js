import React from 'react';
import './Contact.css';

function Contact() {
    const handleClick = () => {
        alert('Mail Sent ✅');
      };
  return (
    <div className="contact-page">
       <div class="main_contact">
        <section class="contact-info">
            <h2><u>Get in Touch</u></h2>
            <p>I'd love to hear from you. Contact me with any questions or inquiries.</p>
            <ul>
                <li><strong>Email:</strong> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">Harinivas G</a></li>
                <li><strong>Phone:</strong>+91 9848050029</li>
                <li><strong>Address:</strong>Uppal-500039, Hyderabad</li>
            </ul>
        </section>

        <section class="contact-form">
            <h2>Send a Message</h2>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" onClick={handleClick}>Send</button>
            </form>
        </section>
    </div>
    </div>
  );
}

export default Contact;