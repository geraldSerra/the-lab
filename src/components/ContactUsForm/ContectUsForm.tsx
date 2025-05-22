import { useState } from "react";
import styles from "./ContectUs.module.css";
import ServiceIcon from "../../assets/ServiceIcon";
import getCssVariable from "../../utils/getCssVariable";
import { services } from "../../data/services";
import serviceType from "../../types/serviceType";
import emailjs from "@emailjs/browser";

const gray = getCssVariable("--gray-color");
const primaryColor = getCssVariable("--primary-color");

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<serviceType[]>([]);

  console.log(selectedServices);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handleServices = (service: serviceType) => {
    const selectedService = selectedServices.find(
      (item: serviceType) => item.id === service.id
    );

    if (selectedService) {
      setSelectedServices((prev: serviceType[]) => {
        return prev.filter((item: serviceType) => item.id !== service.id);
      });
    } else {
      setSelectedServices((prev: serviceType[]) => [...prev, service]);
    }
  };

  const ServiceFormCard = ({
    name,
    selected = false,
  }: {
    name: string;
    selected?: boolean;
  }) => {
    let iconColor = "";
    let containerStyle = "";
    let dotStyle = "";

    if (selected) {
      iconColor = primaryColor;
      containerStyle = `${styles.serviceContainer} ${styles.serviceContainerSelected}`;
      dotStyle = `${styles.dot} ${styles.dotSelected}`;
    } else {
      iconColor = gray;
      containerStyle = styles.serviceContainer;
      dotStyle = styles.dot;
    }

    return (
      <div className={containerStyle}>
        <div className={styles.header}>
          <ServiceIcon color={iconColor} width="20px" height="20px" />
          <div className={dotStyle}></div>
        </div>
        <div>{name}</div>
      </div>
    );
  };

  const SERVICE_ID = "service_c2rly3j";
  const TEMPLATE_ID = "template_7rp885p";
  const PUBLIC_KEY = "4Oaf7cAT-ytr9Pcbq";

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setSelectedServices([]);
  };

  const enabled = name && email && selectedServices.length;

  const handleSendEmail = (e: any) => {
    e.preventDefault();

    const requestedServices = selectedServices.map(
      (service: serviceType) => service.name
    );

    const formData = {
      name: "Gerald",
      title: requestedServices.join(", "),
      email: email,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          emailjs
            .send(SERVICE_ID, "template_pudsiyu", formData, {
              publicKey: PUBLIC_KEY,
            })
            .then(
              () => {
                handleResetForm();
              },
              (error) => {}
            );
          handleResetForm();
        },
        (error) => {}
      );
  };

  return (
    <form className={styles.container} onSubmit={handleSendEmail}>
      <div className={styles.title}>One Step Closer</div>
      <div className={styles.info}>
        An agent will contact you as soon as possible after form submission
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div className={styles.field}>
          <div className={styles.label}>Name *</div>
          <input
            className={styles.emailInput}
            type="text"
            name="name"
            value={name}
            placeholder="Gerald Brito"
            onChange={(e) => handleName(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <div className={styles.label}>E-mail *</div>
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            value={email}
            placeholder="example@hotmail.com"
            onChange={(e) => handleEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.label}>Services *</div>
        <div className={styles.servicesArea}>
          {services.map((service: serviceType) => (
            <div onClick={() => handleServices(service)}>
              <ServiceFormCard
                name={service.name}
                selected={
                  typeof selectedServices.find(
                    (item: serviceType) => item.id === service.id
                  )?.name === "string"
                }
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={!enabled}
        className={
          enabled ? styles.submit : `${styles.submit} ${styles.disabled}`
        }
      >
        Get services
      </button>
    </form>
  );
};

export default ContactUsForm;
