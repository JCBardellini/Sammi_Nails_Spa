import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo/sammiLogo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YelpIcon from "../../assets/Icons/yelp.png";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const hours = [
    {
      day: "Monday - Saturday",
      hours: "9:30 AM - 7:00 PM",
    },
    {
      day: "Sunday",
      hours: "9:30 AM - 4:00 PM",
    },
  ];
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FacebookIcon fontSize="large" color="blue" />,
      link: "https://www.facebook.com/samminailsspa/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon fontSize="large" color="black" />,
      link: "https://www.instagram.com/samminailsspa/",
    },
    {
      name: "Yelp",
      icon: <img src={YelpIcon} width="35px" color="black" alt="Yelp" />,
      link: "https://www.yelp.com/biz/sammi-nails-spa-mill-creek",
    },
    {
      name: "Google",
      icon: <GoogleIcon fontSize="large" />,
      link: "https://www.google.com/search?q=samminailsspa&oq=samminailsspa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEHMzAzajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
  ];

  return (
    <footer id="footer">
      <div className="footerContainer">
        <img src={Logo} alt="Sammi Nails Spa Logo" className="logo" />
        <ul className="hours">
          {hours.map((item) => (
            <li key={item.day} className="singleHours">
              {item.day}: {item.hours}
            </li>
          ))}
        </ul>
        <div className="footerIconsContainer">
          {socialMedia.map((item) => (
            <a
              href={item.link}
              key={item.name}
              rel="noopener noreferrer"
              target="_blank"
              className="footerIcons"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <p>© 2023 Sammi Nails Spa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
