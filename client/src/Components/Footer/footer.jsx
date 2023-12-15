import React, { useState } from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YelpIcon from "../../assets/Icons/yelp.png";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const [isSubscribe, setIsSubscribe] = useState({
    email: "",
  });
  // the handlesubmit is going to control the form when someone subscribes, they will be added to list to get emails for promotions or events that they might have
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(isSubscribe);
    setIsSubscribe({
      email: "",
    });
  };
  const handleChange = (e) => {
    setIsSubscribe({
      email: e.target.value,
    });
  };
  const hours = [
    {
      day: "Mon - Fri",
      hours: "9:30 AM - 7:00 PM",
    },
    {
      day: "Sat",
      hours: "9:00 AM - 6:00 PM",
    },
    {
      day: "Sunday",
      hours: "9:30 AM - 4:00 PM",
    },
  ];
  // currently all the social media they have, If they have more we can make changes
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FacebookIcon sx={{ fontSize: 30 }} color="blue" />,
      link: "https://www.facebook.com/samminailsspa/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon sx={{ fontSize: 30 }} color="black" />,
      link: "https://www.instagram.com/samminailsspa/",
    },
    {
      name: "Yelp",
      icon: <img src={YelpIcon} width="28px" color="black" alt="Yelp" />,
      link: "https://www.yelp.com/biz/sammi-nails-spa-mill-creek",
    },
    {
      name: "Google",
      icon: <GoogleIcon sx={{ fontSize: 30 }} />,
      link: "https://www.google.com/search?q=samminailsspa&oq=samminailsspa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEHMzAzajBqNKgCALACAA&sourceid=chrome&ie=UTF-8",
    },
  ];
  const address = "15704 Mill Creek Blvd #15, Mill Creek WA 98012";
  // when we click on the address, it will pull it up on ur maps, well google maps
  const handleClick = (e) => {
    e.preventDefault();
    // Use the "dir" parameter to specify the destination address based on location
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    // opens in a new window
    window.open(mapsUrl, "_blank");
  };

  return (
    <footer id="footer">
      <div id="footer-items">
        <div className="footer-single-container">
          <h5>ADDRESS</h5>
          <p className="address">
            <a href="#" onClick={handleClick} className="footer-font">
              {address}
            </a>
          </p>
        </div>
        <div className="footer-single-container">
          <h5>HOURS</h5>
          <div>
            {hours.map((hour) => (
              <div key={hour.day}>
                <span className="footer-font">{hour.day}</span>:{" "}
                <span className="footer-font">{hour.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-single-container">
          <h5>FOLLOW</h5>
          <ul className="footer-social">
            {socialMedia.map((icons) => (
              <li key={icons.name}>
                <a href={icons.link} target="_blank">
                  {icons.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-single-container">
          <h5>SUBSCRIBE</h5>
          {/* need to create server and schema to handle the subscription */}
          <form onSubmit={handleSubmit} className="subscription-form">
            <input
              className="subscription-email"
              type="email"
              placeholder="Email"
              value={isSubscribe.email}
              onChange={handleChange}
            />
            <button className="subscription-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="footer-rights">
        © 2023 Sammi Nails Spa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
