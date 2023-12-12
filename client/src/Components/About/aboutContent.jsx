import React from "react";
import Owner from "../../assets/Images/owners.jpg";
import "./aboutContent.css";

const AboutContent = () => {
  const aboutContent = [
    {
      paragraph: "1",
      content:
        "Welcome to the revamped Sammy Nails Spa, now proudly under new management in the heart of Mill Creek, WA! Our mission is simple: to redefine your nail care experience and exceed your expectations. With a fresh perspective and a commitment to excellence, we've curated a haven where precision meets passion, and every visit is a celebration of self-care.",
    },
    {
      paragraph: "2",
      content:
        "At Sammy Nails Spa, we believe in the power of details. Our skilled professionals are not just technicians; they are artisans dedicated to transforming your nails into unique works of art. From classic manicures to trendy nail designs and indulgent spa pedicures, our diverse menu of services is designed to cater to your individual style and preferences.",
    },
    {
      paragraph: "3",
      content:
        "Conveniently located in Mill Creek, our salon is poised to serve the local community with top-tier nail services. But we are more than just a salon – we are a destination. Step into our space and feel the stresses of daily life melt away. Our new management is committed to creating an atmosphere of relaxation and rejuvenation, ensuring that every client receives the personalized attention they deserve.",
    },
  ];
  const ownersImg = {
    src: Owner,
    alt: "New management: Hani and Rose, two sisters coming together to revamp the Nail Salon scene",
  };

  return (
    <section id="aboutContainer">
      <div className="who-we-are-container">
        <div className="aboutContent">
          {aboutContent.map((par) => (
            <p key={par.paragraph}>{par.content} </p>
          ))}
        </div>
        <img className="ownersImg" src={ownersImg.src} alt={ownersImg.alt} />
      </div>
    </section>
  );
};

export default AboutContent;
