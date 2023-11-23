import { useState } from "react";
import "./contactForm.css";

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

  {
    /*contact form component
          form 
          first name  - last name
          email
          message
          state, handlesubmit function, handlechange function
          submit
          make sure input is require
          be able to log the input in the console

          <ContactForm />
           */
  }
  return (
    <div>
      <form className="contact-form">
        <div className="name-fields">
          {/* Name Inputs */}
          <input
            className="input-field"
            value={contactFormData.firstName}
            name="firstName"
            onChange={handleChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="input-field"
            value={contactFormData.lastName}
            name="lastName"
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
          />
        </div>
        {/* Email */}
        <input
          className="input-field"
          value={contactFormData.email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
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
