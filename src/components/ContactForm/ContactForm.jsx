import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    childsAge: "",
    desiredStartDate: "",
    programInterest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="contactForm">
      <h2>Send Us A Message</h2>
      <p>Have questions or want to scheule a tour? Fill out the form below.</p>
      <form onSubmit={handleSubmit} className="contactForm__form">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          className="modal__input"
          name="firstName*"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="modal__input"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="emailaddress">Email Address</label>
        <input
          type="email"
          className="modal__input"
          name="emailAddress"
          placeholder="your.email@example.com"
          value={formData.emailAddress}
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          className="contactForm__input"
          name="phoneNumber"
          placeholder="(555) 123-4567"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        ></input>
        <select
          className="contactForm__select"
          name="childsAge"
          placeholder="Select age group"
          value={formData.childsAge}
          onChange={handleChange}
        >
          <option value="">Select age group</option>
          <option value="infants">Infants (0 - 12 months)</option>
          <option value="toddlers">Toddler (12 months - 3 years)</option>
          <option value="preschool">Preschool (3 years - 5 years)</option>
          <option value="schoolAge">Pre-K (5 years - 7 years)</option>
          <option value="schoolAge">School Age (7 years - 13 years)</option>
        </select>
        <input
          type="text"
          className="contactForm__input"
          name="desiredStartDate"
          placeholder="mm/dd/yyyy"
          value={formData.desiredStartDate}
          onChange={handleChange}
          required
        ></input>
        <select
          className="contactForm__select"
          name="programInterest"
          value={formData.programInterest}
          onChange={handleChange}
        >
          <option value="">Select Program Interest</option>
          <option value="infants">Infants</option>
          <option value="toddlers">Toddler</option>
          <option value="preschool">Preschool</option>
          <option value="schoolAge">School Age</option>
        </select>
        <textarea
          name="message"
          className="contactForm__message"
          placeholder="Tell us about your child and any questions you have..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contactForm__submit">
          Submit Message
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
