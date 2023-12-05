import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Services from "./Pages/Services/services";
import Gallery from "./Pages/Gallery/gallery";
import Contact from "./Pages/Contact/contact";
import About from "./Pages/About/about";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
