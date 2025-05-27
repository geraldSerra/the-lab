import styles from "./Banner.module.css";
import bannerImage from "../../assets/the-lab-banner-image.png";
import scrollToSection from "../../utils/scrollToSection";

const Banner = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.leftSide}>
        <p className={styles.phrase}>
          Boost your brand to the{" "}
          <span className={styles.accentWord}>next</span> level
        </p>
        <p className={styles.description}>
          The Lab is an agency specialized in empowering brands through
          marketing and design solutions
        </p>
        <div className={styles.buttonsContainer}>
          <button
            className={`${styles.button} ${styles.contactUs}`}
            onClick={() => scrollToSection("contact")}
          >
            Contact us
          </button>
          <button
            className={`${styles.button} ${styles.seeServices}`}
            onClick={() => scrollToSection("services")}
          >
            See services
          </button>
        </div>
      </div>
      <div className={styles.rightSide}>
        <img
          className={styles.bannerImage}
          src={bannerImage}
          alt="dashboard modules showing data"
        />
      </div>
    </section>
  );
};

export default Banner;
