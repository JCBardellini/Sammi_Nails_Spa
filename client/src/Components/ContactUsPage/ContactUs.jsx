
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './ContactUs.css';



const ContactUs = () => {

  return (
    <div className="contactUs-container">
      
      <div className="contactUs-content">
        <div className="contact-info">
          <h2>Contact Us!</h2>
          <p>Feel free to reach out to us on social media for any questions</p>
          <p>about nail designs or services! We're here to assist you.</p>

          <div className="contact-details">
            <div className="detail">
              <span className="icon icon-email"> <EmailIcon /> </span>
              <div className="text">
                <p>Email</p>
                <p>Send us an email today!</p>
                <p>samminails@example.com</p>
                <p>Email: <a href="mailto:samminails@example.com">samminails@example.com</a></p>
              </div>
            </div>
            <div className="detail">

              <span className="icon icon-phone"> <PhoneInTalkIcon /> </span>
              <div className="text">
                <p>Phone</p>
                <p>Call us for an appointment.</p>
                <p>(425) 379-6178</p>
                <p>Phone: <a href="tel:425-379-6178">425-379-6178</a></p>
              </div>
            </div>
          </div>
        </div>
       
      
      </div>
      
    </div>
  );
};

export default ContactUs;
