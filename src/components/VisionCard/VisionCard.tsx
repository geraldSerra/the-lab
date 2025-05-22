import styles from "./VisionCard.module.css";

type VisionCardProps = {
  title: string;
  children: string;
};

const VisionCard = ({ title, children }: VisionCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <p className={styles.vision}>{children}</p>
    </div>
  );
};

export default VisionCard;
