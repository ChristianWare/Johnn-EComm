import styles from "../../styles/Slide1.module.css";
import Link from "next/link";
import Image from 'next/image'

function Slide1() {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.leftSale}>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>

          <div className={styles.jwblText}>
            <h4>JOHNNIE WALKER</h4>
            <h2>Blue Label</h2>
            <h3>BLENDED SCOTCH WHISKEY</h3>
            <hr className={styles.divider} />
          </div>
          <div className={styles.lowerTop}>
            <h3 className={styles.smallText}>A BLEND OF OUR RAREST WHISKEYS</h3>
            <h3 className={styles.scriptText}>John Walker & Sons</h3>
            <img
              className={styles.walker}
              src='/images/logo16Gold.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
