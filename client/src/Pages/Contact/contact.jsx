import "./contact.css";
import ContactForm from "../../components/ContactForm/contactForm";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import ContactUs from "../../components/ContactUsPage/ContactUs";

const Contact = () => {
  return (
    <main id="contact-container">
      {/* Contact Information */}

      <ContactUs />

      {/* Form form  */}

      <ContactForm />

      {/* Google Maps API, when click it pulls up the address */}

      <GoogleMap />
    </main>
  );
};

export default Contact;
