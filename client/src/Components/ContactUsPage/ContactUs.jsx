import ContactInfo from "../ContactInfo/contactInfo";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contactUs-container">
      <h2 className="contact-title">Contact Us!</h2>

      <p className="contact-info">
        Feel free to reach out to us on social media for any questions about
        nail designs or services! We're here to assist you.
      </p>

      {/* Email and phone contact information */}

      <ContactInfo />
    </section>
  );
};

export default ContactUs;
