import styles from "./Footer.module.css";
import icon from "../../assets/the-lab-white-icon.png";
import InstagramIcon from "../../assets/InstagramIcon";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.img} src={icon} alt="The lab icon" />
      <div className={styles.phrase}>
        [ Boosting your brand to the next level ]
      </div>
      <a
        href="https://www.instagram.com/thelaboratoriobm/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <InstagramIcon size="40px" color="white" />
      </a>
      <div className={styles.copyright}>
        © 2025 The Lab. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
