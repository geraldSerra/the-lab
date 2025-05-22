import styles from "./WhyUsCard.module.css";

const REASONS: string[] = ["reason 1", " reason 2", "reason 3", "reason 4"];

const WhyUsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Why Us?</div>
      <ul className={styles.reasonContainer}>
        {REASONS.map((reason: string) => {
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
