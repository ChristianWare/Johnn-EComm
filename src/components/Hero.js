import Link from "next/link";
import styles from "../../styles/Hero.module.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

function Hero() {
  return (
    <section className={styles.heroSection}>
      123456
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </section>
  );
}

export default Hero;
