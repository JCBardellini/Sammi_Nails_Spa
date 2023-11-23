import "./Gallery.css";
import AloeComfort from "../../Assets/Images/img1.png";
import CozyInMaroon from "../../Assets/Images/img2.png";
import beachsideSerenity from "../../Assets/Images/img3.png";
import timelessElegance from "../../Assets/Images/img4.png";
import browShapingExpertise from "../../Assets/Images/img5.png";
import engagementBliss from "../../Assets/Images/img6.png";
import tropicalTouch from "../../Assets/Images/img7.png";
import outdoorNailArt from "../../Assets/Images/img8.png";
import manicureMasterclass from "../../Assets/Images/img9.png";
import adornedInGold from "../../Assets/Images/img10.png";
import tranquilWaters from "../../Assets/Images/img11.png";
import relaxedRepose from "../../Assets/Images/img12.png";
import eloquentScribe from "../../Assets/Images/img13.png";
import colorSelection from "../../Assets/Images/img14.png";
import pedicurePerfection from "../../Assets/Images/img15.png";
import soakAndSoothe from "../../Assets/Images/img16.png";
import NailConsultation from "../../Assets/Images/img17.png";
import polishedAndPoised from "../../Assets/Images/img18.png";
import creativeContours from "../../Assets/Images/img19.png";
import facialFresco from "../../Assets/Images/img20.png";
import nailConsultation2 from "../../Assets/Images/img21.png";
import waterEdge from "../../Assets/Images/img22.png";
import tranquilityTouch from "../../Assets/Images/img23.png";
import preciseManicure from "../../Assets/Images/img24.png";
import reflectionsInWater from "../../Assets/Images/img25.png";
import nailArtistry from "../../Assets/Images/img26.png";
import footCareFocus from "../../Assets/Images/img27.png";
import soothingPedicure from "../../Assets/Images/img28.png";
import elegantScript from "../../Assets/Images/img29.png";
import pedicurePalette from "../../Assets/Images/img30.png";
import submergedSerenity from "../../Assets/Images/img31.png";
import classicTimekeeper from "../../Assets/Images/img32.png";
import CtaOne from "../../Components/CTAone/ctaOne";

const imageObjects = [
  {
    Name: "Aloe Comfort",
    src: AloeComfort,
    alt: "Hand resting on a mustard knitted fabric with aloe plants in the background.",
  },
  {
    Name: "Cozy in Maroon",
    src: CozyInMaroon,
    alt: "Hand with maroon nail polish against a cream knitted blanket.",
  },
  {
    Name: "Beachside Serenity",
    src: beachsideSerenity,
    alt: "Bare feet with red nail polish on the sandy shore, with the sea edge approaching.",
  },
  {
    Name: "Timeless Elegance",
    src: timelessElegance,
    alt: "A hand with classic manicure next to an antique pocket watch on a furry texture.",
  },
  {
    Name: "Brow Shaping Expertise",
    src: browShapingExpertise,
    alt: "CloseUp of a professional beautician shaping eyebrows.",
  },
  {
    Name: "Engagement Bliss",
    src: engagementBliss,
    alt: "Close-up of a hand with a diamond ring, showcasing white nail polish.",
  },
  {
    Name: "Tropical Touch",
    src: tropicalTouch,
    alt: "Hands with white nail polish over a lush green leaf background.",
  },
  {
    Name: "Outdoor Nail Art",
    src: outdoorNailArt,
    alt: "Hands receiving a nail polish application in a natural, outdoor setting.",
  },
  {
    Name: "Manicure Masterclass",
    src: manicureMasterclass,
    alt: "Elegant pink manicure set with rose petals and professional tools.",
  },
  {
    Name: "Adorned in Gold",
    src: adornedInGold,
    alt: "Taupe nails on hands richly adorned with gold jewelry.",
  },
  {
    Name: "Tranquil Waters",
    src: tranquilWaters,
    alt: "Glittery nails emerging from a serene milky bath with daisies.",
  },
  {
    Name: "Relaxed Repose",
    src: relaxedRepose,
    alt: "Relaxed pink-polished toes elegantly pointed upwards.",
  },
  {
    Name: "Eloquent Scribe",
    src: eloquentScribe,
    alt: "A poised hand with white nails ready to write in a journal.",
  },
  {
    Name: "Color Selection",
    src: colorSelection,
    alt: "Client's hand choosing from a blurred selection of vibrant nail polish colors.",
  },
  {
    Name: "Pedicure Perfection",
    src: pedicurePerfection,
    alt: "Close-up of a pedicure session focusing on foot filing and care.",
  },
  {
    Name: "Soak and Soothe",
    src: soakAndSoothe,
    alt: "Foot soaking in a soothing bath with frangipani flowers for a pedicure.",
  },
  {
    Name: "NailConsultation",
    src: NailConsultation,
    alt: "Nail technician consulting with a client over a selection of nail color samples on a white towel.",
  },
  {
    Name: "Polished and Poised",
    src: polishedAndPoised,
    alt: "Meticulous pedicure process with freshly painted blue toenails.",
  },
  {
    Name: "Creative Contours",
    src: creativeContours,
    alt: "Artistic close-up of a hand with nails featuring unique abstract designs.",
  },
  {
    Name: "Facial Fresco",
    src: facialFresco,
    alt: "Client relaxing with a soothing facial mask during a skincare treatment.",
  },
  {
    Name: "Nail Consultation2",
    src: nailConsultation2,
    alt: "Nail technician assisting a client in choosing nail polish colors.",
  },
  {
    Name: "Water Edge",
    src: waterEdge,
    alt: "Elegant hands with a French manicure touching the tranquil water's surface.",
  },
  {
    Name: "Tranquility Touch",
    src: tranquilityTouch,
    alt: "Close-up of a relaxing hand spa treatment, suggesting calm and self-care.",
  },
  {
    Name: "Precise Manicure",
    src: preciseManicure,
    alt: "A detailed hand manicure process highlighting nail care precision.",
  },
  {
    Name: "Reflections in Water",
    src: reflectionsInWater,
    alt: "Woman hands with a French manicure reflected in clear still water.",
  },
  {
    Name: "Nail Artistry",
    src: nailArtistry,
    alt: "Close-up of intricate nail art design being applied by a skilled nail artist.",
  },
  {
    Name: "Foot Care Focus",
    src: footCareFocus,
    alt: "Detailed pedicure process with a focus on foot care and beauty.",
  },
  {
    Name: "Soothing Pedicure",
    src: soothingPedicure,
    alt: "A relaxing pedicure session in progress, highlighting foot wellness.",
  },
  {
    Name: "Elegant Script",
    src: elegantScript,
    alt: "Hand with a white manicure holding a pen, poised to write in an elegant journal.",
  },
  {
    Name: "Pedicure Palette",
    src: pedicurePalette,
    alt: "An array of nail polish colors presented to a client during a pedicure session.",
  },
  {
    Name: "Submerged Serenity",
    src: submergedSerenity,
    alt: "Hands gently submerged in water, evoking a sense of serenity and care.",
  },
  {
    Name: "Classic Timekeeper",
    src: classicTimekeeper,
    alt: "A timeless image of a hand with a manicure alongside a vintage clock.",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Check our recent work:</h1>
      <p>Heart and save to show your nail artist next time!</p>
      <div className="image-grid">
        {imageObjects.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <CtaOne />
    </div>
  );
};

export default Gallery;
