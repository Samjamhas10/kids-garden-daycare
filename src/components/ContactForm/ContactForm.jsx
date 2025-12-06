import { useState } from "react";
import emailjs from "@emailjs/browser";
import messageIcon from "../../assets/message-icon.svg";
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

    const formattedDate = formData.desiredStartDate
      ? new Date(formData.desiredStartDate).toLocaleDateString("en-US")
      : "";

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      childsAge: formData.childsAge,
      desiredStartDate: formattedDate,
      programInterest: formData.programInterest,
      message: formData.message,
    };

    emailjs
      .send(
        "service_xib4zig", // Your Service ID
        "template_xkdlsqb", // Your Template ID
        templateParams,
        "BZLmOYcgyRD9-csUP" // Your Public Key / User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you! Your message has been sent.");
          setFormData({
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            childsAge: "",
            desiredStartDate: "",
            programInterest: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      className="contactForm"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-offset="150"
    >
      <div className="contactForm__card">
        <img src={messageIcon} alt="Message icon representing contact" />
        <h2>Send Us A Message</h2>
        <p>
          Have questions or want to schedule a tour? Fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="contactForm__form">
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            type="text"
            className="contactForm__input"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            type="text"
            className="contactForm__input"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="emailAddress">Email Address*</label>
          <input
            id="emailAddress"
            type="email"
            className="contactForm__input"
            name="emailAddress"
            placeholder="your.email@example.com"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            className="contactForm__input"
            name="phoneNumber"
            placeholder="(555) 123-4567"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="childsAge">Child's Age</label>
          <select
            id="childsAge"
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
            <option value="schoolAge">School Age (5 years - 13 years)</option>
          </select>
          <label htmlFor="desiredStartDate">Desired Start Date</label>
          <input
            id="desiredStartDate"
            type="date"
            className="contactForm__input"
            name="desiredStartDate"
            placeholder="mm/dd/yyyy"
            value={formData.desiredStartDate}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="programInterest">Program Interest</label>
          <select
            id="programInterest"
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contactForm__message"
            placeholder="Tell us about your child and any questions you have..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="contactForm__submission">
            <button
              type="submit"
              className="contactForm__submit"
              aria-label="Submit contact form"
            >
              Submit Message
            </button>
            <p className="contactForm__privacy">
              By submitting this form you agree to our privacy policy. We'll
              never share your information.{" "}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
