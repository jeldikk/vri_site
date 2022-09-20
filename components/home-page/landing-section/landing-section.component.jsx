import Image from "next/image";
import styles from "./landing-section.module.css";
import backgroundImage from "../../../public/images/multiple-cranes-far-angle.jpg";
import LandingTextContent from "../landing-textcontent/landing-textcontent.component";

function LandingSection() {
  return (
    <div className={styles.landing_section}>
      <div className={styles.landingWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={backgroundImage}
            layout="fill"
            objectFit="cover"
            alt="front facing electrician"
            quality={10}
            placeholder="blur"
          />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          <LandingTextContent />
        </div>
      </div>
      <div className={styles.section_ribbon}></div>
    </div>
  );
}

export default LandingSection;
