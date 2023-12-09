import "./Services.css";
import ServicesHeroImage from "../../assets/Images/img35.png.png";
import PopularOptions from "../../components/ServicesSection/PopularOptions/PopularOptions";
import ManicureServices from "../../components/ServicesSection/ManicureServices/ManicureServices";
import PedicureServices from "../../components/ServicesSection/PedicureServices/PedicureServices";
import WaxingServices from "../../components/ServicesSection/WaxingServices/WaxingServices";
import KidsServices from "../../components/ServicesSection/KidsServices/KidsServices";

const Services = () => {
  return (
    <main id="services-section">
      {/* Hero Img */}
      <section className="heroImage">
        <img src={ServicesHeroImage} alt="Hand in front of an cabin" />
      </section>

      {/* Popular options  */}
      <h2 className="options-title">Popular Options</h2>
      <PopularOptions />

      {/* manicure and pedicure  */}
      <section className="mani-pedi">
        <ManicureServices />
        <PedicureServices />
      </section>

      {/* Kids Services */}
      <KidsServices />

      {/* Waxing Services */}
      <WaxingServices />
    </main>
  );
};

export default Services;
