import styles from "./Navbar.module.css";
import scrollToSection from "../../utils/scrollToSection";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.content}>
        <div>Logo</div>
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
