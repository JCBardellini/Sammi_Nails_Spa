import "./PedicureServices.css";

const PedicureServices = () => {
  const services = [
    {
      category: "The Classics",
      description: "All our pedicure services offer a comprehensive experience",
      items: [
        { name: "Classic Pedicure", price: "$35" },
        { name: "Classic Pedicure with Gel Polish", price: "$55" },
      ],
    },
    {
      category: "Spa Pedicure",
      description:
        "Includes paraffin wax or hot oil treatment with a soothing hot stone massage.",
      items: [
        { name: "Spa Pedicure", price: "$45" },
        { name: "Spa Pedicure with Gel Polish", price: "$65" },
      ],
    },
    {
      category: "Herbal Spa Pedicure",
      description:
        "Experience the best of both worlds with the Classic and Spa Pedicure, enhanced by an exfoliating sugar scrub and a herbal spa bath of your choice.",
      items: [
        { name: "Herbal Spa Pedicure", price: "$55" },
        { name: "Herbal Spa Pedicure with Gel Polish", price: "$75" },
      ],
    },
    {
      category: "Detox Volcano Pedicure",
      description:
        "Indulge in the ultimate relaxation with the Classic and Spa Pedicure, featuring a rejuvenating spa treatment using La Palm Spa Products’ Volcano Spa.",
      items: [
        { name: "Detox Volcano Pedicure", price: "$65" },
        { name: "Detox Volcano Pedicure with Gel Polish", price: "$85" },
      ],
    },
    {
      category: "Jelly Treatment Pedicure",
      description:
        "Immerse yourself in luxury with our Jelly Treatment Pedicure, combining the Classic and Spa Pedicure with a jelly spa bath that retains heat four times longer.",
      items: [
        { name: "Jelly Treatment Pedicure", price: "$65" },
        { name: "Jelly Treatment Pedicure with Gel Polish", price: "$85" },
      ],
    },
  ];

  return (
    <section id="pedicure">
      <h2 className="pedi-title">Pedicures</h2>
      <p className="pedi-description">
        {" "}
        <i>
          All our pedicure services offer a comprehensive experience, including
          a warm foot bath, trimming, shaping, filing, buffing, cuticle
          maintenance, callus treatment, a luxurious sugar scrub, mask and
          massage, and concluding with a hot towel and your choice of regular
          polish.
        </i>
      </p>
      <ul className="services-list">
        {services.map((serviceCategory, index) => {
          return (
            <div key={index}>
              <h3 className="category-title">{serviceCategory.category}</h3>
              <p className="category-description">
                <i>{serviceCategory.description}</i>
              </p>
              <ul className="pedi-service">
                {serviceCategory.items.map((item, index) => (
                  <li key={index} className="service-item">
                    <p className="category">{item.name}</p>
                    <span className="service-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default PedicureServices;
