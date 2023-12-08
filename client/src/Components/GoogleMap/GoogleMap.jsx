import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <section id="google-map-container">
      <iframe
        title="Sammi Nails Spa"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.165984244142!2d-122.22172112351718!3d47.85574857073944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900677d5a867fb%3A0x5dfdb8da6b5e7cbe!2sSammi%20Nails%20Spa!5e0!3m2!1sen!2sus!4v1702024786702!5m2!1sen!2sus"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
