import styles from "../../styles/Slide2.module.css";
import Link from "next/link";

function Slide2() {
  return (
    <div className={styles.content} id='slide2'>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <div className={styles.jwblText}>
            <h4>JOHNNIE WALKER</h4>
            <h2>RED LABEL</h2>
            <h3>BLENDED SCOTCH WHISKEY</h3>
          </div>
          <div className={styles.lowerTop}>
            <h3 className={styles.scriptText}>John Walker & Sons</h3>
            <hr className={styles.divider} />
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

export default Slide2;
