import { useState } from "react";
import "./contactForm.css";
import { TextField } from "@mui/material";

export const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const templateParams = {
    to_name: "Sammi Nails",
    from_name: contactFormData.name,
    message: contactFormData.message,
    from_email: contactFormData.email,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_2vc6v1d",
        "template_zb0nf6o",
        templateParams,
        "i_ylqs_VpN1QO5XSr"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success
        },
        (error) => {
          console.log(error.text);
          // Handle error
        }
      );
    setContactFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  return (
    <div id="contact-page-contact-form">
      <form className="contact-form">
        <div className="name-fields">
          {/* Name Inputs */}
          <TextField
          variant="outlined"
            className="input-field"
            value={contactFormData.firstName}
            name="firstName"
            onChange={handleChange}
            type="text"
            label="First Name"
          />
          <TextField
          variant="outlined"
            className="input-field"
            value={contactFormData.lastName}
            name="lastName"
            onChange={handleChange}
            type="text"
            label="Last Name"
          />
        </div>
        {/* Email */}
        <TextField
        variant="outlined"
          className="input-field"
          value={contactFormData.email}
          name="email"
          onChange={handleChange}
          type="email"
          label="Email"
        />
        {/* Message */}
        <textarea
          className="textarea-field"
          value={contactFormData.message}
          name="message"
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
        <button onClick={(e) => sendEmail(e)} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};