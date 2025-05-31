import "./App.css";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;
