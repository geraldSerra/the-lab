import reasons from "../../data/reasons";
import styles from "./WhyUsCard.module.css";

const WhyUsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Why Us?</div>
      <ul className={styles.reasonContainer}>
        {reasons.map((reason: string) => {
          return (
            <li className={styles.li}>
              <span className={styles.bullet}></span>
              {reason}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhyUsCard;
