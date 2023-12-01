
import './GoogleMap.css' 

export const GoogleMap = () => {
    return (
      <div className="google-map-container"> 
        <iframe
          width="100%"
          height="600"
          title="SammiNails"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=+(SammiNails)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        >
          <a href="https://www.maps.ie/population/">Population Maps</a>
        </iframe>
      </div>
    );
  };
  