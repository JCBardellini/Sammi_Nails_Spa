
import "./about.css";
import AboutContent from "../../Components/About/aboutContent";
import Process from "../../Components/Process/process";
import CallToAction from '../../Components/CallToAction/CallToAction';
import Employee from "../../Components/Employee/employee";
import ContactInfo from "../../Components/ContactInfo/contactInfo";
import AboutHero from "../../assets/Images/aboutHero.png";


const About = () => {
  return (
    <main id="aboutPage">
      <div className="aboutHero">
        <img src={AboutHero} alt="White nails in front of green leaf" className="aboutHeroImg" />
        <h2 className="aboutHeroTitle">Unleash your powers with your nails</h2>
      </div>
      <AboutContent />
      <Process />
      <CallToAction />
      <Employee />
      <ContactInfo />
    </main>
  );
};

export default About;
