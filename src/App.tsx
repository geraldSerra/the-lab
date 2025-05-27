import "./App.css";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
}

export default App;
