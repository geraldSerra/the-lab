import "./App.css";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
    </div>
  );
}

export default App;
