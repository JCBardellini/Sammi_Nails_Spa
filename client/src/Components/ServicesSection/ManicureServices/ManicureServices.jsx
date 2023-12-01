// ManicureServices.jsx
import React from 'react';
import './ManicureServices.css';

const manicureServicesData = [
  {
    category: "The Classics",
    services: [
      { name: "Classic Manicure", price: "$25" },
      { name: "Classic Manicure with Gel Polish", price: "$40" },
      { name: "Deluxe Manicure", price: "$35" },
      { name: "Deluxe Manicure with Gel Polish", price: "$50" },
    ]
  },
  {
    category: "Nail Enhancement",
    services: [
      { name: "Gel Polish Acrylic full Set", price: "$50+" },
      { name: "Gel Polish fill", price: "$40+" },
      { name: "Full Ombre set", price: "$65+" },
      { name: "Dipping Powder", price: "$45+" },
      { name: "Dipping Powder with tip", price: "$55+" },
      { name: "Dipping Powder Ombre/French design", price: "$60+" },
    ]
  },
  {
    category: "Additional Services",
    services: [
      { name: "Polish change toes/nails", price: "$15" },
      { name: "Gel Polish change toes/nails", price: "$25" },
      { name: "Gel French Polish", price: "$30" },
      { name: "Cat eye or chrome Nails", price: "$15" },
      { name: "Nail Design", price: "$10+" },
      { name: "Take off with services", 
      details:{ 
        // "Gel $3, Dip $5, Acrylic $10"
        gel: '$3 Gel',
        dip: '$5 Dip',
        acrylic: '$10 Acrylic',
      } },
      { name: "Take off without services", 
      details:{ 
        // "Gel $3, Dip $5, Acrylic $10"
        gel: '$3 Gel',
        dip: '$5 Dip',
        acrylic: '$10 Acrylic',
      } },,
    ]
  }
];

const ManicureServices = () => {
  return (
    <section className="manicure-services-section">

      <div className='popular'>
        <h2>Manicures</h2>

        <div className="services-description">
          <p>All our manicure services include meticulous trimming, regular shaping, precise filing, expert buffing, and thorough cuticle maintenance. The experience concludes with a soothing lotion massage and the application of your chosen regular polish.</p>
        </div>

        <ul>
          {manicureServicesData.map((category, index) => (
            <section key={index} className="most-requested">
              <h3>{category.category}</h3>
              <ul className="services-list">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="service-item">
                    <p>{service.name}</p> <span className="service-price">{service.price}</span>
                    {service.details && <div className="service-details">
                     <span >{service.details.gel}</span>
                    <span>{service.details.acrylic}</span>
                    <span>{service.details.dip}</span>
                   </div> } 
                    
                  </li>
                ))}
              </ul>
            </section>
          ))}

        </ul>

      </div>
    </section>
  );
};

export default ManicureServices;
