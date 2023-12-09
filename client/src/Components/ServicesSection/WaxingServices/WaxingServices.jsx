import "./WaxingServices.css";
import wax from "../../../Assets/Images/img32.png";

const WaxingServices = () => {
  const waxingServicesOne = [
    { name: "Eyebrow", price: "$15" },
    { name: "Lip", price: "$15" },
    { name: "Chin", price: "$12+" },
    { name: "Side Burns", price: "$16" },
    { name: "Full Face", price: "$40+" },
    { name: "Under Arm", price: "$25+" },
    { name: "Full Arm", price: "$40+" },
  ];
  const waxingServicesTwo = [
    { name: "Half Arm", price: "$25+" },
    { name: "Full Leg", price: "$50+" },
    { name: "Half Leg", price: "$30+" },
    { name: "Back", price: "$40" },
    { name: "Chest", price: "$30+" },
    { name: "Eyebrow Tinting", price: "$18" },
  ];

  return (
    <section id="waxing-services">
      <h2 className="waxing-title">Waxing</h2>

      <div className="services-container">
        <img src={wax} alt="waxImage" className="waxImage" />
        <div className="wax-service">
          <ul className="service-one">
            {waxingServicesOne.map((service, index) => (
              <li key={index} className="service-item">
                <p>{service.name}</p>
                <span className="service-price">{service.price}</span>
              </li>
            ))}
          </ul>
          <ul className="service-two">
            {waxingServicesTwo.map((service, index) => (
              <li key={index} className="service-item">
                <p>{service.name}</p>
                <span className="service-price">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WaxingServices;
