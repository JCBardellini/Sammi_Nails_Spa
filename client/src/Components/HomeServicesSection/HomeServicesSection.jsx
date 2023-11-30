import { Link } from "react-router-dom"
import "./HomeServicesSection.css"

const HomeServicesSection = () => {


    const servciesArray = [
        {
        className: 'left',
        img: "https://images.pexels.com/photos/3997391/pexels-photo-3997391.jpeg",
        title: "Manicures, Pedicures, and Nail Art Services",
        description: "Our nail salon services include professional manicures, pedicures, and creative nail art designs. We use high-quality products and techniques to ensure your nails look stunning and last longer.",
    },
        {
            className: 'right',
        img: "https://images.pexels.com/photos/6621224/pexels-photo-6621224.jpeg",
        title: "Relax and Pamper Yourself with Our Services",
        description: "Indulge in a relaxing and rejuvenating experience with our nail salon services. Our friendly staff will make sure you feel pampered and leave our salon feeling refreshed.",
    },
        {
            className: 'left',
        img: "https://images.pexels.com/photos/6589734/pexels-photo-6589734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Professional Nail Care for Every Occasion",
        description: "Whether you need nail care for a special event or simply want to treat yourself, our nail salon services are tailored to meet your needs. We strive to exceed your expectations and deliver exceptional results.",
    },
]

  return (
    <section className="home-services-section">
        <div className="services-title">
            <h2>Express Your Individuality with Distinctive Nail Art</h2>
            <p>At Sammi Nails Spa, we offer a wide range of nail salon services to help you express yourself and enhance your style. From manicures and pedicures to unique nail art, our experienced technicians are dedicated to providing you with a personalized and exceptional salon experience.</p>
        </div>
        <div className="services-list">
            {servciesArray.map((service)=>(
                <div className={service.className} key={service.title}>
                    <img src={service.img} alt={service.title} />
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
            
        </div>
           <Link to='/Services'>
                <button>Learn More About Our Services</button>
           </Link>
    </section>
  )
}

export default HomeServicesSection