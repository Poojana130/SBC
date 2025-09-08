import React, { useState } from "react";
import './Contact.css';
import Phone from '../assets/images/Phone.svg';
import Email from '../assets/images/Email.svg';
import Location from '../assets/images/Location.svg';
import Business from '../assets/images/Alarm.svg';
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    role: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ikofdm7",    
      "template_g708ola",   
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        school: formData.school,
        role: formData.role,
        interest: formData.interest,
        message: formData.message,
      },
      "pBTOVDA3w48doFLNY"     
    )
    .then(() => {
      setStatus("Message Sent Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        role: "",
        interest: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      setStatus(" Failed to send. Please try again.");
    });
  };

  return (
    <>
      {/* Contact Header */}
      <section className="contact">
        <h3>Connect with us</h3>
        <p>
          Ready to bring innovative creative education to your school? 
          Get in touch with us to schedule a consultation and learn more about our programs.
        </p>
      </section>

      {/* Contact Info Boxes */}
      <section className="contact1">
        <div className="box">
          <img src={Phone} alt="Phone" className="phone" />
          <p className="p1">Phone</p>
          <p className="p2">+91 9148876700</p>
        </div>

        <div className="box">
          <img src={Email} alt="Email" className="phone" />
          <p className="p1">Email</p>
          <p>
            <a href="mailto:smartbraincreations@gmail.com" className="p2">
              smartbraincreations@gmail.com
            </a>
          </p>
        </div>

        <div className="box">
          <img src={Location} alt="Location" className="phone" />
          <p className="p1">Location</p>
          <p className="p3">Bangalore, Karnataka, India</p>
        </div>

        <div className="box">
          <img src={Business} alt="Business Hours" className="phone" />
          <p className="p1">Business Hours</p>
          <p className="p3">Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </section>

      <section className="formout">
          <h3>Send Us a Message</h3>
        <p>Fill out the form below and we'll get back to you as soon as possible</p>
      </section>

      {/* Form Section */}
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your First Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email Address"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>School Name*</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter your School Name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Role*</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="Principal">Principal</option>
              <option value="Teacher">Teacher</option>
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
            </select>
          </div>

          <div className="form-group">
            <label>Area of Interest*</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="">Select your interest</option>
              <option value="STEM">STEM</option>
              <option value="Creative Labs">Creative Labs</option>
              <option value="Digital Media">Digital Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message*</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements, questions, or how we can help your school..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {/* Status Message */}
        {status && <p className="status-msg">{status}</p>}
      </section>
    </>
  );
}

export default Contact;
