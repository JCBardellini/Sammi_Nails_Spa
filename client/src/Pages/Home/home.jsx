import { useEffect, useState } from "react";
import "./Home.css";
import HomeHeroImage from "../../Components/HomeHeroImage/HomeHeroImage";
import HomeUniqueNailsDesigns from "../../Components/HomeUniqueNailsDesigns/HomeUniqueNailsDesgins";
import HomeMainServices from "../../Components/HomeMainServices/HomeMainServices";
import HomeTestimonials from "../../Components/HomeTestimonials/HomeTestimonials";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
import HomeServicesSection from "../../Components/HomeServicesSection/HomeServicesSection";
import CallToAction from "../../Components/CallToAction/CallToAction";

const Home = () => {
  return (
    <>
      <div id="homepage">
        {/* Hero image section */}

        <HomeHeroImage />

        {/* Unique Designs */}

        <HomeUniqueNailsDesigns />

        {/* List of Services Section */}

        <HomeServicesSection />

        {/* Quote */}

        <section className="homepage-quote">
          <div>
            <h2>Life is not perfect, but your nails can be</h2>
          </div>
          <Link to="/Contact">
            <button>Contact us now</button>
          </Link>
        </section>
        {/* Main Services */}

        <HomeMainServices />

        {/* Testimonials */}
        <HomeTestimonials />
        <CallToAction />

        <section className="home-contact-area">
          <div className="home-contact-info">
            <div className="home-contactUs-container">
              <div className="home-contactUs-content">
                <div className="home-contact-info">
                  <h2>Contact Us!</h2>
                  <p>
                    Feel free to reach out to us on social media for any
                    questions
                  </p>
                  <p>
                    about nail designs or services! We're here to assist you.
                  </p>

                  <div className="home-contact-details">
                    <div className="detail">
                      <span className="icon icon-email">
                        {" "}
                        <MailOutlineIcon />{" "}
                      </span>
                      <div className="text">
                        <p>Email</p>
                        <p>Send us an email today!</p>
                        <p>
                          Email:{" "}
                          <a href="mailto:samminails.wa@gmail.com">
                            samminails.wa@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="detail">
                      <span className="icon icon-phone">
                        {" "}
                        <PhoneIcon />{" "}
                      </span>
                      <div className="text">
                        <p>Phone</p>
                        <p>Call us for an appointment.</p>
                        <p>
                          Phone: <a href="tel:425-379-6178">425-379-6178</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-hours">
              <h5>Hours</h5>
              <div className="operation-hours">
                <div>
                  <p>Monday:</p>
                  <p>Tuesday:</p>
                  <p> Wednesday:</p>
                  <p>Thursday:</p>
                  <p>Friday:</p>
                  <p>Saturday:</p>
                  <p>Sunday:</p>
                </div>
                <div>
                  <p>9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 7:00 pm</p>
                  <p> 9:30 am - 4:00 pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-google-maps">
            <iframe
              className="contact-info-image"
              width="100%"
              height="600"
              title="SamiNails"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(SamiNails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/"></a>
            </iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
