import './Services.css';
import PopularOptions from '../../components/ServicesSection/PopularOptions/PopularOptions';
import ManicureServices from '../../components/ServicesSection/ManicureServices/ManicureServices';
import PedicureServices from '../../components/ServicesSection/PedicureServices/PedicureServices';
import WaxingServices from '../../components/ServicesSection/WaxingServices/WaxingServices';
import KidsServices from '../../components/ServicesSection/KidsServices/KidsServices';





const Services = () => {
  return (
    <>
      <div className="services-section">
        <div className='heroImage' />
        <div className="service-page-hero-text">
          <h4>Polish to perfection, from tips to toes</h4>
        </div>
        <div className='service-page-service-container'>
          <PopularOptions />

          <div className='mani-and-pedi margin'>
            <ManicureServices />
            <PedicureServices />
          </div>
          <div className="kids-and-waxing-section margin">
            <KidsServices />
            <WaxingServices />
          </div>
        </div>

      </div>

    </>

  );
};

export default Services;
