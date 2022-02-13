import styles from "../../styles/Slide3.module.css";
import Link from "next/link";

function Slide3() {
  return (
    <div className={styles.content} id='slide3'>
      <div className={styles.left}>
        <div className={styles.leftSale}>
          
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <div className={styles.jwblText}>
            <hr className={styles.hr1} />
            <hr className={styles.hr2} />
            <h4>JOHNNIE WALKER</h4>
            <h2>GREEN LABEL</h2>
            <h3 className={styles.scriptText}>Blended Malt Scotch Whiskey</h3>
            <p>DISTILLED BLENDED AND BOTTLED IN SCOTTLAND</p>
            <hr className={styles.divider2} />
            <hr className={styles.divider} />
          </div>
          <div className={styles.lowerTop}>
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

export default Slide3;
