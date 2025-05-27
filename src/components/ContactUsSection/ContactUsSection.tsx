import ContactUsForm from "../Form/Form";
import contactUsImage from "../../assets/the-lab-contact-us-image.png";
import styles from "./contactUsSection.module.css";
const ContactUsSection = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.leftSide}>
        <img
          className={styles.contactUsImage}
          src={contactUsImage}
          alt="People happy using our services"
        />
      </div>
      <div className={styles.rightSide}>
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
