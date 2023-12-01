
import "./contactInfo.css";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ContactInfo = () => {
  const contact = [
    {
      name: "Email",
      description:
        "For more information or to book an appointment, please feel free to contact us.",
      email: "samminails.wa@gmail.com",
      icon: <MailOutlineIcon />,
    },
    {
      name: "Phone",
      description: "Call us for any inquiries or to schedule an appointment.",
      phoneNumber: "(425) 379 - 6178",
      icon: <PhoneIcon />,
    },
  ];

  return (
    <section id="contactInfo">
      {contact.map((item) => (
        <div key={item.name} className="contactContainer">
          {item.icon}
          <h3 className="infoTitle">{item.name}:</h3>
          <p className="infoDescription">{item.description}</p>
          <a
            href={
              item.phoneNumber
                ? `tel:${item.phoneNumber}`
                : `mailto:${item.email}`
            }
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.phoneNumber ? item.phoneNumber : item.email}
          </a>
        </div>
      ))}
    </section>
  );
};

export default ContactInfo;