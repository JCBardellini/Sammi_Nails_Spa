
import './KidsServices.css';
import kids from '../../../Assets/Images/img21.png'

const KidsServices = () => {
  const kidsServices = [
    { name: "Classic Manicure", price: "$15" },
    { name: "Classic Manicure with Gel Polish", price: "$25" },
    { name: "Classic Pedicure", price: "$25" },
    { name: "Classic Pedicure with Gel Polish", price: "$35" },
    { name: "Color Change Nails/Toes", price: "$15" },
    { name: "Gel Polish Color Change Nails/Toes", price: "$30" }
  ];

  return (
    <section className="kids-services-container">
      <div className="popular">

      <h2>Kids Services</h2>
      </div>

      <div className='kids-and-Image'>
        <ul className="most-requested">
          {kidsServices.map((service, index) => (
            <li key={index} className="kids-service-item">
              <p>{service.name}</p>
              <span className="service-price">{service.price}</span>
            </li>
          ))}
        </ul>
        <img src={kids} alt="kidsImage" className='kidsImage' />
      </div>

    </section>
  );
};

export default KidsServices;
