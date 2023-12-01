import './contact.css';
import { ContactForm } from '../../components/ContactForm/contactForm';
import { GoogleMap } from '../../components/GoogleMap/GoogleMap';
import ContactUs from '../../components/ContactUsPage/ContactUs';


const Contact = () => {

  return (
    <div className="contact-container">
      
        <ContactUs />
        <ContactForm />
        <GoogleMap />
      
    </div>
  );
};

export default Contact;
