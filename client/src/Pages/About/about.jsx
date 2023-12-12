import "./about.css";
import AboutContent from "../../Components/About/aboutContent";
import Process from "../../Components/Process/process";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Employee from "../../Components/Employee/employee";
import AboutHero from "../../assets/Images/aboutHero.png";
import ContactInfo from "../../components/ContactInfo/contactInfo";

const About = () => {
  return (
    <main id="aboutPage">
      <section className="about-hero-image">
        <img
          src={AboutHero}
          alt="hands with white nail polish on leaf background"
        />
        <h2 className="aboutHeroTitle">Unleash your powers with your nails</h2>
      </section>
      {/* About History */}
      <h2 className="about-us">Who we are</h2>
      <AboutContent />

      {/* Our Process */}
      <Process />

      {/* CTA */}
      <CallToAction />

      {/* Employee list */}
      <Employee />

      {/* Contact info */}
      <ContactInfo />
    </main>
  );
};

export default About;
