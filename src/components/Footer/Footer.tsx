import styles from "./Footer.module.css";
import icon from "../../assets/the-lab-white-icon.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import scrollToSection from "../../utils/scrollToSection";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img className={styles.img} src={icon} alt="The lab icon" />
          <div className={styles.phrase}>
            Boosting your brand to the next level
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Browse</h2>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className={styles.li} onClick={() => scrollToSection("about")}>
              About us
            </li>
            <li
              className={styles.li}
              onClick={() => scrollToSection("services")}
            >
              Services
            </li>
            <li
              className={styles.li}
              onClick={() => scrollToSection("contact")}
            >
              Contact us
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Contact</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                className={styles.a}
                href="mailto:thelabussine@gmail.com?subject=I want to contact you"
              >
                <EmailIcon /> thelabussine@gmail.com
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="tel:+12392379775">
                <PhoneIcon />
                +1 (239) 237-9775
              </a>
            </li>
            <li className={styles.li}>
              <a
                className={styles.a}
                href="https://www.instagram.com/thelaboratoribm?igsh=NDZzdHFlbHJzMmx6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                thelaboratoribm
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2025 The Lab. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
