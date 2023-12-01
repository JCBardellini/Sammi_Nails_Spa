import './Services.css';
import PopularOptions from '../../components/ServicesSection/PopularOptions/PopularOptions';
import ManicureServices from '../../components/ServicesSection/ManicureServices/ManicureServices';
import PedicureServices from '../../components/ServicesSection/PedicureServices/PedicureServices';
import WaxingServices from '../../components/ServicesSection/WaxingServices/WaxingServices';
import KidsServices from '../../components/ServicesSection/KidsServices/KidsServices';

import hero from '../../Assets/Images/img14.png'
import hero2 from '../../Assets/Images/img6.png'


const Services = () => {
  return (
    <>
      <div className="services-section">
      <div className='heroImage' />
      <div className="hero-text">
        <h4>Polish to perfection, from tips to toes</h4>
        </div>
      
        <PopularOptions />

        <div className='mani-and-pedi margin'>
        <ManicureServices />
        <PedicureServices />
        </div>
        {/* <div className='call-to-action-item'>
          <div className='inside-call-to-action'>
            <span className='white-box'>
              <p>“Sammi Nails Spa is the best salon around, I wouldnt go anywhere else”</p>
              <p>Sonita</p>
              </span>
            
          <img src={hero2} alt="heroImage2" className='heroImage2' />
          </div>
        </div> */}
        <div className="kids-and-waxing-section margin">
          <KidsServices />
          <WaxingServices />
        </div>

      </div>

    </>

  );
};

export default Services;
