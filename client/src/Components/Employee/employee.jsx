import React from "react";
import "./employee.css";
import hani from "../../assets/Images/hani.jpeg";
import rose from "../../assets/Images/rose.jpeg";

const Employee = () => {
  // we can add more employees here
  const employee = [
    {
      name: "Hani",
      position: "Co-Owner",
      description:
        "Hani is passionate about creating stunning nail designs that reflect each clients personality.",
      img: hani,
      alt: "Hani seating in the autumn leaves.",
    },
    {
      name: "Rose",
      position: "Co-Owner",
      description:
        "Rose's attention to detail ensures that every client leaves with perfectly polished nails.",
      img: rose,
      alt: "Rose holding a a leave in autumn.",
    },
  ];
  return (
    <section id="employeeSection">
      <h2 className="teamTitle">Our Team</h2>
      <p>Meet the talented professionals behind our unique salon</p>
      <div className="employeeMainContainer">
        {employee.map((each) => {
          return (
            <div key={each.name} className="employeeContainer">
              <img src={each.img} alt={each.alt} className="employeeImg" />
              <h3 className="employeeName">{each.name}</h3>
              <h4 className="employeeTitle">{each.position}</h4>
              <p className="employeeDescription">{each.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Employee;
