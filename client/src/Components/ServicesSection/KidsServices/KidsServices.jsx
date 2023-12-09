import "./KidsServices.css";
import kids from "../../../Assets/Images/img21.png";

const KidsServices = () => {
  const kidsServices = [
    { name: "Classic Manicure", price: "$15" },
    { name: "Classic Manicure with Gel Polish", price: "$25" },
    { name: "Classic Pedicure", price: "$25" },
    { name: "Classic Pedicure with Gel Polish", price: "$35" },
    { name: "Color Change Nails/Toes", price: "$15" },
    { name: "Gel Polish Color Change Nails/Toes", price: "$30" },
  ];

  return (
    <section id="kids-services">
      <h2 className="kids-title">Kids Services</h2>

      <div className="services-container">
        <ul className="kid-service">
          {kidsServices.map((service, index) => (
            <li key={index} className="service-item">
              <p className="category">{service.name}</p>
              <span className="service-price">{service.price}</span>
            </li>
          ))}
        </ul>
        <img src={kids} alt="kidsImage" className="kids-image" />
      </div>
    </section>
  );
};

export default KidsServices;
