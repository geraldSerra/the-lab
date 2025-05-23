import styles from "./VisionCard.module.css";

type VisionCardProps = {
  title: string;
  children: string;
};

const VisionCard = ({ title, children }: VisionCardProps) => {
  let variant = "";

  if (title === "Mission") {
    variant = `${styles.container} ${styles.mission}`;
  } else {
    variant = `${styles.container} ${styles.vision}`;
  }

  return (
    <div className={variant}>
      <div className={styles.title}>{title}</div>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default VisionCard;
