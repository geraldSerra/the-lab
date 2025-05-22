import styles from "./AboutUsCard.module.css";

type AboutUsProps = {
  title: string;
  children: string;
};

const AboutUsCard = ({ title, children }: AboutUsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <p className={styles.aboutUs}> {children}</p>
    </div>
  );
};

export default AboutUsCard;
