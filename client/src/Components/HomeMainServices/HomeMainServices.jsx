
import { Link } from "react-router-dom";
import "./HomeMainServices.css"
const HomeMainServices = () => {
    const arrayOfServices = [
        {
          title: 'Pedicure',
          description: 'A pedicure is a luxurious spa treatment that focuses on the care and grooming of the feet and toenails. Typically performed in a comfortable spa chair, a pedicure begins with a warm foot soak to relax the feet. The nails are then trimmed, shaped, and buffed. The cuticles are treated, and any calluses or rough skin is exfoliated and moisturized. The pedicure often includes a relaxing foot and calf massage to promote circulation and alleviate tension. The service is completed with the application of nail polish if desired, leaving your feet feeling refreshed, rejuvenated, and ready to showcase.',
          img: 'https://images.pexels.com/photos/17056222/pexels-photo-17056222/free-photo-of-close-up-of-woman-doing-pedicure.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          title: 'Manicure',
          description: 'A manicure is a beauty treatment designed to enhance the appearance and health of the hands and nails. The process typically starts with soaking the hands in warm, soapy water to soften the skin and nails. The nails are then shaped, trimmed, and buffed to achieve a neat and polished look. The cuticles are gently pushed back, and any excess cuticle is removed. A moisturizing hand massage follows, promoting soft, supple skin. The manicure can be finished with the application of nail polish in a color of your choice, providing a stylish and finished appearance to your hands.',
          img: 'https://images.pexels.com/photos/6135695/pexels-photo-6135695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          title: 'Waxing',
          description: 'Waxing is a hair removal method that involves applying warm wax to the skin and then quickly removing it, along with the unwanted hair. This process is effective in removing hair from various parts of the body, including the legs, arms, underarms, face, and bikini area. The warm wax adheres to the hair, pulling it out from the root, resulting in smooth and hair-free skin. Waxing provides longer-lasting results compared to shaving, and with regular sessions, it can lead to hair regrowth that is finer and softer. It is a popular choice for those seeking a longer-term solution to hair removal with the added benefit of smooth and silky skin.',
          img: 'https://images.pexels.com/photos/6763618/pexels-photo-6763618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ];
      
  return (
    <section className="main-services margin">
         {arrayOfServices.map((service)=>(
            <div className='service-div' key={service.title}>
                    <div className={`service-container ${service.title}-container`}>
                    <img src={service.img} className="service-image" alt={service.title}/>              
                        <div className={`${service.title}-content`}>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <Link to="/Services">
                            <button className="services-button">Learn More</button>
                            </Link>
                        </div>
                    </div>
            </div>
         ))}
        </section>
  )
}

export default HomeMainServices