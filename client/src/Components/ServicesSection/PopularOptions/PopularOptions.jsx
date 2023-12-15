import "./PopularOptions.css"; // Make sure to create and style this CSS file

// Data for most requested services
const mostRequestedServices = [
  { name: "Classic Manicure with Gel Polish", price: "$35" },
  { name: "Detox Volcano Pedicure", price: "$65" },
  { name: "Jelly Treatment Pedicure", price: "$65" },
];

// Data for combination deals
const combinationDeals = [
  { name: "Classic Manicure and Pedicure", price: "$60" },
  { name: "Deluxe Manicure and Deluxe Volcano", price: "$95" },
];

const PopularOptions = () => {
  return (
    <section id="popular-options">
      <div className="options-container">
        <h4 className="popular-title">Most Requested</h4>
        <ul className="most-requested">
          {mostRequestedServices.map((service, index) => (
            <li key={index} className="service-item">
              <p className="category">{service.name}</p>{" "}
              <span className="service-price">{service.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="options-container">
        <h4 className="popular-title">Combination Deals</h4>
        <ul className="most-requested">
          {combinationDeals.map((deal, index) => (
            <li key={index} className="service-item">
              <p className="category">{deal.name}</p>{" "}
              <span className="service-price">{deal.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularOptions;
