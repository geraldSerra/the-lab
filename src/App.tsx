import "./App.css";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export default App;
