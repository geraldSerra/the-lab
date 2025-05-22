import ServiceIcon from "../../assets/ServiceIcon";
import serviceType from "../../types/serviceType";
import getCssVariable from "../../utils/getCssVariable";
import styles from "./ServiceCard.module.css";

type ServicesCardProps = {
  service: serviceType;
  selected?: boolean;
  variant?: "closed" | "expanded";
  onSelect: (service: serviceType) => void;
};

const ServiceCard = ({
  service,
  selected = false,
  variant = "closed",
  onSelect,
}: ServicesCardProps) => {
  let containerClass = "";
  let iconContainer = "";
  let iconColor = "";

  if (variant === "expanded") {
    containerClass = `${styles.container} ${styles.expanded}`;
    iconContainer = `${styles.iconContainer} ${styles.iconContainerSelected}`;
    iconColor = getCssVariable("--accent-color");
  } else if (selected) {
    containerClass = `${styles.container} ${styles.selected}`;
    iconContainer = `${styles.iconContainer} ${styles.iconContainerSelected}`;
    iconColor = getCssVariable("--accent-color");
  } else {
    containerClass = styles.container;
    iconContainer = styles.iconContainer;
    iconColor = getCssVariable("--primary-color");
  }

  const closed = (
    <div className={containerClass} onClick={() => onSelect(service)}>
      <>
        <div className={iconContainer}>
          <ServiceIcon color={iconColor} width="40px" height="40px" />
        </div>
        <div className={styles.title}>{service.name}</div>
      </>
      {variant === "expanded" && <div>{service.detail}</div>}
    </div>
  );

  const expanded = (
    <div className={styles.expanded}>
      <div className={styles.header}>
        <div className={iconContainer}>
          <ServiceIcon color={iconColor} width="40px" height="40px" />
        </div>
        <div className={styles.title}>{service.name}</div>
      </div>

      <div className={styles.detail}>{service.detail}</div>
    </div>
  );

  return <> {variant === "expanded" ? expanded : closed}</>;
};

export default ServiceCard;
