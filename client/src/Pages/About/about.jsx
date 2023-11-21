import React from "react";
import AboutContent from "../../Components/About/aboutContent";
import Process from "../../Components/Process/process";
import CtaOne from "../../Components/CTAone/ctaOne";
import Employee from "../../Components/Employee/employee";
import ContactInfo from "../../Components/ContactInfo/contactInfo";

const About = () => {
  return (
    <div>
      <AboutContent />
      <Process />
      <CtaOne />
      <Employee />
      <ContactInfo />
    </div>
  );
};

export default About;
