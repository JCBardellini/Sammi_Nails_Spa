import './CallToAction.css'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className="cta">
    <h2>Express Yourself with Unique Nails</h2>
    <p>Book an appointment today and let your nails shine with creativity.</p>
    <div className='cta-button-container'>
    <Link to="/Contact">
        <button className='book-btn'>Book</button>
  </Link>
    <Link to="/Services">
        <button  className='learn-more'>Learn More</button>
    </Link>
    </div>
</div>
  )
}

export default CallToAction