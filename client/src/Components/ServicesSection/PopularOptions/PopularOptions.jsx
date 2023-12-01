
import './PopularOptions.css'; // Make sure to create and style this CSS file

// Data for most requested services
const mostRequestedServices = [
  { name: "Classic Manicure with Gel Polish", price: "$40" },
  { name: "Detox Volcano Pedicure", price: "$65" },
  { name: "Jelly Treatment Pedicure", price: "$55" }
];

// Data for combination deals
const combinationDeals = [
  { name: "Classic Manicure and Pedicure", price: "$60" },
  { name: "Deluxe Manicure and Deluxe Volcano", price: "$95" }
];

const PopularOptions = () => {
  return (
    <section className="popular-options margin">
      <h2 className='Popular'>Popular Options</h2>
      <div className='most-and-deals'>
        <div className="most-requested">
          <h4>Most Requested</h4>
          <ul>
            {mostRequestedServices.map((service, index) => (
              <li key={index} className="service-item">
               <p>{service.name}</p>  <span className="service-price">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="most-requested">
          <h4>Combination Deals</h4>
          <ul>
            {combinationDeals.map((deal, index) => (
              <li key={index} className="service-item">
               <p>{deal.name}</p>  <span className="service-price">{deal.price}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default PopularOptions;
