import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.css";
import { services } from "../../data/services";
import { useState } from "react";
import serviceType from "../../types/serviceType";

const ServicesSection = () => {
  const [selected, setSelected] = useState<serviceType>(services[0]);

  const handleSelect = (service: serviceType) => {
    setSelected(service);
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.title}>Take a look at our services</div>
      <div className={styles.content}> 
        <div className={styles.leftSide}>
          <ServiceCard
            service={selected}
            variant="expanded"
            selected
            onSelect={handleSelect}
          />
        </div>
        <div className={styles.rightSide}>
          {services.map((service: serviceType) => (
            <ServiceCard
              service={service}
              onSelect={handleSelect}
              selected={selected.id === service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
