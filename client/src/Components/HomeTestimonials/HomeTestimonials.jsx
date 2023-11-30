import { useState } from "react";
import "./HomeTestimonials.css"
import { useEffect } from "react";
import AmandaPic from './CustomerImages/ls.jpg'
import ElainePic from './CustomerImages/ls (1).jpg'
import RosePic from './CustomerImages/60s.jpg'
import KatieR from './CustomerImages/60s (1).jpg'
import MallerynPic from './CustomerImages/60s (2).jpg'

const HomeTestimonials = () => {

    const arrayOfReviews = [
        {
          name: "Amanda B.",
          image: AmandaPic,
          review: "10000% recommend this place, my go-to nail salon!!! They do such a good job by taking the time and care on your nails. Any shape, any design. Absolutely love!!",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Kelsey H.",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "What a wonderful nail salon! So quick and she had no issue finding the right colors and designs for my nails. I absolutely love them and can't wait to come back.",
          rating: "⭐⭐⭐⭐",
        },
        {
          name: "Elaine L.",
          image: ElainePic,
          review: "I don't think I've ever felt this relaxed and de-stressed after a nail appt. I have been sick with a cold and then a flu and finally recovering and wanted a self-care day. I did the VIP pedicure (worth the price)...",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Rose C.",
          image: RosePic,
          review: "One of my go-to nail salon. I see my usual nail artist because she is highly skilled and more importantly for me; she is gentle. Pamper yourself and get the VIP treatments. Worth the money.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Charise M.",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "These nails lasted me 3 weeks without breaking (:Everyone is so nice! I definitely recommend coming here",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Katie R.",
          image: KatieR,
          review: "This place is amazing!! They have a great variety of spa options for getting your paws taken care of. The staff were all friendly and skilled. Plus, I don't think I've seen more colors and types of polish, dips, & etc. anywhere else. Definitely recommend coming here!!",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Mallerlyn V.",
          image: MallerynPic,
          review: "I just moved here from Minnesota and i have had the same nail lady for over 5 years now. I never thought i would find another salon that was as good as the one I had been visiting but LET ME TELL YOU! This place is so amazing! I got my nails done in a dip for such a good price! It was even an ombré. They were fast, efficient, kind, and they didn't hurt my fingers...",
  
          rating: "⭐⭐⭐⭐⭐",
        },
      ]; 
    
      const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentCustomerIndex((prevIndex) => (prevIndex + 1) % arrayOfReviews.length);
        }, 8000); 
    
        return () => clearInterval(interval); 
      }, []);

      const customer = arrayOfReviews[currentCustomerIndex];

  return (
    <div className="testimonials">
        <h1>They're Talking</h1>
            <div className='carousel'>
                <div className="testimonial">
                    <h3 className="rating">{customer.rating}</h3>
                    <p className="review">{customer.review}</p>
                    <div className="customer">
                        <img src={customer.image} alt="" />
                        <p>{customer.name}</p>
                    </div>
            </div>
        </div>
</div>
  )
}

export default HomeTestimonials