import React from "react";
import "./ctaOne.css";
import { useNavigate } from "react-router-dom";

const CtaOne = () => {
  const navigate = useNavigate();
  return (
    <section id="ctaOne">
      <h2 className="ctaTitle">Express Yourself with Unique Nails</h2>
      <p>Book an appointment today and let your nails shine with creativity.</p>
      <div className="callButtons">
        <button className="contactUs" onClick={() => navigate("/contact")}>
          Book
        </button>
        <button className="learnMore" onClick={() => navigate("/service")}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default CtaOne;
