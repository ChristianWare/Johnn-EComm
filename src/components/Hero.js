import Link from "next/link";
import styles from "../../styles/Hero.module.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

function Hero() {
  return (
    <div className={styles.heroSection}>
      123456
      <Slide1 />
      <Slide2 />
    </div>
  );
}

export default Hero;
