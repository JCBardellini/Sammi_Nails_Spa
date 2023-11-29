import "./contact.css";

import ContactInfo from "../../Components/ContactInfo/contactInfo";
import { ContactForm } from "../../Components/ContactForm/contactform";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us!</h2>
          <p>Feel free to reach out to us on social media for any questions</p>
          <p>about nail designs or services! We're here to assist you.</p>

          <ContactInfo />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
