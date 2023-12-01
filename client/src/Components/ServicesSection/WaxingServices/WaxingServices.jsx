
import './WaxingServices.css';
import wax from '../../../Assets/Images/img32.png'

const WaxingServices = () => {
  const waxingServices = [
    { name: "Eyebrow", price: "$15" },
    { name: "Lip", price: "$15" },
    { name: "Chin", price: "$12+" },
    { name: "Side Burns", price: "$16" },
    { name: "Full Face", price: "$40+" },
    { name: "Under Arm", price: "$25+" },
    { name: "Full Arm", price: "$40+" },
    { name: "Half Arm", price: "$25+" },
    { name: "Full Leg", price: "$50+" },
    { name: "Half Leg", price: "$30+" },
    { name: "Back", price: "$40" },
    { name: "Chest", price: "$30+" },
    { name: "Eyebrow Tinting", price: "$18" }
  ];

  return (
    <div className="waxing-services-container">
      <h2 className='waxing'>Waxing</h2>

      <div className='waxing-and-Image'>
      <img src={wax} alt="waxImage" className='waxImage' />
        <ul className="most-requested">
          {waxingServices.map((service, index) => (
            <li key={index} className="kids-service-item">
              <span className="service-name">{service.name}</span>
              <span className="service-price">{service.price}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default WaxingServices;
