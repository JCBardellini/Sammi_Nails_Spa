import { useEffect,useState } from 'react';
import './Home.css';
import HomeHeroImage from '../../Components/HomeHeroImage/HomeHeroImage';
import HomeUniqueNailsDesigns from '../../Components/HomeUniqueNailsDesigns/HomeUniqueNailsDesgins';
import HomeMainServices from '../../Components/HomeMainServices/HomeMainServices';
import HomeTestimonials from '../../Components/HomeTestimonials/HomeTestimonials';

import { Link } from 'react-router-dom';
import HomeServicesSection from '../../Components/HomeServicesSection/HomeServicesSection';

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

              <div className="homepage-quote">
                  <div>
                    <h2>Life is not perfect, but your nails can be</h2>
                  </div>
                    <Link to="/Contact">
                        <button>Contact us now</button>
                    </Link>
              </div>
              {/* Main Services */}

              <HomeMainServices />

              {/* Testimonials */}
             <HomeTestimonials />

              <div className="cta">
                    <h2>Express Yourself with Unique Nails</h2>
                    <p>Book an appointment today and let your nails shine with creativity.</p>
                    <div className='cta-button-container'>
                    <Link to="/Contact">
                        <button className='book-btn'>Book</button>
                  </Link>
                    <Link to="/Services">
                        <button  className='learn-more'>Learn More</button>
                    </Link>
                    </div>
              </div>
                  <div className="contact-area">

              <div className="contact-info">
                          <h2>Contact Information</h2>
                          <p>Visit us to get in touch for all your nail needs.</p>
                          <div className='phone-email'>
                                <div>
                                      <h5>Email</h5>
                                      <p>Send us an email today!</p>
                                      <p>SammiNail@gmail.com</p>
                                </div>
                                <div>
                                      <h5>Phone</h5>
                                      <p>Call us for appointments</p>
                                      <p>(203)459-1234</p>
                                </div>
                          </div>
                          <div className='contact-hours'>
                                <h5>Hours</h5>
                                <p>Monday: 9:30 am - 7:00 pm</p>
                                <p>Tuesday: 9:30 am - 7:00 pm</p>
                                <p> Wednesday: 9:30 am - 7:00 pm</p>
                                <p>Thursday: 9:30 am - 7:00 pm</p>
                                <p>Friday: 9:30 am - 7:00 pm</p>
                                <p>Saturday: 9:30 am - 7:00 pm</p>
                                <p>Sunday: 9:30 am - 4:00 pm</p>
                          </div>
                    </div>
                              <div className='contact-google-maps'>
                              <iframe className='contact-info-image' width="100%" height="600" title='SamiNails' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(SamiNails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/"></a></iframe>
                              </div>
                  </div>
              </div>
      </>
        )
};

export default Home;
