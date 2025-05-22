import AboutUsCard from "../AboutUsCard/AboutUsCard";
import VisionCard from "../VisionCard/VisionCard";
import WhyUsCard from "../WhyUsCard/WhyUsCard";

import styles from "./AboutSection.module.css";

const ABOUT_US =
  "Founded in 2021, The Lab was born to turn ordinary brands into memorable ones. In a time when digital presence became essential, it emerged as a creative agency focused on connecting brands with audiences through strategic and innovative solutions";

const MISSION =
  "Drive brand growth and positioning through creative solutions, effective marketing, and authentic design";

const VISION =
  "To be a leading creative agency in the Hispanic market, known for transforming brands through innovation, impactful design, and real results";

const AboutSection = () => {
  return (
    <section className={styles.section}>
      <AboutUsCard title="About Us">{ABOUT_US}</AboutUsCard>
      <div className={styles.mission_vision}>
        <VisionCard title="Mission">{MISSION}</VisionCard>
        <VisionCard title="Vision">{VISION}</VisionCard>
      </div>
      <WhyUsCard />
    </section>
  );
};

export default AboutSection;
