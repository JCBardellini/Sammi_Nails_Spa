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
        {/* Contact  */}
      </div>
    </>
  );
};

export default Home;
