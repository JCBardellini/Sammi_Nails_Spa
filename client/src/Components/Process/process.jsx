import React from "react";
import "./process.css";
import selection from "../../assets/Icons/selection.png";
import customization from "../../assets/Icons/customization.png";
import service from "../../assets/Icons/qualityService.png";
import express from "../../assets/Icons/express.png";
import { useNavigate } from "react-router-dom";

const Process = () => {
  const processIcons = [
    {
      icon: selection,
      alt: "Hand holding nail polish bottle icon",
    },
    {
      icon: customization,
      alt: "Different nail polish bottles icon",
    },
    {
      icon: service,
      alt: "Painting single nail icon",
    },
    {
      icon: express,
      alt: "Single nail and brushes icon",
    },
  ];
  const processSteps = [
    {
      title: "Selection",
      description:
        "Embark on a journey with us at Sammi Nails Spa, where our unique selection process ensures your nail experience is personalized just for you.",
    },
    {
      title: "Customization is Key",
      description:
        "Discover the power of customization as we work with you to bring your nail vision to life. Your style, your way.",
    },
    {
      title: "Quality Services, Tailored for You",
      description:
        "Our experienced technicians deliver top-notch manicures and pedicures, meticulously tailored to your preferences. Quality meets personalization",
    },
    {
      title: "Express Yourself, Nail by Nail",
      description:
        "At Sammi Nails Spa, we invite you to express your unique style through our array of nail services. Every nail is a canvas; let's create your masterpiece.",
    },
  ];

  const navigate = useNavigate();

  return (
    <section id="processContainer">
      <h2 className="processTitle">Our Process</h2>
      <div className="processContainer">
        <div className="processContactUsContainer">
          <h3>Unleash your style with our Customized Nail Services</h3>
          <button className="contactUs" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <div className="stepsAndIconContainer">
          <div className="processIconContainer">
            {/* need to have img horizontal line and img */}
            {processIcons.map((icon, index) => {
              return (
                <>
                  <img src={icon.icon} alt={icon.alt} className="icons" />
                  {index < processIcons.length - 1 && (
                    <div className="line"></div>
                  )}
                </>
              );
            })}
          </div>
          <div className="stepsContainer">
            {/* map through the process steps */}
            {processSteps.map((steps) => {
              return (
                <div key={steps.title}>
                  <h4 className="stepsTitle">{steps.title}</h4>
                  <p>{steps.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
