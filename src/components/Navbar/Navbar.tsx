import styles from "./Navbar.module.css";
import scrollToSection from "../../utils/scrollToSection";
import logo from "../../assets/the-lab-blue-icon.png"

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.content}>
          <img className={styles.img} src={logo} alt="The lab icon" />
        <ul className={styles.buttonContainer}>
          <li>
            <button
              className={styles.button}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={styles.button}
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${styles.contact}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
