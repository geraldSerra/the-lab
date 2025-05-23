import { useState } from "react";
import styles from "./Form.module.css";
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
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState("");
  const [selectedServices, setSelectedServices] = useState<serviceType[]>([]);

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleName = (value: string) => {
    setName(value);
  };

  const handlePhone = (value: string) => {
    setPhone(value);
  };

  const handlePreference = (value: string) => {
    setPreference(value);
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
    setPhone("");
    setPreference("");
    setSelectedServices([]);
  };

  const enabled = name && email && phone && selectedServices.length;

  const handleSendEmail = (e: any) => {
    e.preventDefault();

    const requestedServices = selectedServices.map(
      (service: serviceType) => service.name
    );

    const formData = {
      name: name,
      title: requestedServices.join(", "),
      email: email,
      phone: phone,
      preference: preference,
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
          <div className={styles.label}>Full name *</div>
          <input
            className={styles.emailInput}
            type="text"
            name="name"
            value={name}
            placeholder="Enter your full name"
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
            placeholder="Enter your email"
            onChange={(e) => handleEmail(e.target.value)}
            required
          />
        </div>
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
          <div className={styles.label}>Phone number *</div>
          <input
            className={styles.emailInput}
            type="tel"
            name="tel"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(e) => handlePhone(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <div className={styles.label}>Contact preference</div>
          <select
            className={styles.emailInput}
            value={preference}
            onChange={(e) => handlePreference(e.target.value)}
          >
            <option value="">-- Select what fit you --</option>
            <option value="E-mail">Email</option>
            <option value="Phone call">Phone call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Direct message">Direct message</option>
          </select>
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
