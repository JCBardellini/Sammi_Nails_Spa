import { Link } from 'react-router-dom'
import './HomeUniqueNailsDesgins.css'

const HomeUniqueNailsDesigns = () => {
  return (
    <section className='after-hero-comp'>
        <div className="unique-nails-designs">
            <h2>Unleash Your Style with Unique Nail Designs</h2>
            <p>At Sammi Nails Spa, we believe that your nails are a canvas for self-expression. Our talented nail artists are dedicated to creating unique designs that reflect your personal style. Whether you prefer bold and vibrant colors or delicate and intricate patterns, we have the expertise to bring your vision to life. Visit us today and unleash your creativity!</p>
            <Link to='/Services'>
              <button className='learn-more-button'>Learn More</button>
            </Link>
        </div>
        <div className="unique-nails-designs-image">
            <img src="https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </section>
  )
}

export default HomeUniqueNailsDesigns